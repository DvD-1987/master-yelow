// 第2关补充题目（45道）- 煤炭基础知识
const level2ExtraQuestions = [
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
    },
    {
        question: "煤炭的哈氏可磨性指数（HGI）表示什么？",
        options: [
            { text: "煤炭的硬度", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "煤炭被研磨的难易程度", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "煤炭的燃烧速度", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "煤炭的含水量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "哈氏可磨性指数（HGI）表示煤炭被研磨成粉的难易程度，指数越高越容易磨碎。"
    },
    {
        question: "印尼煤炭的典型灰分范围是多少？",
        options: [
            { text: "5%-10%", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "20%-30%", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "40%-50%", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "1%-3%", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "印尼煤炭的典型灰分范围是5%-10%，属于低灰分煤。"
    },
    {
        question: "煤炭的固定碳是指什么？",
        options: [
            { text: "煤炭中碳元素的总含量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "除去水分、灰分和挥发分后的固体可燃物", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "煤炭中的杂质", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "煤炭中的水分", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "固定碳是除去水分、灰分和挥发分后的固体可燃物，是煤炭的主要发热成分。"
    },
    {
        question: "煤炭的收到基低位发热量（Qnet,ar）与高位发热量（Qgr,ar）的主要区别是什么？",
        options: [
            { text: "低位发热量包含水的汽化潜热，高位发热量不包含", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "高位发热量包含水的汽化潜热，低位发热量不包含", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "两者没有区别", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "低位发热量用于动力煤，高位发热量用于炼焦煤", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "高位发热量包含燃烧产物中水蒸气的汽化潜热，低位发热量扣除了这部分热量，更接近实际可用热量。"
    },
    {
        question: "煤炭的粒度对燃烧有什么影响？",
        options: [
            { text: "粒度越大，燃烧越充分", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "粒度越小，比表面积越大，燃烧越充分", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "粒度对燃烧没有影响", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "粒度只影响运输成本", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "煤炭粒度越小，比表面积越大，与空气接触越充分，燃烧越完全。"
    }
];

// 将补充题目添加到第2关
if (typeof questionBankData !== 'undefined' && questionBankData[2]) {
    questionBankData[2] = questionBankData[2].concat(level2ExtraQuestions);
}
