// 第9关补充题目（45道）- 电厂投标
const level9BatchQuestions = [
    // 招标流程（15道）
    {
        question: "电厂煤炭招标通常采用什么方式？",
        options: [
            { text: "直接采购", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "公开招标或邀请招标", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "私下协商", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "不需要招标", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。电厂煤炭采购通常采用公开招标或邀请招标方式，确保公平竞争。"
    },
    {
        question: "资格预审的主要目的是什么？",
        options: [
            { text: "确定中标价格", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "筛选符合条件的投标人", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "签订合同", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "支付保证金", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。资格预审是筛选符合条件的投标人，审查资质、业绩、财务状况等。"
    },
    {
        question: "招标文件发售期不得少于多少天？",
        options: [
            { text: "3天", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "5个工作日", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "1天", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "10天", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。招标文件发售期不得少于5个工作日，确保投标人有足够时间准备。"
    },
    {
        question: "投标保证金一般为投标报价的多少？",
        options: [
            { text: "10%-20%", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "2%-5%", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "50%", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "不需要", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。投标保证金一般为投标报价的2%-5%，最高不超过80万元。"
    },
    {
        question: "投标有效期一般为多少天？",
        options: [
            { text: "7天", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "60-90天", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "1天", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "180天", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。投标有效期一般为60-90天，确保有足够时间完成评标和合同签订。"
    },
    {
        question: "开标时，以下哪种情况会导致废标？",
        options: [
            { text: "报价合理", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "投标文件未密封或逾期送达", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "资质齐全", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "签字盖章完整", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。投标文件未密封或逾期送达会导致废标，必须严格遵守投标要求。"
    },
    {
        question: "评标委员会成员一般不少于多少人？",
        options: [
            { text: "3人", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "5人", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "1人", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "10人", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。评标委员会成员一般不少于5人，其中技术经济专家不少于2/3。"
    },
    {
        question: "中标通知书发出后，应在多少天内签订合同？",
        options: [
            { text: "7天", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "30天内", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "90天", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不需要签订", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。中标通知书发出后，应在30天内签订合同，逾期可能需要重新招标。"
    },
    {
        question: "以下哪种行为属于串通投标？",
        options: [
            { text: "独立编制投标文件", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "投标人之间协商报价", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "按要求提供资质", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "如实报价", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。投标人之间协商报价属于串通投标，是违法行为，会导致投标无效。"
    },
    {
        question: "招标文件中，以下哪项不是必须包含的内容？",
        options: [
            { text: "投标人须知", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "投标人的家庭住址", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "评标办法", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "合同条款", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。招标文件应包含投标人须知、评标办法、合同条款等，不需要家庭住址。"
    },
    
    // 评标方法（15道）
    {
        question: "最低评标价法是指什么？",
        options: [
            { text: "报价最低者中标", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "在满足实质性要求的投标人中，评标价最低者中标", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "质量最好者中标", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "关系最好者中标", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。最低评标价法是在满足招标文件实质性要求的前提下，选择评标价格最低的投标人为中标候选人。"
    },
    {
        question: "综合评估法通常考虑哪些因素？",
        options: [
            { text: "仅价格", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "价格、质量、技术、服务、信誉等", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "仅质量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "仅关系", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。综合评分法是将价格、技术、商务等各项因素量化打分，总分最高者中标。"
    },
    {
        question: "技术评分一般占总分的多少？",
        options: [
            { text: "100%", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "30%-60%", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "0%", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "90%", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。技术评分主要考察投标文件对技术要求的响应程度、方案可行性等。"
    },
    {
        question: "价格分计算中，以下哪种方法常用？",
        options: [
            { text: "随机打分", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "基准价法或最低投标价法", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "最高投标价法", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "平均价法", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。商务评分主要考察投标人的资质、业绩、服务能力、交货期等。"
    },
    {
        question: "评标过程中，以下哪种情况可以澄清？",
        options: [
            { text: "报价错误", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "投标文件中的细微偏差", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "资质不符", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "重大偏差", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。投标报价明显低于成本价可能被视为恶性低价竞争，导致废标或启动成本调查。"
    },
    {
        question: "中标候选人一般推荐几名？",
        options: [
            { text: "1名", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "1-3名", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "10名", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不需要推荐", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。投标人不足3家应重新招标，确保竞争的充分性。"
    },
    {
        question: "以下哪种情况可以否决所有投标？",
        options: [
            { text: "报价都合理", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "所有投标都不符合招标文件要求", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "投标人太多", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "评标时间太长", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。中标结果应在指定媒体公示，公示期不得少于3天。"
    },
    {
        question: "评标报告应由谁签字？",
        options: [
            { text: "仅招标人", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "全体评标委员会成员", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "仅中标人", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "不需要签字", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。投标人对招标文件有异议的，应在投标截止时间10日前提出。"
    },
    {
        question: "中标结果应公示多少天？",
        options: [
            { text: "不需要公示", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "不少于3天", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "1天", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "30天", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。中标人放弃中标的，招标人可以没收投标保证金，并选择其他中标候选人。"
    },
    {
        question: "投标人对评标结果有异议，应在什么时候提出？",
        options: [
            { text: "任何时间", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "中标候选人公示期间", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "合同签订后", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "1年后", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。招标人和中标人应在中标通知书发出之日起30天内签订书面合同。"
    },
    
    // 合同与履约（10道）
    {
        question: "中标后，中标人拒绝签订合同会有什么后果？",
        options: [
            { text: "没有后果", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "投标保证金被没收，可能被列入黑名单", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "只需要道歉", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "可以重新投标", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。招标文件要求中标人提交履约保证金的，中标人应提交，金额一般不超过合同金额的10%。"
    },
    {
        question: "履约保证金一般为合同金额的多少？",
        options: [
            { text: "20%", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "10%", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "50%", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "不需要", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。印尼煤炭出口需要获得出口许可证，由印尼能源与矿产资源部(MEMR)签发。"
    },
    {
        question: "合同履行过程中，以下哪种情况可以变更合同？",
        options: [
            { text: "单方决定", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "双方协商一致，且不改变实质性内容", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "随意变更", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "不需要协商", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。印尼对煤炭出口实施国内市场义务(DMO)，要求生产商将一定比例煤炭供应国内市场。"
    },
    {
        question: "供煤过程中，质量不合格应如何处理？",
        options: [
            { text: "接受不合格煤炭", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "按合同约定扣款或退货", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "隐瞒不报", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "自己处理", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。印尼煤炭出口报关需要提交商业发票、装箱单、提单、原产地证书等。"
    },
    {
        question: "合同履行完毕后，履约保证金应如何处理？",
        options: [
            { text: "归招标人所有", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "无息退还给中标人", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "转为下一年保证金", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "捐赠", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。印尼主要煤炭出口港包括塔巴尼奥(Taboneo)、三马林达(Samarinda)、巴厘巴板(Balikpapan)等。"
    }
];

// 添加到第9关
if (typeof questionBankData !== 'undefined' && questionBankData[9]) {
    questionBankData[9] = questionBankData[9].concat(level9BatchQuestions);
}
