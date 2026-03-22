// 第1关补充题目（15道新题，去除与questions.js重复的）- 印尼风土人情
const level1ExtraQuestions = [
    {
        question: "印尼的国花是什么？",
        options: [
            { text: "茉莉花", correct: true, effect: {knowledge: 5, trust: 3, risk: -5} },
            { text: "荷花", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "玫瑰", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "兰花", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "印尼的国花是茉莉花（Melati），象征着纯洁和优雅。"
    },
    {
        question: "印尼人口最多的民族是哪个？",
        options: [
            { text: "马来族", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "爪哇族", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "巽他族", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "马都拉族", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "爪哇族是印尼人口最多的民族，约占全国人口的40%。"
    },
    {
        question: "印尼的货币单位印尼盾（Rupiah）的货币代码是什么？",
        options: [
            { text: "IDR", correct: true, effect: {knowledge: 5, trust: 3, risk: -5} },
            { text: "INR", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "IND", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "IRP", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "印尼盾的货币代码是IDR（Indonesian Rupiah）。"
    },
    {
        question: "在印尼，以下哪种手势是不礼貌的？",
        options: [
            { text: "双手合十致意", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "用食指指人", correct: true, effect: {knowledge: 8, trust: 8, risk: -8} },
            { text: "握手", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "微笑", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "在印尼，用食指指人被认为是不礼貌的，应该用手掌示意。"
    },
    {
        question: "印尼的独立日是哪一天？",
        options: [
            { text: "8月17日", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "7月4日", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "10月1日", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "12月25日", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "印尼于1945年8月17日宣布独立，这一天是印尼的国庆日。"
    },
    {
        question: "印尼的主要宗教是什么？",
        options: [
            { text: "佛教", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "基督教", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "伊斯兰教", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "印度教", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "印尼是世界上人口最多的伊斯兰教国家，约87%的人口信仰伊斯兰教。"
    },
    {
        question: "在印尼商务宴请中，以下哪种食物应该避免？",
        options: [
            { text: "猪肉", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "鸡肉", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "牛肉", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "鱼肉", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "印尼人口大多数是穆斯林，商务宴请应避免猪肉，除非确认对方非穆斯林。"
    },
    {
        question: "印尼的时区是什么？",
        options: [
            { text: "UTC+7", correct: true, effect: {knowledge: 5, trust: 3, risk: -5} },
            { text: "UTC+8", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "UTC+9", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "UTC+6", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "印尼跨越3个时区：西部UTC+7（如雅加达）、中部UTC+8、东部UTC+9。"
    },
    {
        question: "在印尼，斋月期间商务活动会有什么变化？",
        options: [
            { text: "工作时间缩短，白天避免宴请", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "没有变化", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "工作时间延长", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "所有商业活动停止", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "斋月期间，穆斯林白天禁食，工作时间通常缩短，商务活动效率可能降低。"
    },
    {
        question: "印尼最大的煤炭出口港是哪个？",
        options: [
            { text: "雅加达港", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "巴厘巴板港", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "泗水港", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "万隆港", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "巴厘巴板港（Balikpapan）是印尼最大的煤炭出口港之一，位于东加里曼丹。"
    },
    {
        question: "在印尼，以下哪种称呼方式最为恰当？",
        options: [
            { text: "直呼其名", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "使用头衔+姓氏，如'Bapak'（先生）或'Ibu'（女士）", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "使用昵称", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "不需要称呼", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "在印尼，使用尊称如'Bapak'（先生）或'Ibu'（女士）表示尊重，是恰当的称呼方式。"
    },
    {
        question: "印尼的主要气候类型是什么？",
        options: [
            { text: "温带季风气候", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "热带雨林气候", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "地中海气候", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "寒带气候", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "印尼位于赤道附近，属于热带雨林气候，全年高温多雨。"
    },
    {
        question: "在印尼商务场合，名片应该用什么手递接？",
        options: [
            { text: "左手", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "右手或双手", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "左手和右手同时", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不需要递名片", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "在印尼，应该用右手或双手递接名片，左手被认为是不洁的。"
    },
    {
        question: "印尼的煤炭主要是什么类型？",
        options: [
            { text: "无烟煤", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "动力煤（烟煤）", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "焦煤", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "褐煤", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} }
        ],
        explanation: "印尼煤炭主要是动力煤（烟煤），热值一般在3800-5500大卡之间。"
    },
    {
        question: "在印尼，进入清真寺或他人住宅时应该怎么做？",
        options: [
            { text: "穿鞋直接进入", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "脱鞋", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "戴帽子", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不需要特别注意", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "在印尼，进入清真寺或他人住宅时必须脱鞋，这是基本的礼仪。"
    }
];

// 将补充题目添加到第1关
if (typeof questionBankData !== 'undefined' && questionBankData[1]) {
    questionBankData[1] = questionBankData[1].concat(level1ExtraQuestions);
}
