import re
import os

def parse_js_array(content, array_name):
    """从JS文件解析数组"""
    # 查找 const arrayName = [...]
    pattern = rf'(?:const|var|let)\s+{array_name}\s*=\s*\[(.*?)\];'
    match = re.search(pattern, content, re.DOTALL)
    if not match:
        return []
    
    block = match.group(1)
    questions = []
    
    # 分割每个问题对象 - 使用更可靠的方法
    # 找 { question: ... } 模式
    pos = 0
    while True:
        # 找到下一个 question:
        q_start = block.find('question:', pos)
        if q_start == -1:
            break
        
        # 向前找到 { 
        obj_start = block.rfind('{', 0, q_start)
        if obj_start == -1:
            break
            
        # 向后找匹配的 }
        depth = 0
        obj_end = obj_start
        i = obj_start
        while i < len(block):
            if block[i] == '{':
                depth += 1
            elif block[i] == '}':
                depth -= 1
                if depth == 0:
                    obj_end = i + 1
                    break
            i += 1
        
        if obj_end > obj_start:
            obj_str = block[obj_start:obj_end]
            questions.append(obj_str)
            pos = obj_end
        else:
            break
    
    return questions

def get_level_from_filename(fname):
    """从文件名推断关卡"""
    fname_lower = fname.lower()
    if 'level10' in fname_lower:
        return 10
    elif 'level1' in fname_lower:
        return 1
    elif 'level2' in fname_lower:
        return 2
    elif 'level3' in fname_lower:
        return 3
    elif 'level4' in fname_lower:
        return 4
    elif 'level5' in fname_lower:
        return 5
    elif 'level6' in fname_lower:
        return 6
    elif 'level7' in fname_lower:
        return 7
    elif 'level8' in fname_lower:
        return 8
    elif 'level9' in fname_lower:
        return 9
    elif 'batch2' in fname_lower:
        return 2
    return None

# 收集所有题目
all_questions = {i: [] for i in range(1, 11)}

# 1. 先处理 questions.js (原始基础题)
if os.path.exists('questions.js'):
    # 恢复原始内容需要重新生成
    pass

# 2. 处理所有其他题库文件
question_files = [
    'questions_level1_extra.js',
    'questions_level1_more.js',
    'questions_level1_supplement.js',
    'questions_level2_extra.js',
    'questions_level2_full.js',
    'questions_level3_full.js',
    'questions_level3_supplement.js',
    'questions_level4_full.js',
    'questions_level4_batch.js',
    'questions_level4_supplement.js',
    'questions_level5_full.js',
    'questions_level5_batch.js',
    'questions_level5_supplement.js',
    'questions_level6_full.js',
    'questions_level6_batch.js',
    'questions_level6_supplement.js',
    'questions_level7_full.js',
    'questions_level7_batch.js',
    'questions_level7_supplement.js',
    'questions_level8_full.js',
    'questions_level8_batch.js',
    'questions_level8_supplement.js',
    'questions_level9_full.js',
    'questions_level9_batch.js',
    'questions_level9_supplement.js',
    'questions_level10_full.js',
    'questions_level10_supplement.js',
    'questions_batch2.js',
]

print("读取题库文件:")
for fname in question_files:
    if os.path.exists(fname):
        with open(fname, 'r', encoding='utf-8') as f:
            content = f.read()
        
        level = get_level_from_filename(fname)
        if level:
            # 查找变量名
            var_match = re.search(r'(const|var|let)\s+(\w+)\s*=', content)
            var_name = var_match.group(2) if var_match else None
            
            if var_name:
                questions = parse_js_array(content, var_name)
                print(f"  {fname}: {len(questions)} -> Level {level}")
                all_questions[level].extend(questions)

print("\n各关题目数量:")
for level in range(1, 11):
    count = len(all_questions[level])
    status = "OK" if count >= 50 else "NOT ENOUGH"
    print(f"  Level {level}: {count} {status}")

# 生成新的questions.js
js_content = '''// 完整题库 - 第1-10关（每关50题，共500题）
const questionBankData = {
'''

for level in range(1, 11):
    questions = all_questions[level]
    js_content += f'\n    // 第{level}关（{len(questions)}题）\n    {level}: [\n'
    
    for q in questions:
        # 直接添加问题对象
        js_content += '        ' + q + ',\n'
    
    js_content += '    ],\n'

js_content += '''};
</script>
'''

with open('questions.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("\nquestions.js 已更新!")
