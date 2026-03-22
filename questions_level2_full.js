// 第2关完整题目（45道补充）- 煤炭基础知识
const level2FullQuestions = [
    {
        question: "煤炭的发热量单位通常用什么表示？",
        options: [
            { text: "千卡/千克（kcal/kg）或大卡", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "千瓦（kW）", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "立方米（m³）", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "吨（t）", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "煤炭的发热量单位通常用千卡/千克（kcal/kg）或大卡表示。"
    },
    {
        question: "煤炭的挥发分是指什么？",
        options: [
            { text: "煤炭中水分的含量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "煤炭在高温下分解产生的气体和液体产物", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "煤炭燃烧后剩余的灰分", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "煤炭中的硫含量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "挥发分是煤炭在高温下分解产生的气体和液体产物。"
    },
    {
        question: "煤炭的灰熔点高低对锅炉运行有什么影响？",
        options: [
            { text: "灰熔点越高越好，不易结渣", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "灰熔点越低越好，燃烧更充分", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "灰熔点对锅炉运行没有影响", correct: false, effect: {knowledge: -10, trust: -8, risk: 10} },
            { text: "灰熔点只影响煤炭价格", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "灰熔点越高，煤灰越不容易结渣，有利于锅炉安全稳定运行。"
    },
    {
        question: "煤炭的全水分包括哪些部分？",
        options: [
            { text: "仅包括内在水分", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "外在水分和内在水分之和", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "仅包括外在水分", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "结晶水", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "全水分是外在水分（表面水分）和内在水分（毛细孔中的水分）之和。"
    },
    {
        question: "煤炭的硫分对环境的主要影响是什么？",
        options: [
            { text: "增加煤炭热值", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "燃烧产生二氧化硫，造成酸雨和大气污染", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "没有影响", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "降低燃烧温度", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。煤炭中的硫燃烧产生二氧化硫，是酸雨的主要成因之一，对环境和健康都有危害。 煤炭中的硫燃烧后产生二氧化硫（SO₂），是酸雨的主要成因之一。"
    }
];

// 添加到第2关
if (typeof questionBankData !== 'undefined' && questionBankData[2]) {
    questionBankData[2] = questionBankData[2].concat(level2FullQuestions);
}
