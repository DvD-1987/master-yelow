// 第4关补充题目（6道新题）- 贸易谈判
const level4SupplementQuestions = [
    {
        question: "在国际煤炭贸易合同中，'不可抗力'（Force Majeure）条款通常包括哪些情形？",
        options: [
            { text: "仅包括战争", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "自然灾害、战争、政府禁令、罢工等无法预见和控制的事件", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "只包括买方认为的情形", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "市场价格波动也属于不可抗力", correct: false, effect: {knowledge: -10, trust: -8, risk: 10} }
        ],
        explanation: "不可抗力通常包括自然灾害、战争、政府禁令、罢工等当事人无法预见和控制的客观事件，价格波动不在其列。"
    },
    {
        question: "煤炭长期供货合同中，'照付不议'（Take or Pay）条款意味着什么？",
        options: [
            { text: "买方无论是否提货都必须支付约定数量的货款", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "卖方必须按约定价格供货，不得涨价", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "双方可以随时修改数量", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "价格随市场波动调整", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "Take or Pay（照付不议）是指买方无论是否实际提取货物，都必须按约定数量支付款项，保障卖方的基本利益。"
    },
    {
        question: "在煤炭采购谈判中，以下哪种策略有助于获得更有利的价格？",
        options: [
            { text: "只找一家供应商谈判", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "同时与多家供应商谈判，利用竞争压低价格", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "提前告知预算上限", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "直接接受第一次报价", correct: false, effect: {knowledge: -10, trust: -8, risk: 10} }
        ],
        explanation: "同时与多家供应商谈判，利用竞争关系是获取有利价格的有效策略。"
    },
    {
        question: "国际贸易合同中，争议解决条款通常选择哪种方式最为常见？",
        options: [
            { text: "仅通过外交途径解决", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "国际商会（ICC）仲裁或在新加坡、香港等地仲裁", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "只能通过印尼法院解决", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "口头协商解决，无需法律程序", correct: false, effect: {knowledge: -10, trust: -8, risk: 10} }
        ],
        explanation: "国际煤炭贸易争议通常选择中立第三国的国际仲裁机构解决，如ICC仲裁、新加坡SIAC等。"
    },
    {
        question: "煤炭贸易中，'溢短装条款'（More or Less Clause）通常允许的偏差范围是多少？",
        options: [
            { text: "±1%", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "±5%至±10%", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "±20%以上", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "不允许偏差", correct: false, effect: {knowledge: -10, trust: -8, risk: 10} }
        ],
        explanation: "散装货物受装载条件限制，通常允许±5%至±10%的数量偏差，在此范围内均按实际量计价。"
    },
    {
        question: "在印中煤炭贸易谈判中，以下哪种合同条款能有效保护买方利益？",
        options: [
            { text: "仅约定价格", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "约定严格的质量指标、扣罚条款及第三方检验权", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "完全信任卖方自检结果", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "只约定交货期", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "保护买方的关键在于：明确质量指标、约定偏差扣罚机制、保留委托第三方检验的权利。"
    }
];

// 将补充题目添加到第4关
if (typeof questionBankData !== 'undefined' && questionBankData[4]) {
    questionBankData[4] = questionBankData[4].concat(level4SupplementQuestions);
}
