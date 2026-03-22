// 游戏主逻辑 - 修复版
var game = {
    state: {
        currentLevel: 1,
        currentQuestionIndex: 0,
        levelQuestions: [],
        selectedAnswer: null,
        showResult: false,
        stats: { knowledge: 50, trust: 50, risk: 20 },
        completedLevels: [],
        totalQuestions: 5,
        hiddenLevelUsedQuestions: [],
        hiddenLevelTotalAnswered: 0,
        isHiddenLevel: false,
        // 每关已使用的题目索引
        usedQuestionsByLevel: {}
    },

    init: function() {
        console.log('Game initialized');
        this.loadGameState();
        this.updateStatsDisplay();
    },

    loadGameState: function() {
        const saved = localStorage.getItem('coalGameState');
        if (saved) {
            const parsed = JSON.parse(saved);
            this.state = { ...this.state, ...parsed };
        }
    },

    saveGameState: function() {
        localStorage.setItem('coalGameState', JSON.stringify(this.state));
    },

    // 清除所有游戏数据（用于重新开始）
    clearAllData: function() {
        localStorage.removeItem('coalGameState');
        // 清除每关的使用记录
        for (let i = 1; i <= 10; i++) {
            localStorage.removeItem(`usedQuestions_level${i}`);
        }
        // 清除无尽模式记录
        localStorage.removeItem('endlessModeUsedQuestions');
        this.state = {
            currentLevel: 1,
            currentQuestionIndex: 0,
            levelQuestions: [],
            selectedAnswer: null,
            showResult: false,
            stats: { knowledge: 50, trust: 50, risk: 20 },
            completedLevels: [],
            totalQuestions: 5,
            hiddenLevelUsedQuestions: [],
            hiddenLevelTotalAnswered: 0,
            isHiddenLevel: false,
            usedQuestionsByLevel: {}
        };
    },

    updateStatsDisplay: function() {
        const k = document.getElementById('knowledgeValue');
        const t = document.getElementById('trustValue');
        const r = document.getElementById('riskValue');
        if (k) k.textContent = Math.round(this.state.stats.knowledge);
        if (t) t.textContent = Math.round(this.state.stats.trust);
        if (r) r.textContent = Math.round(this.state.stats.risk);
    },

    showIntro: function() {
        const content = document.getElementById('gameContent');
        content.innerHTML = `
            <div class="story-display">
                <h3>序章：初入职场</h3>
                <p>2024年夏天，福建某大学的毕业典礼刚刚结束。</p>
                <p>Mr.Yelow，一个普通的应届毕业生，怀揣着对未来的憧憬，踏入了当地一家知名的国际贸易公司。</p>
                <p>公司业务范围极广，从电子产品到原材料，从亚洲到欧美，几乎无所不包。然而，Mr.Yelow被分配到了一个特殊的部门——<strong>煤炭贸易部</strong>。</p>
                <p>这个部门成立多年，却从未有过正式的管理人员。同事们戏称这里是"被遗忘的角落"。</p>
                <p>"新来的，以后你就叫'黄老师'吧！"一位老员工打趣道，"反正这部门就你一个人，你说了算！"</p>
                <p>就这样，"黄老师"这个称号在公司里传开了。</p>
                <p>一个月后，上级主管找到了黄老师：</p>
                <p>"小黄啊，公司决定开拓印尼动力煤市场。那边是主产区，潜力巨大。这个任务就交给你了，去印尼掌管我们部门的煤炭贸易事宜。"</p>
                <p>黄老师愣住了。一个刚毕业的大学生，要独自去异国他乡，管理一个从未有人涉足的业务？</p>
                <p>但机会难得，黄老师咬咬牙，接下了这个挑战。</p>
                <p>从此，一段煤炭贸易传奇之旅，正式拉开帷幕...</p>
            </div>
            <div class="button-group">
                <button class="btn btn-primary" onclick="game.showMenu()">开始游戏</button>
            </div>
        `;
        document.getElementById('progressContainer').style.display = 'none';
        this.updateStatsDisplay();
    },

    showMenu: function() {
        const content = document.getElementById('gameContent');
        let levelsHtml = '';
        const levelNames = ['', '初到印尼', '煤炭基础', '资源收集', '贸易谈判', '煤炭装载', '煤炭检验', '离港通关', '回国卸货', '电厂投标', '综合全流程'];
        
        for (let i = 1; i <= 10; i++) {
            const isLocked = i > 1 && !this.state.completedLevels.includes(i - 1);
            const isCompleted = this.state.completedLevels.includes(i);
            
            levelsHtml += `
                <div class="level-card ${isLocked ? 'locked' : ''} ${isCompleted ? 'completed' : ''}" 
                     onclick="${isLocked ? '' : `game.startLevel(${i})`}">
                    <div class="level-number">第${i}关</div>
                    <div class="level-name">${levelNames[i]}</div>
                    ${isCompleted ? '<div style="color: #00FF00;">已完成</div>' : ''}
                </div>
            `;
        }
        
        content.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <h2 style="color: #00FFFF; margin-bottom: 20px;">选择关卡</h2>
                <div class="level-grid">${levelsHtml}</div>
                ${this.state.completedLevels.length >= 10 ? `
                    <div style="margin-top: 20px;">
                        <button class="btn btn-primary" onclick="game.startHiddenLevel()" 
                                style="background: #6600ff; border-color: #ff00ff;">
                            进入无尽模式
                        </button>
                    </div>
                ` : ''}
                
                <div style="background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%); border: 2px solid #D4AF37; border-radius: 10px; padding: 15px; margin-top: 30px; max-width: 400px; margin-left: auto; margin-right: auto;">
                    <div style="color: #D4AF37; font-size: 0.9rem; margin-bottom: 5px;">特别鸣谢</div>
                    <div style="color: #00FFFF; font-size: 1.2rem; font-weight: bold;">CCIC 中国检验认证集团</div>
                    <div style="color: #888; font-size: 0.8rem; margin-top: 5px;">专业检验认证，助力煤炭贸易高质量发展</div>
                </div>
            </div>
        `;
        document.getElementById('progressContainer').style.display = 'none';
    },

    startLevel: function(levelId) {
        this.state.currentLevel = levelId;
        this.state.currentQuestionIndex = 0;
        this.state.isHiddenLevel = false;
        this.state.showResult = false;
        
        // 从题库中获取该关卡题目（运行时按题目文本去重）
        const rawQuestions = questionBankData[levelId] || [];
        const seenQuestions = new Set();
        const allQuestions = rawQuestions.filter(q => {
            const key = q.question.trim();
            if (seenQuestions.has(key)) return false;
            seenQuestions.add(key);
            return true;
        });
        if (allQuestions.length === 0) {
            alert('题目加载失败！');
            return;
        }
        
        // 获取该关卡已使用的题目（从localStorage）
        const usedKey = `usedQuestions_level${levelId}`;
        const usedQuestions = JSON.parse(localStorage.getItem(usedKey) || '[]');
        
        // 过滤出未使用的题目
        let availableQuestions = allQuestions.map((q, idx) => ({...q, originalIndex: idx}))
            .filter(q => !usedQuestions.includes(q.originalIndex));
        
        // 如果所有题目都已使用，重置使用记录
        if (availableQuestions.length === 0) {
            localStorage.setItem(usedKey, '[]');
            availableQuestions = allQuestions.map((q, idx) => ({...q, originalIndex: idx}));
        }
        
        // 随机选择5道题进行回答（题库容量至少50题）
        const shuffled = [...availableQuestions].sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, Math.min(5, shuffled.length));
        
        // 记录已使用的题目
        const newUsed = [...usedQuestions, ...selected.map(q => q.originalIndex)];
        localStorage.setItem(usedKey, JSON.stringify(newUsed));
        
        // 打乱每道题的选项顺序
        this.state.levelQuestions = selected.map(q => this.shuffleOptions(q));
        
        this.saveGameState();
        this.showStory(levelId);
    },

    // 打乱选项顺序
    shuffleOptions: function(question) {
        const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);
        return {
            ...question,
            options: shuffledOptions
        };
    },

    showStory: function(levelId) {
        const stories = {
            1: { title: '第一关：初到印尼', text: '<p>飞机降落在雅加达苏加诺-哈达国际机场。</p><p>黄老师拖着行李箱，走出机场，迎面而来的是热带特有的湿热空气。</p><p>公司在这里有一个小小的办事处，只有一位当地助理Maya...</p>' },
            2: { title: '第二关：煤炭基础', text: '<p>回到公司，黄老师开始恶补煤炭知识。</p><p>主管给黄老师安排了一位老师傅——老张...</p>' },
            3: { title: '第三关：资源收集', text: '<p>再次来到印尼，黄老师这次有了明确的目标——寻找可靠的煤炭资源。</p>' },
            4: { title: '第四关：贸易谈判', text: '<p>经过几个月的资源收集，黄老师锁定了几个可靠的矿主。</p>' },
            5: { title: '第五关：煤炭装载', text: '<p>合同签订后，第一批煤炭开始装船。</p>' },
            6: { title: '第六关：煤炭检验', text: '<p>装船过程中，检验员发现了问题...</p>' },
            7: { title: '第七关：离港通关', text: '<p>煤炭装船完毕，接下来要办理出口手续...</p>' },
            8: { title: '第八关：回国卸货', text: '<p>经过两周的航行，货轮抵达中国港口...</p>' },
            9: { title: '第九关：电厂投标', text: '<p>煤炭到港后，黄老师开始寻找下游买家...</p>' },
            10: { title: '第十关：综合全流程', text: '<p>经过一年多的历练，黄老师已经成长为公司的业务骨干...</p>' }
        };
        
        const story = stories[levelId] || stories[1];
        const content = document.getElementById('gameContent');
        content.innerHTML = `
            <div class="story-display">
                <h3>${story.title}</h3>
                ${story.text}
                <p><strong>任务目标：</strong>回答5道问题，展示你的专业知识。</p>
            </div>
            <div class="button-group">
                <button class="btn btn-primary" onclick="game.showQuestion()">开始答题</button>
            </div>
        `;
        document.getElementById('progressContainer').style.display = 'none';
    },

    showQuestion: function() {
        const q = this.state.levelQuestions[this.state.currentQuestionIndex];
        if (!q) {
            console.log('No more questions, showing complete screen');
            if (this.state.isHiddenLevel) {
                this.showHiddenLevelComplete();
            } else {
                this.showLevelComplete();
            }
            return;
        }
        
        const content = document.getElementById('gameContent');
        let optionsHtml = '';
        q.options.forEach((opt, idx) => {
            const letter = String.fromCharCode(65 + idx);
            optionsHtml += `<button class="option-btn" id="opt${idx}" onclick="game.selectAnswer(${idx})">
                <span class="option-letter">${letter}</span>${opt.text}
            </button>`;
        });
        
        const levelBadge = this.state.isHiddenLevel 
            ? '<div class="level-badge" style="background: #6600ff; border-color: #ff00ff; color: #ffccff;">隐藏关卡</div>'
            : `<div class="level-badge">第${this.state.currentLevel}关</div>`;
        
        const progressText = this.state.isHiddenLevel
            ? `无尽模式 - 题目 ${this.state.currentQuestionIndex + 1} / 500（共${this.state.levelQuestions.length}题可用）`
            : `第 ${this.state.currentLevel} 关 - 题目 ${this.state.currentQuestionIndex + 1} / ${this.state.levelQuestions.length}`;
        
        content.innerHTML = `
            <div class="question-area">
                ${levelBadge}
                <div class="question-counter">题目 ${this.state.currentQuestionIndex + 1} / ${this.state.levelQuestions.length}</div>
                <div class="question-text">${q.question}</div>
                <div class="options-container">${optionsHtml}</div>
                <div class="feedback-box" id="feedbackBox" style="display: none;">
                    <div class="feedback-title" id="feedbackTitle"></div>
                    <div id="feedbackExplanation"></div>
                    <div style="margin-top: 15px;">
                        <button class="btn btn-primary" id="nextBtn" onclick="game.nextQuestion()">下一题</button>
                    </div>
                </div>
            </div>
        `;
        
        document.getElementById('progressContainer').style.display = 'block';
        document.getElementById('progressFill').style.width = `${((this.state.currentQuestionIndex) / this.state.levelQuestions.length) * 100}%`;
        document.getElementById('progressText').textContent = progressText;
    },

    selectAnswer: function(index) {
        if (this.state.showResult) return;
        
        const q = this.state.levelQuestions[this.state.currentQuestionIndex];
        if (!q || !q.options[index]) return;
        
        const selected = q.options[index];
        
        // 记录无尽模式已回答的题目
        if (this.state.isHiddenLevel && q.uniqueId) {
            if (!this.state.hiddenLevelUsedQuestions.includes(q.uniqueId)) {
                this.state.hiddenLevelUsedQuestions.push(q.uniqueId);
            }
            this.state.hiddenLevelTotalAnswered++;
            // 保存到localStorage
            localStorage.setItem('endlessModeUsedQuestions', JSON.stringify(this.state.hiddenLevelUsedQuestions));
        }
        
        // 禁用所有选项按钮
        document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);
        
        // 标记选中
        const selectedBtn = document.getElementById(`opt${index}`);
        if (selectedBtn) {
            selectedBtn.classList.add(selected.correct ? 'correct' : 'wrong');
        }
        
        // 显示正确答案
        q.options.forEach((opt, idx) => {
            if (opt.correct) {
                const btn = document.getElementById(`opt${idx}`);
                if (btn) btn.classList.add('correct');
            }
        });
        
        // 应用效果（无尽模式下：答错惩罚×2，答对奖励×0.5）
        const isEndlessMode = this.state.isHiddenLevel;
        const multiplier = isEndlessMode ? (selected.correct ? 0.5 : 2) : 1;
        this.state.stats.knowledge = Math.max(0, Math.min(100, this.state.stats.knowledge + (selected.effect?.knowledge || 0) * multiplier));
        this.state.stats.trust = Math.max(0, Math.min(100, this.state.stats.trust + (selected.effect?.trust || 0) * multiplier));
        this.state.stats.risk = Math.max(0, Math.min(100, this.state.stats.risk + (selected.effect?.risk || 0) * multiplier));
        this.updateStatsDisplay();
        
        // 显示反馈
        const feedbackBox = document.getElementById('feedbackBox');
        const feedbackTitle = document.getElementById('feedbackTitle');
        const feedbackExplanation = document.getElementById('feedbackExplanation');
        
        if (feedbackBox && feedbackTitle && feedbackExplanation) {
            feedbackBox.style.display = 'block';
            feedbackBox.classList.add(selected.correct ? 'correct' : 'wrong');
            feedbackTitle.textContent = selected.correct ? '✓ 回答正确！' : '✗ 回答错误';
            feedbackExplanation.innerHTML = `<p style="color: #e0e0e0;">${q.explanation || ''}</p>`;
        }
        
        this.state.showResult = true;
        this.saveGameState();
        
        // 检查游戏结束
        if (this.state.stats.risk >= 100 || this.state.stats.trust <= 0 || this.state.stats.knowledge <= 20) {
            setTimeout(() => this.showGameOver(), 2000);
        }
    },

    nextQuestion: function() {
        console.log('Next question clicked');
        this.state.showResult = false;
        this.state.currentQuestionIndex++;
        this.saveGameState();
        
        if (this.state.currentQuestionIndex >= this.state.levelQuestions.length) {
            if (this.state.isHiddenLevel) {
                this.showHiddenLevelComplete();
            } else {
                this.showLevelComplete();
            }
        } else {
            this.showQuestion();
        }
    },

    showLevelComplete: function() {
        if (!this.state.completedLevels.includes(this.state.currentLevel)) {
            this.state.completedLevels.push(this.state.currentLevel);
        }
        this.saveGameState();
        
        const content = document.getElementById('gameContent');
        const allLevelsCompleted = this.state.completedLevels.length >= 10;
        
        let nextButtonHtml = '';
        if (this.state.currentLevel < 10) {
            nextButtonHtml = `<button class="btn btn-primary" onclick="game.startLevel(${this.state.currentLevel + 1})">下一关</button>`;
        } else if (this.state.currentLevel === 10 && allLevelsCompleted) {
            nextButtonHtml = `<button class="btn btn-primary" onclick="game.startHiddenLevel()" style="background: #6600ff; border-color: #ff00ff;">进入无尽模式</button>`;
        }
        
        content.innerHTML = `
            <div style="text-align: center; padding: 30px;">
                <h2 style="color: #00FF00; margin-bottom: 20px;">关卡完成！</h2>
                <p style="color: #e0e0e0; margin-bottom: 20px;">恭喜通过第${this.state.currentLevel}关！</p>
                ${allLevelsCompleted && this.state.currentLevel === 10 ? '<p style="color: #ff00ff; margin-bottom: 20px;">无尽模式已解锁！</p>' : ''}
                <div style="display: flex; justify-content: center; gap: 20px; margin: 20px 0;">
                    <div style="padding: 15px 25px; background: #2a2a4a; border: 2px solid #8B4513; border-radius: 8px;">
                        <div style="color: #D4AF37;">专业知识</div>
                        <div style="font-size: 1.5rem; color: #00FF00;">${Math.round(this.state.stats.knowledge)}</div>
                    </div>
                    <div style="padding: 15px 25px; background: #2a2a4a; border: 2px solid #8B4513; border-radius: 8px;">
                        <div style="color: #D4AF37;">老板信任度</div>
                        <div style="font-size: 1.5rem; color: #00FF00;">${Math.round(this.state.stats.trust)}</div>
                    </div>
                    <div style="padding: 15px 25px; background: #2a2a4a; border: 2px solid #8B4513; border-radius: 8px;">
                        <div style="color: #D4AF37;">风险值</div>
                        <div style="font-size: 1.5rem; color: #FF4444;">${Math.round(this.state.stats.risk)}</div>
                    </div>
                </div>
                <div class="button-group">
                    ${nextButtonHtml}
                    <button class="btn btn-secondary" onclick="game.showMenu()">返回菜单</button>
                </div>
                
                <div style="background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%); border: 2px solid #D4AF37; border-radius: 10px; padding: 15px; margin-top: 30px; max-width: 400px; margin-left: auto; margin-right: auto;">
                    <div style="color: #D4AF37; font-size: 0.9rem; margin-bottom: 5px;">特别鸣谢</div>
                    <div style="color: #00FFFF; font-size: 1.1rem; font-weight: bold;">CCIC 中国检验认证集团</div>
                    <div style="color: #888; font-size: 0.8rem; margin-top: 5px;">专业检验认证，助力煤炭贸易高质量发展</div>
                </div>
            </div>
        `;
        document.getElementById('progressContainer').style.display = 'none';
    },

    showHiddenLevelComplete: function() {
        this.saveGameState();
        
        const content = document.getElementById('gameContent');
        content.innerHTML = `
            <div style="text-align: center; padding: 30px;">
                <h2 style="color: #ff00ff; margin-bottom: 20px;">无尽模式完成！</h2>
                <p style="color: #e0e0e0; margin-bottom: 20px;">恭喜你完成了无尽模式的所有挑战！</p>
                <p style="color: #ffcc00; margin-bottom: 20px; font-size: 1.5rem;">获得称号：<span style="color: #ff00ff; font-weight: bold;">煤炭仙人</span></p>
                <p style="color: #e0e0e0; margin-bottom: 20px;">你已经回答了 ${this.state.hiddenLevelTotalAnswered} 道题目</p>
                <p style="color: #e0e0e0; margin-bottom: 30px;">你已经掌握了煤炭贸易的全部知识，成为这个领域的真正专家！</p>
                
                <div style="background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%); border: 3px solid #D4AF37; border-radius: 15px; padding: 25px; margin: 30px auto; max-width: 600px;">
                    <h3 style="color: #D4AF37; margin-bottom: 15px;">特别鸣谢</h3>
                    <div style="font-size: 1.3rem; color: #00FFFF; margin-bottom: 10px;">CCIC 中国检验认证集团</div>
                    <div style="color: #e0e0e0; font-size: 0.9rem;">倾情赞助</div>
                    <p style="color: #aaa; margin-top: 15px; font-size: 0.8rem;">专业检验认证，助力煤炭贸易高质量发展</p>
                </div>
                
                <div style="display: flex; justify-content: center; gap: 20px; margin: 20px 0;">
                    <div style="padding: 15px 25px; background: #2a2a4a; border: 2px solid #ff00ff; border-radius: 8px;">
                        <div style="color: #D4AF37;">专业知识</div>
                        <div style="font-size: 1.5rem; color: #00FF00;">${Math.round(this.state.stats.knowledge)}</div>
                    </div>
                    <div style="padding: 15px 25px; background: #2a2a4a; border: 2px solid #ff00ff; border-radius: 8px;">
                        <div style="color: #D4AF37;">老板信任度</div>
                        <div style="font-size: 1.5rem; color: #00FF00;">${Math.round(this.state.stats.trust)}</div>
                    </div>
                    <div style="padding: 15px 25px; background: #2a2a4a; border: 2px solid #ff00ff; border-radius: 8px;">
                        <div style="color: #D4AF37;">风险值</div>
                        <div style="font-size: 1.5rem; color: #FF4444;">${Math.round(this.state.stats.risk)}</div>
                    </div>
                </div>
                <div class="button-group">
                    <button class="btn btn-primary" onclick="game.startHiddenLevel()" style="background: #6600ff; border-color: #ff00ff;">再次挑战无尽模式</button>
                    <button class="btn btn-secondary" onclick="game.showMenu()">返回菜单</button>
                </div>
            </div>
        `;
        document.getElementById('progressContainer').style.display = 'none';
    },

    startHiddenLevel: function() {
        this.state.isHiddenLevel = true;
        this.state.currentLevel = 11;
        this.state.currentQuestionIndex = 0;
        this.state.showResult = false;
        
        const answeredIds = new Set(this.state.hiddenLevelUsedQuestions);
        let allAvailableQuestions = [];
        
        for (let level = 1; level <= 10; level++) {
            const rawLevelQuestions = questionBankData[level] || [];
            // 运行时去重
            const seenQ = new Set();
            const levelQuestions = rawLevelQuestions.filter(q => {
                const key = q.question.trim();
                if (seenQ.has(key)) return false;
                seenQ.add(key);
                return true;
            });
            levelQuestions.forEach((q, idx) => {
                const uniqueId = `${level}_${idx}`;
                if (!answeredIds.has(uniqueId)) {
                    allAvailableQuestions.push({
                        ...q,
                        uniqueId: uniqueId,
                        originalLevel: level
                    });
                }
            });
        }
        
        if (allAvailableQuestions.length === 0) {
            this.state.hiddenLevelUsedQuestions = [];
            for (let level = 1; level <= 10; level++) {
                const rawLevelQuestions = questionBankData[level] || [];
                const seenQ = new Set();
                const levelQuestions = rawLevelQuestions.filter(q => {
                    const key = q.question.trim();
                    if (seenQ.has(key)) return false;
                    seenQ.add(key);
                    return true;
                });
                levelQuestions.forEach((q, idx) => {
                    allAvailableQuestions.push({
                        ...q,
                        uniqueId: `${level}_${idx}`,
                        originalLevel: level
                    });
                });
            }
        }
        
        const shuffled = [...allAvailableQuestions].sort(() => Math.random() - 0.5);
        const questionCount = Math.min(500, shuffled.length);  // 无尽模式改为500题
        const selected = shuffled.slice(0, questionCount);
        
        this.state.levelQuestions = selected.map(q => this.shuffleOptions(q));
        this.saveGameState();
        this.showHiddenLevelStory();
    },

    showHiddenLevelStory: function() {
        const content = document.getElementById('gameContent');
        content.innerHTML = `
            <div class="story-display">
                <h3 style="color: #ff00ff;">无尽模式</h3>
                <p>恭喜你完成了所有10关的挑战！</p>
                <p>黄老师的故事还在继续，而你已经成为煤炭贸易的行家。</p>
                <p>但是，真正的考验还没有结束...</p>
                <p>在无尽模式中，你将面对题库中<span style="color: #ff00ff; font-weight: bold;">全部500道题目</span>的挑战！</p>
                <p style="color: #ff6666; font-weight: bold;">⚠️ 特别注意：无尽模式下答错将受到<span style="color: #ff0000;">2倍惩罚</span>，答对仅获得<span style="color: #00ff00;">50%奖励</span>！</p>
                <p>只有完美通过，才能获得<span style="color: #ff00ff; font-weight: bold;">"煤炭仙人"</span>的终极称号。</p>
                <p style="color: #ff00ff;">准备好了吗？无尽挑战现在开始！</p>
                
                <div style="background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%); border: 2px solid #D4AF37; border-radius: 10px; padding: 15px; margin-top: 20px;">
                    <div style="color: #D4AF37; font-size: 0.9rem;">特别鸣谢</div>
                    <div style="color: #00FFFF; font-size: 1.1rem;">CCIC 中国检验认证集团</div>
                    <div style="color: #888; font-size: 0.8rem;">专业检验认证，助力煤炭贸易高质量发展</div>
                </div>
            </div>
            <div class="button-group">
                <button class="btn btn-primary" onclick="game.showQuestion()" style="background: #6600ff; border-color: #ff00ff;">开始无尽挑战</button>
            </div>
        `;
        document.getElementById('progressContainer').style.display = 'none';
    },

    showGameOver: function() {
        const content = document.getElementById('gameContent');
        content.innerHTML = `
            <div style="text-align: center; padding: 30px;">
                <h2 style="color: #FF4444; margin-bottom: 20px;">游戏结束</h2>
                <p style="color: #e0e0e0; margin-bottom: 20px;">你的决策导致了不可挽回的后果...</p>
                <div class="button-group">
                    <button class="btn btn-primary" onclick="game.restart()">重新开始</button>
                </div>
            </div>
        `;
        document.getElementById('progressContainer').style.display = 'none';
    },

    restart: function() {
        if (confirm('确定要重新开始吗？所有进度将重置。')) {
            this.clearAllData();
            this.showIntro();
        }
    }
};
