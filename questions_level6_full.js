// 第6关完整题目（50道）- 煤炭检验
const level6FullQuestions = [
    {
        question: "在皮带输送机上取样，取样点应选择在什么位置？",
        options: [
            { text: "皮带任意位置都可以", correct: false, effect: {knowledge: -8, trust: -8, risk: 12} },
            { text: "皮带输送机落料处或皮带横截面中部，避免边缘和接头", correct: true, effect: {knowledge: 15, trust: 15, risk: -15} },
            { text: "皮带边缘位置方便取样", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "皮带接头处", correct: false, effect: {knowledge: -12, trust: -12, risk: 18} }
        ],
        explanation: "皮带边缘煤流不均匀，接头处可能有杂质，正确位置是落料处或皮带横截面中部。"
    },
    {
        question: "船舶舱内取样，以下哪种操作是错误的？",
        options: [
            { text: "按网格法布点，每舱至少3个点", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "取样深度达到煤堆底部", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "只在舱口表面取样，不深入煤堆内部", correct: true, effect: {knowledge: 15, trust: 15, risk: -15} },
            { text: "记录取样深度和位置", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "只在表面取样是严重错误！舱内煤堆存在粒度偏析，表面多为细粉，必须深入煤堆内部取样。"
    },
    {
        question: "使用取样铲取样时，铲内应如何装满？",
        options: [
            { text: "装满即可，形状无所谓", correct: false, effect: {knowledge: -8, trust: -8, risk: 12} },
            { text: "铲内煤样应呈自然堆积状态，不压实也不留空隙", correct: true, effect: {knowledge: 15, trust: 15, risk: -15} },
            { text: "用力压实以多取一些", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "只取铲底一层", correct: false, effect: {knowledge: -12, trust: -12, risk: 18} }
        ],
        explanation: "压实会改变煤样密度和粒度分布，留空隙则样品不足。正确做法是自然堆积。"
    },
    {
        question: "煤堆取样时，以下哪种天气条件最不宜取样？",
        options: [
            { text: "晴天微风", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "大雨天气", correct: true, effect: {knowledge: 15, trust: 15, risk: -15} },
            { text: "阴天", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "轻微雾霾", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "大雨会改变煤的水分含量，影响检验结果准确性，是最不宜取样的天气。"
    },
    {
        question: "制备煤样时，以下哪种操作是正确的？",
        options: [
            { text: "直接使用原煤样，不需要制备", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "破碎、混合、缩分，确保样品代表性", correct: true, effect: {knowledge: 15, trust: 15, risk: -15} },
            { text: "只取大颗粒煤样", correct: false, effect: {knowledge: -12, trust: -12, risk: 18} },
            { text: "随意丢弃部分煤样", correct: false, effect: {knowledge: -15, trust: -15, risk: 20} }
        ],
        explanation: "煤样制备必须经过破碎、混合、缩分等步骤，确保样品具有代表性。"
    }
];

// 添加到第6关
if (typeof questionBankData !== 'undefined') {
    questionBankData[6] = level6FullQuestions;
}
