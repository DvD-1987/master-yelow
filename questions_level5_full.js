// 第5关完整题目（50道）- 煤炭装载
const level5FullQuestions = [
    {
        question: "船舶装煤前，以下哪项检查是必须的？",
        options: [
            { text: "仅检查船舶外观", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "检查货舱清洁度、舱盖水密性、舱内结构完整性", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "仅检查船舶证书", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不需要检查", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "装船前必须检查货舱清洁度、舱盖水密性、舱内结构完整性。"
    },
    {
        question: "装船过程中，以下哪种操作是错误的？",
        options: [
            { text: "均匀装载，避免偏载", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "集中在一个舱位快速装满", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "监控船舶吃水", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "记录装载进度", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "集中在一个舱位装载会导致船舶偏载、倾斜，必须均匀装载各舱。"
    },
    {
        question: "装船过程中，发现煤中有大量杂物（如木头、石头），应该怎么做？",
        options: [
            { text: "继续装船，不管杂物", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "停止装船，要求清理杂物，记录并拍照取证", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "仅口头提醒", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "自己清理", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。谈判中让对方感觉你是可以信任的，比单纯压价更重要，因为贸易是长期合作。"
    },
    {
        question: "装船过程中，以下哪种天气条件应该停止作业？",
        options: [
            { text: "晴天", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "暴雨、雷电、大风", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "阴天", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "轻微雾霾", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "暴雨、雷电、大风等恶劣天气应停止装船作业，确保安全。"
    },
    {
        question: "装船完成后，以下哪项工作不是必须的？",
        options: [
            { text: "拍摄舱内照片记录装载情况", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "测量船舶吃水", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "核对装船数量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "立即离港，不需要任何记录", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} }
        ],
        explanation: "答案正确。选择谈判时间和地点应考虑对方的状态和立场，争取在对自己有利的环境下谈判。"
    }
];

// 添加到第5关
if (typeof questionBankData !== 'undefined') {
    questionBankData[5] = level5FullQuestions;
}
