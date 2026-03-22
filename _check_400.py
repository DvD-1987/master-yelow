import pandas as pd
import sys
sys.stdout.reconfigure(encoding='utf-8')

# 读取Excel
df = pd.read_excel('C:/Users/David Li/Desktop/煤炭贸易题库_题目和答案_已更新.xlsx')

# 打印400-510题
for i in range(399, min(510, len(df))):
    row = df.iloc[i]
    q = str(row['题目'])[:60]
    a = row['正确答案']
    e = str(row['解析'])[:50]
    print(f"{int(row['序号'])}: {q}... | {a} | {e}")
