import json

# 读取JSON
with open('all_questions.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# 生成questions.js内容
js_content = '''// 完整题库 - 第1-10关（每关50题，共500题）
const questionBankData = {
'''

for level in range(1, 11):
    level_key = str(level)
    questions = data.get(level_key, [])
    
    js_content += f'    // 第{level}关\n    {level}: [\n'
    
    for q in questions:
        js_content += '        {\n'
        js_content += f'            question: "{q["question"]}",\n'
        js_content += '            options: [\n'
        
        for opt in q['options']:
            js_content += '                { '
            js_content += f'text: "{opt["text"]}", '
            js_content += f'correct: {str(opt["correct"]).lower()}, '
            effect = opt.get('effect', {})
            js_content += f'effect: {{knowledge: {effect.get("knowledge", 0)}, trust: {effect.get("trust", 0)}, risk: {effect.get("risk", 0)}}} '
            js_content += '},\n'
        
        js_content += '            ],\n'
        js_content += f'            explanation: "{q["explanation"]}"\n'
        js_content += '        },\n'
    
    js_content += '    ],\n'

js_content += '''};
</script>
'''

# 写入文件
with open('questions.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("questions.js 已生成!")

# 验证
with open('questions.js', 'r', encoding='utf-8') as f:
    content = f.read()
    count = content.count('question:')
    print(f"总题目数: {count}")
