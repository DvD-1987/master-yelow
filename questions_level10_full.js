// 第10关完整题目（50道）- 综合全流程
const level10FullQuestions = [
    {
        question: "煤炭贸易全流程包括哪些主要环节？",
        options: [
            { text: "仅包括采购和销售", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "采购、运输、检验、通关、销售、结算", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "仅包括运输", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "仅包括结算", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "煤炭贸易全流程包括采购、运输、检验、通关、销售、结算等多个环节。"
    },
    {
        question: "煤炭贸易中，以下哪种风险属于系统性风险？",
        options: [
            { text: "单批货物质量问题", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "政策变化、市场价格大幅波动、汇率剧烈变动", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "单船延误", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "单一客户违约", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "系统性风险是影响整个市场的风险，如政策变化、市场价格大幅波动、汇率剧烈变动等。"
    },
    {
        question: "煤炭贸易中，以下哪种风险可以通过保险转移？",
        options: [
            { text: "市场风险", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "运输风险（海运货物保险）", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "政策风险", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "信誉风险", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "运输风险可以通过海运货物保险转移，但市场风险、政策风险等通常无法通过保险转移。"
    },
    {
        question: "煤炭贸易中，以下哪种做法可以对冲价格风险？",
        options: [
            { text: "现货交易", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "期货套期保值、签订长期合同、多元化采购", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "单一来源采购", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "一次性大量采购", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "期货套期保值、签订长期合同、多元化采购可以对冲价格风险。"
    },
    {
        question: "煤炭贸易中，建立长期合作关系的关键是什么？",
        options: [
            { text: "仅关注价格", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "诚信履约、质量稳定、服务到位", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "压低供应商价格", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "频繁更换供应商", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "诚信履约、质量稳定、服务到位是建立长期合作关系的关键。"
    }
];

// 添加到第10关
if (typeof questionBankData !== 'undefined') {
    questionBankData[10] = level10FullQuestions;
}
