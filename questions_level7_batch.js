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
        explanation: "答案正确。印尼煤炭出口通常以FOB价为主，由买方承担运费和保险费。"
    },
    {
        question: "申请印尼煤炭出口许可证需要满足什么条件？",
        options: [
            { text: "只需要有煤矿", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "拥有有效的IUP矿业经营许可证、缴纳相关税费、符合环保要求", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "只需要缴纳税费", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不需要任何条件", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。海运费通常以美元计，按重量吨(WMT)或体积吨计费。"
    },
    {
        question: "印尼煤炭出口许可证由哪个部门颁发？",
        options: [
            { text: "财政部", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "能源和矿产资源部", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "交通部", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "商务部", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。煤炭海运附加费包括燃油附加费(BAF)、货币贬值附加费(CAF)等。"
    },
    {
        question: "没有出口许可证（ET）出口煤炭会有什么后果？",
        options: [
            { text: "没有后果", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "货物被扣留、罚款、甚至刑事责任", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "只需要补交税费", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "只需要道歉", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。煤炭运费旺季较高，淡季较低，受供需关系影响大。"
    },
    {
        question: "出口许可证上的数量可以超出实际出口数量吗？",
        options: [
            { text: "可以，越多越好", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "不可以，实际出口数量不能超过许可证数量", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "没有关系", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "可以超出50%", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。巴拿马型船舶(Panamax)适合通过巴拿马运河，载重吨约6-8万吨。"
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
        explanation: "答案正确。灵便型船舶(Handy Size)载重吨约3-5万吨，适合挂靠中小港口。"
    },
    {
        question: "报关单上的商品编码（HS Code）有什么作用？",
        options: [
            { text: "没有作用", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "确定关税税率、监管条件、统计类别", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "仅用于统计", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "仅用于识别商品", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。超灵便型船舶(Supramax)载重吨约5-6万吨，装卸效率较高。"
    },
    {
        question: "煤炭的HS Code通常是什么？",
        options: [
            { text: "2701", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "9999", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "1234", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "0000", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。煤炭通常用防水帆布覆盖，防止水分进入和货物损失。"
    },
    {
        question: "报关时低报价格会有什么后果？",
        options: [
            { text: "没有后果", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "海关处罚、补税、罚款、甚至刑事责任", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "只需要道歉", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "只需要补税", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。租船合同明确规定装卸时间计算方法、滞期费和速遣费计算方式。"
    },
    {
        question: "海关查验时，以下哪种做法是正确的？",
        options: [
            { text: "拒绝查验", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "配合查验，提供必要协助", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "隐瞒货物", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "逃跑", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。装卸时间(Laytime)是租船合同中约定的可用于装卸的时间，超出则产生滞期费。"
    },
    {
        question: "报关单上的FOB价格应包括哪些费用？",
        options: [
            { text: "仅包括货物成本", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "货物成本、装船前运费、装船费用", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "包括海运费", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "包括保险费", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。滞期费(Demurrage)是船舶滞期时租船人向船东支付的费用，通常按每天多少美元计算。"
    },
    {
        question: "海关对出口煤炭的估价依据是什么？",
        options: [
            { text: "卖方随意报价", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "实际成交价格、基准价格（HBA）等", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "买方报价", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不需要估价", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。速遣费(Despatch)是船舶提前完成装卸时船东向租船人支付的费用，通常为滞期费的一半。"
    },
    {
        question: "出口报关需要提交哪些主要单据？",
        options: [
            { text: "只需要发票", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "发票、装箱单、合同、出口许可证、提单等", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "只需要合同", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "只需要提单", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。装卸时间通常从船舶提交装货准备通知书(NOR)后一定时间(如24小时)开始计算。"
    },
    {
        question: "海关放行后，以下哪种做法是正确的？",
        options: [
            { text: "立即装船离港", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "核对放行信息，确认无误后装船", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "不需要核对", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "可以更改货物", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。装卸时间可以连续计算(CW)，也可以按工作日计算，需在合同中明确。"
    },
    {
        question: "出口关税的计算基础是什么？",
        options: [
            { text: "货物重量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "FOB价格", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "货物体积", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "随意确定", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。滞期费通常按船舶滞期天数计算，不足一天按比例计算。"
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
        explanation: "答案正确。装卸效率是港口或船舶装卸货物的速度，通常以每天装卸多少吨表示。"
    },
    {
        question: "印尼煤炭出口关税的税率是如何确定的？",
        options: [
            { text: "固定税率", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "累进税率，根据基准价格（HBA）和实际价格计算", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "随意确定", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "按重量计算", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。煤炭装船时，船方和货方通常会共同签署装货确认单，记录实际装货数量。"
    },
    {
        question: "基准价格（HBA）是由谁确定的？",
        options: [
            { text: "出口商", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "能源和矿产资源部每月发布", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "海关", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "买方", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。煤炭卸货后，货物所有权转移到买方，买方承担后续风险。"
    },
    {
        question: "出口煤炭的增值税税率是多少？",
        options: [
            { text: "不需要缴纳", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "0%（出口免税）", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "10%", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "20%", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。国际航运公会(BIMCO)是制定航运标准合同的重要组织。"
    },
    {
        question: "滞港费是什么费用？",
        options: [
            { text: "货物在港口停留超过免费期后产生的费用", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "装船费", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "运费", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "保险费", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。金康合同(Gencon)是BIMCO标准航次租船合同，广泛用于干散货运输。"
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
        explanation: "答案正确。煤炭在海牙-维斯比规则下运输，承运人责任限制有一定标准。"
    },
    {
        question: "出口煤炭的提单（B/L）由谁签发？",
        options: [
            { text: "卖方", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "承运人或其代理人", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "买方", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "银行", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。共同海损是为保护船舶和货物共同安全而采取的措施造成的损失，由各方按比例分摊。参考：约克-安特卫普规则。"
    },
    {
        question: "装船通知（Shipping Advice）应在什么时候发送？",
        options: [
            { text: "装船前", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "装船后及时发送", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "到达目的港后", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "不需要发送", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。船舶在航行中因不可抗力导致货物损失，承运人不承担责任。"
    },
    {
        question: "出口煤炭的保险应由谁购买？",
        options: [
            { text: "必须由卖方购买", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "根据贸易术语，FOB由买方购买，CIF由卖方购买", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "必须由买方购买", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不需要保险", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。船舶互撞责任条款(Hague Visby Rule)规定承运人最低责任和免责事项。"
    },
    {
        question: "出口文件中的'清洁提单'是指什么？",
        options: [
            { text: "提单表面清洁", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "承运人未对货物表面状况作不良批注的提单", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "新提单", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "空白提单", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。货物保险单转让需要保险单背面背书。"
    }
];

// 添加到第7关
if (typeof questionBankData !== 'undefined' && questionBankData[7]) {
    questionBankData[7] = questionBankData[7].concat(level7BatchQuestions);
}
