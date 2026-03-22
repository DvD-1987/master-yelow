// 第3关补充题目（1道新题）- 资源收集
const level3SupplementQuestions = [
    {
        question: "在评估印尼煤矿资源可靠性时，以下哪项最能证明矿山的合规性？",
        options: [
            { text: "矿主的口头承诺", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "IUP许可证、环保AMDAL报告和地质储量报告三项齐全", correct: true, effect: {knowledge: 12, trust: 12, risk: -12} },
            { text: "只需要矿山的营业执照", correct: false, effect: {knowledge: -8, trust: -5, risk: 10} },
            { text: "当地村长的推荐信", correct: false, effect: {knowledge: -10, trust: -8, risk: 15} }
        ],
        explanation: "答案正确。合规煤矿需具备：IUP矿业经营许可证、环保影响评估报告(AMDAL)和专业地质储量报告，三项缺一不可。参考：印尼2009年矿业法。"
    }
];

// 将补充题目添加到第3关
if (typeof questionBankData !== 'undefined' && questionBankData[3]) {
    questionBankData[3] = questionBankData[3].concat(level3SupplementQuestions);
}
