import re
import os
import json

# 读取所有原始题目文件
question_files = [
    'questions_level1_extra.js',
    'questions_level1_more.js',
    'questions_level1_supplement.js',
    'questions_level2_extra.js',
    'questions_level2_full.js',
    'questions_level3_full.js',
    'questions_level3_supplement.js',
    'questions_level4_batch.js',
    'questions_level4_full.js',
    'questions_level4_supplement.js',
    'questions_level5_batch.js',
    'questions_level5_full.js',
    'questions_level5_supplement.js',
    'questions_level6_batch.js',
    'questions_level6_full.js',
    'questions_level6_supplement.js',
    'questions_level7_batch.js',
    'questions_level7_full.js',
    'questions_level7_supplement.js',
    'questions_level8_batch.js',
    'questions_level8_full.js',
    'questions_level8_supplement.js',
    'questions_level9_batch.js',
    'questions_level9_full.js',
    'questions_level9_supplement.js',
    'questions_level10_full.js',
    'questions_level10_supplement.js',
]

# 收集所有题目，按level分组
all_questions = {str(i): [] for i in range(1, 11)}

def parse_js_questions(content, level):
    """从JS文件内容中提取题目"""
    questions = []
    
    # 找 levelNQuestions = [ ... ] 块
    patterns = [
        rf'level{level}\w*Questions\s*=\s*\[([\s\S]*?)\]\s*;',
        rf'questionBank\s*=\s*\[[\s\S]*?level\s*["\']?\s*{level}\s*["\']?\s*:\s*\[([\s\S]*?)\]\s*,',
    ]
    
    for pattern in patterns:
        matches = re.findall(pattern, content, re.IGNORECASE)
        for block in matches:
            # 提取每个 { ... } 对象
            depth = 0
            start = -1
            for i, char in enumerate(block):
                if char == '{':
                    if depth == 0:
                        start = i
                    depth += 1
                elif char == '}':
                    depth -= 1
                    if depth == 0 and start >= 0:
                        obj_str = block[start:i+1]
                        if 'question:' in obj_str:
                            # 解析这个题目对象
                            q = parse_question_object(obj_str)
                            if q:
                                questions.append(q)
                        start = -1
    
    return questions

def parse_question_object(obj_str):
    """解析单个题目对象"""
    try:
        # 提取 question
        q_match = re.search(r'question:\s*["\']([^"\']+)', obj_str)
        if not q_match:
            return None
        question = q_match.group(1)
        
        # 提取 options
        options = []
        options_match = re.search(r'options:\s*\[([\s\S]*?)\]', obj_str)
        if options_match:
            options_block = options_match.group(1)
            # 提取每个选项
            for opt_match in re.finditer(r'\{[^}]+\}', options_block):
                opt_str = opt_match.group(0)
                text_match = re.search(r'text:\s*["\']([^"\']+)', opt_str)
                correct_match = re.search(r'correct:\s*(true|false)', opt_str)
                effect_match = re.search(r'effect:\s*\{([^}]+)\}', opt_str)
                
                if text_match and correct_match:
                    opt = {
                        'text': text_match.group(1),
                        'correct': correct_match.group(1) == 'true'
                    }
                    if effect_match:
                        effect_str = effect_match.group(1)
                        effect = {}
                        for k in ['knowledge', 'trust', 'risk']:
                            m = re.search(rf'{k}:\s*(-?\d+)', effect_str)
                            if m:
                                effect[k] = int(m.group(1))
                        opt['effect'] = effect
                    options.append(opt)
        
        # 提取 explanation
        exp_match = re.search(r'explanation:\s*["\']([^"\']+)', obj_str)
        explanation = exp_match.group(1) if exp_match else ''
        
        if question and options:
            return {
                'question': question,
                'options': options,
                'explanation': explanation
            }
    except Exception as e:
        print(f'解析错误: {e}')
    return None

# 处理每个文件
for filename in question_files:
    filepath = f'f:/master_Yelow/{filename}'
    if not os.path.exists(filepath):
        continue
    
    content = open(filepath, 'r', encoding='utf-8').read()
    
    # 从文件名提取level
    match = re.search(r'level(\d+)', filename)
    if match:
        level = int(match.group(1))
        questions = parse_js_questions(content, level)
        all_questions[str(level)].extend(questions)
        print(f'{filename} -> Level {level}: {len(questions)} 题')

# 去重
print('\n=== 去重后 ===')
for level in all_questions:
    unique = []
    seen = set()
    for q in all_questions[level]:
        q_text = q['question']
        if q_text not in seen:
            seen.add(q_text)
            unique.append(q)
    all_questions[level] = unique
    print(f'Level {level}: {len(unique)} 题')

# 保存到 all_questions.json
with open('f:/master_Yelow/all_questions.json', 'w', encoding='utf-8') as f:
    json.dump(all_questions, f, ensure_ascii=False, indent=2)

print(f'\n=== 已保存到 all_questions.json ===')
print(f'总计: {sum(len(v) for v in all_questions.values())} 题')
