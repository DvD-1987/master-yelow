// 第6关补充题目（45道）- 煤炭检验
const level6BatchQuestions = [
    // 取样方法（15道）
    {
        question: "在煤堆上取样，取样点应如何布置？",
        options: [
            { text: "只在煤堆顶部取样", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "按网格法均匀布置，包括顶部、中部和底部", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "随意取样", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "只在煤堆边缘取样", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。煤堆取样应按网格法均匀布置取样点，包括顶部、中部和底部，确保样品代表性。参考：GB 475。"
    },
    {
        question: "船舶舱内取样，每个舱至少应取几个点？",
        options: [
            { text: "1个点", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "3个点", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "不需要取样", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "10个点", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。船舶舱内取样，每个舱至少应取3个点，按上、中、下分布，确保样品代表性。参考：ISO 18283。"
    },
    {
        question: "皮带输送机上取样，应在什么位置取样？",
        options: [
            { text: "皮带任意位置", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "皮带落料处或横截面中部", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "皮带边缘", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "皮带接头处", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。皮带取样应在落料处或横截面中部取样，避免边缘和接头，确保样品代表性。参考：GB/T 19494。"
    },
    {
        question: "取样时，以下哪种天气条件最适宜？",
        options: [
            { text: "大风天气", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "晴天微风", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "暴雨天气", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "雾霾天气", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。晴天微风是最适宜的取样天气，避免大风导致样品损失或暴雨改变煤的水分。"
    },
    {
        question: "取样铲的容量应满足什么要求？",
        options: [
            { text: "越小越好", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "能容纳至少5kg样品", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "不需要特定容量", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "越大越好", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。取样铲应能容纳至少5kg样品，确保取样量满足检验需要，符合标准要求。"
    },
    
    // 样品制备（10道）
    {
        question: "煤样制备的第一步是什么？",
        options: [
            { text: "直接化验", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "破碎", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "烘干", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "称重", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。煤样制备的第一步是破碎，将大块煤破碎到规定粒度(通常<3mm)，便于后续混合和缩分。"
    },
    {
        question: "样品缩分的目的是什么？",
        options: [
            { text: "减少样品数量，同时保持代表性", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "去除杂质", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "增加样品量", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "改变煤的性质", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。缩分是在保持样品代表性的前提下，减少样品数量，使样品量达到检验需要的水平。"
    },
    {
        question: "制备好的分析煤样应保存在什么容器中？",
        options: [
            { text: "纸袋", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "密封的塑料或玻璃容器", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "敞口容器", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "布袋", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。分析煤样应保存在密封的塑料或玻璃容器中，防止水分变化和氧化污染。"
    },
    {
        question: "样品制备过程中，以下哪种做法是错误的？",
        options: [
            { text: "按标准程序破碎、混合、缩分", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "随意丢弃部分样品", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "使用标准筛子筛分", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "充分混合", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。随意丢弃部分样品会破坏样品的代表性，必须按标准程序进行缩分，确保样品代表性。"
    },
    {
        question: "制备好的煤样应在多长时间内进行化验？",
        options: [
            { text: "立即化验", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "一般应在制备后24小时内进行", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "一个月后", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "没有时间限制", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。制备好的煤样一般应在24小时内进行化验，防止煤样氧化影响发热量等指标。"
    },
    
    // 化验项目（10道）
    {
        question: "煤炭工业分析包括哪四项指标？",
        options: [
            { text: "热值、灰分、硫分、水分", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "水分、灰分、挥发分、固定碳", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "热值、密度、硬度、粒度", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "硫分、磷分、氯分、氟分", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。工业分析包括水分(Mt)、灰分(Ash)、挥发分(Vd)、固定碳(FC)四项指标，是煤炭基本性质分析。"
    },
    {
        question: "发热量测定通常采用什么方法？",
        options: [
            { text: "目测法", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "氧弹量热法", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "称重法", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "筛分法", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。发热量测定采用氧弹量热法，在氧弹中燃烧煤样，测量释放的热量。参考：GB/T 213。"
    },
    {
        question: "灰分测定中，煤样应在什么温度下灼烧？",
        options: [
            { text: "500℃", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "815±10℃", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "1000℃", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "室温", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。灰分测定中，煤样应在815±10℃下灼烧至恒重，测定残留物质量。参考：GB/T 212。"
    },
    {
        question: "挥发分测定中，煤样应在什么条件下加热？",
        options: [
            { text: "开放环境，900℃", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "隔绝空气，900±10℃加热7分钟", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "开放环境，500℃", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "隔绝空气，500℃", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。挥发分测定应在隔绝空气条件下，900±10℃加热7分钟，测定挥发物质量损失。参考：GB/T 212。"
    },
    {
        question: "全水分测定中，煤样应在什么温度下干燥？",
        options: [
            { text: "105-110℃", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "815℃", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "50℃", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "200℃", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。全水分测定应在105-110℃下干燥至恒重，测定水分损失量。参考：GB/T 211。"
    },
    
    // 误差与质量控制（10道）
    {
        question: "煤炭检验中，重复性限和再现性限的区别是什么？",
        options: [
            { text: "没有区别", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "重复性限是同一实验室多次测定的允许差，再现性限是不同实验室测定的允许差", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "重复性限更大", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "再现性限更小", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。重复性限是同一实验室多次测定的允许差，再现性限是不同实验室测定的允许差，再现性限通常更大。参考：煤炭检验标准。"
    },
    {
        question: "化验结果超差时，应该怎么做？",
        options: [
            { text: "直接采用平均值", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "查找原因，重新化验", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "随意选择一个结果", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "隐瞒不报", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。化验结果超差时，应查找原因(仪器、试剂、操作等)，重新化验，不能随意采用或隐瞒。"
    },
    {
        question: "煤炭检验中，以下哪种情况会导致系统误差？",
        options: [
            { text: "偶然的温度波动", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "天平未校准", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "读数时的视差", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "样品不均匀", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。天平未校准会导致系统误差，使所有测定结果都偏高或偏低，需定期校准仪器。"
    },
    {
        question: "质量控制中，标准煤样的作用是什么？",
        options: [
            { text: "作为商品出售", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "检验化验方法的准确性和精密度", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "装饰实验室", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "没有作用", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。标准煤样用于检验化验方法的准确性和精密度，是质量控制的重要手段。参考：GB/T 19494.3。"
    },
    {
        question: "煤炭检验报告应包含哪些内容？",
        options: [
            { text: "仅包含结果数值", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "样品信息、检验项目、检验结果、检验依据、检验日期、检验人员", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "仅包含检验日期", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "仅包含检验人员", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。检验报告应包含样品信息、检验项目、检验结果、检验依据、检验日期、检验人员等完整信息，具有法律效力。"
    }
];

// 添加到第6关
if (typeof questionBankData !== 'undefined' && questionBankData[6]) {
    questionBankData[6] = questionBankData[6].concat(level6BatchQuestions);
}
