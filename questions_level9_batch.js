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
        explanation: "电厂煤炭采购通常采用公开招标或邀请招标方式，确保公平竞争。"
    },
    {
        question: "资格预审的主要目的是什么？",
        options: [
            { text: "确定中标价格", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "筛选符合条件的投标人", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "签订合同", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "支付保证金", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "资格预审是筛选符合条件的投标人，审查资质、业绩、财务状况等。"
    },
    {
        question: "招标文件发售期不得少于多少天？",
        options: [
            { text: "3天", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "5个工作日", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "1天", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "10天", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "招标文件发售期不得少于5个工作日，确保投标人有足够时间准备。"
    },
    {
        question: "投标保证金一般为投标报价的多少？",
        options: [
            { text: "10%-20%", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "2%-5%", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "50%", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "不需要", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "投标保证金一般为投标报价的2%-5%，最高不超过80万元。"
    },
    {
        question: "投标有效期一般为多少天？",
        options: [
            { text: "7天", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "60-90天", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "1天", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "180天", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "投标有效期一般为60-90天，确保有足够时间完成评标和合同签订。"
    },
    {
        question: "开标时，以下哪种情况会导致废标？",
        options: [
            { text: "报价合理", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "投标文件未密封或逾期送达", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "资质齐全", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "签字盖章完整", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "投标文件未密封或逾期送达会导致废标，必须严格遵守投标要求。"
    },
    {
        question: "评标委员会成员一般不少于多少人？",
        options: [
            { text: "3人", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "5人", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "1人", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "10人", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "评标委员会成员一般不少于5人，其中技术经济专家不少于2/3。"
    },
    {
        question: "中标通知书发出后，应在多少天内签订合同？",
        options: [
            { text: "7天", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "30天内", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "90天", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不需要签订", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "中标通知书发出后，应在30天内签订合同，逾期可能需要重新招标。"
    },
    {
        question: "以下哪种行为属于串通投标？",
        options: [
            { text: "独立编制投标文件", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "投标人之间协商报价", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "按要求提供资质", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "如实报价", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "投标人之间协商报价属于串通投标，是违法行为，会导致投标无效。"
    },
    {
        question: "招标文件中，以下哪项不是必须包含的内容？",
        options: [
            { text: "投标人须知", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "投标人的家庭住址", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "评标办法", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "合同条款", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "招标文件应包含投标人须知、评标办法、合同条款等，不需要家庭住址。"
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
        explanation: "最低评标价法是在满足实质性要求的投标人中，选择评标价最低者中标。"
    },
    {
        question: "综合评估法通常考虑哪些因素？",
        options: [
            { text: "仅价格", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "价格、质量、技术、服务、信誉等", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "仅质量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "仅关系", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "综合评估法综合考虑价格、质量、技术、服务、信誉等多方面因素。"
    },
    {
        question: "技术评分一般占总分的多少？",
        options: [
            { text: "100%", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "30%-60%", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "0%", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "90%", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "技术评分一般占总分的30%-60%，其余为商务价格分。"
    },
    {
        question: "价格分计算中，以下哪种方法常用？",
        options: [
            { text: "随机打分", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "基准价法或最低投标价法", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "最高投标价法", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "平均价法", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "价格分常用基准价法或最低投标价法计算，确保价格合理。"
    },
    {
        question: "评标过程中，以下哪种情况可以澄清？",
        options: [
            { text: "报价错误", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "投标文件中的细微偏差", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "资质不符", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "重大偏差", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "细微偏差可以要求投标人澄清，但不得改变实质性内容。"
    },
    {
        question: "中标候选人一般推荐几名？",
        options: [
            { text: "1名", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "1-3名", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "10名", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不需要推荐", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "中标候选人一般推荐1-3名，并标明排序。"
    },
    {
        question: "以下哪种情况可以否决所有投标？",
        options: [
            { text: "报价都合理", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "所有投标都不符合招标文件要求", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "投标人太多", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "评标时间太长", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "所有投标都不符合招标文件要求时，可以否决所有投标，重新招标。"
    },
    {
        question: "评标报告应由谁签字？",
        options: [
            { text: "仅招标人", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "全体评标委员会成员", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "仅中标人", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "不需要签字", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "评标报告应由全体评标委员会成员签字，有不同意见应注明。"
    },
    {
        question: "中标结果应公示多少天？",
        options: [
            { text: "不需要公示", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "不少于3天", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "1天", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "30天", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "中标结果应公示不少于3天，接受社会监督。"
    },
    {
        question: "投标人对评标结果有异议，应在什么时候提出？",
        options: [
            { text: "任何时间", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "中标候选人公示期间", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "合同签订后", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "1年后", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "投标人对评标结果有异议，应在中标候选人公示期间提出。"
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
        explanation: "中标人拒绝签订合同，投标保证金将被没收，并可能被列入黑名单。"
    },
    {
        question: "履约保证金一般为合同金额的多少？",
        options: [
            { text: "20%", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "10%", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "50%", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "不需要", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "履约保证金一般为合同金额的10%，确保中标人履行合同。"
    },
    {
        question: "合同履行过程中，以下哪种情况可以变更合同？",
        options: [
            { text: "单方决定", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "双方协商一致，且不改变实质性内容", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "随意变更", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "不需要协商", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "合同变更需要双方协商一致，且不改变实质性内容，需签订补充协议。"
    },
    {
        question: "供煤过程中，质量不合格应如何处理？",
        options: [
            { text: "接受不合格煤炭", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "按合同约定扣款或退货", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "隐瞒不报", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "自己处理", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "质量不合格应按合同约定扣款或退货，维护电厂利益。"
    },
    {
        question: "合同履行完毕后，履约保证金应如何处理？",
        options: [
            { text: "归招标人所有", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "无息退还给中标人", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "转为下一年保证金", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "捐赠", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "合同履行完毕后，履约保证金应无息退还给中标人。"
    }
];

// 添加到第9关
if (typeof questionBankData !== 'undefined' && questionBankData[9]) {
    questionBankData[9] = questionBankData[9].concat(level9BatchQuestions);
}
