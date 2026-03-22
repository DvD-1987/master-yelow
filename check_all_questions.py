# -*- coding: utf-8 -*-
import re
import os

# 读取所有题目文件
files = ['questions.js', 'questions_level1_extra.js', 'questions_level2_extra.js', 'questions_level3_full.js']

all_questions = []
for file in files:
    if os.path.exists(file):
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        questions = re.findall(r'question:\s*"([^"]+)"', content)
        all_questions.extend(questions)
        print(f'{file}: {len(questions)} 道题')
    else:
        print(f'{file}: 文件不存在')

print(f'\n总计: {len(all_questions)} 道题')
unique_questions = set(all_questions)
print(f'去重后: {len(unique_questions)} 道题')

# 检查重复
from collections import Counter
counts = Counter(all_questions)
duplicates = [(q, c) for q, c in counts.items() if c > 1]

if duplicates:
    print(f'\n发现 {len(duplicates)} 道重复题目:')
    for q, c in duplicates[:10]:
        print(f'  重复{c}次: {q[:60]}...')
else:
    print('\n没有发现重复题目')

# 显示前20道题作为样本
print('\n前20道题样本:')
for i, q in enumerate(all_questions[:20], 1):
    print(f'{i}. {q[:70]}...')
