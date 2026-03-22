// 第8关补充题目（45道）- 回国卸货与进口
const level8BatchQuestions = [
    // 进口许可证与资质（10道）
    {
        question: "中国煤炭进口需要办理什么许可证？",
        options: [
            { text: "不需要许可证", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "自动进口许可证", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "特殊进口许可证", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "出口许可证", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。中国煤炭进口需要办理自动进口许可证，由商务部或其授权机构签发。"
    },
    {
        question: "煤炭进口企业需要具备什么资质？",
        options: [
            { text: "任何企业都可以进口", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "具有进出口经营权，并在商务部备案", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "只需要营业执照", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "不需要任何资质", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。煤炭进口企业需要具有进出口经营权，并在商务部备案，不是任何企业都可以进口。"
    },
    {
        question: "自动进口许可证的有效期是多久？",
        options: [
            { text: "永久有效", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "当年有效，一般6个月", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "5年", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "1个月", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。自动进口许可证当年有效，一般为6个月，需要在有效期内使用。"
    },
    {
        question: "没有自动进口许可证可以进口煤炭吗？",
        options: [
            { text: "可以", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "不可以，属于无证进口，会被海关扣留处罚", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "可以事后补办", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "只需要罚款", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。没有自动进口许可证不能进口煤炭，属于无证进口，会被海关扣留并处罚。"
    },
    {
        question: "自动进口许可证可以跨年度使用吗？",
        options: [
            { text: "可以", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "不可以，当年有效", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "可以延期", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "可以跨年使用3个月", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。自动进口许可证当年有效，不能跨年度使用，过期需要重新申请。"
    },
    
    // 海关检验（15道）
    {
        question: "中国海关对进口煤炭实施什么检验监管制度？",
        options: [
            { text: "不需要检验", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "法定检验，必须经海关检验合格才能销售使用", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "自愿检验", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "仅抽查", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。进口煤炭属于法定检验商品，必须经海关检验合格后才能销售使用。"
    },
    {
        question: "进口煤炭的放射性检验标准是什么？",
        options: [
            { text: "不需要检验", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "放射性核素活度浓度不得超过规定限值", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "任何放射性都可以", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "仅检验铀", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。进口煤炭放射性核素活度浓度不得超过规定限值，超标将退运或销毁。"
    },
    {
        question: "进口煤炭的环保项目包括哪些？",
        options: [
            { text: "仅检验热值", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "灰分、硫分、汞、砷、磷、氟、氯等", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "仅检验水分", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "不需要环保检验", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。进口煤炭需要检验灰分、硫分、汞、砷、磷、氟、氯等环保项目。"
    },
    {
        question: "进口煤炭检验不合格会有什么后果？",
        options: [
            { text: "可以销售", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "退运、销毁或技术处理，不能销售使用", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "只需要罚款", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "可以降级使用", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。进口煤炭检验不合格必须退运、销毁或技术处理，不能销售使用。"
    },
    {
        question: "进口煤炭的检验地点通常在哪里？",
        options: [
            { text: "产地", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "卸货港", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "买方仓库", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "卖方仓库", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。进口煤炭通常在卸货港进行检验，由海关或指定检验机构执行。"
    },
    {
        question: "进口煤炭的取样应该在什么时候进行？",
        options: [
            { text: "装船前", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "卸货过程中", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "销售后", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "不需要取样", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。进口煤炭取样应在卸货过程中进行，确保样品代表性。"
    },
    {
        question: "进口煤炭的质量索赔期通常是多久？",
        options: [
            { text: "没有期限", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "合同约定的期限，通常60-90天", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "1年", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "5年", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。质量索赔期由合同约定，通常为卸货后60-90天，超过期限不能索赔。"
    },
    {
        question: "进口煤炭的重量检验通常采用什么方法？",
        options: [
            { text: "目测", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "水尺计重或衡器计重", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "估算", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "按提单数量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。进口煤炭重量检验采用水尺计重或衡器计重，以确定实际到货数量。"
    },
    {
        question: "进口煤炭发现短重时，应该怎么办？",
        options: [
            { text: "接受损失", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "及时向船方或保险公司提出索赔", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "隐瞒不报", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "自己承担", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。发现短重应及时向船方或保险公司提出索赔，并保留相关证据。"
    },
    {
        question: "进口煤炭的检验结果与合同不符时，应该怎么办？",
        options: [
            { text: "接受货物", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "根据合同条款提出索赔或拒收", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "隐瞒不报", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "自己处理", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。检验结果与合同不符时，应根据合同条款提出索赔或拒收，维护自身权益。"
    },
    
    // 报关与税费（10道）
    {
        question: "进口煤炭的关税税率是多少？",
        options: [
            { text: "20%", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "0%（最惠国税率）", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "10%", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "5%", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。进口煤炭最惠国税率为0%，东盟国家享受协定税率也是0%。"
    },
    {
        question: "进口煤炭的增值税税率是多少？",
        options: [
            { text: "0%", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "13%", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "17%", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "6%", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。进口煤炭增值税税率为13%，以CIF价加关税为计税基础。"
    },
    {
        question: "进口煤炭的完税价格如何确定？",
        options: [
            { text: "随意确定", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "CIF价格，包括货价、运费、保险费", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "仅货价", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "FOB价格", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。进口煤炭完税价格以CIF价格为基础，包括货价、运费、保险费。"
    },
    {
        question: "进口报关单应在什么时候提交？",
        options: [
            { text: "货物到港后14天内", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "货物装船时", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "货物销售后", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "不需要报关", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。进口报关单应在货物到港后14天内提交，逾期将产生滞报金。"
    },
    {
        question: "滞报金是如何计算的？",
        options: [
            { text: "固定金额", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "按日征收，为完税价格的0.05%", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "按货物重量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不需要缴纳", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。滞报金按日征收，为完税价格的0.05%，起征日为第15天。"
    },
    
    // 卸货与仓储（10道）
    {
        question: "进口煤炭卸货时，以下哪种做法是正确的？",
        options: [
            { text: "直接卸货，不需要监督", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "派人现场监督，记录卸货数量和质量", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "等卸完货后再检查", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "不需要任何记录", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。进口煤炭卸货时应派人现场监督，记录卸货数量和质量，发现问题及时取证。"
    },
    {
        question: "进口煤炭仓储时，以下哪种做法是错误的？",
        options: [
            { text: "分类存放，标识清楚", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "与易燃物品混放", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "定期测温，防止自燃", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "保持通风", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。煤炭不能与易燃物品混放，应分类存放，标识清楚，定期测温，保持通风。"
    },
    {
        question: "进口煤炭堆存时，以下哪种措施可以防止自燃？",
        options: [
            { text: "压实堆存", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "控制堆高，定期倒堆，监测温度", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "覆盖塑料布", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "不需要措施", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。控制堆高，定期倒堆，监测温度可以防止煤炭自燃。"
    },
    {
        question: "进口煤炭的堆存高度一般不应超过多少米？",
        options: [
            { text: "20米", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "10米", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "30米", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "没有限制", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。进口煤炭堆存高度一般不应超过10米，过高会增加自燃风险。"
    },
    {
        question: "进口煤炭发现自燃迹象时，应该怎么办？",
        options: [
            { text: "继续堆存", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "立即倒堆降温，必要时使用阻燃剂", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "浇水", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "隐瞒不报", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。发现自燃迹象应立即倒堆降温，必要时使用阻燃剂，不能浇水或隐瞒。"
    }
];

// 添加到第8关
if (typeof questionBankData !== 'undefined' && questionBankData[8]) {
    questionBankData[8] = questionBankData[8].concat(level8BatchQuestions);
}
