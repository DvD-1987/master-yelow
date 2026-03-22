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
        explanation: "答案正确。印尼煤炭出口到中国可享受中国-东盟自贸区协定税率(0关税)，需提供FORM E原产地证书。"
    },
    {
        question: "电厂煤炭采购招标中，'热值折算价'（Normalized Price）的作用是什么？",
        options: [
            { text: "仅用于报表填写", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "将不同热值的煤炭换算为同一热值基准进行价格比较，确保评标公平", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "增加煤炭热值", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "计算运输成本", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。印尼煤炭出口商应确保煤炭符合中国的质量和安全标准，否则可能退运。"
    },
    {
        question: "电厂煤炭采购合同中，'热值扣罚条款'（Calorific Value Penalty Clause）是如何运作的？",
        options: [
            { text: "到货热值低于合同值时无需处理", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "到货热值低于合同保证值时，按比例扣减货款；高于合同值时，买方按比例溢价付款", correct: true, effect: {knowledge: 12, trust: 12, risk: -12} },
            { text: "热值低于合同值就退货", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "热值偏差不影响货款", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。印尼煤炭出口企业需要具有合法的矿业经营许可证(IUP)或工作合同(COW)。"
    },
    {
        question: "电厂对煤炭供应商进行资格审查时，最关注哪些核心指标？",
        options: [
            { text: "供应商的办公室位置", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "供应商的过往供货业绩、资金实力、煤炭来源稳定性和履约能力", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "供应商的员工数量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "供应商的网站质量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。印尼对煤炭出口实施环保监管，确保煤炭开采和出口符合环境法规。"
    },
    {
        question: "在电厂投标中，'最低评标价法'和'综合评分法'各有什么特点？",
        options: [
            { text: "两种方法完全相同", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "最低评标价法只看价格；综合评分法同时考虑价格、质量、交货、信誉等多项因素打分", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "只有价格低的才能中标", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "两种方法都不考虑价格", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。印尼煤炭出口需要经过装港检验，由第三方检验机构出具检验报告。"
    },
    {
        question: "电厂签订长协煤（年度协议煤）的主要优势是什么？",
        options: [
            { text: "价格通常最低", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "保障供应稳定性，降低价格波动风险，便于生产计划", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "质量最好", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "运输距离最短", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。印尼煤炭出口量的季节性变化主要受雨季影响(11-4月装运困难)。"
    },
    {
        question: "投标报价时，以下哪些成本应该计入完整的到厂成本（Landed Cost）？",
        options: [
            { text: "只计算煤炭采购价格", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "煤价+海运费+保险+港口费+卸货费+国内运输费+检验费+关税+增值税", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "只计算运费", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "煤价加国内运费即可", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。印尼是全球最大的动力煤出口国，主要出口市场为中国、印度、日本、韩国等。"
    },
    {
        question: "电厂煤炭招标中的'封标'是指什么？",
        options: [
            { text: "提前宣布中标结果", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "投标截止后，所有投标文件被密封保存，在开标前任何人不得拆封查阅", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "拒绝接受新的投标", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "公布招标标准", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。印尼煤炭产业为当地创造大量就业机会，是重要的支柱产业。"
    },
    {
        question: "电厂煤炭供应合同中，'履约保证金'（Performance Bond/Guarantee）通常是合同金额的多少比例？",
        options: [
            { text: "1%以内", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "5%~10%", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "50%以上", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "100%", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。印尼政府通过矿业法规监管煤炭出口，确保资源可持续利用。"
    },
    {
        question: "在电厂煤炭评标中，如何处理'废标'（Invalid Bid）？",
        options: [
            { text: "给予废标方补偿", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不符合招标文件实质性要求的投标被认定为废标，不参与评比", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "废标也可以中标", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "废标自动改为有效标", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} }
        ],
        explanation: "答案正确。印尼煤炭出口面临国际市场竞争，主要竞争对手为澳大利亚、俄罗斯等。"
    },
    {
        question: "电厂在评估煤炭供应商的'碳排放'表现时，主要关注哪项指标？",
        options: [
            { text: "煤炭颜色", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "煤炭含碳量和单位热值碳排放因子（CO₂排放系数）", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "煤炭重量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "产地距离", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。印尼煤炭出口为中国能源供应提供重要补充，尤其在东南沿海地区。"
    },
    {
        question: "以下哪种采购策略可以帮助电厂降低煤炭供应中断的风险？",
        options: [
            { text: "只与一家大型供应商合作", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "多元化供应来源（长协+现货+多产地），维持合理安全库存", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "完全依赖现货市场", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "不需要库存管理", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} }
        ],
        explanation: "答案正确。印尼煤炭出口使用美元计价，价格参照ICE API2指数或印尼HBA价格。"
    },
    {
        question: "电厂煤炭验收时，如果对供应商提供的质检报告有疑问，应如何处理？",
        options: [
            { text: "直接接受，不质疑", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "按合同规定启动复检程序，由双方认可的第三方机构对仲裁样进行检验", correct: true, effect: {knowledge: 12, trust: 12, risk: -12} },
            { text: "自行重新化验后直接扣款", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "立即终止合同", correct: false, effect: {knowledge: -5, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。印尼煤炭出口的定价机制通常为指数定价，价格随市场波动。"
    },
    {
        question: "在电厂煤炭采购谈判中，'价格联动机制'（Price Linkage Mechanism）是指什么？",
        options: [
            { text: "所有煤炭必须同一价格", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "合同价格与某指数（如秦皇岛港价或热值折算价）挂钩，定期调整", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "价格与汇率直接挂钩", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "价格永久固定不变", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。印尼煤炭出口合同的签订需要明确质量规格、数量、交货期等条款。"
    },
    {
        question: "电厂在评标中，以下哪种情形属于'不正当竞争'行为？",
        options: [
            { text: "按照招标文件要求认真准备标书", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "向招标方工作人员提供礼品或好处，试图影响评标结果", correct: true, effect: {knowledge: 12, trust: 12, risk: -12} },
            { text: "在截止日期前提交完整标书", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "根据市场情况合理定价", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} }
        ],
        explanation: "答案正确。印尼煤炭出口需要购买货物运输保险，通常由买方或卖方投保。"
    },
    {
        question: "电厂煤炭采购中，'到厂价'和'坑口价'有什么区别？",
        options: [
            { text: "两者完全相同", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "坑口价是矿山出矿价；到厂价=坑口价+运费+港口费+中间环节费用，反映电厂的真实成本", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "到厂价只包含运费", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "坑口价包含所有费用", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。印尼煤炭出口的装运期应合理约定，考虑雨季影响和港口能力。"
    },
    {
        question: "以下哪种保险是电厂在采购煤炭时通常要求供应商投保的？",
        options: [
            { text: "人寿保险", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "货物运输保险、产品责任险，及供应商自身的履约保险", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "只需要履约保证金", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不需要保险", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} }
        ],
        explanation: "答案正确。印尼煤炭出口的检验条款应明确检验机构、检验标准、取样方法等。"
    },
    {
        question: "电厂参与煤炭采购的'框架协议'（Framework Agreement）模式有何优势？",
        options: [
            { text: "价格最低", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "一次谈判确定基本条款，简化后续每批次采购流程，降低交易成本", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "不需要签订任何合同", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "可以任意更改质量要求", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。印尼煤炭出口的付款条款通常使用信用证(L/C)或电汇(T/T)。"
    },
    {
        question: "电厂采购招标中，'定标委员会'（Bid Evaluation Committee）一般由哪些人员组成？",
        options: [
            { text: "只有采购部门人员", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "由燃料管理、技术、财务、法务等多部门人员及外部专家共同组成，确保评标公正性", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "由供应商推荐的人员组成", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "只有最高领导", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。印尼煤炭出口的争议解决通常约定仲裁条款，常用机构为新加坡国际仲裁中心(SIAC)。"
    },
    {
        question: "中标供应商在签订合同前，提交'投标保证金'转为'履约保证金'的主要目的是什么？",
        options: [
            { text: "仅为形式需要", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "确保中标方按合同条款认真履约，若违约则电厂可没收保证金作为赔偿", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "作为货款预付", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "支付招标费用", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。印尼煤炭出口合同中的不可抗力条款应明确约定自然灾害等免责情况。"
    }
];

// 将补充题目添加到第9关
if (typeof questionBankData !== 'undefined' && questionBankData[9]) {
    questionBankData[9] = questionBankData[9].concat(level9SupplementQuestions);
}
