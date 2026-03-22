import re
# 检查所有level1相关的文件
files = ['questions_level1_extra.js', 'questions_level1_more.js', 'questions_level1_supplement.js']
for f in files:
    try:
        with open(f, 'r', encoding='utf-8') as fp:
            content = fp.read()
            count = len(re.findall(r'question:', content))
            print(f'{f}: {count}')
    except Exception as e:
        print(f'{f}: not found - {e}')
