// 第4关补充题目（45道）- 贸易谈判与合同
const level4BatchQuestions = [
    // 国际贸易术语（10道）
    {
        question: "CFR条款与CIF条款的主要区别是什么？",
        options: [
            { text: "CFR包含保险，CIF不包含", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "CIF包含保险，CFR不包含", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "两者完全相同", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "CFR仅用于海运", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。CFR(成本加运费)和CIF(成本加保险费加运费)的主要区别是CIF包含保险费。参考：INCOTERMS 2020。"
    },
    {
        question: "EXW条款中，卖方的责任是什么？",
        options: [
            { text: "负责将货物运到目的港", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "在工厂或仓库将货物交给买方", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "负责装船", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "负责报关", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。EXW(工厂交货)是卖方责任最小的术语，卖方只需在工厂或仓库将货物交给买方。参考：INCOTERMS 2020。"
    },
    {
        question: "DAP条款的含义是什么？",
        options: [
            { text: "目的港船上交货", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "目的地交货（不含卸货）", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "装运港船上交货", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "工厂交货", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。DAP(Delivered at Place)目的地交货，卖方负责将货物运到指定目的地，但不含卸货。参考：INCOTERMS 2020。"
    },
    {
        question: "DDP条款中，谁负责进口报关和缴纳进口税费？",
        options: [
            { text: "买方", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "卖方", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "船公司", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "银行", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。DDP(完税后交货)是卖方责任最大的术语，卖方负责进口报关和缴纳进口税费。参考：INCOTERMS 2020。"
    },
    {
        question: "FAS条款中，卖方的责任截止到什么位置？",
        options: [
            { text: "货物装上船", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "货物交到船边（码头或驳船上）", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "货物到达目的港", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "货物通过海关", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。FAS(船边交货)中，卖方将货物交到船边(码头或驳船上)即完成交货义务。参考：INCOTERMS 2020。"
    },
    {
        question: "CPT条款与CFR条款的主要区别是什么？",
        options: [
            { text: "CPT仅用于海运，CFR可用于各种运输方式", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "CPT可用于各种运输方式，CFR仅用于海运", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "两者完全相同", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "CPT包含保险，CFR不包含", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。CPT(运费付至)可用于各种运输方式，而CFR仅适用于海运和内河运输。参考：INCOTERMS 2020。"
    },
    {
        question: "CIP条款与CIF条款的主要区别是什么？",
        options: [
            { text: "CIP仅用于海运，CIF可用于各种运输方式", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "CIP可用于各种运输方式，CIF仅用于海运", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "两者完全相同", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "CIP不包含保险", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。CIP(运费和保险费付至)可用于各种运输方式，而CIF仅适用于海运。参考：INCOTERMS 2020。"
    },
    {
        question: "DAT条款的含义是什么？",
        options: [
            { text: "目的地交货（不含卸货）", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "目的地或目的港的集散站交货（含卸货）", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "装运港船上交货", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "工厂交货", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。DAT(运输终端交货)在2020版INCOTERMS中改为DPU，指在目的地或目的港的集散站将货物卸下后完成交货。参考：INCOTERMS 2020。"
    },
    {
        question: "在FOB条款下，谁负责租船订舱？",
        options: [
            { text: "卖方", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "买方", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "船公司", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "银行", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。FOB条款下，买方负责租船订舱，卖方负责将货物装上买方指定的船舶。参考：INCOTERMS 2020。"
    },
    {
        question: "在CIF条款下，谁负责租船订舱和购买保险？",
        options: [
            { text: "买方", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "卖方", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "船公司", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "保险公司", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。CIF条款下，卖方负责租船订舱和购买保险，但风险在装运港货物装上船时转移给买方。参考：INCOTERMS 2020。"
    },
    
    // 合同条款（15道）
    {
        question: "煤炭贸易合同中，数量条款通常如何约定？",
        options: [
            { text: "固定数量，不允许浮动", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "约定基准数量，允许一定比例的溢短装", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "随意数量", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "仅按实际装载量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。数量条款通常约定基准数量，并允许一定比例的溢短装(如±10%)，以应对实际装船差异。"
    },
    {
        question: "煤炭贸易中，检验条款通常如何约定？",
        options: [
            { text: "不需要检验", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "约定检验机构、检验标准、取样方法和争议处理机制", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "仅由买方检验", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "仅由卖方检验", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。检验条款必须明确约定检验机构(如 CCIC)、检验标准、取样方法和争议处理机制。"
    },
    {
        question: "煤炭贸易合同中，价格调整条款通常针对哪些指标？",
        options: [
            { text: "仅针对热值", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "热值、灰分、硫分、水分等质量指标", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "仅针对运输费用", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不需要价格调整", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。价格调整条款通常针对热值(Qnet)、灰分(Ash)、硫分(S)、水分(Mt)等质量指标，根据实际检验结果按约定公式调整价格。"
    },
    {
        question: "煤炭贸易中，不可抗力条款通常包括哪些情况？",
        options: [
            { text: "仅包括自然灾害", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "自然灾害、战争、政府禁令等不能预见、不能避免、不能克服的情况", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "仅包括市场价格波动", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "仅包括运输延误", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。不可抗力包括自然灾害(地震、洪水、台风等)、战争、政府禁令、罢工等不能预见、不能避免、不能克服的客观情况。参考：联合国国际货物销售合同公约(CISG)。"
    },
    {
        question: "煤炭贸易合同中，争议解决条款通常如何约定？",
        options: [
            { text: "只能通过诉讼解决", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "约定仲裁机构或管辖法院，以及适用的法律", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "不需要约定", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "只能通过协商解决", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。争议解决条款应约定仲裁机构(如CIETAC、SICC等)或管辖法院，以及适用的法律(如英国法、新加坡法等)。"
    },
    {
        question: "煤炭贸易中，装运期条款通常如何约定？",
        options: [
            { text: "不约定具体装运期", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "约定具体装运期或装运期范围，以及延误的处理方式", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "仅口头约定", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "由船公司决定", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。装运期条款应约定具体装运期或装运期范围，以及延误的处理方式(如违约金、解除合同等)。"
    },
    {
        question: "煤炭贸易合同中，所有权转移条款通常在什么时候生效？",
        options: [
            { text: "合同签订时", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "根据贸易术语约定，如FOB在装运港装船后，CIF在装运港装船后", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "货物到达目的港时", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "买方付款时", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。所有权转移时间根据贸易术语约定，如FOB、CIF等都是在装运港货物装上船时转移，风险和所有权同时转移。"
    },
    {
        question: "煤炭贸易中，违约金条款的作用是什么？",
        options: [
            { text: "惩罚违约方", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "补偿守约方因违约造成的损失，并约束双方履约", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "增加合同金额", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "没有实际作用", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。违约金条款主要是为了补偿守约方因违约造成的损失，同时对双方形成履约约束，通常约定为合同金额的一定比例。"
    },
    {
        question: "煤炭贸易合同中，保密条款通常包括哪些内容？",
        options: [
            { text: "仅包括价格信息", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "价格、供应商信息、客户信息、技术资料等商业秘密", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "仅包括合同金额", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不需要保密条款", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。保密条款通常包括价格条款、供应商信息、客户信息、技术资料等商业秘密，保护双方商业利益。"
    },
    {
        question: "煤炭贸易中，合同生效条款通常如何约定？",
        options: [
            { text: "双方签字后立即生效", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "约定生效条件，如双方签字盖章、预付款到账等", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "不需要约定", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "口头约定即可", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。合同生效条款应约定生效条件，如双方签字盖章、预付款到账等，明确合同何时开始具有法律效力。"
    },
    {
        question: "煤炭贸易合同中，通知条款的作用是什么？",
        options: [
            { text: "仅用于问候", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "明确双方通知方式、地址，确保重要信息及时送达", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "没有实际作用", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "仅用于催款", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。通知条款明确双方通知方式(邮件、传真等)、地址，确保装船通知、付款通知等重要信息能够及时送达。"
    },
    {
        question: "煤炭贸易中，合同修改条款通常如何约定？",
        options: [
            { text: "口头修改即可", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "必须以书面形式修改，并经双方签字确认", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "单方可以修改", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "不能修改", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。合同修改条款通常约定必须以书面形式修改，并经双方签字确认，口头约定不产生合同效力。"
    },
    {
        question: "煤炭贸易合同中，转让条款通常如何约定？",
        options: [
            { text: "可以随意转让", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "未经对方同意，不得转让合同权利和义务", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "只能转让权利，不能转让义务", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不需要约定", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。转让条款通常约定未经对方书面同意，任何一方不得转让合同权利和义务，保护双方利益。"
    },
    {
        question: "煤炭贸易中，合同终止条款通常包括哪些情况？",
        options: [
            { text: "仅包括合同履行完毕", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "履行完毕、双方协商一致、一方违约、不可抗力等", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "单方可以随时终止", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "不能终止", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。合同终止条款通常包括：履行完毕、双方协商一致、一方严重违约、不可抗力持续一定时间等。"
    },
    
    // 付款方式（10道）
    {
        question: "信用证（L/C）付款方式中，开证行承担什么责任？",
        options: [
            { text: "仅负责传递单据", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "在单证相符条件下，承担第一性付款责任", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "仅负责通知", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不承担任何责任", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。信用证是银行信用，开证行在单证相符条件下承担第一性付款责任，与买方是否付款无关，是银行保函。"
    },
    {
        question: "T/T（电汇）付款方式的主要风险是什么？",
        options: [
            { text: "银行风险", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "商业信用风险，买方可能不付款或延迟付款", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "没有风险", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "汇率风险", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} }
        ],
        explanation: "答案正确。T/T(电汇)是商业信用，主要风险是买方可能不付款或延迟付款，对卖方风险较大，通常结合预付款方式使用。"
    },
    {
        question: "D/P（付款交单）方式中，买方什么时候可以拿到单据？",
        options: [
            { text: "单据到达即可", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "付款后", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "承兑汇票后", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不需要付款", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。D/P(付款交单)是指买方付款后才能从银行拿到单据，对卖方有一定保障，但仍依赖买方信用。"
    },
    {
        question: "D/A（承兑交单）方式中，买方什么时候可以拿到单据？",
        options: [
            { text: "付款后", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "承兑汇票后", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "单据到达即可", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不需要任何条件", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。D/A(承兑交单)是指买方承兑汇票后即可从银行拿到单据，到期后再付款，对卖方风险较大。"
    },
    {
        question: "信用证中的'软条款'是指什么？",
        options: [
            { text: "对卖方有利的条款", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "使信用证实际无法生效或使卖方无法履约的条款", correct: true, effect: {knowledge: 15, trust: 15, risk: -15} },
            { text: "标准条款", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "银行条款", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。软条款是使信用证实际无法生效或使卖方无法履约的条款，如要求买方签字的检验证书、限制船公司等，是常见的陷阱条款。"
    },
    {
        question: "煤炭贸易中，预付款（T/T in advance）方式对哪方风险最大？",
        options: [
            { text: "卖方", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "买方", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "银行", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "没有风险", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。预付款方式对买方风险最大，因为买方先付款，可能面临卖方不发货或货物质量不符的风险。"
    },
    {
        question: "信用证中的'不符点'是指什么？",
        options: [
            { text: "价格差异", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "单据与信用证条款不一致的地方", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "货物质量问题", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "运输延误", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。不符点是指单据与信用证条款不一致的地方，如发票金额与信用证不符、装运期逾期、提单日期晚于最迟装运日等，可能导致拒付。"
    },
    {
        question: "煤炭贸易中，分期付款方式通常如何约定？",
        options: [
            { text: "一次性付清", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "合同签订付一部分，装船后付一部分，到港后付清", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "仅到货后付款", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "随意支付", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。分期付款通常约定合同签订付一部分(如30%)，装船后付一部分(如70%)，或到港后付清，平衡双方风险。"
    },
    {
        question: "信用证的有效期通常如何确定？",
        options: [
            { text: "随意设定", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "根据装运期和交单期合理设定，确保卖方有足够时间交单", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "越长越好", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "越短越好", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。信用证有效期应根据装运期和交单期合理设定，确保卖方有足够时间准备和提交单据，通常设定为装运后15-21天。"
    },
    {
        question: "煤炭贸易中，保证金（Deposit）的作用是什么？",
        options: [
            { text: "支付货款", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "保证合同履行，违约时可没收或抵扣", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "没有作用", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "支付运费", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。保证金是为了保证合同履行，一方违约时，另一方可以没收保证金或用于抵扣损失，通常为合同金额的5-10%。"
    },
    
    // 谈判技巧（10道）
    {
        question: "煤炭贸易谈判中，以下哪种做法是正确的？",
        options: [
            { text: "一开始就提出最低价", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "了解对方需求，寻找双赢方案", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "隐瞒关键信息", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "强硬施压，逼迫对方接受", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。成功的谈判应了解对方需求，寻找双赢方案，建立长期合作关系，而不是单方面施压或欺骗。"
    },
    {
        question: "在价格谈判中，以下哪种策略最有效？",
        options: [
            { text: "坚持自己的价格，不做任何让步", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "了解市场行情，提出合理价格，并准备让步空间", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "随意报价", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "只关注价格，不考虑其他条款", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。有效的价格谈判应了解市场行情，提出合理价格，准备让步空间，同时关注质量、付款方式、交货期等其他条款。"
    },
    {
        question: "煤炭贸易谈判中，以下哪种信息不应该透露给对方？",
        options: [
            { text: "公司的基本资质", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "自己的底价和迫切程度", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "产品的质量标准", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "交货时间", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。自己的底价和迫切程度是谈判的核心机密，不应轻易透露给对方，以免失去谈判主动权。"
    },
    {
        question: "在合同条款谈判中，以下哪种做法是正确的？",
        options: [
            { text: "只关注价格，其他条款不重要", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "综合考虑价格、质量、付款方式、交货期、违约责任等所有条款", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "完全接受对方提出的条款", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "口头约定即可", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。合同条款谈判应综合考虑价格、质量、付款方式、交货期、违约责任等所有条款，追求整体最优。"
    },
    {
        question: "煤炭贸易谈判中，遇到僵局时应该怎么做？",
        options: [
            { text: "终止谈判", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "暂时休会，寻找替代方案，或引入第三方协调", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "强行要求对方接受", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "放弃自己的要求", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。合同条款谈判应坦诚沟通，理解对方关切，找到双方都能接受的方案，而不是隐瞒重要信息。"
    }
];

// 添加到第4关
if (typeof questionBankData !== 'undefined' && questionBankData[4]) {
    questionBankData[4] = questionBankData[4].concat(level4BatchQuestions);
}
