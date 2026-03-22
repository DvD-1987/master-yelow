import re

# 读取questions.js
with open('questions.js', 'r', encoding='utf-8') as f:
    content = f.read()

print("=== 每关题目数量统计 ===\n")

for level in range(1, 11):
    # 匹配该关卡的数组 - 找到 level: [ 到下一个 level: 或结束
    pattern = rf'{level}:\s*\[(.*?)(?=\n\s*\d+:|;\s*</script>)'
    match = re.search(pattern, content, re.DOTALL)
    
    if match:
        block = match.group(1)
        # 统计question:出现次数
        count = len(re.findall(r'\bquestion:', block))
        status = "OK" if count >= 50 else "NOT ENOUGH"
        print(f"Level {level}: {count} questions {status}")
    else:
        print(f"Level {level}: 0 questions NOT ENOUGH (not found)")

# 检查总题数
total = len(re.findall(r'\bquestion:', content))
print(f"\nTotal questions in questions.js: {total}")
