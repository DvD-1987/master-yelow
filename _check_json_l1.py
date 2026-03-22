import json
d = json.load(open('all_questions.json', 'r', encoding='utf-8'))
print("Level 1 questions in JSON:")
for i, q in enumerate(d['1'][:5]):
    print(f"  {i+1}. {q['question'][:50]}...")
