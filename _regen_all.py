import pandas as pd
import re

# 读取Excel
df = pd.read_excel('C:/Users/David Li/Desktop/煤炭贸易题库_题目和答案_已更新.xlsx')

# 读取当前questions.js获取额外题库
def parse_js_questions(content, level):
    """从JS内容解析指定关卡的题目"""
    pattern = rf'    {level}: \[(.*?)\n    \],'
    match = re.search(pattern, content, re.DOTALL)
    if not match:
        return []
    
    block = match.group(1)
    questions = []
    
    # 找到所有 { question: ... } 对象
    pos = 0
    while True:
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
        in_string = False
        while i < len(block):
            char = block[i]
            if char == '"' and (i == 0 or block[i-1] != '\\'):
                in_string = not in_string
            if not in_string:
                if char == '{':
                    depth += 1
                elif char == '}':
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

# 读取当前questions.js
with open('questions.js', 'r', encoding='utf-8') as f:
    current_js = f.read()

# 收集当前已有的额外题目
extra_questions = {i: [] for i in range(1, 11)}
for level in range(1, 11):
    extra_questions[level] = parse_js_questions(current_js, level)

print("当前额外题目:")
for level in range(1, 11):
    print(f"  Level {level}: {len(extra_questions[level])}")

# 从Excel生成前20题作为Level 1基础题
def create_question_str(row):
    q = str(row['题目']).strip()
    a = str(row['选项A']).strip()
    b = str(row['选项B']).strip()
    c = str(row['选项C']).strip()
    d = str(row['选项D']).strip()
    correct = str(row['正确答案']).strip()
    exp = str(row['解析']).strip() if pd.notna(row['解析']) else ''
    
    # 根据正确答案设置effect
    correct_idx = ['A', 'B', 'C', 'D'].index(correct)
    
    return f'''        {{
            question: "{q}",
            options: [
                {{ text: "{a}", correct: {str(correct == 'A').lower()}, effect: {{knowledge: {5 if correct == 'A' else -3}, trust: {3 if correct == 'A' else -2}, risk: {-5 if correct == 'A' else 5}}} }},
                {{ text: "{b}", correct: {str(correct == 'B').lower()}, effect: {{knowledge: {5 if correct == 'B' else -3}, trust: {3 if correct == 'B' else -2}, risk: {-5 if correct == 'B' else 5}}} }},
                {{ text: "{c}", correct: {str(correct == 'C').lower()}, effect: {{knowledge: {5 if correct == 'C' else -3}, trust: {3 if correct == 'C' else -2}, risk: {-5 if correct == 'C' else 5}}} }},
                {{ text: "{d}", correct: {str(correct == 'D').lower()}, effect: {{knowledge: {5 if correct == 'D' else -3}, trust: {3 if correct == 'D' else -2}, risk: {-5 if correct == 'D' else 5}}} }},
            ],
            explanation: "{exp}"
        }}'''

# 生成新文件
new_js = '''// 完整题库 - 第1-10关（每关50题，共500题）
const questionBankData = {
'''

for level in range(1, 11):
    new_js += f'    // 第{level}关\n    {level}: [\n'
    
    if level == 1:
        # Level 1: 前20题从Excel + 额外题目
        for i in range(20):
            new_js += create_question_str(df.iloc[i]) + ',\n'
        
        # 添加额外题目
        for q in extra_questions[level]:
            new_js += '        ' + q + ',\n'
    else:
        # 其他关卡: 只有额外题目
        for q in extra_questions[level]:
            new_js += '        ' + q + ',\n'
    
    new_js += '    ],\n'

new_js += '''};
</script>
'''

with open('questions.js', 'w', encoding='utf-8') as f:
    f.write(new_js)

print("\n已重新生成questions.js")

# 验证
with open('questions.js', 'r', encoding='utf-8') as f:
    content = f.read()
    total = content.count('question:')
    print(f"总题目数: {total}")

# 统计每关
for level in range(1, 11):
    pattern = rf'    {level}: \[(.*?)\n    \],'
    match = re.search(pattern, content, re.DOTALL)
    if match:
        count = match.group(1).count('question:')
        status = "OK" if count >= 50 else "NOT ENOUGH"
        print(f"Level {level}: {count} {status}")
