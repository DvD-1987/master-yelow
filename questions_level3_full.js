// 第3关完整题目（50道）- 资源收集
const level3FullQuestions = [
    {
        question: "印尼最大的煤炭产区是哪个省份？",
        options: [
            { text: "西爪哇省", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "东加里曼丹省", correct: true, effect: {knowledge: 8, trust: 8, risk: -8} },
            { text: "巴厘岛省", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "雅加达特区", correct: false, effect: {knowledge: -10, trust: -8, risk: 10} }
        ],
        explanation: "东加里曼丹省是印尼最大的煤炭产区，拥有丰富的煤炭资源和众多煤矿。"
    },
    {
        question: "寻找煤炭资源时，首先要核实矿山的什么证件？",
        options: [
            { text: "营业执照", correct: false, effect: {knowledge: -3, trust: -2, risk: 5} },
            { text: "IUP矿业经营许可证", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "税务登记证", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "环保许可证", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "IUP是印尼矿业经营许可证，是合法采矿的必备证件。"
    },
    {
        question: "印尼煤炭的主要运输港口巴厘巴板位于哪个岛屿？",
        options: [
            { text: "爪哇岛", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "苏门答腊岛", correct: false, effect: {knowledge: -3, trust: -2, risk: 5} },
            { text: "加里曼丹岛", correct: true, effect: {knowledge: 8, trust: 8, risk: -8} },
            { text: "苏拉威西岛", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "巴厘巴板港位于加里曼丹岛东海岸，是印尼最大的煤炭出口港之一。"
    },
    {
        question: "评估煤矿产能时，以下哪个指标最重要？",
        options: [
            { text: "矿区面积", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "年产量ROM", correct: true, effect: {knowledge: 8, trust: 8, risk: -8} },
            { text: "员工数量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "矿区道路长度", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "年产量（ROM，Run of Mine）是评估煤矿产能的最重要指标。"
    },
    {
        question: "考察煤矿时，以下哪项不是必须了解的内容？",
        options: [
            { text: "煤矿的证照是否齐全", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "矿主的个人爱好", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "煤炭的质量指标", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "运输条件和成本", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。考察煤矿需了解资质、产量、品质、开采条件、装运能力等。 考察煤矿时，矿主的个人爱好与业务无关，不是必须了解的内容。"
    },
    {
        question: "印尼煤炭的IUP证照有效期通常是多久？",
        options: [
            { text: "1年", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "5-20年不等，根据矿种和规模", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "永久有效", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "3个月", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。印尼IUP（矿业经营许可证）有效期通常为10-20年，可续期。 印尼IUP证照有效期通常为5-20年不等，根据矿种和规模而定。"
    },
    {
        question: "煤矿的'可采储量'是指什么？",
        options: [
            { text: "煤矿总面积", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "在现有技术经济条件下可以开采的煤炭储量", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "已经开采完的煤炭量", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "煤矿的探明储量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。可采储量是指技术上可开采且经济上可行的煤炭储量。 可采储量是指在现有技术经济条件下可以开采的煤炭储量。"
    },
    {
        question: "以下哪种方式不是印尼煤炭的主要运输方式？",
        options: [
            { text: "公路运输", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "管道运输", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "铁路运输", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "内河运输", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。印尼煤炭主要运输方式为卡车运输至港口，再装船出口。 印尼煤炭主要通过公路、铁路、内河运输，管道运输不是主要方式。"
    },
    {
        question: "考察煤矿时，如何判断煤矿的开采条件？",
        options: [
            { text: "只看煤矿外观", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "了解开采方式、设备、安全条件、环保措施", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "只听矿主介绍", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "不需要判断", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。考察煤矿需了解资质、产量、品质、开采条件、装运能力等。 判断开采条件需要了解开采方式、设备状况、安全条件、环保措施等。"
    },
    {
        question: "印尼煤炭从矿山到港口的典型运输距离是多少？",
        options: [
            { text: "1-5公里", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "50-200公里", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "1000公里以上", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "就在港口旁边", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。印尼煤炭从矿山到港口运输距离通常为50-300公里。 印尼煤炭从矿山到港口的典型运输距离为50-200公里。"
    },
    {
        question: "以下哪种情况表明煤矿可能存在合规风险？",
        options: [
            { text: "证照齐全，正常年检", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "IUP证照过期或无法提供原件", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "有正规开采设备", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "有环保设施", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。无证开采、环保不达标、劳工问题等都是合规风险。 IUP证照过期或无法提供原件表明煤矿可能存在合规风险。"
    },
    {
        question: "煤矿的'剥采比'是指什么？",
        options: [
            { text: "煤炭的发热量", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "开采每吨煤需要剥离的废石量", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "煤矿的含水量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "煤矿的硫含量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。剥采比是指开采单位煤炭需要剥离的土石量。 剥采比是指开采每吨煤需要剥离的废石量，是衡量开采成本的重要指标。"
    },
    {
        question: "印尼煤炭的主要出口港口有哪些？",
        options: [
            { text: "上海港、深圳港", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "巴厘巴板港、三马林达港、班贾尔马辛港", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "新加坡港、巴生港", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "曼谷港、马尼拉港", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。印尼煤炭主要出口港口包括东加里曼丹省的巴厘巴板(Balikpapan)、三马林达(Samarinda)、班贾尔马辛(Banjarmasin)等，详见印尼交通部港口管理局数据。"
    },
    {
        question: "考察煤矿时，以下哪种行为是不恰当的？",
        options: [
            { text: "实地查看矿区和设备", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "只听取矿主介绍，不实地查看", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "查看相关证照原件", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "了解运输条件", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。考察煤矿应进行全面实地查看，仅听矿主介绍而不实地查看可能导致信息偏差或被骗。参考：煤矿尽职调查实务指南。"
    },
    {
        question: "煤矿的'发热量'指标为什么重要？",
        options: [
            { text: "只影响煤炭颜色", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "直接决定煤炭的价格和用途", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "只影响运输成本", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不重要", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。发热量是煤炭最重要的质量指标，直接决定煤炭的价格和用途。发热量单位通常为大卡/公斤(kcal/kg)或MJ/kg。"
    },
    {
        question: "以下哪种煤矿信息可以通过公开渠道查询？",
        options: [
            { text: "矿主的银行账户", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "矿山的IUP证照信息", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "矿主的个人住址", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "矿山的具体产量数据", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。矿山的IUP(矿业经营许可证)证照信息可通过印尼能源与矿产资源部(MEMR)公开系统查询验证。"
    },
    {
        question: "印尼煤炭的典型硫分范围是多少？",
        options: [
            { text: "0.1%-0.5%", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "2%-5%", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "10%以上", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "没有硫分", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。印尼煤炭以低硫煤为主，典型硫分范围为0.1%-0.85%，属于优质低硫煤。参考：印尼煤炭资源概况。"
    },
    {
        question: "煤矿的'灰分'指标对贸易有什么影响？",
        options: [
            { text: "只影响煤炭颜色", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "灰分越高，热值越低，价格越低", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "灰分越高越好", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "不影响贸易", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。灰分是煤炭中不可燃的无机物质，灰分越高，热值越低，价格也越低。印尼煤炭灰分通常<10%。"
    },
    {
        question: "以下哪种方式可以核实煤矿的真实性？",
        options: [
            { text: "只听朋友介绍", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "实地考察+政府网站查询证照+第三方验证", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "只看矿主提供的照片", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "不需要核实", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。核实煤矿真实性需要实地考察、政府网站查询证照、第三方验证等多种方式综合判断。"
    },
    {
        question: "印尼煤炭的'典型热值'通常指什么范围？",
        options: [
            { text: "3000-3500大卡", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "3800-5500大卡", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "6000-7000大卡", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "2000大卡以下", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。印尼煤炭典型热值范围为3800-5500大卡/公斤(3800-5500 kcal/kg GAR)，次烟煤可达5700-7200大卡。"
    },
    {
        question: "煤矿的'全水分'指标为什么重要？",
        options: [
            { text: "只影响煤炭重量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "水分越高，实际热值越低，影响结算", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "水分越高越好", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "不影响贸易", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。全水分影响实际热值结算，水分越高，实际干基热值越低，直接影响贸易价格。"
    },
    {
        question: "以下哪种情况可能导致煤矿供应不稳定？",
        options: [
            { text: "证照齐全，设备完善", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "证照即将到期，开采设备老旧", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "有长期供应合同", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "有备用矿山", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。证照即将到期、开采设备老旧等因素可能导致供应不稳定，需提前评估。"
    },
    {
        question: "印尼煤炭的运输成本通常占FOB价格的多少？",
        options: [
            { text: "1%-5%", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "10%-30%", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "50%以上", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "可以忽略不计", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。印尼煤炭从矿山到港口的运输成本通常占FOB价格的10%-30%，视距离和路况而定。"
    },
    {
        question: "煤矿的'环保合规'为什么重要？",
        options: [
            { text: "只影响矿区美观", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "不合规可能被政府关停，影响供应", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "不影响贸易", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "只影响当地环境", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。环保不合规的煤矿可能被政府关停(Denda或Tutup)，严重影响供应稳定性。"
    },
    {
        question: "以下哪种信息属于煤矿的商业机密？",
        options: [
            { text: "IUP证照信息", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "具体客户名单和合同价格", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "矿区位置", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "煤炭质量指标", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。具体客户名单和合同价格属于商业机密，IUP证照、矿区位置、煤炭质量指标等相对公开。"
    },
    {
        question: "考察煤矿时，为什么要了解'周边竞争情况'？",
        options: [
            { text: "与业务无关", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "了解市场供应情况和价格竞争", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "只是为了社交", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "不需要了解", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。了解周边竞争情况有助于掌握市场供应情况和价格竞争态势。参考：煤炭市场分析方法。"
    },
    {
        question: "印尼煤炭的'典型灰分'范围是多少？",
        options: [
            { text: "1%-5%", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "5%-15%", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "30%-40%", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "50%以上", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。印尼煤炭灰分通常<10%，属于低灰分煤，部分优质煤可达5%以下。参考：印尼煤炭资源报告。"
    },
    {
        question: "煤矿的'开采年限'为什么重要？",
        options: [
            { text: "只影响矿区历史", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "影响长期供应的稳定性和可持续性", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "不影响贸易", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "只影响短期供应", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。开采年限影响长期供应的稳定性和可持续性，是评估煤矿长期价值的重要指标。"
    },
    {
        question: "以下哪种方式可以降低煤矿考察的风险？",
        options: [
            { text: "只听信口头承诺", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "实地考察+多方验证+小批量试单", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "一次性大额采购", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "不需要考察", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。实地考察、多方验证、小批量试单可以有效降低煤矿考察的风险。"
    },
    {
        question: "印尼煤炭的'挥发分'通常是多少？",
        options: [
            { text: "5%以下", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "35%-45%", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "60%以上", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "没有挥发分", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。印尼煤炭挥发分通常为35%-45%(次烟煤37%-42%)，属于中高挥发分煤。"
    },
    {
        question: "煤矿的'安全记录'为什么重要？",
        options: [
            { text: "只影响矿工心情", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "安全事故可能导致停产，影响供应", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "不影响贸易", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "只影响保险公司", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。安全事故可能导致煤矿停产整顿，影响供应稳定性和企业声誉。"
    },
    {
        question: "以下哪种情况表明煤矿可能'虚报产能'？",
        options: [
            { text: "有正规生产记录", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "宣称产能很大，但实际设备很少", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "有长期客户", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "有完善设施", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。宣称产能很大但实际设备很少，可能是虚报产能的信号，需提高警惕。"
    },
    {
        question: "印尼煤炭的'典型粒度'分布是怎样的？",
        options: [
            { text: "全部是大块", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "0-50mm混合，以中块和粉煤为主", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "全部是粉末", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "粒度不影响贸易", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。印尼煤炭通常为0-50mm混合粒度，以中块(10-30mm)和粉煤(<10mm)为主。"
    },
    {
        question: "煤矿的'付款方式'通常有哪些？",
        options: [
            { text: "只能现金", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "信用证、电汇、预付款、货到付款等", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "只能赊账", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "不需要付款", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。煤矿付款方式包括信用证(L/C)、电汇(T/T)、预付款、货到付款等多种方式。"
    },
    {
        question: "以下哪种情况可能导致煤矿'突然断供'？",
        options: [
            { text: "证照齐全，生产正常", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "政府政策变化、证照被吊销、自然灾害", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "有长期合同", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "有备用产能", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。政府政策变化、证照被吊销、自然灾害等可能导致煤矿突然断供，需建立应急预案。"
    },
    {
        question: "考察煤矿时，为什么要了解'当地基础设施'？",
        options: [
            { text: "与业务无关", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "影响运输效率和成本", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "只是为了旅游", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "不需要了解", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。当地基础设施(道路、电力、通讯、港口等)直接影响运输效率和成本。"
    },
    {
        question: "印尼煤炭的'典型哈氏可磨性指数（HGI）'是多少？",
        options: [
            { text: "20-30", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "40-60", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "80-100", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "没有HGI指标", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。印尼煤炭哈氏可磨性指数(HGI)通常为40-60，属于中等可磨性。参考：GB/T 2565-2014。"
    },
    {
        question: "煤矿的'信誉评价'可以从哪些方面了解？",
        options: [
            { text: "只听矿主自我介绍", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "行业口碑、历史履约记录、客户评价", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "只看矿区大小", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "不需要了解", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。煤矿信誉可通过行业口碑、历史履约记录、其他客户评价等多方面了解。"
    },
    {
        question: "以下哪种情况表明煤矿可能存在'债务纠纷'？",
        options: [
            { text: "正常经营，按时付款", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "频繁更换合作伙伴，有法律诉讼记录", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "证照齐全", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "生产正常", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。频繁更换合作伙伴、有法律诉讼记录等可能是债务纠纷或信用问题的信号。"
    },
    {
        question: "印尼煤炭的'典型灰熔点'是多少？",
        options: [
            { text: "800-1000°C", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "1100-1300°C", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "1500°C以上", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "没有灰熔点", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。印尼煤炭典型灰熔点为1100-1300°C，影响锅炉设计和使用。"
    },
    {
        question: "煤矿的'技术支持能力'为什么重要？",
        options: [
            { text: "只影响矿区办公", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "影响煤质稳定性和问题处理能力", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "不影响贸易", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "只影响矿工培训", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。技术支持能力影响煤质稳定性和问题处理能力，是重要的软实力指标。"
    },
    {
        question: "以下哪种情况表明煤矿可能'过度承诺'？",
        options: [
            { text: "根据实际产能签订合同", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "承诺供应量远超实际产能", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "有备用产能", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "有长期客户", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。承诺供应量远超实际产能是过度承诺的典型表现，可能导致无法履约。"
    },
    {
        question: "印尼煤炭的'典型固定碳'含量是多少？",
        options: [
            { text: "10%以下", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "40%-55%", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "70%以上", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "没有固定碳", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。印尼煤炭固定碳含量通常为40%-55%，是主要的发热成分。"
    },
    {
        question: "煤矿的'物流配套'包括哪些方面？",
        options: [
            { text: "只有矿山", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "道路、港口、仓储、运输工具等", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "只有办公楼", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "不需要物流配套", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。物流配套包括道路、港口、仓储、运输工具等，是保障供应的关键环节。"
    },
    {
        question: "以下哪种方式可以建立与煤矿的长期合作关系？",
        options: [
            { text: "一次性大额采购后不再联系", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "小批量试单→逐步增加→签订长期合同", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "只谈价格不谈其他", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "不需要建立关系", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。小批量试单→逐步增加→签订长期合同是建立长期合作关系的稳妥方式。"
    },
    {
        question: "印尼煤炭的'典型收到基低位发热量'是多少大卡/公斤？",
        options: [
            { text: "2000-2500", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "3800-5500", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "6000-7000", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "1000以下", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。收到基低位发热量(Qnet,ar)是包含全水分的实际收到煤样的发热量，是贸易结算常用基准。印尼煤典型范围3800-5500大卡/公斤。"
    },
    {
        question: "煤矿的'应急能力'为什么重要？",
        options: [
            { text: "只影响日常办公", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "应对突发情况，保障供应连续性", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "不影响贸易", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "只影响矿工安全", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。应急能力包括备用产能、应急物流、应急人员等，可应对突发情况保障供应。"
    },
    {
        question: "以下哪种情况表明煤矿可能'资金链紧张'？",
        options: [
            { text: "按时付款，信誉良好", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "频繁要求预付款，拖欠运费", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "有银行贷款", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "正常经营", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。频繁要求预付款、拖欠运费等可能是资金链紧张的信号。"
    },
    {
        question: "印尼煤炭的'典型空气干燥基低位发热量'是多少大卡/公斤？",
        options: [
            { text: "3000-3500", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "4500-6500", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
            { text: "7000以上", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "2000以下", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。空气干燥基低位发热量(Qnet,ad)是去除外在水分后的发热量，印尼煤典型范围4500-6500大卡/公斤。"
    }
];

// 将题目添加到第3关
if (typeof questionBankData !== 'undefined') {
    questionBankData[3] = level3FullQuestions;
}
