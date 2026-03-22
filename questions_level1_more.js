// 第1关额外补充题目（20道）- 确保第1关达到50道
const level1MoreQuestions = [
    {
        question: "印尼的国旗由哪两种颜色组成？",
        options: [
            { text: "红色和白色", correct: true, effect: {knowledge: 5, trust: 3, risk: -5} },
            { text: "蓝色和白色", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "绿色和白色", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "黄色和白色", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "印尼国旗由上下两条红色和白色横条组成，被称为'红白旗'。"
    },
    {
        question: "印尼的国歌叫什么名字？",
        options: [
            { text: "伟大的印尼", correct: true, effect: {knowledge: 5, trust: 3, risk: -5} },
            { text: "印尼进行曲", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "印尼之歌", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "美丽的印尼", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "印尼国歌名为'伟大的印尼'（Indonesia Raya）。"
    },
    {
        question: "在印尼，以下哪种行为在斋月期间应该避免？",
        options: [
            { text: "白天在公共场合进食", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "晚上工作", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "白天开会", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "穿正装", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "斋月期间，白天在公共场合进食对穆斯林是不尊重的行为。"
    },
    {
        question: "印尼的巴厘岛主要信仰什么宗教？",
        options: [
            { text: "伊斯兰教", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "印度教", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "佛教", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "基督教", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "巴厘岛是印尼唯一主要信仰印度教的地区，被称为'千寺之岛'。"
    },
    {
        question: "印尼的官方语言是什么？",
        options: [
            { text: "爪哇语", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "印尼语（Bahasa Indonesia）", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "马来语", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "英语", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "印尼语（Bahasa Indonesia）是印尼的官方语言，也是东盟的工作语言之一。"
    },
    {
        question: "在印尼商务谈判中，以下哪种做法是正确的？",
        options: [
            { text: "直接拒绝对方的提议", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "委婉表达不同意见，避免直接说'不'", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "大声争论以显示决心", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "不需要尊重对方", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "印尼文化强调和谐，商务谈判中应委婉表达不同意见，避免直接说'不'。"
    },
    {
        question: "印尼的苏门答腊岛以什么闻名？",
        options: [
            { text: "煤炭资源", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "金融中心", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "科技产业", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "汽车工业", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "苏门答腊岛是印尼重要的煤炭产区之一，拥有丰富的煤炭资源。"
    },
    {
        question: "在印尼，以下哪种礼物适合商务场合赠送？",
        options: [
            { text: "猪肉制品", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "公司纪念品或当地特产", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "酒类", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "锋利的刀具", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "在印尼商务场合，适合赠送公司纪念品或当地特产，应避免猪肉、酒类等。"
    },
    {
        question: "印尼的加里曼丹岛分为几个省份？",
        options: [
            { text: "3个", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "5个", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "2个", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "7个", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "印尼部分的加里曼丹岛分为5个省份：东、西、南、北、中加里曼丹省。"
    },
    {
        question: "在印尼，以下哪种颜色具有特殊意义？",
        options: [
            { text: "绿色", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "粉色", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "紫色", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "橙色", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "绿色在印尼与伊斯兰教有密切联系，具有特殊的宗教和文化意义。"
    },
    {
        question: "印尼的雅加达港主要出口什么商品？",
        options: [
            { text: "电子产品", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "煤炭", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "棕榈油、橡胶、咖啡等农产品", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "汽车", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "雅加达港主要出口棕榈油、橡胶、咖啡等农产品，不是主要煤炭出口港。"
    },
    {
        question: "在印尼，以下哪种行为表示尊重？",
        options: [
            { text: "坐着时脚底对着他人", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "微微鞠躬或点头致意", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "大声说话", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "打断他人说话", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "在印尼，微微鞠躬或点头是表示尊重的常见方式。"
    },
    {
        question: "印尼的煤炭主要通过什么方式运输到港口？",
        options: [
            { text: "空运", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "公路和驳船", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "管道", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "人力搬运", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "印尼煤炭主要通过公路运输到河边，再通过驳船运到海港。"
    },
    {
        question: "在印尼商务场合，以下哪种着装是合适的？",
        options: [
            { text: "短裤和T恤", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "正装或商务休闲装", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "无袖上衣", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "拖鞋", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "在印尼商务场合，应穿着正装或商务休闲装，保持得体。"
    },
    {
        question: "印尼的'潘查希拉'是什么？",
        options: [
            { text: "一种传统舞蹈", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "印尼的建国五项原则", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "一种美食", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "一种乐器", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "潘查希拉（Pancasila）是印尼的建国五项原则，是国家的哲学基础。"
    }
];

// 将额外题目添加到第1关
if (typeof questionBankData !== 'undefined' && questionBankData[1]) {
    questionBankData[1] = questionBankData[1].concat(level1MoreQuestions);
}
