import re
import os

def extract_questions_from_file(filepath, target_level=None):
    """从文件提取所有题目"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 查找数组内容
    array_match = re.search(r'(?:const|var|let)\s+\w+\s*=\s*\[(.*?)\];', content, re.DOTALL)
    if not array_match:
        return []
    
    block = array_match.group(1)
    
    # 提取每个问题的完整对象
    questions = []
    # 匹配整个问题对象 - 从 question: 到下一个 { question: 或结束
    question_blocks = re.findall(r'\{(.*?)(?=\n\s*\{|\n\s*\];)', block, re.DOTALL)
    
    for qblock in question_blocks:
        if 'question:' in qblock:
            # 重新构造完整对象
            full_obj = '{' + qblock + '}'
            questions.append(full_obj)
    
    return questions

def get_level_from_filename(fname):
    """从文件名获取关卡"""
    if 'level10' in fname:
        return 10
    elif 'level1' in fname:
        return 1
    elif 'level2' in fname:
        return 2
    elif 'level3' in fname:
        return 3
    elif 'level4' in fname:
        return 4
    elif 'level5' in fname:
        return 5
    elif 'level6' in fname:
        return 6
    elif 'level7' in fname:
        return 7
    elif 'level8' in fname:
        return 8
    elif 'level9' in fname:
        return 9
    elif 'batch2' in fname:
        return 2
    return None

# 收集所有文件的问题
all_level_questions = {i: [] for i in range(1, 11)}

# 先处理questions.js
with open('questions.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 提取每关的问题块
for level in range(1, 11):
    pattern = rf'{level}:\s*\[(.*?)(?=\n\s*\d+:|;\s*</script>)'
    match = re.search(pattern, content, re.DOTALL)
    if match:
        block = match.group(1)
        # 提取每个问题的完整对象
        question_blocks = re.findall(r'\{(.*?)(?=\n\s*\{{2}|\n\s*\])', block, re.DOTALL)
        for qblock in question_blocks:
            if 'question:' in qblock:
                full_obj = '{' + qblock + '}'
                all_level_questions[level].append(full_obj)

print("从 questions.js 读取:")
for level in range(1, 11):
    print(f"  Level {level}: {len(all_level_questions[level])} questions")

# 处理其他题库文件
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

print("\n从其他文件读取:")
for fname in question_files:
    if os.path.exists(fname):
        level = get_level_from_filename(fname)
        if level:
            questions = extract_questions_from_file(fname)
            print(f"  {fname}: {len(questions)} -> Level {level}")
            all_level_questions[level].extend(questions)

print("\n=== 合并后总计 ===")
for level in range(1, 11):
    count = len(all_level_questions[level])
    status = "OK" if count >= 50 else "NOT ENOUGH"
    print(f"  Level {level}: {count} questions {status}")

# 生成新的questions.js
print("\n生成新文件...")

# 读取原始文件只获取头部
with open('questions.js', 'r', encoding='utf-8') as f:
    original = f.read()

# 找到文件结束位置
end_match = re.search(r'\};\s*</script>', original)
if end_match:
    header = original[:end_match.start()]
else:
    # 找到最后一个 }
    header = original

# 生成新的题库内容
new_content = header + '\n'

for level in range(1, 11):
    new_content += f'\n    // 第{level}关\n    {level}: [\n'
    questions = all_level_questions[level]
    for i, q in enumerate(questions):
        # 确保格式正确
        if not q.strip().endswith(','):
            q = q + ','
        new_content += '        ' + q + '\n'
    new_content += '    ],\n'

new_content += '};\n</script>'

# 写入新文件
with open('questions.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("questions.js 已更新!")
