// 第7关补充题目（45道）- 离港通关
const level7BatchQuestions = [
    // 出口许可证（10道）
    {
        question: "印尼煤炭出口许可证（ET）的有效期通常是多久？",
        options: [
            { text: "永久有效", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "1年", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "5年", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不需要更新", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "印尼煤炭出口许可证（ET）通常有效期为1年，需要每年更新。"
    },
    {
        question: "申请印尼煤炭出口许可证需要满足什么条件？",
        options: [
            { text: "只需要有煤矿", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "拥有有效的IUP矿业经营许可证、缴纳相关税费、符合环保要求", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "只需要缴纳税费", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不需要任何条件", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "申请出口许可证需要拥有有效的IUP、缴纳相关税费、符合环保要求等条件。"
    },
    {
        question: "印尼煤炭出口许可证由哪个部门颁发？",
        options: [
            { text: "财政部", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "能源和矿产资源部", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "交通部", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "商务部", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "印尼煤炭出口许可证由能源和矿产资源部（ESDM）颁发。"
    },
    {
        question: "没有出口许可证（ET）出口煤炭会有什么后果？",
        options: [
            { text: "没有后果", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "货物被扣留、罚款、甚至刑事责任", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "只需要补交税费", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "只需要道歉", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "无证出口煤炭属于违法行为，会导致货物被扣留、高额罚款、甚至刑事责任。"
    },
    {
        question: "出口许可证上的数量可以超出实际出口数量吗？",
        options: [
            { text: "可以，越多越好", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "不可以，实际出口数量不能超过许可证数量", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "没有关系", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "可以超出50%", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "实际出口数量不能超过许可证数量，否则属于超量出口，是违法行为。"
    },
    
    // 海关报关（15道）
    {
        question: "印尼海关报关单（PEB）应在什么时候提交？",
        options: [
            { text: "货物装船后", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "货物装船前或装船时", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "货物到达目的港后", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "不需要提交", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "印尼海关报关单（PEB）应在货物装船前或装船时提交，以便海关监管。"
    },
    {
        question: "报关单上的商品编码（HS Code）有什么作用？",
        options: [
            { text: "没有作用", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "确定关税税率、监管条件、统计类别", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "仅用于统计", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "仅用于识别商品", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "HS Code用于确定关税税率、监管条件、统计类别，是报关的重要信息。"
    },
    {
        question: "煤炭的HS Code通常是什么？",
        options: [
            { text: "2701", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "9999", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "1234", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "0000", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "煤炭的HS Code通常是2701，用于报关和确定税率。"
    },
    {
        question: "报关时低报价格会有什么后果？",
        options: [
            { text: "没有后果", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "海关处罚、补税、罚款、甚至刑事责任", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "只需要道歉", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "只需要补税", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "低报价格是走私行为，会导致海关处罚、补税、罚款、甚至刑事责任。"
    },
    {
        question: "海关查验时，以下哪种做法是正确的？",
        options: [
            { text: "拒绝查验", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "配合查验，提供必要协助", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "隐瞒货物", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "逃跑", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "海关有权查验货物，应配合查验，提供必要协助，拒绝查验会导致严重后果。"
    },
    {
        question: "报关单上的FOB价格应包括哪些费用？",
        options: [
            { text: "仅包括货物成本", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "货物成本、装船前运费、装船费用", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "包括海运费", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "包括保险费", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "FOB价格包括货物成本、装船前运费、装船费用，不包括海运费和保险费。"
    },
    {
        question: "海关对出口煤炭的估价依据是什么？",
        options: [
            { text: "卖方随意报价", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "实际成交价格、基准价格（HBA）等", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "买方报价", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不需要估价", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "海关估价依据实际成交价格、基准价格（HBA）等，防止低报价格逃税。"
    },
    {
        question: "出口报关需要提交哪些主要单据？",
        options: [
            { text: "只需要发票", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "发票、装箱单、合同、出口许可证、提单等", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "只需要合同", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "只需要提单", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "出口报关需要提交发票、装箱单、合同、出口许可证、提单等多种单据。"
    },
    {
        question: "海关放行后，以下哪种做法是正确的？",
        options: [
            { text: "立即装船离港", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "核对放行信息，确认无误后装船", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "不需要核对", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "可以更改货物", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "海关放行后应核对放行信息，确认无误后再装船，避免出错。"
    },
    {
        question: "出口关税的计算基础是什么？",
        options: [
            { text: "货物重量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "FOB价格", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "货物体积", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "随意确定", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "出口关税以FOB价格为计算基础，按一定税率征收。"
    },
    
    // 税费与费用（10道）
    {
        question: "印尼煤炭出口需要缴纳哪些主要税费？",
        options: [
            { text: "只需要缴纳增值税", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "出口关税、增值税、所得税等", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "不需要缴税", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "只需要缴纳所得税", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "印尼煤炭出口需要缴纳出口关税、增值税、所得税等多种税费。"
    },
    {
        question: "印尼煤炭出口关税的税率是如何确定的？",
        options: [
            { text: "固定税率", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "累进税率，根据基准价格（HBA）和实际价格计算", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "随意确定", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "按重量计算", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "印尼煤炭出口关税采用累进税率，根据基准价格（HBA）和实际出口价格计算。"
    },
    {
        question: "基准价格（HBA）是由谁确定的？",
        options: [
            { text: "出口商", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "能源和矿产资源部每月发布", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "海关", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "买方", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "基准价格（HBA）由印尼能源和矿产资源部每月发布，作为计算出口关税的依据。"
    },
    {
        question: "出口煤炭的增值税税率是多少？",
        options: [
            { text: "不需要缴纳", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "0%（出口免税）", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "10%", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "20%", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "印尼出口煤炭增值税税率为0%，即出口免税。"
    },
    {
        question: "滞港费是什么费用？",
        options: [
            { text: "货物在港口停留超过免费期后产生的费用", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "装船费", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "运费", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "保险费", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "滞港费是货物在港口停留超过免费期后产生的费用，按天计算。"
    },
    
    // 其他（10道）
    {
        question: "原产地证（CO）有什么作用？",
        options: [
            { text: "仅用于统计", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "证明货物原产地，享受关税优惠，清关必备", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "仅用于识别货物", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "没有作用", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "原产地证证明货物原产地，用于享受关税优惠和清关，是重要贸易单据。"
    },
    {
        question: "出口煤炭的提单（B/L）由谁签发？",
        options: [
            { text: "卖方", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "承运人或其代理人", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "买方", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "银行", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "提单由承运人或其代理人签发，是货物收据和运输合同证明。"
    },
    {
        question: "装船通知（Shipping Advice）应在什么时候发送？",
        options: [
            { text: "装船前", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "装船后及时发送", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "到达目的港后", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "不需要发送", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "装船通知应在装船后及时发送给买方，以便买方办理保险和接货准备。"
    },
    {
        question: "出口煤炭的保险应由谁购买？",
        options: [
            { text: "必须由卖方购买", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "根据贸易术语，FOB由买方购买，CIF由卖方购买", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "必须由买方购买", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不需要保险", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "保险购买责任根据贸易术语确定，FOB由买方购买，CIF由卖方购买。"
    },
    {
        question: "出口文件中的'清洁提单'是指什么？",
        options: [
            { text: "提单表面清洁", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "承运人未对货物表面状况作不良批注的提单", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "新提单", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "空白提单", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "清洁提单是指承运人未对货物表面状况作不良批注的提单，表明货物外观良好。"
    }
];

// 添加到第7关
if (typeof questionBankData !== 'undefined' && questionBankData[7]) {
    questionBankData[7] = questionBankData[7].concat(level7BatchQuestions);
}
