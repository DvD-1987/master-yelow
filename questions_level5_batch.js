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
        explanation: "答案正确。与新客户建立信任应从小额交易开始，逐步增加，建立长期稳定合作关系。"
    },
    {
        question: "装船前，货舱舱盖的水密性检查应该怎么做？",
        options: [
            { text: "目视检查即可", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "进行冲水试验，确保无渗漏", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "不需要检查", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "仅检查外观", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。合同中约定装卸率条款，明确装卸效率要求和延误责任，确保货物顺利装卸。参考：航运惯例。"
    },
    {
        question: "装船前，以下哪种货舱状况可以接受？",
        options: [
            { text: "有锈迹和油漆剥落", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "有残留的上批货物", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "清洁、干燥、无异味、无残留物", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "有油污", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。滞期费(Demurrage)是船东因泊位占用向租船人收取的费用，超出约定装卸时间则产生滞期费。"
    },
    {
        question: "装船前，船舶的吃水标记应该是什么状态？",
        options: [
            { text: "模糊不清也没关系", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "清晰可见，便于准确测量", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "不需要检查", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "被油漆覆盖", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。速遣费(Despatch)是船东因装卸提前完成而奖励给租船人的费用，通常为滞期费的一半。"
    },
    {
        question: "装船前，以下哪项文件必须准备好？",
        options: [
            { text: "船舶国籍证书", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "货舱清洁证书、船舶适载证书", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "船长身份证复印件", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "船员名单", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} }
        ],
        explanation: "答案正确。煤炭作为散货通常按重量计重，最常用的是水尺计重和地磅计重两种方式。"
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
        explanation: "答案正确。水尺计重(Draft Survey)是利用船舶吃水变化计算货物重量，是国际公认的散货计重方法。"
    },
    {
        question: "装船时，发现煤流中有大量石块应该怎么办？",
        options: [
            { text: "继续装船，不影响使用", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "立即停止装船，拍照取证，通知矿方处理", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "自己挑出来", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "视而不见", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。地磅计重使用港口地磅或装卸设备称重，适用于驳船和短途运输，精度较高。"
    },
    {
        question: "装船时，以下哪种天气可以继续作业？",
        options: [
            { text: "暴雨", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "雷电", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "大风（超过7级）", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "晴天微风", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} }
        ],
        explanation: "答案正确。装船数量的确认以提单数量为准，提单是货物所有权的凭证，也是结算依据。"
    },
    {
        question: "装船时，以下哪种情况应该立即停止作业？",
        options: [
            { text: "正常作业", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "输送带故障或发现明火", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "煤流正常", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "船舶轻微晃动", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。提单(B/L)是货物所有权的凭证，也是海上货物运输合同的证明，具有法律效力。"
    },
    {
        question: "装船时，如何防止煤炭自燃？",
        options: [
            { text: "不需要特别措施", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "控制煤堆温度，避免长时间堆积，及时通风", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "浇水降温", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "加盖塑料布", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。海运提单分为记名提单(Straight B/L)、指示提单(Order B/L)和空白提单(Blank B/L)，指示提单最常用可转让。"
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
        explanation: "答案正确。选择谈判时间和地点应考虑对方的状态和立场，争取在对自己有利的环境下谈判。"
    },
    {
        question: "装船完成后，舱盖应该如何处理？",
        options: [
            { text: "敞开透气", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "立即关闭并密封，防止雨水进入", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "半开半闭", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "不需要关", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。清洁提单(Clean B/L)是指货物装船时表面状况良好，不载有不良批注的提单。"
    },
    {
        question: "装船数量的计算通常采用什么方法？",
        options: [
            { text: "仅按皮带秤读数", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "水尺计量（根据装船前后吃水差计算）", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "估算", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "按船舶载重吨", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。不清洁提单(Foul B/L)是指载有货物表面状况不良批注的提单，银行通常不接受不清洁提单。"
    },
    {
        question: "装船完成后，以下哪种文件必须签署？",
        options: [
            { text: "装船备忘录（SOF）", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "船员名单", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "船舶维修记录", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "船长日记", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} }
        ],
        explanation: "答案正确。电放提单(Telex Release)是凭电放指令交付货物，无需正本提单，适合短周期货物。"
    },
    {
        question: "装船完成后，质量样品应该如何处理？",
        options: [
            { text: "丢弃", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "封存备查，保存至贸易结算完成", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "给船方带走", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "随意处理", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。印尼煤炭出口主要使用FOB和CFR条款，CIF条款较少使用，因为买方更倾向于自行安排保险。"
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
        explanation: "答案正确。印尼煤炭出口主要使用5-6万吨的HandyMax或Supramax型散货船，更大船舶需在深水港装货。"
    },
    {
        question: "装船作业中，粉尘控制应该怎么做？",
        options: [
            { text: "不需要控制", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "使用洒水、吸尘等措施控制粉尘", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "加快装船速度", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "让工人忍受", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。煤炭货物在IMSBC Code中属于B类货物，具有自燃风险，需要特别注意通风和监控。"
    },
    {
        question: "装船作业中，以下哪种个人防护装备是必须的？",
        options: [
            { text: "安全帽、防尘口罩、安全鞋", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "普通衣服", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "拖鞋", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "不需要防护", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。IMSBC Code规定煤炭装运需申报其特性，发热值低于5800大卡的煤炭自燃风险相对较低。"
    },
    {
        question: "装船作业中，发现有人落水应该怎么办？",
        options: [
            { text: "继续作业", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "立即停止作业，启动应急预案，组织救援", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "观望", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "自己下水救人", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。煤炭自燃的主要原因是氧化反应，与空气接触面积越大、温度越高，自燃风险越大。"
    },
    {
        question: "装船作业中，以下哪种情况应该立即撤离人员？",
        options: [
            { text: "正常作业", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "发现明火或煤堆温度异常升高", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "煤流正常", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "船舶轻微晃动", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。防止煤炭自燃的关键是控制货舱温度和通风，航行中定期测量货舱温度是标准操作。"
    }
];

// 添加到第5关
if (typeof questionBankData !== 'undefined' && questionBankData[5]) {
    questionBankData[5] = questionBankData[5].concat(level5BatchQuestions);
}
