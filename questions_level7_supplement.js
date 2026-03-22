// 第7关补充题目（20道新题）- 离港通关
const level7SupplementQuestions = [
    {
        question: "印尼煤炭出口需要提交的'ETPIK'证书是什么？",
        options: [
            { text: "印尼环保许可证", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "印尼出口商注册证书（Eksportir Terdaftar Produk Industri Kehutanan的缩写变体，煤炭出口商注册证）", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "印尼矿山安全证书", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "印尼质量认证证书", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "印尼对煤炭出口商实行注册制度，出口商必须向矿业和能源部申请注册，取得出口商资质，才能合法从事煤炭出口业务。"
    },
    {
        question: "印尼煤炭出口时，原产地证（Certificate of Origin）的签发机构是？",
        options: [
            { text: "印尼煤炭协会", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "印尼贸易部下属机构或印尼工商总会（KADIN）", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "煤矿企业自行签发", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "进口国大使馆", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "原产地证由印尼贸易部授权的商会或机构（如KADIN）签发，证明货物的来源地，是进口国海关和享受优惠关税的重要文件。"
    },
    {
        question: "以下哪种说法正确描述了印尼煤炭出口的HBA（基准价格）制度？",
        options: [
            { text: "HBA是出口的固定价格，不得偏离", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "HBA是印尼政府每月公布的煤炭基准价格，用于计算出口关税", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "HBA只影响国内销售价格", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "HBA是矿山自行制定的价格", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "印尼政府通过HBA（Harga Batubara Acuan）每月公布各煤种的基准价格，依据HBA与实际出口价格的关系计算出口关税税率，是出口贸易的重要政策工具。"
    },
    {
        question: "在印尼港口，'引水员'（Pilot）的职责是什么？",
        options: [
            { text: "检查货物质量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "熟悉当地水道，引领船舶安全进出港口", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "负责办理海关手续", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "管理码头工人", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "引水员（Pilot）是熟悉本港水道、航道条件的专业引航人员，负责在港口水域内引领船舶安全进出，是港口强制要求的。"
    },
    {
        question: "印尼海关的'绿色通道'（Green Lane）和'红色通道'（Red Lane）有什么区别？",
        options: [
            { text: "颜色不同，没有实际区别", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "绿色通道免于查验直接放行，红色通道需要逐票查验货物", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "绿色通道收费更高", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "红色通道速度更快", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} }
        ],
        explanation: "印尼海关采用分类管理，绿色通道（Green Lane）免于实物查验可直接放行，红色通道（Red Lane）须开箱或登船实物查验，通关时间更长。"
    },
    {
        question: "煤炭出口合规中，'DMO'（国内市场义务）政策要求什么？",
        options: [
            { text: "所有煤炭必须全部出口", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "煤矿企业必须将部分产量（通常25%）以优惠价格供应国内市场后，才能申请出口配额", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "出口商必须在国内注册公司", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "进口商必须在印尼设厂", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "印尼的DMO（Domestic Market Obligation）政策规定煤矿必须优先保障国内供应，通常要求将至少25%的产量以固定价格（如65美元/吨）供应国内，之后剩余产量才可出口。"
    },
    {
        question: "出口煤炭的装船指令（Shipping Instruction，SI）应该包含哪些要素？",
        options: [
            { text: "仅包含货物名称", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "收货人、通知方、目的港、提单条款、货物描述、数量、唛头等完整信息", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "只需目的港", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "只需买方联系方式", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "SI是托运人给船公司的装船指令，必须包含完整信息：收货人（Consignee）、通知方（Notify Party）、装卸港、货物描述、数量、提单条款选择（如'To Order'）等。"
    },
    {
        question: "以下哪种情形会导致印尼海关扣押出口货物？",
        options: [
            { text: "按时提交所有单证", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "货物描述与申报不符、价格明显低于市场价（涉嫌低报逃税）", correct: true, effect: {knowledge: 12, trust: 12, risk: -12} },
            { text: "船舶正常靠泊", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "支付了所有港口费用", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} }
        ],
        explanation: "申报不实（货物描述不符、低报价格）是海关重点打击行为，一旦发现会扣押货物、处以高额罚款，情节严重可追究刑事责任。"
    },
    {
        question: "出口信用证（L/C）业务中，'议付行'（Negotiating Bank）的作用是什么？",
        options: [
            { text: "签发信用证", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "审核出口商提交的单据，符合信用证条款后买入单据并付款", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "负责货物检验", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "安排船舶运输", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "议付行是出口商所在地的银行，在审核受益人（出口商）提交的全套单据与信用证条款相符后，买入单据并向出口商支付货款，再向开证行索偿。"
    },
    {
        question: "ICSB（印尼煤炭出口确认书）主要用于什么目的？",
        options: [
            { text: "确认煤炭质量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "向印尼矿业能源部报告出口数量和价格，用于监管和关税计算", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "替代提单使用", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "用于保险索赔", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "印尼要求出口商在每批出口前向政府主管部门申报并获得出口配额确认，该文件记录出口数量、价格、买方等信息，用于政府监管和关税征收。"
    },
    {
        question: "在印尼出口通关中，'ATA单证册'（ATA Carnet）通常用于哪种情况？",
        options: [
            { text: "大批量煤炭出口", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "展品、商业样品、专业设备等临时出境物品的通关", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "煤炭出口退税", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "所有货物出口都用ATA单证册", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} }
        ],
        explanation: "ATA Carnet是一种国际通关证件，主要用于展品、专业设备、商业样品等临时出入境物品，不用于正式贸易货物的出口。"
    },
    {
        question: "在处理印尼煤炭出口中的'洗钱'风险时，以下哪种做法是合规的？",
        options: [
            { text: "接受来历不明的资金", correct: false, effect: {knowledge: -10, trust: -10, risk: 20} },
            { text: "对客户进行KYC（了解你的客户）审查，通过正规银行渠道收付款", correct: true, effect: {knowledge: 12, trust: 12, risk: -12} },
            { text: "用现金结算以避免审查", correct: false, effect: {knowledge: -10, trust: -10, risk: 20} },
            { text: "拒绝提供任何资金来源证明", correct: false, effect: {knowledge: -10, trust: -10, risk: 20} }
        ],
        explanation: "反洗钱（AML）合规要求对客户进行充分的KYC审查，了解资金来源，通过正规金融渠道交易，保留完整的交易记录，这是国际贸易的基本合规要求。"
    },
    {
        question: "印尼煤炭出口关税的计算基础是什么价格？",
        options: [
            { text: "买方报价", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "印尼政府公布的每月HBA基准价格", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "矿山成本价", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "国际期货价格", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "印尼煤炭出口关税以政府每月公布的HBA基准价格为基础，通过比较实际出口价格与HBA的关系，按阶梯税率征收，防止价格低报逃税。"
    },
    {
        question: "离港时，船长需要向港口当局提交'危险货物申报'（DG Declaration）吗？煤炭需要申报吗？",
        options: [
            { text: "不需要，煤炭不是危险货物", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "需要。散装煤炭在IMSBC Code中被列为B类货物（可能产生可燃气体），须按规定申报和采取安全措施", correct: true, effect: {knowledge: 12, trust: 12, risk: -12} },
            { text: "只有爆炸物需要申报", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "视矿山而定", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "根据国际固体散装货物规则（IMSBC Code），散装煤炭属于B类货物（可能产生甲烷等可燃气体），必须按规定向船长申报煤炭特性，采取通风、监测等安全措施。"
    },
    {
        question: "出口单证中，'装箱单'（Packing List）在散装煤炭贸易中有何作用？",
        options: [
            { text: "散装煤炭不需要装箱单", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "散装煤炭通常以重量清单（Weight List）代替，记录各舱的装载量", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "与集装箱货物完全相同", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "只需提单即可，不需要装箱单", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "散装煤炭通常出具'重量清单'（Weight Certificate/Weight List）代替传统装箱单，记录各舱的装煤量和总量，与吃水计重报告配合使用。"
    },
    {
        question: "以下哪种做法可以有效降低信用证（L/C）业务中的单证不符（Discrepancy）风险？",
        options: [
            { text: "等货物装船后再准备单据", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "在开证前与买方仔细核对条款，确保所有单证要求可以做到，装船后尽快制单", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "只关注价格条款", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "让船方准备所有单据", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "降低不符点风险的关键：开证前仔细审核L/C条款的可行性、提前与各单据签发方沟通要求、装船后第一时间制单审核，确保单证严格相符。"
    },
    {
        question: "以下哪种单据是进口银行向买方结汇的直接依据？",
        options: [
            { text: "装船指令（SI）", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "信用证项下的全套单据（提单、发票、检验报告、原产地证等）", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "合同副本", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "报关单", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "信用证业务是单证交易，开证行向买方结汇时，以审核通过的全套信用证项下单据为准，单据与信用证条款相符是付款的唯一条件。"
    },
    {
        question: "在印尼，煤炭出口的环保合规要求主要体现在哪些方面？",
        options: [
            { text: "只需缴纳环境税", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "矿山需持有有效的AMDAL（环境影响评估）批准文件，且需缴纳矿山复垦保证金", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "没有环保合规要求", correct: false, effect: {knowledge: -10, trust: -8, risk: 15} },
            { text: "只需要种植树木", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "印尼矿山必须持有AMDAL批准，定期提交环保执行报告，并向政府缴纳矿山复垦保证金（Jaminan Reklamasi），作为矿山关闭后恢复环境的担保。"
    },
    {
        question: "以下哪种情况，出口商可以要求将'不清洁提单'更改为'清洁提单'？",
        options: [
            { text: "向船方缴纳额外费用后直接更改", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "不能随意更改；但若批注是因误解造成且实际货物无问题，可出具保函申请更改，风险由出口商承担", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "任何时候都可以更改", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "通知买方后可以更改", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "不清洁提单（Claused B/L）原则上应如实反映货物状态。出口商若坚持要求清洁提单，需向船东出具'保函'承担由此产生的风险，但信用证项下银行可能不接受此做法，且属于欺诈风险领域。"
    },
    {
        question: "在印尼煤炭出口实务中，'免租期'（Free Time）是指什么？",
        options: [
            { text: "船舶无偿使用港口的时间", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "租船合同中，货主可以免费使用船舶进行装卸的允许时间（Laytime内的免费时间）", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "港口工人的休息时间", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "海关免于检查的时间", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "租船合同中的Laytime就是货主免费使用船舶的时间（即免租期），在此时间内完成装卸无需额外支付费用，超出则支付滞期费。"
    }
];

// 将补充题目添加到第7关
if (typeof questionBankData !== 'undefined' && questionBankData[7]) {
    questionBankData[7] = questionBankData[7].concat(level7SupplementQuestions);
}
