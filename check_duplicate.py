# -*- coding: utf-8 -*-
import re

# 读取questions.js
with open('questions.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 提取所有题目
questions = re.findall(r'question:\s*"([^"]+)"', content)

print(f"总共找到 {len(questions)} 道题目")
print(f"去重后 {len(set(questions))} 道题目")

# 检查重复
seen = {}
duplicates = []
for q in questions:
    if q in seen:
        duplicates.append(q)
    else:
        seen[q] = 1

if duplicates:
    print("\n发现重复题目:")
    for d in duplicates[:5]:  # 只显示前5个
        print(f"- {d[:50]}...")
else:
    print("\n没有发现重复题目")

# 显示前10道题
print("\n前10道题目:")
for i, q in enumerate(questions[:10], 1):
    print(f"{i}. {q[:60]}...")
