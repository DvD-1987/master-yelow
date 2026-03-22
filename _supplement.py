import pandas as pd
import json

# 读取Excel
df = pd.read_excel('f:/master_Yelow/煤炭贸易题库_题目和答案_已更新.xlsx')

# 读取当前题库
current = json.load(open('f:/master_Yelow/all_questions.json','r',encoding='utf-8'))

# 获取当前已有的题目（用于去重）
existing_questions = set()
for level_data in current.values():
    for q in level_data:
        existing_questions.add(q['question'])

# 从Excel提取新题目
new_questions_by_level = {i: [] for i in range(1, 11)}

for idx, row in df.iterrows():
    question = str(row['题目']).strip()
    if question in existing_questions:
        continue
    
    # 分配到对应关卡（按序号/50 + 1）
    level = min((idx // 50) + 1, 10)
    
    # 构建题目对象
    options = []
    correct_idx = str(row['正确答案']).strip() if pd.notna(row['正确答案']) else 'A'
    
    for opt_key in ['选项A', '选项B', '选项C', '选项D']:
        opt_text = str(row[opt_key]).strip() if pd.notna(row[opt_key]) else ''
        if not opt_text:
            continue
        is_correct = (opt_key == f'选项{correct_idx}')
        options.append({
            'text': opt_text,
            'correct': is_correct,
            'effect': {'knowledge': 5, 'trust': 3, 'risk': -5} if is_correct else {'knowledge': -3, 'trust': -2, 'risk': 5}
        })
    
    explanation = str(row['解析']).strip() if pd.notna(row['解析']) else ''
    
    if len(options) >= 2:
        new_questions_by_level[level].append({
            'question': question,
            'options': options,
            'explanation': explanation
        })

# 合并到现有题库
for level in range(1, 11):
    current[str(level)].extend(new_questions_by_level[level])
    print(f'Level {level}: 原有 {len(current[str(level)]) - len(new_questions_by_level[level])} + 新增 {len(new_questions_by_level[level])} = {len(current[str(level)])}')

# 保存
with open('f:/master_Yelow/all_questions.json', 'w', encoding='utf-8') as f:
    json.dump(current, f, ensure_ascii=False, indent=2)

print(f'\n总计: {sum(len(v) for v in current.values())} 题')
