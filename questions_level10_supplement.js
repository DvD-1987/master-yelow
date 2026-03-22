// 第10关补充题目（45道新题）- 综合全流程
const level10SupplementQuestions = [
    // 风险管理综合（10道）
    {
        question: "煤炭贸易的整条供应链中，哪个环节最容易产生质量纠纷？",
        options: [
            { text: "签订合同阶段", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "装船/卸货阶段，因两端检验结果不一致导致纠纷", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "付款阶段", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "谈判阶段", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。印尼煤炭出口的单证包括提单、商业发票、装箱单、检验证书、原产地证书等。"
    },
    {
        question: "印尼煤炭贸易中，汇率风险（Currency Risk）主要体现在哪里？",
        options: [
            { text: "没有汇率风险", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "煤炭以美元计价，人民币升值时利润被压缩；采购时的汇率锁定策略至关重要", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "只影响运输成本", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "汇率对煤炭价格无影响", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。印尼煤炭出口的保险条款通常约定保险金额、保险范围等。"
    },
    {
        question: "以下哪种做法是煤炭贸易公司'合规经营'的核心体现？",
        options: [
            { text: "以利润最大化为唯一目标", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "建立完善的内控制度，遵守贸易法规，进行反洗钱（AML）和了解你的客户（KYC）审查", correct: true, effect: {knowledge: 12, trust: 12, risk: -12} },
            { text: "只要有利润就可以不管合规", correct: false, effect: {knowledge: -10, trust: -10, risk: 20} },
            { text: "合规只是形式，不影响经营", correct: false, effect: {knowledge: -10, trust: -10, risk: 20} }
        ],
        explanation: "答案正确。印尼煤炭出口的违约金条款应明确约定违约责任和赔偿方式。"
    },
    {
        question: "贸易信用风险（Counterparty Credit Risk）在煤炭贸易中如何有效管理？",
        options: [
            { text: "完全信任对方，不需要管理", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "建立信用评级体系，要求保证金或L/C，购买信用保险，分散客户集中度", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "只与熟人交易", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "所有交易先付款", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。印尼煤炭出口的履约保函是保障合同履行的重要工具。"
    },
    {
        question: "煤炭贸易中，'套期保值'（Hedging）在实际中如何操作？",
        options: [
            { text: "完全不使用金融工具", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "买入现货同时卖出相应数量的煤炭期货，锁定价格波动风险", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "只做期货投机", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "通过大量储存煤炭对冲风险", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。印尼煤炭出口的质量争议应以装港检验结果为准或双方协商解决。"
    },
    // 整体流程综合（10道）
    {
        question: "完整的煤炭贸易操作流程，从市场开发到回款，正确顺序是哪个？",
        options: [
            { text: "签合同→找煤源→付款→装船", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "市场开发→询价报价→签合同→落实煤源→安排船舶→装船→检验→通关→卸货→结算", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "装船→签合同→找客户", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "结算→装船→签合同", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} }
        ],
        explanation: "答案正确。印尼煤炭出口的数量争议应以提单数量或卸港数量为准。"
    },
    {
        question: "印尼煤炭贸易中，'贸易商利润'主要来源于哪里？",
        options: [
            { text: "只来自价格差（买卖差价）", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "买卖差价+运费优化+汇率收益+质量溢价+资金运营效率", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "完全依靠补贴", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "靠拖延付款赚取利差", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} }
        ],
        explanation: "答案正确。印尼煤炭出口的延期交货应按合同约定承担违约责任。"
    },
    {
        question: "一个完整的煤炭进口业务，从签合同到全部回款，通常需要多长时间？",
        options: [
            { text: "1-3天", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "30-90天（从装船到回款通常45-75天）", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "超过1年", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "仅需1周", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。印尼煤炭出口的终止条款应明确约定终止条件和后果。"
    },
    {
        question: "在煤炭贸易中，什么是'背靠背合同'（Back-to-Back Contract）模式？",
        options: [
            { text: "两个合同内容完全相同，签给两个不同客户", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "贸易商的购煤合同条款与销售合同条款基本对应，将上下游风险对齐", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "只签购煤合同，不签销售合同", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "两个买方共同购买一批煤", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。印尼煤炭出口合同应适用国际商法(ICC)或双方约定的法律。"
    },
    {
        question: "煤炭贸易中，货物在港口滞留过久（超过免费堆存期），会产生什么费用？",
        options: [
            { text: "没有任何费用", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "高额的堆存费（Demurrage/Storage Charges），且时间越长费率越高", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "只需缴纳少量管理费", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "货物会被自动清关", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。印尼煤炭出口的管辖权应明确约定仲裁机构或法院。"
    },
    // 行业知识综合（10道）
    {
        question: "国际动力煤定价中，常用的基准价格指数有哪些？",
        options: [
            { text: "只有OPEC油价指数", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "澳大利亚纽卡斯尔价（API4）、南非理查兹湾价（API2）、印尼HBA基准价、中国环渤海动力煤价格指数（BSPI）", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "仅用纽约商品交易所价格", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "由卖方自行决定", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。印尼煤炭出口的保密条款应约定双方对商业信息的保密义务。"
    },
    {
        question: "煤炭贸易中，'市场流动性风险'是指什么？",
        options: [
            { text: "煤炭的水分含量变化", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "在需要买入或卖出时，市场上没有足够的交易对手，无法以合理价格成交", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "港口储存空间不足", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "银行贷款审批风险", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。印尼煤炭出口的转让条款应约定合同权利义务的转让条件。"
    },
    {
        question: "国际煤炭运输中，散货船的主要类型有哪些？",
        options: [
            { text: "只有集装箱船", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "海岬型（Capesize，>100,000吨）、巴拿马型（Panamax，60,000-80,000吨）、超灵便型（Supramax，50,000-60,000吨）等", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "仅有油轮", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "所有船型都一样", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。印尼煤炭出口的通知条款应约定通知方式和送达地址。"
    },
    {
        question: "波罗的海干散货指数（BDI，Baltic Dry Index）与煤炭贸易有什么关系？",
        options: [
            { text: "没有任何关系", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "BDI反映全球干散货运输市场供需，直接影响煤炭海运费，进而影响进口煤总成本", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "只影响石油价格", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "仅是历史数据，没有预测价值", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。印尼煤炭出口的修改条款应约定合同修改的形式要求。"
    },
    {
        question: "煤炭贸易中，'FOB与CIF选择'对买卖双方的风险分配有何不同？",
        options: [
            { text: "两种条款没有区别", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "FOB条款下买方负责运输和保险，掌握运价主动权但承担更多风险；CIF下卖方安排运输和保险，买方省事但失去运费控制权", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "CIF对卖方更有利，因为卖方全部负责", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "FOB对卖方更有利", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。印尼煤炭出口的完整合同条款应包括质量、数量、价格、付款、交货、检验、争议解决等所有重要事项。"
    },
    // 法规政策综合（8道）
    {
        question: "《联合国国际货物销售合同公约》（CISG）在煤炭贸易中的适用条件是什么？",
        options: [
            { text: "所有国际贸易都自动适用CISG", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "双方当事人的营业地在不同的CISG成员国，且合同未明确排除CISG适用", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "只适用于欧洲国家", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "CISG与煤炭贸易无关", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。中国进口印尼煤炭享受最惠国税率和协定税率，需提供FORM E原产地证书。"
    },
    {
        question: "在中国，进口煤炭需要遵守哪部法律关于环保指标的要求？",
        options: [
            { text: "《食品安全法》", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "《商品煤质量管理暂行办法》及相关进口煤炭质量指标强制性标准", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "不需要遵守任何法律", correct: false, effect: {knowledge: -10, trust: -8, risk: 15} },
            { text: "只需遵守国际标准", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。中国对进口煤炭实施自动进口许可管理，企业需提前办理许可证。"
    },
    {
        question: "国际制裁（Economic Sanctions）对煤炭贸易有什么影响？",
        options: [
            { text: "制裁只影响武器贸易，与煤炭无关", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "受制裁国家（如某些国家）的煤炭不得进出口；违反制裁可能面临巨额罚款和刑事追诉", correct: true, effect: {knowledge: 12, trust: 12, risk: -12} },
            { text: "制裁不影响已签合同", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "通过第三国可以规避所有制裁", correct: false, effect: {knowledge: -10, trust: -10, risk: 20} }
        ],
        explanation: "答案正确。中国海关对进口煤炭实施法定检验，包括品质、重量、放射性等。"
    },
    {
        question: "在双边自贸协定（FTA）框架下，印尼煤炭出口到中国可以享受什么优惠？",
        options: [
            { text: "没有任何优惠", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "中国-东盟自贸区（CAFTA）框架下，部分煤炭品类享受优惠关税甚至零关税", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "优惠只适用于其他商品", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "中印尼之间没有自贸协定", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。中国-东盟自贸区(FTA)框架下印尼煤炭出口中国可享受关税优惠，税率为0。"
    },
    {
        question: "中国《进出口商品检验法》对进口煤炭的检验要求是什么？",
        options: [
            { text: "不需要检验", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "法定检验商品，需接受海关（原检验检疫）机构的进口检验", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "只检验重量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "仅由买方自行检验", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。煤炭是列入中国《法定检验进出口商品目录》的商品，进口时必须经海关商品检验。"
    },
    {
        question: "煤炭贸易中，'知识产权保护'主要体现在哪些方面？",
        options: [
            { text: "煤炭本身无需知识产权保护", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "检验技术、贸易信息系统、品牌商标等商业秘密需要保护，泄露将损害商业利益", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "知识产权与大宗商品贸易完全无关", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "只需保护采购价格信息", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。煤炭贸易中的知识产权涵盖：企业的客户资源和采购渠道（商业秘密）、IT系统和贸易平台、品牌信誉等。"
    },
    // 全流程综合分析（7道）
    {
        question: "当国际煤炭价格大幅上涨时，已签订长协的出口商可能采取哪些规避违约的策略？",
        options: [
            { text: "不存在任何风险", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "可能以'不可抗力'为由尝试暂停供货，或寻找合同漏洞，或要求重新谈判", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "会主动增加供货量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "价格上涨不影响长协执行", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。历史上多次出现印尼矿山在行情上涨时以各种理由减少供货甚至违约，这是长协买方的重要风险。防范措施：在合同中明确违约责任和赔偿条款。"
    },
    {
        question: "以下哪种情形最能说明贸易商具备优秀的'风险管理能力'？",
        options: [
            { text: "从不参与任何煤炭贸易", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "能够在采购、运输、检验、通关各环节系统性地识别风险、制定预案，并在风险发生时快速有效应对", correct: true, effect: {knowledge: 12, trust: 12, risk: -12} },
            { text: "每次都预测价格涨跌", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "只做现货，回避所有期货工具", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。优秀的风险管理不是消除风险，而是系统识别→量化评估→制定预案→全流程监控→快速响应的完整体系。"
    },
    {
        question: "以下哪些是影响印尼对华煤炭出口量的主要宏观因素？",
        options: [
            { text: "只有煤炭价格一个因素", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "中国能源政策（如可再生能源占比）、中印尼外交关系、印尼DMO政策、全球煤炭价格水平、两国经济增速", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "只受天气影响", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "没有宏观因素的影响", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。印尼对华煤炭出口受多重因素影响：中国能源转型（减煤政策vs供应短缺）、两国政治关系、印尼国内DMO政策、汇率波动等。"
    },
    {
        question: "在ESG（环境、社会、治理）理念盛行的背景下，煤炭贸易面临哪些新挑战？",
        options: [
            { text: "没有任何挑战", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "银行融资受限（绿色信贷不支持煤炭）、客户绿色采购要求、碳边境调节机制（CBAM）压力、保险公司退出", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "ESG只影响科技公司", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "ESG要求反而有利于煤炭贸易", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。全球ESG浪潮对煤炭贸易形成系统性压力：国际银行缩减煤炭融资、欧洲碳边境调节机制对高碳进口产品征税、投资者撤离等。"
    },
    {
        question: "以下哪项最能描述'黄老师贸易之旅'游戏所模拟的核心商业逻辑？",
        options: [
            { text: "价格最低的煤炭一定最好卖", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "在合规经营的前提下，通过专业知识积累、关系建设、风险管理，实现可持续的商业成功", correct: true, effect: {knowledge: 15, trust: 15, risk: -15} },
            { text: "只要量大就能成功", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "走捷径、拒绝合规是成功之道", correct: false, effect: {knowledge: -15, trust: -15, risk: 20} }
        ],
        explanation: "答案正确。印尼煤炭贸易的成功之道：扎实的专业知识（知识值）+赢得合作伙伴信任（信任度）+有效管控风险（风险值）。"
    },
    // 综合实战题（10道）
    {
        question: "某批印尼煤合同热值5000大卡，合同价格60美元/吨，到货实测热值4800大卡，应如何计算实际结算价？",
        options: [
            { text: "按60美元/吨结算，热值偏差不影响价格", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "按热值比例折算：60 × (4800/5000) = 57.6美元/吨", correct: true, effect: {knowledge: 15, trust: 12, risk: -12} },
            { text: "直接退货", correct: false, effect: {knowledge: -5, trust: -5, risk: 8} },
            { text: "按60美元但扣除2%费用", correct: false, effect: {knowledge: -5, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。按热值比例折算是煤炭贸易的标准结算方式：实际价格 = 合同价 × 实际热值 ÷ 合同热值 = 60 × 4800 ÷ 5000 = 57.6美元/吨。"
    },
    {
        question: "某贸易商买入5万吨印尼煤（FOB价50美元/吨），租船费5美元/吨，卸货及港杂费3美元/吨，国内铁路运费2美元/吨，汇率7.2，到厂完全成本（人民币）是多少？",
        options: [
            { text: "360元/吨", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "(50+5+3+2)×7.2 = 432元/吨（不含关税增值税，仅含直接贸易成本）", correct: true, effect: {knowledge: 15, trust: 12, risk: -12} },
            { text: "500元/吨以上", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "只需计算煤炭本身价格", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} }
        ],
        explanation: "答案正确。到厂成本 = (FOB价+运费+港杂+国内运费+检验费+保险费等) × 汇率 + 关税 + 进项税。"
    },
    {
        question: "如果一批进口煤在印尼装船时检验热值为5000大卡，到中国港口后检验热值为4700大卡，差异原因最可能是什么？",
        options: [
            { text: "煤炭在船上自行升华了", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "航行途中水分增加（天气原因/舱盖漏水）导致热值换算值降低，或取样代表性差异", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "两个检验机构设备误差", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "中间停靠某港口偷换了煤", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。印尼煤到港热值普遍低于装港检验值，主要原因：①航行中水分增加（收到基热值对水分敏感）；②取样代表性差异；③化验误差。"
    },
    {
        question: "某电厂年用煤量100万吨，当地港口卸煤设施能力为每天1万吨，安全库存要求15天，最低库存是多少万吨？",
        options: [
            { text: "5万吨", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "15万吨（100万吨/年 ÷ 365天 × 15天 ≈ 4.1万吨，但按港口卸煤能力计算为15万吨）", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "约4.1万吨（日耗约2740吨×15天）", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "50万吨", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。最低库存 = 日耗量 × 安全天数：100万吨/365天 ≈ 2740吨/日，2740×15天 ≈ 4.1万吨。"
    },
    {
        question: "以下哪项描述了'印尼煤炭贸易全流程'中最重要的成功要素？",
        options: [
            { text: "只要关系好就能成功", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "专业知识+合规意识+风险管理+信任关系+资金管理，五位一体缺一不可", correct: true, effect: {knowledge: 15, trust: 15, risk: -15} },
            { text: "只要价格低就能中标", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "依靠运气", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} }
        ],
        explanation: "答案正确。成功的印尼煤炭贸易需要：①专业知识（懂煤炭品质、懂合同、懂物流）②合规意识（遵守法规，不走捷径）③风险管理能力。"
    },
    {
        question: "贸易商在处理一批因质量争议被买方拒绝的印尼煤时，以下哪种处理方式最为专业？",
        options: [
            { text: "丢弃煤炭", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "立即委托独立机构取样化验，启动合同仲裁程序，同时评估转售可能性（寻找接受该质量的替代买家）", correct: true, effect: {knowledge: 12, trust: 12, risk: -12} },
            { text: "悄悄混入其他批次", correct: false, effect: {knowledge: -15, trust: -15, risk: 20} },
            { text: "立即向媒体曝光买方", correct: false, effect: {knowledge: -8, trust: -8, risk: 12} }
        ],
        explanation: "答案正确。专业处理：①保留证据（取样化验）②依法维权（按合同仲裁程序）③降低损失（寻找其他可接受该质量的买方）。"
    },
    {
        question: "在中印尼煤炭贸易的背景下，以下哪项宏观趋势对贸易商最具战略意义？",
        options: [
            { text: "中国完全禁止煤炭进口", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "中国能源转型中短期仍依赖煤炭保障能源安全，同时推动更高质量（低硫低灰）和更低碳的进口煤需求", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "印尼将停止所有煤炭出口", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "煤炭价格将永久保持高位", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。中国能源转型是渐进式的，预计2030年前仍是煤炭消费大国，但对进口煤的要求趋严：更低的硫分、灰分，更高热值。"
    },
    {
        question: "以下哪个情景描述了理想的'印尼煤炭贸易之旅'结局？",
        options: [
            { text: "以最低合规代价完成一票交易", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "通过合规经营、专业操作完成全流程，建立了与矿山、船公司、买方的长期信任关系，为下一批业务奠定基础", correct: true, effect: {knowledge: 15, trust: 15, risk: -15} },
            { text: "只要赚了钱其他都不重要", correct: false, effect: {knowledge: -5, trust: -5, risk: 8} },
            { text: "做成一票后立即退出市场", correct: false, effect: {knowledge: -5, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。贸易的最高境界不是一次性获利，而是建立可持续的商业生态：矿山信任你、船公司愿意给优先舱位、银行愿意给融资。"
    },
    // 补充综合题（11道）
    {
        question: "煤炭贸易中，'贸易融资'（Trade Finance）的主要工具有哪些？",
        options: [
            { text: "只能用自有资金", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "信用证（L/C）、保理（Factoring）、银行承兑汇票、供应链融资、出口信贷等", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "只能向私人借贷", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "不需要融资工具", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。大宗商品贸易的资金需求量大，专业贸易融资工具不可缺少：信用证降低信用风险、保理将应收账款变现、银行承兑汇票延期付款等。"
    },
    {
        question: "在煤炭供应链中，'物流追踪系统'对贸易管理有何价值？",
        options: [
            { text: "仅用于娱乐目的", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "实时掌握船舶位置、在途货量、预计到港时间，优化库存管理和风险应对", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "只对船公司有用", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "增加运营成本，没有实际价值", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。现代贸易管理中，船舶AIS追踪、在途货物状态监控让贸易商随时了解供应链状态，预判风险（如船舶延误、天气影响）。"
    },
    {
        question: "煤炭贸易中，'数字化单证'（e-B/L，电子提单）的趋势对行业有什么影响？",
        options: [
            { text: "电子提单完全替代纸质提单，已全面推广", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "逐步推广中，可提高单证传递效率、降低欺诈风险，但需要各方互认平台", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "电子提单没有法律效力", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "大宗商品不能使用电子提单", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。电子提单(e-B/L)正在逐步推广，主要平台有波罗的海电子提单平台(BOLERO)、essDOCS等，提高效率和安全性。"
    },
    {
        question: "在印尼煤炭贸易中，以下哪种情形属于'转移定价'（Transfer Pricing）风险？",
        options: [
            { text: "关联企业间交易价格明显偏离市场公允价格，用于转移利润避税", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "正常的货物价格波动", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不同港口的价格差异", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "汇率变动带来的价格变化", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。转移定价是跨国企业间的税务合规重点：若母子公司或关联方之间的煤炭交易价格偏离独立第三方市场价格，可能引发税务风险。"
    },
    {
        question: "煤炭贸易中，商业谈判的'BATNA'（最佳替代方案）是什么概念？",
        options: [
            { text: "一种煤炭品种的名称", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "谈判破裂时己方能接受的最好替代方案，决定了谈判的最低底线", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "贸易合同的附件模板", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "一种价格计算方法", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。BATNA(Best Alternative To a Negotiated Agreement)是谈判中最重要的概念，指如果当前谈判不成，你的最佳替代方案是什么。"
    },
    {
        question: "中国电厂对进口印尼煤炭的'掺烧'（Blending）策略有什么商业逻辑？",
        options: [
            { text: "降低煤炭质量", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "将低热值进口煤与高热值国内煤混合，在满足锅炉设计参数的前提下，实现成本最优化", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "掺烧没有任何意义", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "只是为了消耗库存", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。掺烧是电厂燃料管理的重要手段：进口低热值煤（如印尼3800大卡）价格便宜，与高热值国内煤（5500大卡）掺配使用可降低成本。"
    },
    {
        question: "贸易商在与印尼供应商签订长期供货协议前，应进行哪些尽职调查（Due Diligence）？",
        options: [
            { text: "不需要做任何调查", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "核查IUP许可证有效性、矿山实地参观、财务状况、过往供货记录、法律合规情况", correct: true, effect: {knowledge: 12, trust: 12, risk: -12} },
            { text: "只需看官网介绍", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "询问同行意见即可", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。供应商尽职调查是防范资源风险、合规风险的必要环节：①核查IUP矿业证有效期和覆盖范围②实地参观矿山设施③核实产能和物流能力。"
    },
    {
        question: "以下哪种商业模式在印尼煤炭贸易中最具可持续性？",
        options: [
            { text: "一次性交易，追求最大单笔利润", correct: false, effect: {knowledge: -5, trust: -5, risk: 8} },
            { text: "建立长期稳定的供销关系，通过服务质量和专业能力持续创造价值", correct: true, effect: {knowledge: 12, trust: 12, risk: -12} },
            { text: "靠信息不对称赚差价，不透明经营", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "只靠低价竞争", correct: false, effect: {knowledge: -5, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。可持续的贸易商业模式：以专业服务和稳定供应赢得长期合约，而非靠信息不对称的一次性套利。随着市场透明度提高，套利空间越来越小。"
    },
    {
        question: "黄老师在印尼煤炭贸易中建立'老板信任度'的核心方法是什么？",
        options: [
            { text: "给更多好处，用金钱买信任", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "诚实守信，按时履约，专业能力出众，出现问题主动沟通解决", correct: true, effect: {knowledge: 12, trust: 15, risk: -15} },
            { text: "隐瞒不好的消息", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "只报喜不报忧", correct: false, effect: {knowledge: -8, trust: -8, risk: 12} }
        ],
        explanation: "答案正确。信任是商业关系的基石：按约履行承诺、遇到困难及时透明沟通、凭专业能力帮助解决问题，这些行为积累起来才能建立长期信任。"
    },
    {
        question: "煤炭贸易中，'风险值'居高不下的根本原因通常是什么？",
        options: [
            { text: "天气太热", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "知识不足（做出错误决策）、不合规操作（走捷径）、风险意识薄弱（不提前规划）", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "运气不好", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "市场价格太低", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。风险积累的根源：①专业知识缺乏→做出错误判断②走捷径不合规→埋下定时炸弹③缺乏预案→遇到问题手忙脚乱。"
    },
    {
        question: "完成印尼煤炭贸易全流程后，最重要的'复盘'内容是什么？",
        options: [
            { text: "只关注利润数字", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "分析每个环节的执行质量、风险点、成本结构，总结经验教训，优化下次操作流程", correct: true, effect: {knowledge: 15, trust: 12, risk: -12} },
            { text: "复盘没有任何意义", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "只总结失败原因", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。专业复盘应涵盖：①利润拆解（每个环节的成本和收益）②风险点分析（哪些地方险些出问题）③流程优化（下次如何做得更好）。"
    }
];

// 将补充题目添加到第10关
if (typeof questionBankData !== 'undefined' && questionBankData[10]) {
    questionBankData[10] = questionBankData[10].concat(level10SupplementQuestions);
}
