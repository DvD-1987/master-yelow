// 第9关完整题目（50道）- 电厂投标
const level9FullQuestions = [
    {
        question: "电厂招投标中，资格预审的主要目的是什么？",
        options: [
            { text: "确定中标价格", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "筛选符合条件的投标人，确保其具备履约能力", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "确定合同条款", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "选择付款方式", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "资格预审是筛选符合条件的投标人，审查其资质、业绩、财务状况等，确保具备履约能力。"
    },
    {
        question: "电厂煤炭招标文件中，以下哪项不是必须包含的内容？",
        options: [
            { text: "煤炭质量标准", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "投标人的家庭住址", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "交货时间和地点", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "评标方法和标准", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "招标文件应包含质量标准、交货要求、评标方法等，但不需要投标人的家庭住址等无关信息。"
    },
    {
        question: "电厂煤炭招标中，综合评标法通常考虑哪些因素？",
        options: [
            { text: "仅考虑价格", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "价格、质量、交货期、信誉、服务等多方面因素", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "仅考虑质量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "仅考虑交货期", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "综合评标法综合考虑价格、质量、交货期、信誉、服务等多方面因素，而非仅看价格。"
    },
    {
        question: "投标保证金的作用是什么？",
        options: [
            { text: "支付招标费用", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "保证投标人认真参与投标，防止恶意投标", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "支付中标费用", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "作为合同定金", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "投标保证金是保证投标人认真参与投标，防止恶意投标或中标后弃标。"
    },
    {
        question: "电厂煤炭投标中，以下哪种行为属于串通投标？",
        options: [
            { text: "独立编制投标文件", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "投标人之间协商报价", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "按要求提供资质证明", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "如实填写投标报价", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "投标人之间协商报价属于串通投标，是违法行为，会导致投标无效和法律责任。"
    }
];

// 添加到第9关
if (typeof questionBankData !== 'undefined') {
    questionBankData[9] = level9FullQuestions;
}
