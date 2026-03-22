// 第7关完整题目（50道）- 离港通关
const level7FullQuestions = [
    {
        question: "印尼煤炭出口时，以下哪种证件是必须的？",
        options: [
            { text: "仅需要发票", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "出口许可证（ET）、原产地证、质量检验报告、报关单等", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "仅需合同", correct: false, effect: {knowledge: -8, trust: -8, risk: 12} },
            { text: "仅需装箱单", correct: false, effect: {knowledge: -8, trust: -8, risk: 12} }
        ],
        explanation: "印尼煤炭出口需要出口许可证（ET）、原产地证、质量检验报告、报关单等多种证件。"
    },
    {
        question: "印尼海关对煤炭出口征收的出口关税是如何计算的？",
        options: [
            { text: "固定税率", correct: false, effect: {knowledge: -5, trust: -5, risk: 8} },
            { text: "根据煤炭基准价格（HBA）和实际出口价格，采用累进税率", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "按重量征收固定费用", correct: false, effect: {knowledge: -8, trust: -8, risk: 12} },
            { text: "不征收出口关税", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "印尼煤炭出口关税采用累进税率，根据煤炭基准价格（HBA）和实际出口价格计算。"
    },
    {
        question: "煤炭出口报关时，以下哪种申报方式是错误的？",
        options: [
            { text: "如实申报煤种、数量、价值", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "低报价格以少缴税款", correct: true, effect: {knowledge: 15, trust: 15, risk: -15} },
            { text: "提供真实的质量检验报告", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "按海关要求提供完整单证", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "低报价格是严重的违法行为，会导致海关处罚、滞港、甚至刑事责任。"
    },
    {
        question: "印尼海关对出口煤炭的质量检验通常由谁执行？",
        options: [
            { text: "出口商自行检验", correct: false, effect: {knowledge: -8, trust: -8, risk: 12} },
            { text: "政府指定的检验机构或认可的第三方检验机构", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "进口商指定的机构", correct: false, effect: {knowledge: -5, trust: -5, risk: 8} },
            { text: "不需要检验", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "印尼海关要求出口煤炭由政府指定的检验机构或认可的第三方检验机构进行检验。"
    },
    {
        question: "出口煤炭的提单（B/L）有什么重要作用？",
        options: [
            { text: "仅作为运输凭证", correct: false, effect: {knowledge: -5, trust: -5, risk: 8} },
            { text: "是货物所有权凭证、运输合同证明和提货凭证", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "仅用于报关", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "没有实际作用", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "提单是货物所有权凭证、运输合同证明和提货凭证，是重要的贸易单据。"
    }
];

// 添加到第7关
if (typeof questionBankData !== 'undefined') {
    questionBankData[7] = level7FullQuestions;
}
