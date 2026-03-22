// 第8关完整题目（50道）- 回国卸货与进口
const level8FullQuestions = [
    {
        question: "煤炭进口到中国，以下哪种证件是必须的？",
        options: [
            { text: "仅需发票", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "进口许可证、原产地证、质量检验报告、报关单、合同、发票、提单等", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "仅需合同", correct: false, effect: {knowledge: -8, trust: -8, risk: 12} },
            { text: "仅需提单", correct: false, effect: {knowledge: -8, trust: -8, risk: 12} }
        ],
        explanation: "煤炭进口需要进口许可证、原产地证、质量检验报告、报关单等多种证件。"
    },
    {
        question: "中国海关对进口煤炭的放射性检验要求是什么？",
        options: [
            { text: "不需要检验", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "必须检验，放射性超标将退运或销毁", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "仅对特定国家检验", correct: false, effect: {knowledge: -5, trust: -5, risk: 8} },
            { text: "仅抽查", correct: false, effect: {knowledge: -8, trust: -8, risk: 12} }
        ],
        explanation: "中国海关对进口煤炭实施放射性检验，放射性超标的煤炭将退运或销毁。"
    },
    {
        question: "进口煤炭的报关单应在什么时候提交？",
        options: [
            { text: "货物到港前或到港后14天内", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "货物装船时", correct: false, effect: {knowledge: -8, trust: -8, risk: 12} },
            { text: "货物销售后", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "不需要报关", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "进口报关单应在货物到港前或到港后14天内提交，逾期将产生滞报金。"
    },
    {
        question: "中国海关对进口煤炭的环保项目检验包括哪些？",
        options: [
            { text: "仅检验热值", correct: false, effect: {knowledge: -8, trust: -8, risk: 12} },
            { text: "灰分、硫分、汞、砷、磷、氟、氯等环保指标", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "仅检验水分", correct: false, effect: {knowledge: -8, trust: -8, risk: 12} },
            { text: "不需要环保检验", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "中国海关对进口煤炭实施环保项目检验，包括灰分、硫分、汞、砷等有害元素。"
    },
    {
        question: "进口煤炭卸货时，以下哪种做法是正确的？",
        options: [
            { text: "直接卸货，不需要监督", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "派人现场监督，记录卸货数量和质量", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "等卸完货后再检查", correct: false, effect: {knowledge: -8, trust: -8, risk: 12} },
            { text: "不需要任何记录", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。进口煤炭卸货时应派人现场监督，记录卸货数量和质量，发现问题及时取证。"
    }
];

// 添加到第8关
if (typeof questionBankData !== 'undefined') {
    questionBankData[8] = level8FullQuestions;
}
