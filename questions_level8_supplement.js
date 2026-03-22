// 第8关补充题目（21道新题）- 回国卸货
const level8SupplementQuestions = [
    {
        question: "煤炭进口到中国，海关监管代码对应的HS编码是什么？",
        options: [
            { text: "2701（无烟煤等）和2701.12、2701.19（烟煤/其他煤）", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "8501（发电机）", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "7201（生铁）", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "4401（木材）", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。煤炭的HS编码在第27章：2701.11(无烟煤)、2701.12(烟煤/动力煤)、2701.19(其他煤)。正确归类对报关和关税计算至关重要。"
    },
    {
        question: "中国进口煤炭实行的'准入名单'制度要求什么？",
        options: [
            { text: "任何来源的煤炭均可进口", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "进口商和进口口岸需在政府核定的名单内，部分口岸有进口煤炭资质要求", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "只有国有企业可以进口煤炭", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不需要任何资质", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} }
        ],
        explanation: "答案正确。中国对煤炭进口实行一定的管理制度，进口口岸、进口企业资质以及煤炭质量标准均有规定。"
    },
    {
        question: "在中国港口卸煤时，船方通常要求签署的'货损保函'（LOI，Letter of Indemnity）用于什么情况？",
        options: [
            { text: "货方要求船方提前放货，未提交正本提单时，向船方出具的保函", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "货物损坏时的理赔申请", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "延迟卸货的赔偿说明", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "海关的进口许可证", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。LOI(以保函换提单)是指在正本提单未到达时，收货人向船东出具保函，承诺日后提交提单并赔偿船东由此产生的损失，换取船东放货。"
    },
    {
        question: "中国海关进口煤炭时，检验检疫项目中'放射性检测'的标准是什么？",
        options: [
            { text: "无任何标准限制", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "煤炭的天然放射性核素含量不得超过规定限值，超标将被退运或销毁", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "只对特定国家进行检测", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "仅抽查部分批次", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。中国海关对所有进口煤炭强制实施放射性检测，依据《进出口固体废物放射性污染防治规定》，超标批次将被退运。"
    },
    {
        question: "进口煤炭到港后，如果发现数量短少，买方应如何处理？",
        options: [
            { text: "直接接受，不追究", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "立即委托公证机构出具公证重量报告，在合同规定期限内向卖方或船方提出书面索赔", correct: true, effect: {knowledge: 12, trust: 12, risk: -12} },
            { text: "向媒体曝光", correct: false, effect: {knowledge: -8, trust: -8, risk: 10} },
            { text: "等下次购货时扣款", correct: false, effect: {knowledge: -5, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。发现数量短少必须及时取证（委托公证行出具重量证明），并在合同约定的索赔期限内（通常30-60天）向责任方索赔。"
    },
    {
        question: "中国对进口煤炭的灰分、硫分的环保限值要求中，以下哪项描述准确？",
        options: [
            { text: "没有任何限制", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "对灰分不超过40%、硫分不超过3%有明确上限，部分地区有更严格的地方标准", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "只限制硫分，不限制灰分", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "仅限制印尼来源的煤炭", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。中国国家标准对进口煤炭有明确的质量限值（灰分≤40%、硫分≤3%等），部分发达省市地方标准更严。超标煤炭需处理或退运。"
    },
    {
        question: "卸煤港口的'胶带输送机计量'和'吃水计重'两种方式，哪种更适合作为贸易结算依据？",
        options: [
            { text: "胶带输送机计量更准确", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "合同约定的计量方式更重要；通常采用经双方认可的第三方吃水计重或岸上地磅", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "两者完全相同，随意选择", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不需要精确计量", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} }
        ],
        explanation: "答案正确。贸易结算应以合同约定的计量方式为准。实践中常用第三方出具的吃水计重报告，或在固定地磅上过磅计量。"
    },
    {
        question: "进口煤炭的'关税完税价格'是如何确定的？",
        options: [
            { text: "按矿山成本价计算", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "以成交价格为基础，通常为CIF价格（含运费、保险）", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "由进口商自行申报任何价格", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "按国际期货价格", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。海关对进口货物的关税完税价格以成交价为基础（通常为CIF价），若申报价格明显低于正常市场水平，海关可进行价格质疑和调整。"
    },
    {
        question: "以下哪种情况，进口商可以申请海关'特殊监管区域'（如保税区）的优惠政策？",
        options: [
            { text: "任何进口货物都可以", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "货物进入特殊监管区后，可暂缓缴纳进口税，待实际销售或转移到境内时再缴税", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "只有出口商品享受此待遇", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "保税区内完全免税", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。保税仓库、综合保税区等特殊监管区允许货物'保税入区'，在区内暂不缴纳进口税和增值税，转内销时才按规定完税。"
    },
    {
        question: "在进口煤炭卸船作业中，'舱底清扫'（Sweeping）是指什么？",
        options: [
            { text: "清洁甲板", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "在抓斗无法取尽后，由工人进入舱内将残余煤炭清扫干净，计入总卸货量", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "清扫港口道路", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "清洗舱壁", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。卸煤时抓斗作业完成后，舱底仍有残余煤炭，需要工人进舱清扫并吊出，这部分'扫舱煤'也计入卸货总量。"
    },
    {
        question: "进口煤炭卸货港对'压载水'（Ballast Water）的管理要求是什么？",
        options: [
            { text: "压载水可以随意排放", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "压载水须经过处理符合标准才能排放，防止外来物种入侵", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "与货物无关，不需要管理", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "只需申报不需处理", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。《压载水管理国际公约》(BWM Convention)要求船舶在排放压载水前必须进行处理，防止将外来水生生物带入。"
    },
    {
        question: "电厂煤炭卸货后，做'来煤检验'（Incoming Coal Analysis）的主要目的是什么？",
        options: [
            { text: "仅为了记录存档", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "验证实际到货质量是否符合合同，作为结算（热值扣罚）和向卖方索赔的依据", correct: true, effect: {knowledge: 12, trust: 12, risk: -12} },
            { text: "用于销售宣传", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "满足政府要求，无实际意义", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。到港检验是买方维权的关键环节，结果直接影响结算金额（按合同热值扣罚/溢价条款），也是向卖方提出质量索赔的依据。"
    },
    {
        question: "进口煤炭的'转口贸易'（Entrepot Trade）中，以下哪种做法必须符合规定？",
        options: [
            { text: "原产地证可以随意更改", correct: false, effect: {knowledge: -10, trust: -10, risk: 20} },
            { text: "转口货物需如实申报原产地，不得伪造原产地证书", correct: true, effect: {knowledge: 12, trust: 12, risk: -12} },
            { text: "转口过程中可以随意改变货物质量", correct: false, effect: {knowledge: -10, trust: -10, risk: 20} },
            { text: "可以通过第三国规避进口国的贸易限制", correct: false, effect: {knowledge: -10, trust: -10, risk: 20} }
        ],
        explanation: "答案正确。转口贸易必须如实申报货物原产地，伪造原产地证书属于欺诈行为，违反WTO规则，可能面临严重的法律处罚。"
    },
    {
        question: "中国海关进口煤炭时，进口增值税的税率通常是多少？",
        options: [
            { text: "0%", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "13%", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "25%", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "6%", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。中国对进口煤炭征收13%的增值税（部分情况有阶段性调整），煤炭进口关税税率视来源国和具体品类而定。"
    },
    {
        question: "进口商收到货物后，发现质量严重不符，以下哪种情况会导致索赔失败？",
        options: [
            { text: "立即委托公证机构取证", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "超过合同规定的索赔时效，且未保留货物样品和相关证据", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "在合同约定期限内书面提出索赔", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "提供第三方检验机构报告", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} }
        ],
        explanation: "答案正确。索赔的关键是时效和证据：必须在合同约定期限内（通常30-90天）提出，并保留完整的检验报告、照片、样品等证据。"
    },
    {
        question: "进口煤炭中，'燃料油等能量当量换算'在电厂采购中有何应用？",
        options: [
            { text: "用于将煤炭的热值折算成等效燃料油价格，便于不同燃料的成本比较", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "煤炭不能与燃料油比较", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "仅用于海关申报", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "没有实际意义", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。能量当量换算（如：1吨5500大卡煤的能量≈0.786吨标准煤）是电厂和贸易商评估不同燃料竞争力的重要工具。"
    },
    {
        question: "在卸货港，'港口拥堵'（Port Congestion）对贸易各方有什么影响？",
        options: [
            { text: "对各方没有影响", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "船舶等待时间延长，会产生额外的'运费待港费'或'滞期费'，同时影响货物资金周转", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "只影响港口收入", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "仅影响船期", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} }
        ],
        explanation: "答案正确。港口拥堵会延长船舶停泊时间，产生滞期费（租船人承担），还导致货物晚到影响电厂用煤，增加供应链的各项成本。"
    },
    {
        question: "中国进口煤炭时，'市场准入'政策在哪种情况下会暂停某国的进口？",
        options: [
            { text: "进口量增加时", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "依据国内供需、贸易政策调整、检疫风险或外交因素，主管部门可暂停特定来源国的进口", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "价格太低时", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "永远不会暂停", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} }
        ],
        explanation: "答案正确。中国政府会根据国内煤炭供需形势、外交关系、检疫安全等因素动态调整进口政策，贸易商须密切关注政策动态。"
    },
    {
        question: "进口商收到的提单（B/L）上显示货物在途中曾转船（Transhipment），对买方有什么影响？",
        options: [
            { text: "没有任何影响", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "转船可能增加货物损失风险；信用证一般禁止转船，须注意L/C条款", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "转船会让货物更安全", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "转船是煤炭运输的惯例", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。散装煤炭通常要求直运，转船会增加货物损失风险、延误风险，且大多数信用证明确禁止转船(Transhipment not allowed)。"
    },
    {
        question: "中国进口商在海外购买煤炭时，通常需要为货物投保哪种保险？",
        options: [
            { text: "火灾险", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "远洋货物运输保险（CIF条件下由卖方投保；FOB条件下由买方自行投保）", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "责任险", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不需要保险", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} }
        ],
        explanation: "答案正确。国际货物运输保险是进口贸易的必要保障。CIF条件下卖方负责投保，FOB条件下买方须自行投保，建议投保一切险或水渍险。"
    },
    {
        question: "以下哪种是进口煤炭进港卸货时，港口会向货主收取的标准费用？",
        options: [
            { text: "只收港口建设费", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "港口建设费、卸货操作费、堆场使用费（堆存费）、装车费等", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "仅收取海关关税", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不收任何费用", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} }
        ],
        explanation: "答案正确。进口煤炭在港口产生多项费用：港口规费、卸货费、堆场使用费（超期则收高额堆存费）、取样化验费、装车/装船费等。"
    }
];

// 将补充题目添加到第8关
if (typeof questionBankData !== 'undefined' && questionBankData[8]) {
    questionBankData[8] = questionBankData[8].concat(level8SupplementQuestions);
}
