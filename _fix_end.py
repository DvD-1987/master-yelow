with open('questions.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 检查末尾
print("Last 100 chars:", repr(content[-100:]))

# 修复：如果末尾不是 }; 则添加
if not content.rstrip().endswith('};'):
    # 找到最后一个 } 的位置
    last_brace = content.rfind('}')
    if last_brace > 0:
        # 在最后一个 } 后添加 };
        content = content[:last_brace+1] + ';\n</script>'
        
        with open('questions.js', 'w', encoding='utf-8') as f:
            f.write(content)
        print("Fixed file ending!")
    else:
        print("Cannot find closing brace")
else:
    print("File ending is correct")
