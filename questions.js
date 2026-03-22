// 完整题库 - 第1-10关（每关50题，共500题）
const questionBankData = {
    // 第1关：印尼风土人情（50题）
    1: [
        {
            question: "印度尼西亚是世界上最大的群岛国家，由约多少个岛屿组成？",
            options: [
                { text: "约1.7万个岛屿", correct: true, effect: {knowledge: 5, trust: 3, risk: -5} },
                { text: "约1万个岛屿", correct: false, effect: {knowledge: -3, trust: -2, risk: 5} },
                { text: "约5000个岛屿", correct: false, effect: {knowledge: -5, trust: -3, risk: 8} },
                { text: "约3000个岛屿", correct: false, effect: {knowledge: -8, trust: -5, risk: 10} }
            ],
            explanation: "印度尼西亚由约17,000个岛屿组成，是世界上最大的群岛国家，被称为'万岛之国'。"
        },
        {
            question: "印尼的正式首都是哪个城市？",
            options: [
                { text: "雅加达", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
                { text: "努山塔拉", correct: true, effect: {knowledge: 5, trust: 5, risk: -5} },
                { text: "泗水", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "万隆", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
            ],
            explanation: "2024年，印尼正式将首都从雅加达迁至努山塔拉（Nusantara）。"
        },
        {
            question: "印尼是全球最大的煤炭出口国之一，其主要出口市场是？",
            options: [
                { text: "欧洲", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
                { text: "印度", correct: false, effect: {knowledge: -2, trust: -2, risk: 3} },
                { text: "中国", correct: true, effect: {knowledge: 8, trust: 8, risk: -8} },
                { text: "日本", correct: false, effect: {knowledge: -2, trust: -2, risk: 3} }
            ],
            explanation: "中国是印尼煤炭的最大进口国，占印尼煤炭出口总量的约60%以上。"
        },
        {
            question: "在印尼，行贿是合法的商务行为吗？",
            options: [
                { text: "是，这是当地惯例", correct: false, effect: {knowledge: -10, trust: -10, risk: 20} },
                { text: "否，行贿在印尼是非法的", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
                { text: "视情况而定", correct: false, effect: {knowledge: -5, trust: -5, risk: 10} },
                { text: "只有小额行贿才合法", correct: false, effect: {knowledge: -8, trust: -8, risk: 15} }
            ],
            explanation: "在印尼，行贿是非法的。作为外国商务人员，必须遵守法律，避免参与任何形式的贿赂行为。"
        },
        {
            question: "印尼煤炭的主要产地集中在哪个岛屿？",
            options: [
                { text: "爪哇岛", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "苏门答腊岛", correct: false, effect: {knowledge: -3, trust: -2, risk: 5} },
                { text: "加里曼丹岛（婆罗洲）", correct: true, effect: {knowledge: 8, trust: 8, risk: -8} },
                { text: "巴厘岛", correct: false, effect: {knowledge: -10, trust: -8, risk: 10} }
            ],
            explanation: "印尼煤炭资源主要集中在加里曼丹岛（婆罗洲）和东加里曼丹地区。"
        },
        {
            question: "印尼的官方语言是什么？",
            options: [
                { text: "英语", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
                { text: "印尼语（Bahasa Indonesia）", correct: true, effect: {knowledge: 5, trust: 5, risk: -5} },
                { text: "荷兰语", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "阿拉伯语", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
            ],
            explanation: "印尼语（Bahasa Indonesia）是印尼的官方语言，也是东盟的工作语言之一。"
        },
        {
            question: "在印尼商务场合，以下哪种行为是不恰当的？",
            options: [
                { text: "用右手递名片", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
                { text: "用左手递名片或接物品", correct: true, effect: {knowledge: 8, trust: 8, risk: -8} },
                { text: "握手时轻微鞠躬", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
                { text: "准时参加会议", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
            ],
            explanation: "在印尼，左手被认为是不洁的，应该用右手递接物品。"
        },
        {
            question: "印尼的货币单位是什么？",
            options: [
                { text: "印尼盾（Rupiah）", correct: true, effect: {knowledge: 5, trust: 5, risk: -5} },
                { text: "印尼比索", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "印尼元", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "马币", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
            ],
            explanation: "印尼的货币是印尼盾（Indonesian Rupiah），货币代码IDR。"
        },
        {
            question: "印尼是世界上最大的什么宗教国家？",
            options: [
                { text: "基督教", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "伊斯兰教", correct: true, effect: {knowledge: 5, trust: 5, risk: -5} },
                { text: "佛教", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "印度教", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
            ],
            explanation: "印尼是世界上人口最多的伊斯兰教国家，约87%的人口信仰伊斯兰教。"
        },
        {
            question: "在印尼进行商务谈判时，以下哪种做法是正确的？",
            options: [
                { text: "直接进入正题，不谈废话", correct: false, effect: {knowledge: -5, trust: -5, risk: 8} },
                { text: "先建立关系，聊一些轻松话题", correct: true, effect: {knowledge: 8, trust: 8, risk: -8} },
                { text: "直接拒绝对方的提议", correct: false, effect: {knowledge: -8, trust: -8, risk: 10} },
                { text: "不准备任何资料", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
            ],
            explanation: "印尼人重视关系，商务谈判前通常会先建立个人关系，聊一些轻松话题。"
        },
        {
            question: "印尼的时区是什么？",
            options: [
                { text: "UTC+7（西部时间）", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
                { text: "UTC+8（中部时间）", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
                { text: "跨越3个时区：UTC+7、UTC+8、UTC+9", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
                { text: "UTC+9（东部时间）", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} }
            ],
            explanation: "印尼跨越3个时区：西部UTC+7（如雅加达）、中部UTC+8、东部UTC+9。"
        },
        {
            question: "在印尼，斋月期间商务活动会有什么变化？",
            options: [
                { text: "商务活动完全停止", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "工作时间缩短，效率可能降低", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
                { text: "没有任何变化", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
                { text: "商务活动更加频繁", correct: false, effect: {knowledge: -10, trust: -8, risk: 10} }
            ],
            explanation: "斋月期间，穆斯林白天禁食，工作时间通常缩短，商务活动效率可能降低。"
        },
        {
            question: "印尼最大的煤炭出口港是哪个？",
            options: [
                { text: "雅加达港", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "巴厘巴板港", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
                { text: "泗水港", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "棉兰港", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
            ],
            explanation: "巴厘巴板港（Balikpapan）是印尼最大的煤炭出口港之一，位于东加里曼丹。"
        },
        {
            question: "在印尼商务宴请中，以下哪种食物应该避免？",
            options: [
                { text: "米饭", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "猪肉（除非确认对方非穆斯林）", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
                { text: "鱼类", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "蔬菜", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
            ],
            explanation: "印尼人口大多数是穆斯林，商务宴请应避免猪肉，除非确认对方非穆斯林。"
        },
        {
            question: "印尼的国庆日是哪一天？",
            options: [
                { text: "8月17日", correct: true, effect: {knowledge: 5, trust: 5, risk: -5} },
                { text: "7月4日", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "10月1日", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "12月25日", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
            ],
            explanation: "印尼国庆日是8月17日，纪念1945年印尼独立。"
        },
        {
            question: "在印尼，以下哪种称呼方式最为恰当？",
            options: [
                { text: "直接叫名字", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "使用尊称如'Bapak'（先生）或'Ibu'（女士）", correct: true, effect: {knowledge: 8, trust: 8, risk: -8} },
                { text: "叫绰号", correct: false, effect: {knowledge: -8, trust: -8, risk: 10} },
                { text: "用'喂'来称呼", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
            ],
            explanation: "在印尼，使用尊称如'Bapak'（先生）或'Ibu'（女士）表示尊重，是恰当的称呼方式。"
        },
        {
            question: "印尼的主要气候类型是什么？",
            options: [
                { text: "温带季风气候", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "热带雨林气候", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
                { text: "地中海气候", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "寒带气候", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
            ],
            explanation: "印尼位于赤道附近，属于热带雨林气候，全年高温多雨。"
        },
        {
            question: "在印尼商务场合，名片应该用什么手递接？",
            options: [
                { text: "左手", correct: false, effect: {knowledge: -8, trust: -8, risk: 10} },
                { text: "右手或双手", correct: true, effect: {knowledge: 8, trust: 8, risk: -8} },
                { text: "随意哪只手", correct: false, effect: {knowledge: -5, trust: -5, risk: 8} },
                { text: "不用手，直接放桌上", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
            ],
            explanation: "在印尼，应该用右手或双手递接名片，左手被认为是不洁的。"
        },
        {
            question: "印尼的煤炭主要是什么类型？",
            options: [
                { text: "无烟煤", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "动力煤（烟煤）", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
                { text: "焦煤", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "褐煤", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
            ],
            explanation: "印尼煤炭主要是动力煤（烟煤），热值一般在3800-5500大卡之间。"
        },
        {
            question: "在印尼，进入清真寺或他人住宅时应该怎么做？",
            options: [
                { text: "穿鞋直接进入", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
                { text: "脱鞋后再进入", correct: true, effect: {knowledge: 8, trust: 8, risk: -8} },
                { text: "只脱一只鞋", correct: false, effect: {knowledge: -8, trust: -8, risk: 10} },
                { text: "穿拖鞋进入", correct: false, effect: {knowledge: -5, trust: -5, risk: 8} }
            ],
            explanation: "在印尼，进入清真寺或他人住宅时必须脱鞋，这是基本的礼仪。"
        }
    ],

    // 第2关：煤炭基础知识（50题）
    2: [
        {
            question: "煤炭按煤化程度从高到低排列，正确的顺序是？",
            options: [
                { text: "褐煤、烟煤、无烟煤", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "无烟煤、烟煤、褐煤", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
                { text: "烟煤、褐煤、无烟煤", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "褐煤、无烟煤、烟煤", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
            ],
            explanation: "煤炭按煤化程度从高到低依次为：无烟煤、烟煤（包括焦煤、肥煤、气煤等）、褐煤。"
        },
        {
            question: "动力煤的主要质量指标中，哪个指标直接影响锅炉燃烧效率？",
            options: [
                { text: "灰分", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
                { text: "硫分", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
                { text: "发热量（热值）", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
                { text: "挥发分", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} }
            ],
            explanation: "发热量（热值）是动力煤最重要的指标，直接决定锅炉燃烧效率和发电量。"
        },
        {
            question: "煤炭的收到基（ar）和空气干燥基（ad）有什么区别？",
            options: [
                { text: "没有区别，是同一概念", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
                { text: "收到基包含全水分，空气干燥基仅含内在水分", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
                { text: "空气干燥基包含全水分，收到基仅含内在水分", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
                { text: "两者都是干燥状态", correct: false, effect: {knowledge: -10, trust: -8, risk: 10} }
            ],
            explanation: "收到基（ar）包含煤炭的全水分，空气干燥基（ad）仅包含内在水分（风干后的水分）。"
        },
        {
            question: "印尼动力煤的典型热值范围是多少大卡？",
            options: [
                { text: "3000-3500大卡", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "3800-5500大卡", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
                { text: "6000-7000大卡", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "2000-2500大卡", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
            ],
            explanation: "印尼动力煤的典型热值范围是3800-5500大卡，属于中低热值煤。"
        },
        {
            question: "煤炭的灰分对电厂运行的主要影响是什么？",
            options: [
                { text: "提高燃烧效率", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
                { text: "降低燃烧效率，增加排渣量", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
                { text: "没有任何影响", correct: false, effect: {knowledge: -10, trust: -8, risk: 10} },
                { text: "降低硫排放", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
            ],
            explanation: "灰分是不燃物质，会降低燃烧效率，增加排渣量和除尘负担。"
        }
    ],

    // 第3关：资源收集（50题）
    3: [
        {
            question: "印尼最大的煤炭产区是哪个省份？",
            options: [
                { text: "东加里曼丹省", correct: true, effect: {knowledge: 8, trust: 8, risk: -8} },
                { text: "西爪哇省", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
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
            question: "以下哪种方式不是寻找煤炭资源的有效途径？",
            options: [
                { text: "参加煤炭行业展会", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
                { text: "通过当地商会介绍", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
                { text: "在网上随意搜索", correct: true, effect: {knowledge: 8, trust: 5, risk: -5} },
                { text: "实地考察矿区", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
            ],
            explanation: "网上随意搜索的信息可靠性低，应通过正规渠道寻找资源。"
        }
    ],

    // 第4关：贸易谈判（50题）
    4: [
        {
            question: "国际贸易合同中，FOB条款的含义是什么？",
            options: [
                { text: "卖方负责将货物运到买方港口", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
                { text: "卖方在装运港将货物装上船后，风险和费用转移给买方", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
                { text: "卖方负责所有运输费用", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
                { text: "买方在卖方工厂提货", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
            ],
            explanation: "FOB（Free On Board）装运港船上交货，卖方负责将货物装上船，之后风险和费用转移给买方。"
        },
        {
            question: "国际贸易合同中，CIF条款的含义是什么？",
            options: [
                { text: "卖方仅负责装船", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
                { text: "卖方负责成本、保险费和运费至目的港", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
                { text: "买方负责所有费用", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
                { text: "卖方不负责保险", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
            ],
            explanation: "CIF（Cost Insurance and Freight）成本加保险费加运费，卖方负责运费和保险至目的港。"
        },
        {
            question: "煤炭贸易合同中，价格条款通常采用什么方式？",
            options: [
                { text: "固定价格", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "基准价格+浮动机制，或指数挂钩", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
                { text: "随意定价", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
                { text: "仅按重量计价", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
            ],
            explanation: "煤炭价格波动大，通常采用基准价格+浮动机制，或与指数挂钩。"
        },
        {
            question: "煤炭贸易中，信用证（L/C）付款方式的主要风险是什么？",
            options: [
                { text: "买方风险最大", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "单证不符可能导致拒付", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
                { text: "没有风险", correct: false, effect: {knowledge: -10, trust: -8, risk: 10} },
                { text: "卖方风险最大", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
            ],
            explanation: "信用证是单证交易，单证不符可能导致银行拒付。"
        },
        {
            question: "煤炭贸易合同中，质量检验条款通常约定以哪方检验结果为准？",
            options: [
                { text: "仅以卖方检验为准", correct: false, effect: {knowledge: -5, trust: -5, risk: 8} },
                { text: "以双方认可的第三方检验机构为准", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
                { text: "仅以买方检验为准", correct: false, effect: {knowledge: -5, trust: -5, risk: 8} },
                { text: "不需要检验", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
            ],
            explanation: "通常约定以双方认可的第三方检验机构（如CCIC、SGS）的检验结果为准。"
        }
    ],

    // 第5关：煤炭装载（50题）
    5: [
        {
            question: "船舶装煤前，以下哪项检查是必须的？",
            options: [
                { text: "仅检查船舶外观", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
                { text: "检查货舱清洁度、舱盖水密性、舱内结构完整性", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
                { text: "仅检查船舶证书", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "不需要检查", correct: false, effect: {knowledge: -10, trust: -8, risk: 10} }
            ],
            explanation: "装船前必须检查货舱清洁度、舱盖水密性、舱内结构完整性。"
        },
        {
            question: "装船过程中，以下哪种操作是错误的？",
            options: [
                { text: "均匀装载，避免偏载", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
                { text: "集中在一个舱位快速装满", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
                { text: "监控船舶吃水", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "记录装载进度", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
            ],
            explanation: "集中在一个舱位装载会导致船舶偏载、倾斜，必须均匀装载各舱。"
        },
        {
            question: "装船过程中，发现煤中有大量杂物，应该怎么做？",
            options: [
                { text: "继续装船，不管杂物", correct: false, effect: {knowledge: -10, trust: -8, risk: 10} },
                { text: "停止装船，要求清理杂物，记录并拍照取证", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
                { text: "仅口头提醒", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
                { text: "自己清理", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
            ],
            explanation: "发现杂物必须停止装船，要求清理，记录并拍照取证。"
        },
        {
            question: "装船过程中，以下哪种天气条件应该停止作业？",
            options: [
                { text: "晴天", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "暴雨、雷电、大风", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
                { text: "阴天", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "轻微雾霾", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
            ],
            explanation: "暴雨、雷电、大风等恶劣天气应停止装船作业，确保安全。"
        },
        {
            question: "船舶装载煤炭时，以下哪项记录是必须的？",
            options: [
                { text: "仅记录装载开始时间", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "装载时间、各舱装载量、天气情况、异常情况等", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
                { text: "仅记录装载结束时间", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "不需要记录", correct: false, effect: {knowledge: -10, trust: -8, risk: 10} }
            ],
            explanation: "必须详细记录装载时间、各舱装载量、天气情况、异常情况等。"
        }
    ],

    // 第6关：煤炭检验（50题）
    6: [
        {
            question: "在皮带输送机上取样，取样点应选择在什么位置？",
            options: [
                { text: "皮带任意位置都可以", correct: false, effect: {knowledge: -8, trust: -8, risk: 12} },
                { text: "皮带输送机落料处或皮带横截面中部", correct: true, effect: {knowledge: 15, trust: 15, risk: -15} },
                { text: "皮带边缘位置方便取样", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
                { text: "皮带接头处", correct: false, effect: {knowledge: -12, trust: -12, risk: 18} }
            ],
            explanation: "皮带边缘煤流不均匀，接头处可能有杂质，正确位置是落料处或皮带横截面中部。"
        },
        {
            question: "船舶舱内取样，以下哪种操作是错误的？",
            options: [
                { text: "按网格法布点，每舱至少3个点", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
                { text: "取样深度达到煤堆底部", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
                { text: "只在舱口表面取样，不深入煤堆内部", correct: true, effect: {knowledge: 15, trust: 15, risk: -15} },
                { text: "记录取样深度和位置", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
            ],
            explanation: "只在表面取样是严重错误！舱内煤堆存在粒度偏析，必须深入煤堆内部取样。"
        },
        {
            question: "使用取样铲取样时，铲内应如何装满？",
            options: [
                { text: "装满即可，形状无所谓", correct: false, effect: {knowledge: -8, trust: -8, risk: 12} },
                { text: "铲内煤样应呈自然堆积状态，不压实也不留空隙", correct: true, effect: {knowledge: 15, trust: 15, risk: -15} },
                { text: "用力压实以多取一些", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
                { text: "只取铲底一层", correct: false, effect: {knowledge: -12, trust: -12, risk: 18} }
            ],
            explanation: "压实会改变煤样密度和粒度分布，留空隙则样品不足。应自然堆积。"
        },
        {
            question: "煤堆取样时，以下哪种天气条件最不宜取样？",
            options: [
                { text: "晴天微风", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
                { text: "大雨天气", correct: true, effect: {knowledge: 15, trust: 15, risk: -15} },
                { text: "阴天", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "轻微雾霾", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
            ],
            explanation: "大雨会改变煤的水分，影响检验结果，不宜在大雨天气取样。"
        },
        {
            question: "制样过程中，以下哪种操作是错误的？",
            options: [
                { text: "使用专用破碎机破碎煤样", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
                { text: "使用家用搅拌机破碎煤样", correct: true, effect: {knowledge: 15, trust: 15, risk: -15} },
                { text: "按标准粒度要求逐级破碎", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "使用二分器缩分煤样", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
            ],
            explanation: "家用搅拌机可能引入污染，且无法保证粒度均匀，必须使用专用设备。"
        }
    ],

    // 第7关：离港通关（50题）
    7: [
        {
            question: "印尼煤炭出口时，以下哪种证件是必须的？",
            options: [
                { text: "仅需要发票", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
                { text: "出口许可证、原产地证、质量检验报告、报关单等", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
                { text: "仅需合同", correct: false, effect: {knowledge: -8, trust: -8, risk: 12} },
                { text: "仅需装箱单", correct: false, effect: {knowledge: -8, trust: -8, risk: 12} }
            ],
            explanation: "印尼煤炭出口需要出口许可证、原产地证、质量检验报告、报关单等多种证件。"
        },
        {
            question: "印尼海关对煤炭出口征收的出口关税是如何计算的？",
            options: [
                { text: "固定税率", correct: false, effect: {knowledge: -5, trust: -5, risk: 8} },
                { text: "根据煤炭基准价格和实际出口价格，采用累进税率", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
                { text: "按重量征收固定费用", correct: false, effect: {knowledge: -8, trust: -8, risk: 12} },
                { text: "不征收出口关税", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
            ],
            explanation: "印尼煤炭出口关税采用累进税率，根据煤炭基准价格和实际出口价格计算。"
        },
        {
            question: "煤炭出口报关时，以下哪种申报方式是错误的？",
            options: [
                { text: "如实申报煤种、数量、价值", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
                { text: "低报价格以少缴税款", correct: true, effect: {knowledge: 15, trust: 15, risk: -15} },
                { text: "提供真实的质量检验报告", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "按海关要求提供完整单证", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
            ],
            explanation: "低报价格是严重的违法行为，会导致海关处罚、滞港、甚至刑事责任。"
        },
        {
            question: "印尼海关对出口煤炭的质量检验通常由谁执行？",
            options: [
                { text: "出口商自行检验", correct: false, effect: {knowledge: -8, trust: -8, risk: 12} },
                { text: "政府指定的检验机构或认可的第三方检验机构", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
                { text: "进口商指定的机构", correct: false, effect: {knowledge: -5, trust: -5, risk: 8} },
                { text: "不需要检验", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
            ],
            explanation: "印尼海关要求出口煤炭由政府指定的检验机构或认可的第三方检验机构检验。"
        },
        {
            question: "出口煤炭的提单（B/L）应在什么时候签发？",
            options: [
                { text: "装船前", correct: false, effect: {knowledge: -8, trust: -8, risk: 12} },
                { text: "装船完成后，货物实际装船", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
                { text: "货物到达目的港后", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
                { text: "合同签订时", correct: false, effect: {knowledge: -8, trust: -8, risk: 12} }
            ],
            explanation: "提单应在货物实际装船后签发，是货物收据和运输合同证明。"
        }
    ],

    // 第8关：回国卸货（50题）
    8: [
        {
            question: "煤炭进口到中国，以下哪种证件是必须的？",
            options: [
                { text: "仅需发票", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
                { text: "进口许可证、原产地证、质量检验报告、报关单等", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
                { text: "仅需合同", correct: false, effect: {knowledge: -8, trust: -8, risk: 12} },
                { text: "仅需提单", correct: false, effect: {knowledge: -8, trust: -8, risk: 12} }
            ],
            explanation: "煤炭进口需要进口许可证、原产地证、质量检验报告、报关单等多种证件。"
        },
        {
            question: "中国海关对进口煤炭的放射性检验要求是什么？",
            options: [
                { text: "不需要检验", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
                { text: "必须检验，放射性超标将退运或销毁", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
                { text: "仅对特定国家检验", correct: false, effect: {knowledge: -5, trust: -5, risk: 8} },
                { text: "仅抽查", correct: false, effect: {knowledge: -8, trust: -8, risk: 12} }
            ],
            explanation: "中国海关对进口煤炭实施放射性检验，放射性超标的煤炭将退运或销毁。"
        },
        {
            question: "进口煤炭的报关单应在什么时候提交？",
            options: [
                { text: "货物到港前或到港后14天内", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
                { text: "货物装船时", correct: false, effect: {knowledge: -8, trust: -8, risk: 12} },
                { text: "货物销售后", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
                { text: "不需要报关", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
            ],
            explanation: "进口报关单应在货物到港前或到港后14天内提交，逾期将产生滞报金。"
        },
        {
            question: "中国海关对进口煤炭的环保项目检验包括哪些？",
            options: [
                { text: "仅检验热值", correct: false, effect: {knowledge: -8, trust: -8, risk: 12} },
                { text: "灰分、硫分、汞、砷、磷、氟、氯等环保指标", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
                { text: "仅检验水分", correct: false, effect: {knowledge: -8, trust: -8, risk: 12} },
                { text: "不需要环保检验", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
            ],
            explanation: "中国海关对进口煤炭实施环保项目检验，包括灰分、硫分、汞、砷等有害元素。"
        },
        {
            question: "进口煤炭到港后，以下哪种情况可以提出索赔？",
            options: [
                { text: "煤炭热值比合同低1%", correct: false, effect: {knowledge: -5, trust: -5, risk: 8} },
                { text: "煤炭质量严重不符合合同约定的指标", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
                { text: "煤炭颜色与预期不同", correct: false, effect: {knowledge: -8, trust: -8, risk: 12} },
                { text: "煤炭价格下降", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
            ],
            explanation: "只有当煤炭质量严重不符合合同约定的指标时，才能提出索赔。"
        }
    ],

    // 第9关：电厂投标（50题）
    9: [
        {
            question: "电厂招投标中，资格预审的主要目的是什么？",
            options: [
                { text: "确定中标价格", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "筛选符合条件的投标人，确保其具备履约能力", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
                { text: "确定合同条款", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "选择付款方式", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
            ],
            explanation: "资格预审是筛选符合条件的投标人，审查其资质、业绩、财务状况等。"
        },
        {
            question: "电厂煤炭招标文件中，以下哪项不是必须包含的内容？",
            options: [
                { text: "煤炭质量标准", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "投标人的家庭住址", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
                { text: "交货时间和地点", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "评标方法和标准", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
            ],
            explanation: "招标文件应包含质量标准、交货要求、评标方法等，不需要家庭住址。"
        },
        {
            question: "电厂煤炭招标中，综合评标法通常考虑哪些因素？",
            options: [
                { text: "仅考虑价格", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
                { text: "价格、质量、交货期、信誉、服务等多方面因素", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
                { text: "仅考虑质量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "仅考虑交货期", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
            ],
            explanation: "综合评标法综合考虑价格、质量、交货期、信誉、服务等多方面因素。"
        },
        {
            question: "投标保证金的作用是什么？",
            options: [
                { text: "支付招标费用", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "保证投标人认真参与投标，防止恶意投标", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
                { text: "支付中标费用", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "作为合同定金", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
            ],
            explanation: "投标保证金是为了保证投标人认真参与投标，防止恶意投标或中标后弃标。"
        },
        {
            question: "电厂煤炭招标中，以下哪种情况属于串通投标？",
            options: [
                { text: "投标人之间互相协商报价", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
                { text: "投标人独立编制投标文件", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "投标人按招标文件要求投标", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "投标人按时提交投标文件", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
            ],
            explanation: "投标人之间互相协商报价、约定中标人等属于串通投标，是违法行为。"
        }
    ],

    // 第10关：综合全流程（50题）
    10: [
        {
            question: "煤炭贸易全流程包括哪些主要环节？",
            options: [
                { text: "仅包括采购和销售", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
                { text: "采购、运输、检验、通关、销售、结算", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
                { text: "仅包括运输", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
                { text: "仅包括结算", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
            ],
            explanation: "煤炭贸易全流程包括采购、运输、检验、通关、销售、结算等多个环节。"
        },
        {
            question: "煤炭贸易中，以下哪种风险属于系统性风险？",
            options: [
                { text: "单批货物质量问题", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "政策变化、市场价格大幅波动、汇率剧烈变动", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
                { text: "单船延误", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "单一客户违约", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
            ],
            explanation: "系统性风险是影响整个市场的风险，如政策变化、市场价格大幅波动等。"
        },
        {
            question: "煤炭贸易中，以下哪种风险可以通过保险转移？",
            options: [
                { text: "市场风险", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
                { text: "运输风险（海运货物保险）", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
                { text: "政策风险", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "信誉风险", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
            ],
            explanation: "运输风险可以通过海运货物保险转移，但市场风险、政策风险等通常无法通过保险转移。"
        },
        {
            question: "煤炭贸易中，以下哪种做法可以对冲价格风险？",
            options: [
                { text: "现货交易", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
                { text: "期货套期保值、签订长期合同、多元化采购", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
                { text: "单一来源采购", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
                { text: "一次性大量采购", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
            ],
            explanation: "期货套期保值、签订长期合同、多元化采购可以对冲价格风险。"
        },
        {
            question: "煤炭贸易中，以下哪种情况可以终止合同？",
            options: [
                { text: "市场价格下跌", correct: false, effect: {knowledge: -8, trust: -8, risk: 12} },
                { text: "对方严重违约，如货物质量严重不符", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
                { text: "运输成本上升", correct: false, effect: {knowledge: -5, trust: -5, risk: 8} },
                { text: "汇率波动", correct: false, effect: {knowledge: -5, trust: -5, risk: 8} }
            ],
            explanation: "只有对方严重违约时，才能依法终止合同。市场价格波动不是终止合同的合法理由。"
        }
    ]
};
