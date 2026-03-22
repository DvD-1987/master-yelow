import json
data = json.load(open('all_questions.json', 'r', encoding='utf-8'))
print('Levels in JSON:', list(data.keys()))
for level in sorted(data.keys(), key=lambda x: int(x)):
    print(f'Level {level}: {len(data[level])} questions')
