// 第5关补充题目（45道）- 煤炭装载
const level5BatchQuestions = [
    // 装船前准备（10道）
    {
        question: "装船前，船舶货舱的舱底污水井应该是什么状态？",
        options: [
            { text: "有少量积水没关系", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "清洁干燥，无积水", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "不需要检查", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "有积水可以吸收水分", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "舱底污水井必须清洁干燥，无积水，否则会导致煤炭受潮，影响质量。"
    },
    {
        question: "装船前，货舱舱盖的水密性检查应该怎么做？",
        options: [
            { text: "目视检查即可", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "进行冲水试验，确保无渗漏", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "不需要检查", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "仅检查外观", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "舱盖水密性应进行冲水试验，确保无渗漏，防止雨水进入货舱影响煤炭质量。"
    },
    {
        question: "装船前，以下哪种货舱状况可以接受？",
        options: [
            { text: "有锈迹和油漆剥落", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "有残留的上批货物", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "清洁、干燥、无异味、无残留物", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "有油污", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "货舱必须清洁、干燥、无异味、无残留物，才能装煤，避免污染煤炭。"
    },
    {
        question: "装船前，船舶的吃水标记应该是什么状态？",
        options: [
            { text: "模糊不清也没关系", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "清晰可见，便于准确测量", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "不需要检查", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "被油漆覆盖", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "吃水标记必须清晰可见，便于准确测量装船前后的吃水，计算装煤数量。"
    },
    {
        question: "装船前，以下哪项文件必须准备好？",
        options: [
            { text: "船舶国籍证书", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "货舱清洁证书、船舶适载证书", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "船长身份证复印件", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "船员名单", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} }
        ],
        explanation: "货舱清洁证书、船舶适载证书是装船前必须准备好的文件，证明船舶适载。"
    },
    
    // 装船作业（15道）
    {
        question: "装船时，以下哪种操作是正确的？",
        options: [
            { text: "集中在一个舱位装满后再装其他舱", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "轮流在各舱均匀装载，保持船舶平衡", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "随意装载", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "先装满船头", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "必须轮流在各舱均匀装载，保持船舶平衡，避免偏载导致船舶倾斜或倾覆。"
    },
    {
        question: "装船时，发现煤流中有大量石块应该怎么办？",
        options: [
            { text: "继续装船，不影响使用", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "立即停止装船，拍照取证，通知矿方处理", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "自己挑出来", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "视而不见", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "发现大量石块必须立即停止装船，拍照取证，通知矿方处理，否则会影响煤炭质量。"
    },
    {
        question: "装船时，以下哪种天气可以继续作业？",
        options: [
            { text: "暴雨", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "雷电", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "大风（超过7级）", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "晴天微风", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} }
        ],
        explanation: "晴天微风可以继续作业，暴雨、雷电、大风等恶劣天气应停止装船。"
    },
    {
        question: "装船时，以下哪种情况应该立即停止作业？",
        options: [
            { text: "正常作业", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "输送带故障或发现明火", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "煤流正常", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "船舶轻微晃动", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "输送带故障或发现明火等安全隐患时，必须立即停止作业，确保安全。"
    },
    {
        question: "装船时，如何防止煤炭自燃？",
        options: [
            { text: "不需要特别措施", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "控制煤堆温度，避免长时间堆积，及时通风", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "浇水降温", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "加盖塑料布", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "应控制煤堆温度，避免长时间堆积，及时通风，防止煤炭自燃。浇水可能加剧氧化。"
    },
    
    // 装船后工作（10道）
    {
        question: "装船完成后，以下哪项工作不是必须的？",
        options: [
            { text: "拍摄舱内照片", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "测量船舶吃水", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "核对装船数量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "立即离港，不做任何记录", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} }
        ],
        explanation: "装船完成后必须拍照、测吃水、核对数量，不能立即离港不做任何记录。"
    },
    {
        question: "装船完成后，舱盖应该如何处理？",
        options: [
            { text: "敞开透气", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "立即关闭并密封，防止雨水进入", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "半开半闭", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "不需要关", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "舱盖必须立即关闭并密封，防止雨水进入货舱影响煤炭质量。"
    },
    {
        question: "装船数量的计算通常采用什么方法？",
        options: [
            { text: "仅按皮带秤读数", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "水尺计量（根据装船前后吃水差计算）", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "估算", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "按船舶载重吨", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "装船数量通常采用水尺计量，根据装船前后吃水差计算，是最准确的方法。"
    },
    {
        question: "装船完成后，以下哪种文件必须签署？",
        options: [
            { text: "装船备忘录（SOF）", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "船员名单", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "船舶维修记录", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "船长日记", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} }
        ],
        explanation: "装船备忘录（Statement of Facts, SOF）记录装船时间、数量、状况等，是必须签署的文件。"
    },
    {
        question: "装船完成后，质量样品应该如何处理？",
        options: [
            { text: "丢弃", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "封存备查，保存至贸易结算完成", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "给船方带走", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "随意处理", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "质量样品应封存备查，保存至贸易结算完成，以备质量争议时复检。"
    },
    
    // 安全与环保（10道）
    {
        question: "装船作业中，以下哪种行为是禁止的？",
        options: [
            { text: "佩戴安全帽", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "在作业区吸烟或使用明火", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "穿工作服", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "遵守指挥", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "装船作业区严禁吸烟或使用明火，因为煤炭粉尘易燃易爆，极易引发火灾或爆炸。"
    },
    {
        question: "装船作业中，粉尘控制应该怎么做？",
        options: [
            { text: "不需要控制", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "使用洒水、吸尘等措施控制粉尘", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "加快装船速度", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "让工人忍受", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "应使用洒水、吸尘等措施控制粉尘，保护工人健康和环境，防止粉尘爆炸。"
    },
    {
        question: "装船作业中，以下哪种个人防护装备是必须的？",
        options: [
            { text: "安全帽、防尘口罩、安全鞋", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "普通衣服", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "拖鞋", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "不需要防护", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "安全帽、防尘口罩、安全鞋是装船作业必须的个人防护装备，保护工人安全。"
    },
    {
        question: "装船作业中，发现有人落水应该怎么办？",
        options: [
            { text: "继续作业", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "立即停止作业，启动应急预案，组织救援", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "观望", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "自己下水救人", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "发现有人落水必须立即停止作业，启动应急预案，组织专业救援，不能盲目下水。"
    },
    {
        question: "装船作业中，以下哪种情况应该立即撤离人员？",
        options: [
            { text: "正常作业", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "发现明火或煤堆温度异常升高", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "煤流正常", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "船舶轻微晃动", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "发现明火或煤堆温度异常升高，可能发生自燃或爆炸，必须立即撤离人员。"
    }
];

// 添加到第5关
if (typeof questionBankData !== 'undefined' && questionBankData[5]) {
    questionBankData[5] = questionBankData[5].concat(level5BatchQuestions);
}
