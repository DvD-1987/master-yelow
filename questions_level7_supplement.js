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
        explanation: "答案正确。平安险(FPA)承保自然灾害造成的全损和部分损失，是海运货物保险的基本险别。"
    },
    {
        question: "印尼煤炭出口时，原产地证（Certificate of Origin）的签发机构是？",
        options: [
            { text: "印尼煤炭协会", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "印尼贸易部下属机构或印尼工商总会（KADIN）", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "煤矿企业自行签发", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "进口国大使馆", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。水渍险(WPA)除承保平安险责任外，还承保自然灾害造成的单独海损。"
    },
    {
        question: "以下哪种说法正确描述了印尼煤炭出口的HBA（基准价格）制度？",
        options: [
            { text: "HBA是出口的固定价格，不得偏离", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "HBA是印尼政府每月公布的煤炭基准价格，用于计算出口关税", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "HBA只影响国内销售价格", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "HBA是矿山自行制定的价格", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。一切险(All Risks)是最高险别，除承保水渍险责任外，还承保一般外来原因造成的损失。"
    },
    {
        question: "在印尼港口，'引水员'（Pilot）的职责是什么？",
        options: [
            { text: "检查货物质量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "熟悉当地水道，引领船舶安全进出港口", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "负责办理海关手续", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "管理码头工人", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。保险金额通常为CIF价的110%，以便覆盖预期利润。"
    },
    {
        question: "印尼海关的'绿色通道'（Green Lane）和'红色通道'（Red Lane）有什么区别？",
        options: [
            { text: "颜色不同，没有实际区别", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "绿色通道免于查验直接放行，红色通道需要逐票查验货物", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "绿色通道收费更高", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "红色通道速度更快", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} }
        ],
        explanation: "答案正确。保险费率受航线、货物类型、船龄等因素影响。"
    },
    {
        question: "煤炭出口合规中，'DMO'（国内市场义务）政策要求什么？",
        options: [
            { text: "所有煤炭必须全部出口", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "煤矿企业必须将部分产量（通常25%）以优惠价格供应国内市场后，才能申请出口配额", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "出口商必须在国内注册公司", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "进口商必须在印尼设厂", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。煤炭作为易自燃货物，保险公司通常要求特殊条款或加收保费。"
    },
    {
        question: "出口煤炭的装船指令（Shipping Instruction，SI）应该包含哪些要素？",
        options: [
            { text: "仅包含货物名称", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "收货人、通知方、目的港、提单条款、货物描述、数量、唛头等完整信息", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "只需目的港", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "只需买方联系方式", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。保险索赔应在事故发生后及时向保险公司报案，并在规定时限内提交索赔文件。"
    },
    {
        question: "以下哪种情形会导致印尼海关扣押出口货物？",
        options: [
            { text: "按时提交所有单证", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "货物描述与申报不符、价格明显低于市场价（涉嫌低报逃税）", correct: true, effect: {knowledge: 12, trust: 12, risk: -12} },
            { text: "船舶正常靠泊", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "支付了所有港口费用", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} }
        ],
        explanation: "答案正确。保险代位求偿权是指保险公司赔付后取代被保险人向第三方追偿的权利。"
    },
    {
        question: "出口信用证（L/C）业务中，'议付行'（Negotiating Bank）的作用是什么？",
        options: [
            { text: "签发信用证", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "审核出口商提交的单据，符合信用证条款后买入单据并付款", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "负责货物检验", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "安排船舶运输", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。伦敦保险协会条款(ICC)是国际通用的海运保险条款。"
    },
    {
        question: "ICSB（印尼煤炭出口确认书）主要用于什么目的？",
        options: [
            { text: "确认煤炭质量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "向印尼矿业能源部报告出口数量和价格，用于监管和关税计算", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "替代提单使用", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "用于保险索赔", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。检验鉴定类保单由第三方检验机构出具，比如CCIC。"
    },
    {
        question: "在印尼出口通关中，'ATA单证册'（ATA Carnet）通常用于哪种情况？",
        options: [
            { text: "大批量煤炭出口", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "展品、商业样品、专业设备等临时出境物品的通关", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "煤炭出口退税", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "所有货物出口都用ATA单证册", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} }
        ],
        explanation: "答案正确。保险单是向银行结汇的重要单据之一。"
    },
    {
        question: "在处理印尼煤炭出口中的'洗钱'风险时，以下哪种做法是合规的？",
        options: [
            { text: "接受来历不明的资金", correct: false, effect: {knowledge: -10, trust: -10, risk: 20} },
            { text: "对客户进行KYC（了解你的客户）审查，通过正规银行渠道收付款", correct: true, effect: {knowledge: 12, trust: 12, risk: -12} },
            { text: "用现金结算以避免审查", correct: false, effect: {knowledge: -10, trust: -10, risk: 20} },
            { text: "拒绝提供任何资金来源证明", correct: false, effect: {knowledge: -10, trust: -10, risk: 20} }
        ],
        explanation: "答案正确。无单放货是指在正本提单未到达情况下凭保函放货，是常见的贸易风险。"
    },
    {
        question: "印尼煤炭出口关税的计算基础是什么价格？",
        options: [
            { text: "买方报价", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "印尼政府公布的每月HBA基准价格", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "矿山成本价", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "国际期货价格", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。印尼是东盟成员国，中国从印尼进口煤炭享受中国-东盟自由贸易区协定税率。"
    },
    {
        question: "离港时，船长需要向港口当局提交'危险货物申报'（DG Declaration）吗？煤炭需要申报吗？",
        options: [
            { text: "不需要，煤炭不是危险货物", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "需要。散装煤炭在IMSBC Code中被列为B类货物（可能产生可燃气体），须按规定申报和采取安全措施", correct: true, effect: {knowledge: 12, trust: 12, risk: -12} },
            { text: "只有爆炸物需要申报", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "视矿山而定", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。原产地证书是享受协定税率的必要凭证，需在进口时向海关提交。"
    },
    {
        question: "出口单证中，'装箱单'（Packing List）在散装煤炭贸易中有何作用？",
        options: [
            { text: "散装煤炭不需要装箱单", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "散装煤炭通常以重量清单（Weight List）代替，记录各舱的装载量", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "与集装箱货物完全相同", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "只需提单即可，不需要装箱单", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。进口煤炭需符合中国国家标准，主要指标包括热值、灰分、硫分等。"
    },
    {
        question: "以下哪种做法可以有效降低信用证（L/C）业务中的单证不符（Discrepancy）风险？",
        options: [
            { text: "等货物装船后再准备单据", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "在开证前与买方仔细核对条款，确保所有单证要求可以做到，装船后尽快制单", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "只关注价格条款", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "让船方准备所有单据", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。中国对进口煤炭实施自动进口许可管理，不是禁止或限制进口的商品。"
    },
    {
        question: "以下哪种单据是进口银行向买方结汇的直接依据？",
        options: [
            { text: "装船指令（SI）", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "信用证项下的全套单据（提单、发票、检验报告、原产地证等）", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "合同副本", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "报关单", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。中国海关对进口煤炭实施法定检验，不合格不得进口。"
    },
    {
        question: "在印尼，煤炭出口的环保合规要求主要体现在哪些方面？",
        options: [
            { text: "只需缴纳环境税", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "矿山需持有有效的AMDAL（环境影响评估）批准文件，且需缴纳矿山复垦保证金", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "没有环保合规要求", correct: false, effect: {knowledge: -10, trust: -8, risk: 15} },
            { text: "只需要种植树木", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。进口煤炭放射性超标将被退运或销毁，不能在中国市场销售。"
    },
    {
        question: "以下哪种情况，出口商可以要求将'不清洁提单'更改为'清洁提单'？",
        options: [
            { text: "向船方缴纳额外费用后直接更改", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "不能随意更改；但若批注是因误解造成且实际货物无问题，可出具保函申请更改，风险由出口商承担", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "任何时候都可以更改", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "通知买方后可以更改", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。无单放货可能导致贸易欺诈，银行可能不接受此做法，且属于欺诈风险领域。"
    },
    {
        question: "在印尼煤炭出口实务中，'免租期'（Free Time）是指什么？",
        options: [
            { text: "船舶无偿使用港口的时间", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "租船合同中，货主可以免费使用船舶进行装卸的允许时间（Laytime内的免费时间）", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "港口工人的休息时间", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "海关免于检查的时间", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。租船合同中的Laytime就是货主免费使用船舶的时间(即免租期)，在此时间内完成装卸无需额外支付费用。"
    }
];

// 将补充题目添加到第7关
if (typeof questionBankData !== 'undefined' && questionBankData[7]) {
    questionBankData[7] = questionBankData[7].concat(level7SupplementQuestions);
}
