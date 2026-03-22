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
        explanation: "答案正确。谈判破裂后仍应保持专业态度，保持沟通渠道畅通，为未来合作留有余地。"
    },
    {
        question: "煤炭长期供货合同中，'照付不议'（Take or Pay）条款意味着什么？",
        options: [
            { text: "买方无论是否提货都必须支付约定数量的货款", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "卖方必须按约定价格供货，不得涨价", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "双方可以随时修改数量", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "价格随市场波动调整", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。首次报价应给自己留出谈判空间，同时要价不能太离谱，否则可能被对方认为没有诚意。"
    },
    {
        question: "在煤炭采购谈判中，以下哪种策略有助于获得更有利的价格？",
        options: [
            { text: "只找一家供应商谈判", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "同时与多家供应商谈判，利用竞争压低价格", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "提前告知预算上限", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "直接接受第一次报价", correct: false, effect: {knowledge: -10, trust: -8, risk: 10} }
        ],
        explanation: "答案正确。接受对方报价前应确认所有条款都已达成一致，避免遗漏重要细节导致后续纠纷。"
    },
    {
        question: "国际贸易合同中，争议解决条款通常选择哪种方式最为常见？",
        options: [
            { text: "仅通过外交途径解决", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "国际商会（ICC）仲裁或在新加坡、香港等地仲裁", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "只能通过印尼法院解决", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "口头协商解决，无需法律程序", correct: false, effect: {knowledge: -10, trust: -8, risk: 10} }
        ],
        explanation: "答案正确。好的谈判结果是双方都感觉得到了合理利益，而不是一方完全让步。"
    },
    {
        question: "煤炭贸易中，'溢短装条款'（More or Less Clause）通常允许的偏差范围是多少？",
        options: [
            { text: "±1%", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "±5%至±10%", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "±20%以上", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "不允许偏差", correct: false, effect: {knowledge: -10, trust: -8, risk: 10} }
        ],
        explanation: "答案正确。谈判目标应设定为可实现的范围，而不是单一不可变的数字，灵活应对才能达成协议。"
    },
    {
        question: "在印中煤炭贸易谈判中，以下哪种合同条款能有效保护买方利益？",
        options: [
            { text: "仅约定价格", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "约定严格的质量指标、扣罚条款及第三方检验权", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "完全信任卖方自检结果", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "只约定交货期", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。谈判准备应了解市场走势、对方背景、替代方案等，信息充分才能做出正确判断。"
    }
];

// 将补充题目添加到第4关
if (typeof questionBankData !== 'undefined' && questionBankData[4]) {
    questionBankData[4] = questionBankData[4].concat(level4SupplementQuestions);
}
