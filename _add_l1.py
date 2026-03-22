import pandas as pd

# 读取Excel
df = pd.read_excel('C:/Users/David Li/Desktop/煤炭贸易题库_题目和答案_已更新.xlsx')

# 读取当前的questions.js
with open('questions.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# 看看前20个题目的内容
print("Excel前20题:")
for i in range(min(20, len(df))):
    print(f"{i+1}. {df.iloc[i]['题目'][:50]}...")
