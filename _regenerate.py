import pandas as pd
import re
import json

# 读取Excel
df = pd.read_excel('C:/Users/David Li/Desktop/煤炭贸易题库_题目和答案_已更新.xlsx')
print(f"Excel总题目数: {len(df)}")

# 读取所有问题的完整数据
all_questions = []
for idx, row in df.iterrows():
    q = {
        'question': str(row['题目']).strip(),
        'options': [],  # 选项将在后面生成
        'explanation': str(row['解析']).strip() if pd.notna(row['解析']) else '',
    }
    all_questions.append(q)

# 读取原始JS获取选项格式
with open('questions_backup.js', 'r', encoding='utf-8') as f:
    original_content = f.read()

# 检查是否有备份
print("检查是否有questions_backup.js...")
