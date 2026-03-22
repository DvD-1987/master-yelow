// 第4关完整题目（50道）- 贸易谈判与合同
const level4FullQuestions = [
    {
        question: "国际贸易合同中，FOB条款的含义是什么？",
        options: [
            { text: "卖方负责将货物运到买方港口", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "卖方在装运港将货物装上船后，风险和费用转移给买方", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "卖方负责所有运输费用", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "买方在卖方工厂提货", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "FOB（Free On Board）装运港船上交货，卖方负责将货物装上船，之后风险和费用转移给买方。"
    },
    {
        question: "国际贸易合同中，CIF条款的含义是什么？",
        options: [
            { text: "卖方仅负责装船", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "卖方负责成本、保险费和运费至目的港", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "买方负责所有费用", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "卖方不负责保险", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "CIF（Cost Insurance and Freight）成本加保险费加运费，卖方负责运费和保险至目的港。"
    },
    {
        question: "煤炭贸易合同中，价格条款通常采用什么方式？",
        options: [
            { text: "固定价格", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "基准价格+浮动机制，或指数挂钩", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "随意定价", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "仅按重量计价", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "煤炭价格波动大，通常采用基准价格+浮动机制，或与指数（如API、纽卡斯尔指数）挂钩。"
    },
    {
        question: "煤炭贸易中，信用证（L/C）付款方式的主要风险是什么？",
        options: [
            { text: "买方风险最大", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "单证不符可能导致拒付", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "没有风险", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "卖方风险最大", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "信用证是银行信用，但单证必须严格符合信用证条款，否则可能被拒付。"
    },
    {
        question: "煤炭贸易合同中，质量条款通常如何约定？",
        options: [
            { text: "不约定质量标准", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "约定热值、灰分、硫分、水分等指标及允许误差范围", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "仅约定价格", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "口头约定即可", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "质量条款必须明确约定热值、灰分、硫分、水分等指标及允许误差范围，避免纠纷。"
    }
];

// 添加到第4关
if (typeof questionBankData !== 'undefined') {
    questionBankData[4] = level4FullQuestions;
}
