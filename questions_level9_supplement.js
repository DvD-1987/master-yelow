// 第9关补充题目（20道新题）- 电厂投标
const level9SupplementQuestions = [
    {
        question: "电厂年度煤炭采购量通常如何确定？",
        options: [
            { text: "随意确定，不需要计划", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "根据机组容量、年利用小时数、供电煤耗等参数测算年耗煤量，再考虑库存策略", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "只根据上年采购量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "由煤炭供应商决定", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "电厂耗煤量 = 机组容量(MW) × 年利用小时数 × 供电煤耗(g/kWh) ÷ 1000000，再加安全库存需求，精确测算后制定年度采购计划。"
    },
    {
        question: "电厂煤炭采购招标中，'热值折算价'（Normalized Price）的作用是什么？",
        options: [
            { text: "仅用于报表填写", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "将不同热值的煤炭换算为同一热值基准进行价格比较，确保评标公平", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "增加煤炭热值", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "计算运输成本", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "热值折算价 = 实际价格 ÷ 实际热值 × 标准热值，将报价统一折算为同一热值基准，才能真正比较不同供应商不同煤种的性价比。"
    },
    {
        question: "电厂煤炭采购合同中，'热值扣罚条款'（Calorific Value Penalty Clause）是如何运作的？",
        options: [
            { text: "到货热值低于合同值时无需处理", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "到货热值低于合同保证值时，按比例扣减货款；高于合同值时，买方按比例溢价付款", correct: true, effect: {knowledge: 12, trust: 12, risk: -12} },
            { text: "热值低于合同值就退货", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "热值偏差不影响货款", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "热值扣罚（或溢价）条款按比例调整货款：实际价格 = 合同价 × 实际热值 ÷ 合同热值。既保护买方不为低热值多付钱，也让卖方为高热值获得额外收益。"
    },
    {
        question: "电厂对煤炭供应商进行资格审查时，最关注哪些核心指标？",
        options: [
            { text: "供应商的办公室位置", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "供应商的过往供货业绩、资金实力、煤炭来源稳定性和履约能力", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "供应商的员工数量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "供应商的网站质量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "电厂资格审查核心关注：有无向同类电厂供货的业绩证明、企业注册资本和财务健康、稳定可靠的煤源、以及履约担保能力（如履约保函）。"
    },
    {
        question: "在电厂投标中，'最低评标价法'和'综合评分法'各有什么特点？",
        options: [
            { text: "两种方法完全相同", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "最低评标价法只看价格；综合评分法同时考虑价格、质量、交货、信誉等多项因素打分", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "只有价格低的才能中标", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "两种方法都不考虑价格", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "最低评标价法适合标准化产品，以价格最低者为准；综合评分法适合复杂采购，价格、质量、服务等按权重打分，总分最高者中标，煤炭采购多采用后者。"
    },
    {
        question: "电厂签订长协煤（年度协议煤）的主要优势是什么？",
        options: [
            { text: "价格通常最低", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "保障供应稳定性，降低价格波动风险，便于生产计划", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "质量最好", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "运输距离最短", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "长协煤的核心价值不是最低价，而是稳定性：固定供应量保障电厂用煤安全，相对稳定的价格机制帮助电厂做好成本预算，是电厂燃料保障的压舱石。"
    },
    {
        question: "投标报价时，以下哪些成本应该计入完整的到厂成本（Landed Cost）？",
        options: [
            { text: "只计算煤炭采购价格", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "煤价+海运费+保险+港口费+卸货费+国内运输费+检验费+关税+增值税", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "只计算运费", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "煤价加国内运费即可", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "到厂成本（综合成本）= 煤炭FOB价+海运费+保险费+国内港口及卸货费+国内运输费+检验费+进口关税+进口增值税（或进项税抵扣后净额）。这才是真正的采购成本。"
    },
    {
        question: "电厂煤炭招标中的'封标'是指什么？",
        options: [
            { text: "提前宣布中标结果", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "投标截止后，所有投标文件被密封保存，在开标前任何人不得拆封查阅", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "拒绝接受新的投标", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "公布招标标准", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "封标是招标程序的关键保密措施，投标截止后所有标书密封保管，直至正式开标会议才在监督人员见证下拆封，确保公平公正。"
    },
    {
        question: "电厂煤炭供应合同中，'履约保证金'（Performance Bond/Guarantee）通常是合同金额的多少比例？",
        options: [
            { text: "1%以内", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "5%~10%", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "50%以上", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "100%", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "履约保证金通常为合同金额的5%~10%，由中标供应商向电厂提供银行保函形式，若未能按约履约，电厂可直接向银行索赔该保证金。"
    },
    {
        question: "在电厂煤炭评标中，如何处理'废标'（Invalid Bid）？",
        options: [
            { text: "给予废标方补偿", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不符合招标文件实质性要求的投标被认定为废标，不参与评比", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "废标也可以中标", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "废标自动改为有效标", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} }
        ],
        explanation: "投标文件有以下情形被认定为废标：未提交投标保证金、超出投标截止时间、不满足招标文件实质性要求（如资质不符、报价超出有效期）等。"
    },
    {
        question: "电厂在评估煤炭供应商的'碳排放'表现时，主要关注哪项指标？",
        options: [
            { text: "煤炭颜色", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "煤炭含碳量和单位热值碳排放因子（CO₂排放系数）", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "煤炭重量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "产地距离", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "在碳中和背景下，电厂越来越关注煤炭的CO₂排放因子（kgCO₂/GJ），低硫、低灰分、高热值的清洁煤炭有助于降低单位发电量的碳排放，提升在碳市场的竞争力。"
    },
    {
        question: "以下哪种采购策略可以帮助电厂降低煤炭供应中断的风险？",
        options: [
            { text: "只与一家大型供应商合作", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "多元化供应来源（长协+现货+多产地），维持合理安全库存", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "完全依赖现货市场", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "不需要库存管理", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} }
        ],
        explanation: "供应安全是电厂首要任务：长协保底量+现货灵活补充+多个来源（国内+进口，不同产地）+维持7-15天安全库存，可有效防范供应中断风险。"
    },
    {
        question: "电厂煤炭验收时，如果对供应商提供的质检报告有疑问，应如何处理？",
        options: [
            { text: "直接接受，不质疑", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "按合同规定启动复检程序，由双方认可的第三方机构对仲裁样进行检验", correct: true, effect: {knowledge: 12, trust: 12, risk: -12} },
            { text: "自行重新化验后直接扣款", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "立即终止合同", correct: false, effect: {knowledge: -5, trust: -5, risk: 8} }
        ],
        explanation: "对检验结果有异议，应按合同约定的仲裁程序处理：启动第三方仲裁检验，使用已封存的仲裁样，仲裁结果对双方具有约束力，这是处理质量争议的正当途径。"
    },
    {
        question: "在电厂煤炭采购谈判中，'价格联动机制'（Price Linkage Mechanism）是指什么？",
        options: [
            { text: "所有煤炭必须同一价格", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "合同价格与某指数（如秦皇岛港价或热值折算价）挂钩，定期调整", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "价格与汇率直接挂钩", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "价格永久固定不变", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "价格联动机制是长期合同中常见的价格调整机制，将合同价与市场基准价（如环渤海动力煤价格指数BSPI）挂钩，每季度或每月调整，平衡供需双方的市场风险。"
    },
    {
        question: "电厂在评标中，以下哪种情形属于'不正当竞争'行为？",
        options: [
            { text: "按照招标文件要求认真准备标书", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "向招标方工作人员提供礼品或好处，试图影响评标结果", correct: true, effect: {knowledge: 12, trust: 12, risk: -12} },
            { text: "在截止日期前提交完整标书", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "根据市场情况合理定价", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} }
        ],
        explanation: "向招标方人员行贿属于严重的不正当竞争行为，违反《反不正当竞争法》和《招投标法》，一经查实将被取消投标资格、列入黑名单，严重者追究刑事责任。"
    },
    {
        question: "电厂煤炭采购中，'到厂价'和'坑口价'有什么区别？",
        options: [
            { text: "两者完全相同", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "坑口价是矿山出矿价；到厂价=坑口价+运费+港口费+中间环节费用，反映电厂的真实成本", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "到厂价只包含运费", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "坑口价包含所有费用", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "坑口价（Mine Mouth Price）是煤矿的出矿价格，到厂价（Delivered Price/Landed Price）是煤炭运到电厂门口的综合成本，两者差额即为整条物流链的费用。"
    },
    {
        question: "以下哪种保险是电厂在采购煤炭时通常要求供应商投保的？",
        options: [
            { text: "人寿保险", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "货物运输保险、产品责任险，及供应商自身的履约保险", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "只需要履约保证金", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不需要保险", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} }
        ],
        explanation: "电厂通常要求供应商在合同期内保持货物运输险，并可能要求供应商提供履约保函，这些是合同风险管理的标准条款。"
    },
    {
        question: "电厂参与煤炭采购的'框架协议'（Framework Agreement）模式有何优势？",
        options: [
            { text: "价格最低", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "一次谈判确定基本条款，简化后续每批次采购流程，降低交易成本", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "不需要签订任何合同", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "可以任意更改质量要求", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "框架协议预先确定价格机制、质量标准、结算方式等核心条款，每次采购只需下订单确认数量和时间，大幅降低重复谈判成本，适合有长期稳定需求的大用户。"
    },
    {
        question: "电厂采购招标中，'定标委员会'（Bid Evaluation Committee）一般由哪些人员组成？",
        options: [
            { text: "只有采购部门人员", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "由燃料管理、技术、财务、法务等多部门人员及外部专家共同组成，确保评标公正性", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "由供应商推荐的人员组成", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "只有最高领导", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "定标委员会须跨部门组建（燃料+技术+财务+法务），必要时引入独立外部专家，确保评标过程专业、客观、公正，防止利益冲突。"
    },
    {
        question: "中标供应商在签订合同前，提交'投标保证金'转为'履约保证金'的主要目的是什么？",
        options: [
            { text: "仅为形式需要", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "确保中标方按合同条款认真履约，若违约则电厂可没收保证金作为赔偿", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "作为货款预付", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "支付招标费用", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "投标保证金确保投标方不随意撤标或中标后拒签合同；履约保证金在合同期内约束供应商按质按量按时履约，是招投标合规管理的重要工具。"
    }
];

// 将补充题目添加到第9关
if (typeof questionBankData !== 'undefined' && questionBankData[9]) {
    questionBankData[9] = questionBankData[9].concat(level9SupplementQuestions);
}
