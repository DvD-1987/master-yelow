import json
import re

# 读取JSON
with open('all_questions.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# 读取JS
with open('questions.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

print("JSON统计:")
total_json = 0
for level in range(1, 11):
    level_key = str(level)
    count = len(data.get(level_key, []))
    print(f"  Level {level}: {count}")
    total_json += count
print(f"  总计: {total_json}")

print("\nJS统计:")
js_count = js_content.count('question:')
print(f"  总计: {js_count}")
