import pandas as pd
import re

# 读取Excel
df = pd.read_excel('C:/Users/David Li/Desktop/煤炭贸易题库_题目和答案_已更新.xlsx')

# 生成Level 1的题目 (前20题)
def create_question_obj(row):
    q = row['题目']
    options = [
        {'text': str(row['选项A']), 'correct': row['正确答案'] == 'A', 'effect': {'knowledge': 5 if row['正确答案'] == 'A' else -3, 'trust': 3 if row['正确答案'] == 'A' else -2, 'risk': -5 if row['正确答案'] == 'A' else 5}},
        {'text': str(row['选项B']), 'correct': row['正确答案'] == 'B', 'effect': {'knowledge': 5 if row['正确答案'] == 'B' else -3, 'trust': 3 if row['正确答案'] == 'B' else -2, 'risk': -5 if row['正确答案'] == 'B' else 5}},
        {'text': str(row['选项C']), 'correct': row['正确答案'] == 'C', 'effect': {'knowledge': 5 if row['正确答案'] == 'C' else -3, 'trust': 3 if row['正确答案'] == 'C' else -2, 'risk': -5 if row['正确答案'] == 'C' else 5}},
        {'text': str(row['选项D']), 'correct': row['正确答案'] == 'D', 'effect': {'knowledge': 5 if row['正确答案'] == 'D' else -3, 'trust': 3 if row['正确答案'] == 'D' else -2, 'risk': -5 if row['正确答案'] == 'D' else 5}},
    ]
    explanation = str(row['解析']) if pd.notna(row['解析']) else ''
    return {
        'question': str(q),
        'options': options,
        'explanation': explanation
    }

# 生成20个Level 1题目
level1_questions = []
for i in range(20):
    level1_questions.append(create_question_obj(df.iloc[i]))

# 读取当前questions.js
with open('questions.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# 找到Level 1的位置并添加题目
# 找到 "1: [" 的结束位置
pattern = r'(    1: \[)(.*?)(\],)'
match = re.search(pattern, js_content, re.DOTALL)
if match:
    print("找到Level 1位置")
    # 在现有题目后添加新题目
    old_section = match.group(2)
    new_section = old_section.rstrip()
    
    # 添加20个新题目
    for q in level1_questions:
        new_section += f'\n        {{\n            question: "{q["question"]}",\n            options: [\n'
        for opt in q['options']:
            new_section += f'                {{ text: "{opt["text"]}", correct: {str(opt["correct"]).lower()}, effect: {{knowledge: {opt["effect"]["knowledge"]}, trust: {opt["effect"]["trust"]}, risk: {opt["effect"]["risk"]}}} }},\n'
        new_section += '            ],\n'
        new_section += f'            explanation: "{q["explanation"]}"\n        }},'
    
    new_js = js_content[:match.start(1)] + match.group(1) + new_section + match.group(3) + js_content[match.end(3):]
    
    with open('questions.js', 'w', encoding='utf-8') as f:
        f.write(new_js)
    
    print("已添加20个Level 1题目")
else:
    print("未找到Level 1位置")

# 验证
with open('questions.js', 'r', encoding='utf-8') as f:
    content = f.read()
    count = content.count('question:')
    print(f"总题目数: {count}")
    
    # 检查Level 1
    l1_match = re.search(r'    1: \[(.*?)\],', content, re.DOTALL)
    if l1_match:
        l1_count = l1_match.group(1).count('question:')
        print(f"Level 1题目数: {l1_count}")
