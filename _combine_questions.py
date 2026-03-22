import re
import os
import json

# 先收集所有题库文件的问题
all_questions_by_level = {i: [] for i in range(1, 11)}

# 1. 先处理 questions.js
with open('questions.js', 'r', encoding='utf-8') as f:
    content = f.read()

for level in range(1, 11):
    pattern = rf'{level}:\s*\[(.*?)(?=\n\s*\d+:|;\s*</script>)'
    match = re.search(pattern, content, re.DOTALL)
    if match:
        block = match.group(1)
        # 提取所有问题
        q_matches = re.findall(r'question:\s*"([^"]+)"', block)
        for q in q_matches:
            all_questions_by_level[level].append({'source': 'questions.js', 'question': q})

print("=== questions.js 各关题目 ===")
for level in range(1, 11):
    count = len(all_questions_by_level[level])
    print(f"Level {level}: {count} questions")

# 2. 处理其他题库文件
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

print("\n=== 检查其他文件 ===")
for fname in question_files:
    if os.path.exists(fname):
        with open(fname, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 查找 var/const 定义的数组
        # 匹配类似: const level1ExtraQuestions = [ ... ]
        # 或者直接是: [ ... ]
        array_match = re.search(r'(?:const|var|let)\s+(\w+)\s*=\s*\[(.*?)\];', content, re.DOTALL)
        if array_match:
            array_name = array_match.group(1)
            block = array_match.group(2)
            
            # 提取题目的level信息
            # 从文件名或变量名推断 - 关键: 先检查level10再检查level1
            level = None
            if 'level10' in fname:
                level = 10
            elif 'level1' in fname:
                level = 1
            elif 'level2' in fname:
                level = 2
            elif 'level3' in fname:
                level = 3
            elif 'level4' in fname:
                level = 4
            elif 'level5' in fname:
                level = 5
            elif 'level6' in fname:
                level = 6
            elif 'level7' in fname:
                level = 7
            elif 'level8' in fname:
                level = 8
            elif 'level9' in fname:
                level = 9
            elif 'batch2' in fname:
                level = 2
            
            if level:
                q_matches = re.findall(r'question:\s*"([^"]+)"', block)
                print(f"{fname}: {len(q_matches)} questions -> Level {level}")
                all_questions_by_level[level].extend([{'source': fname, 'question': q} for q in q_matches])
            else:
                print(f"{fname}: Unknown level")
        else:
            print(f"{fname}: No array found")
    else:
        print(f"{fname}: Not found")

print("\n=== 合并后各关总计 ===")
for level in range(1, 11):
    count = len(all_questions_by_level[level])
    status = "OK" if count >= 50 else "NOT ENOUGH"
    print(f"Level {level}: {count} questions {status}")
