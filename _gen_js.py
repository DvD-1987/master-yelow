import json

# 读取真正的题目
data = json.load(open('f:/master_Yelow/all_questions.json', 'r', encoding='utf-8'))

# 生成 questions.js
total = sum(len(v) for v in data.values())
output = f'''// 煤炭贸易题库 - 所有关卡题目
// 总计: {total} 题

const questionBankData = {{
'''

for level in range(1, 11):
    questions = data.get(str(level), [])
    output += f'{level}: [\n'
    for q in questions:
        output += f'''    {{
        question: "{q['question']}",
        options: [
'''
        for opt in q['options']:
            effect = opt.get('effect', {'knowledge': 0, 'trust': 0, 'risk': 0})
            output += f'''            {{ text: "{opt['text']}", correct: {str(opt['correct']).lower()}, effect: {json.dumps(effect)} }},
'''
        output += f'''        ],
        explanation: "{q['explanation']}"
    }},
'''
    output += '''],
'''

output += '''};

// 随机打乱选项函数
function shuffleOptions(options) {
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
}
'''

with open('f:/master_Yelow/questions.js', 'w', encoding='utf-8') as f:
    f.write(output)

print('=== 生成 questions.js 完成 ===')
for i in range(1, 11):
    print(f'Level {i}: {len(data.get(str(i), []))} 题')
print(f'总计: {total} 题')
