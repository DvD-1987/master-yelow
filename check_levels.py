# -*- coding: utf-8 -*-
import re

with open('questions.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 提取每个关卡
levels = {}
for level_num in range(1, 11):
    pattern = rf'{level_num}:\s*\[(.*?)\n\s*\]'
    match = re.search(pattern, content, re.DOTALL)
    if match:
        level_content = match.group(1)
        questions = re.findall(r'question:\s*"([^"]+)"', level_content)
        levels[level_num] = questions
        print(f"第{level_num}关: {len(questions)} 道题目")

print(f"\n总计: {sum(len(q) for q in levels.values())} 道题目")
