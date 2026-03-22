// 第1关补充题目（10道新题）- 印尼风土人情
const level1SupplementQuestions = [
    {
        question: "印尼国徽上的神鸟是什么？",
        options: [
            { text: "金翅鸟（Garuda）", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "凤凰", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "雄鹰", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "孔雀", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "印尼国徽上的神鸟是金翅鸟（Garuda），源自印度神话，象征力量和威严。"
    },
    {
        question: "印尼首都雅加达（Jakarta）位于哪个岛屿？",
        options: [
            { text: "苏门答腊岛", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "爪哇岛", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "加里曼丹岛", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "巴厘岛", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "雅加达位于爪哇岛西北部，是印尼的政治、经济、文化中心（旧首都）。"
    },
    {
        question: "在印尼，商务洽谈时以下哪种做法会让合作伙伴感到不舒服？",
        options: [
            { text: "主动问候对方家人", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "不断催促对方尽快做决定", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "称赞印尼的美食文化", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "在名片上用双语印制", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "印尼人做决定节奏较慢，注重共识，催促对方会被视为不尊重，破坏合作关系。"
    },
    {
        question: "印尼印尼语中，表示'您好'或'请问'的词是什么？",
        options: [
            { text: "Selamat", correct: true, effect: {knowledge: 8, trust: 8, risk: -8} },
            { text: "Terima kasih", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "Maaf", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "Sampai jumpa", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "Selamat是印尼语中常用的问候词，Selamat pagi（早上好）、Selamat siang（午安）等。"
    },
    {
        question: "印尼的'哈拉尔'（Halal）认证对商务活动有什么影响？",
        options: [
            { text: "只影响食品行业", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "宴请、礼品、餐饮都应选择哈拉尔认证产品", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "对商务活动没有影响", correct: false, effect: {knowledge: -8, trust: -8, risk: 12} },
            { text: "仅在斋月期间需要注意", correct: false, effect: {knowledge: -5, trust: -5, risk: 8} }
        ],
        explanation: "印尼绝大多数人口是穆斯林，哈拉尔认证非常重要，商务场合的餐饮、礼品都应注意。"
    },
    {
        question: "印尼传统建筑中，苏拉威西岛托拉查族的特色建筑叫什么？",
        options: [
            { text: "乌布德宫", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "Tongkonan（船屋）", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "普兰班南神庙", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "婆罗浮屠", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "Tongkonan是托拉查族的传统船形屋顶建筑，屋顶向上翘起似船，是重要文化遗产。"
    },
    {
        question: "印尼最具代表性的世界文化遗产佛教建筑是哪个？",
        options: [
            { text: "婆罗浮屠（Borobudur）", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "普兰班南神庙", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "乌布德皇宫", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "雅加达老城", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "婆罗浮屠是世界上最大的佛教建筑群，位于爪哇岛中部，是印尼的标志性文化遗产。"
    },
    {
        question: "在印尼，与当地人见面时，以下哪种问候方式最受欢迎？",
        options: [
            { text: "拥抱", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "握手并微微低头（Salam）", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "亲吻面颊", correct: false, effect: {knowledge: -10, trust: -8, risk: 10} },
            { text: "高声打招呼", correct: false, effect: {knowledge: -5, trust: -5, risk: 8} }
        ],
        explanation: "握手并微微低头是印尼常见的正式问候方式，既体现礼貌又符合当地文化。"
    },
    {
        question: "印尼的煤矿企业雇佣外籍劳工时，需要遵守哪项主要规定？",
        options: [
            { text: "无需任何限制", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "外籍劳工需持有工作许可证（KITAS），且比例受限制", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "只有管理层可以用外籍劳工", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "外籍劳工只能做临时工", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "在印尼雇佣外籍劳工需持有KITAS（临时居留许可），且政府对外籍劳工比例有严格限制。"
    },
    {
        question: "印尼的'橡皮时间'（Jam Karet）是指什么文化现象？",
        options: [
            { text: "印尼人非常守时", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "印尼人对时间观念较宽松，迟到被视为普遍现象", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "印尼有特殊的计时方式", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "印尼人用橡皮表计时", correct: false, effect: {knowledge: -10, trust: -8, risk: 10} }
        ],
        explanation: "'橡皮时间'是印尼文化中对时间弹性态度的描述，外国商务人员应做好等待准备，但自己应尽量守时。"
    }
];

// 将补充题目添加到第1关
if (typeof questionBankData !== 'undefined' && questionBankData[1]) {
    questionBankData[1] = questionBankData[1].concat(level1SupplementQuestions);
}
