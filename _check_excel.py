import pandas as pd
df = pd.read_excel('C:/Users/David Li/Desktop/煤炭贸易题库_题目和答案_已更新.xlsx')
print('Excel rows:', len(df))
print(df.columns.tolist())
# 看看有没有"关卡"列
if '关卡' in df.columns:
    print("\n关卡分布:")
    print(df['关卡'].value_counts().sort_index())
