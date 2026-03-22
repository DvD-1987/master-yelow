# -*- coding: utf-8 -*-
import re

with open('questions.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 提取每个关卡的题目
all_questions = []
level_counts = {}

for level in range(1, 11):
    # 找到该关卡的数组内容
    start_marker = f'{level}: ['
    start_idx = content.find(start_marker)
    if start_idx == -1:
        print(f"第{level}关: 未找到")
        continue
    
    # 找到该关卡的结束位置（下一个关卡或文件结束）
    if level < 10:
        end_marker = f'{level+1}: ['
        end_idx = content.find(end_marker, start_idx)
    else:
        end_marker = '};'
        end_idx = content.find(end_marker, start_idx)
    
    if end_idx == -1:
        end_idx = len(content)
    
    level_content = content[start_idx:end_idx]
    
    # 提取题目
    questions = re.findall(r'question:\s*"([^"]+)"', level_content)
    level_counts[level] = len(questions)
    
    print(f'第{level}关: {len(questions)} 道题')
    for i, q in enumerate(questions[:3], 1):
        print(f'  {i}. {q[:60]}...')
    if len(questions) > 3:
        print(f'  ... 还有 {len(questions)-3} 道题')
    print()
    
    # 收集所有题目用于查重
    for q in questions:
        all_questions.append((level, q))

print('='*60)
print(f'总计: {len(all_questions)} 道题目')

# 检查重复
question_texts = [q[1] for q in all_questions]
unique_questions = set(question_texts)
print(f'去重后: {len(unique_questions)} 道题目')

if len(question_texts) != len(unique_questions):
    print('\n发现重复题目!')
    # 找出重复的题目
    seen = {}
    duplicates = []
    for level, q in all_questions:
        if q in seen:
            duplicates.append((seen[q], level, q))
        else:
            seen[q] = level
    
    print(f'重复题目数量: {len(duplicates)}')
    for orig_level, dup_level, q in duplicates[:5]:
        print(f'  第{orig_level}关和第{dup_level}关重复: {q[:50]}...')
else:
    print('\n没有发现重复题目')
