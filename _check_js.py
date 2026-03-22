content = open('questions.js','r',encoding='utf-8').read()
print('Total questions:', content.count('question:'))
print('Has };', content.rstrip().endswith('};'))
# 检查是否有语法错误
import re
# 查找questionBankData定义
if 'const questionBankData = {' in content:
    print('Found questionBankData definition')
else:
    print('Missing questionBankData definition!')

# 检查每个关卡
for i in range(1, 11):
    pattern = f'{i}: ['
    if pattern in content:
        print(f'Level {i}: found')
    else:
        print(f'Level {i}: MISSING!')
