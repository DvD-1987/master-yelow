// 煤炭贸易题库 - 所有关卡题目
// 总计: 595 题

const questionBankData = {
1: [
    {
        question: "印尼的国花是什么？",
        options: [
            { text: "茉莉花", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "荷花", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "玫瑰", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "兰花", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "印尼的国花是茉莉花（Melati），象征着纯洁和优雅。"
    },
    {
        question: "印尼人口最多的民族是哪个？",
        options: [
            { text: "马来族", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "爪哇族", correct: true, effect: {"knowledge": 8, "trust": 5, "risk": -5} },
            { text: "巽他族", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "马都拉族", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "爪哇族是印尼人口最多的民族，约占全国人口的40%。"
    },
    {
        question: "印尼的货币单位印尼盾（Rupiah）的货币代码是什么？",
        options: [
            { text: "IDR", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "INR", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "IND", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "IRP", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "印尼盾的货币代码是IDR（Indonesian Rupiah）。"
    },
    {
        question: "在印尼，以下哪种手势是不礼貌的？",
        options: [
            { text: "双手合十致意", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
            { text: "用食指指人", correct: true, effect: {"knowledge": 8, "trust": 8, "risk": -8} },
            { text: "握手", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "微笑", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "在印尼，用食指指人被认为是不礼貌的，应该用手掌示意。"
    },
    {
        question: "印尼的独立日是哪一天？",
        options: [
            { text: "8月17日", correct: true, effect: {"knowledge": 8, "trust": 5, "risk": -5} },
            { text: "7月4日", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "10月1日", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "12月25日", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "印尼于1945年8月17日宣布独立，这一天是印尼的国庆日。"
    },
    {
        question: "印尼的主要宗教是什么？",
        options: [
            { text: "佛教", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "基督教", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "伊斯兰教", correct: true, effect: {"knowledge": 8, "trust": 5, "risk": -5} },
            { text: "印度教", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "印尼是世界上人口最多的伊斯兰教国家，约87%的人口信仰伊斯兰教。"
    },
    {
        question: "在印尼商务宴请中，以下哪种食物应该避免？",
        options: [
            { text: "猪肉", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "鸡肉", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "牛肉", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "鱼肉", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "印尼人口大多数是穆斯林，商务宴请应避免猪肉，除非确认对方非穆斯林。"
    },
    {
        question: "印尼的时区是什么？",
        options: [
            { text: "UTC+7", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "UTC+8", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
            { text: "UTC+9", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "UTC+6", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "印尼跨越3个时区：西部UTC+7（如雅加达）、中部UTC+8、东部UTC+9。"
    },
    {
        question: "在印尼，斋月期间商务活动会有什么变化？",
        options: [
            { text: "工作时间缩短，白天避免宴请", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "没有变化", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "工作时间延长", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "所有商业活动停止", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "斋月期间，穆斯林白天禁食，工作时间通常缩短，商务活动效率可能降低。"
    },
    {
        question: "印尼最大的煤炭出口港是哪个？",
        options: [
            { text: "雅加达港", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "巴厘巴板港", correct: true, effect: {"knowledge": 8, "trust": 5, "risk": -5} },
            { text: "泗水港", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "万隆港", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "巴厘巴板港（Balikpapan）是印尼最大的煤炭出口港之一，位于东加里曼丹。"
    },
    {
        question: "在印尼，以下哪种称呼方式最为恰当？",
        options: [
            { text: "直呼其名", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "使用头衔+姓氏，如", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "使用昵称", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "不需要称呼", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "在印尼，使用尊称如"
    },
    {
        question: "印尼的主要气候类型是什么？",
        options: [
            { text: "温带季风气候", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "热带雨林气候", correct: true, effect: {"knowledge": 8, "trust": 5, "risk": -5} },
            { text: "地中海气候", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "寒带气候", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "印尼位于赤道附近，属于热带雨林气候，全年高温多雨。"
    },
    {
        question: "在印尼商务场合，名片应该用什么手递接？",
        options: [
            { text: "左手", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "右手或双手", correct: true, effect: {"knowledge": 8, "trust": 5, "risk": -5} },
            { text: "左手和右手同时", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "不需要递名片", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "在印尼，应该用右手或双手递接名片，左手被认为是不洁的。"
    },
    {
        question: "印尼的煤炭主要是什么类型？",
        options: [
            { text: "无烟煤", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "动力煤（烟煤）", correct: true, effect: {"knowledge": 8, "trust": 5, "risk": -5} },
            { text: "焦煤", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "褐煤", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
        ],
        explanation: "印尼煤炭主要是动力煤（烟煤），热值一般在3800-5500大卡之间。"
    },
    {
        question: "在印尼，进入清真寺或他人住宅时应该怎么做？",
        options: [
            { text: "穿鞋直接进入", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "脱鞋", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "戴帽子", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "不需要特别注意", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "在印尼，进入清真寺或他人住宅时必须脱鞋，这是基本的礼仪。"
    },
    {
        question: "印尼的国旗由哪两种颜色组成？",
        options: [
            { text: "红色和白色", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "蓝色和白色", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "绿色和白色", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "黄色和白色", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "印尼国旗由上下两条红色和白色横条组成，被称为"
    },
    {
        question: "印尼的国歌叫什么名字？",
        options: [
            { text: "伟大的印尼", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "印尼进行曲", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "印尼之歌", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "美丽的印尼", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "印尼国歌名为"
    },
    {
        question: "在印尼，以下哪种行为在斋月期间应该避免？",
        options: [
            { text: "白天在公共场合进食", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "晚上工作", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "白天开会", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "穿正装", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "斋月期间，白天在公共场合进食对穆斯林是不尊重的行为。"
    },
    {
        question: "印尼的巴厘岛主要信仰什么宗教？",
        options: [
            { text: "伊斯兰教", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "印度教", correct: true, effect: {"knowledge": 8, "trust": 5, "risk": -5} },
            { text: "佛教", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "基督教", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "巴厘岛是印尼唯一主要信仰印度教的地区，被称为"
    },
    {
        question: "印尼的官方语言是什么？",
        options: [
            { text: "爪哇语", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "印尼语（Bahasa Indonesia）", correct: true, effect: {"knowledge": 8, "trust": 5, "risk": -5} },
            { text: "马来语", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "英语", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "印尼语（Bahasa Indonesia）是印尼的官方语言，也是东盟的工作语言之一。"
    },
    {
        question: "在印尼商务谈判中，以下哪种做法是正确的？",
        options: [
            { text: "直接拒绝对方的提议", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "委婉表达不同意见，避免直接说", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "大声争论以显示决心", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "不需要尊重对方", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "印尼文化强调和谐，商务谈判中应委婉表达不同意见，避免直接说"
    },
    {
        question: "印尼的苏门答腊岛以什么闻名？",
        options: [
            { text: "煤炭资源", correct: true, effect: {"knowledge": 8, "trust": 5, "risk": -5} },
            { text: "金融中心", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "科技产业", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "汽车工业", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "苏门答腊岛是印尼重要的煤炭产区之一，拥有丰富的煤炭资源。"
    },
    {
        question: "在印尼，以下哪种礼物适合商务场合赠送？",
        options: [
            { text: "猪肉制品", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "公司纪念品或当地特产", correct: true, effect: {"knowledge": 8, "trust": 5, "risk": -5} },
            { text: "酒类", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "锋利的刀具", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "在印尼商务场合，适合赠送公司纪念品或当地特产，应避免猪肉、酒类等。"
    },
    {
        question: "印尼的加里曼丹岛分为几个省份？",
        options: [
            { text: "3个", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "5个", correct: true, effect: {"knowledge": 8, "trust": 5, "risk": -5} },
            { text: "2个", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "7个", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "印尼部分的加里曼丹岛分为5个省份：东、西、南、北、中加里曼丹省。"
    },
    {
        question: "在印尼，以下哪种颜色具有特殊意义？",
        options: [
            { text: "绿色", correct: true, effect: {"knowledge": 8, "trust": 5, "risk": -5} },
            { text: "粉色", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "紫色", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "橙色", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "绿色在印尼与伊斯兰教有密切联系，具有特殊的宗教和文化意义。"
    },
    {
        question: "印尼的雅加达港主要出口什么商品？",
        options: [
            { text: "电子产品", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "煤炭", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
            { text: "棕榈油、橡胶、咖啡等农产品", correct: true, effect: {"knowledge": 8, "trust": 5, "risk": -5} },
            { text: "汽车", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "雅加达港主要出口棕榈油、橡胶、咖啡等农产品，不是主要煤炭出口港。"
    },
    {
        question: "在印尼，以下哪种行为表示尊重？",
        options: [
            { text: "坐着时脚底对着他人", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "微微鞠躬或点头致意", correct: true, effect: {"knowledge": 8, "trust": 5, "risk": -5} },
            { text: "大声说话", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "打断他人说话", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "在印尼，微微鞠躬或点头是表示尊重的常见方式。"
    },
    {
        question: "印尼的煤炭主要通过什么方式运输到港口？",
        options: [
            { text: "空运", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "公路和驳船", correct: true, effect: {"knowledge": 8, "trust": 5, "risk": -5} },
            { text: "管道", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "人力搬运", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "印尼煤炭主要通过公路运输到河边，再通过驳船运到海港。"
    },
    {
        question: "在印尼商务场合，以下哪种着装是合适的？",
        options: [
            { text: "短裤和T恤", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "正装或商务休闲装", correct: true, effect: {"knowledge": 8, "trust": 5, "risk": -5} },
            { text: "无袖上衣", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "拖鞋", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "在印尼商务场合，应穿着正装或商务休闲装，保持得体。"
    },
    {
        question: "印尼的",
        options: [
            { text: "一种传统舞蹈", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "印尼的建国五项原则", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "一种美食", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "一种乐器", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "潘查希拉（Pancasila）是印尼的建国五项原则，是国家的哲学基础。"
    },
    {
        question: "印尼国徽上的神鸟是什么？",
        options: [
            { text: "金翅鸟（Garuda）", correct: true, effect: {"knowledge": 8, "trust": 5, "risk": -5} },
            { text: "凤凰", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "雄鹰", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "孔雀", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "印尼国徽上的神鸟是金翅鸟（Garuda），源自印度神话，象征力量和威严。"
    },
    {
        question: "印尼首都雅加达（Jakarta）位于哪个岛屿？",
        options: [
            { text: "苏门答腊岛", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "爪哇岛", correct: true, effect: {"knowledge": 8, "trust": 5, "risk": -5} },
            { text: "加里曼丹岛", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "巴厘岛", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "雅加达位于爪哇岛西北部，是印尼的政治、经济、文化中心（旧首都）。"
    },
    {
        question: "在印尼，商务洽谈时以下哪种做法会让合作伙伴感到不舒服？",
        options: [
            { text: "主动问候对方家人", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
            { text: "不断催促对方尽快做决定", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "称赞印尼的美食文化", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
            { text: "在名片上用双语印制", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "印尼人做决定节奏较慢，注重共识，催促对方会被视为不尊重，破坏合作关系。"
    },
    {
        question: "印尼印尼语中，表示",
        options: [
            { text: "Selamat", correct: true, effect: {"knowledge": 8, "trust": 8, "risk": -8} },
            { text: "Terima kasih", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
            { text: "Maaf", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
            { text: "Sampai jumpa", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "Selamat是印尼语中常用的问候词，Selamat pagi（早上好）、Selamat siang（午安）等。"
    },
    {
        question: "印尼传统建筑中，苏拉威西岛托拉查族的特色建筑叫什么？",
        options: [
            { text: "乌布德宫", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "Tongkonan（船屋）", correct: true, effect: {"knowledge": 8, "trust": 5, "risk": -5} },
            { text: "普兰班南神庙", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "婆罗浮屠", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "Tongkonan是托拉查族的传统船形屋顶建筑，屋顶向上翘起似船，是重要文化遗产。"
    },
    {
        question: "印尼最具代表性的世界文化遗产佛教建筑是哪个？",
        options: [
            { text: "婆罗浮屠（Borobudur）", correct: true, effect: {"knowledge": 8, "trust": 5, "risk": -5} },
            { text: "普兰班南神庙", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
            { text: "乌布德皇宫", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "雅加达老城", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "婆罗浮屠是世界上最大的佛教建筑群，位于爪哇岛中部，是印尼的标志性文化遗产。"
    },
    {
        question: "在印尼，与当地人见面时，以下哪种问候方式最受欢迎？",
        options: [
            { text: "拥抱", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "握手并微微低头（Salam）", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "亲吻面颊", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 10} },
            { text: "高声打招呼", correct: false, effect: {"knowledge": -5, "trust": -5, "risk": 8} },
        ],
        explanation: "握手并微微低头是印尼常见的正式问候方式，既体现礼貌又符合当地文化。"
    },
    {
        question: "印尼的煤矿企业雇佣外籍劳工时，需要遵守哪项主要规定？",
        options: [
            { text: "无需任何限制", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
            { text: "外籍劳工需持有工作许可证（KITAS），且比例受限制", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "只有管理层可以用外籍劳工", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "外籍劳工只能做临时工", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "在印尼雇佣外籍劳工需持有KITAS（临时居留许可），且政府对外籍劳工比例有严格限制。"
    },
    {
        question: "印度尼西亚是世界上最大的群岛国家，由约多少个岛屿组成？",
        options: [
            { text: "约1.7万个岛屿", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "约1万个岛屿", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "约5000个岛屿", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "约3000个岛屿", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "印度尼西亚由约17,000个岛屿组成，是世界上最大的群岛国家，被称为'万岛之国'。"
    },
    {
        question: "印尼的正式首都是哪个城市？",
        options: [
            { text: "雅加达", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "努山塔拉", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "泗水", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "万隆", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "2024年，印尼正式将首都从雅加达迁至努山塔拉（Nusantara）。"
    },
    {
        question: "印尼是全球最大的煤炭出口国之一，其主要出口市场是？",
        options: [
            { text: "欧洲", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "印度", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "中国", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "日本", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "中国是印尼煤炭的最大进口国，占印尼煤炭出口总量的约60%以上。"
    },
    {
        question: "在印尼，行贿是合法的商务行为吗？",
        options: [
            { text: "是，这是当地惯例", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "否，行贿在印尼是非法的", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "视情况而定", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "只有小额行贿才合法", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "在印尼，行贿是非法的。作为外国商务人员，必须遵守法律，避免参与任何形式的贿赂行为。"
    },
    {
        question: "印尼煤炭的主要产地集中在哪个岛屿？",
        options: [
            { text: "爪哇岛", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "苏门答腊岛", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "加里曼丹岛（婆罗洲）", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "巴厘岛", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "印尼煤炭资源主要集中在加里曼丹岛（婆罗洲）和东加里曼丹地区。"
    },
    {
        question: "在印尼商务场合，以下哪种行为是不恰当的？",
        options: [
            { text: "用右手递名片", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "用左手递名片或接物品", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "握手时轻微鞠躬", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "准时参加会议", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "在印尼，左手被认为是不洁的，应该用右手递接物品。"
    },
    {
        question: "印尼的货币单位是什么？",
        options: [
            { text: "印尼盾（Rupiah）", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "印尼比索", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "印尼元", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "马币", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "印尼的货币是印尼盾（Indonesian Rupiah），货币代码IDR。"
    },
    {
        question: "印尼是世界上最大的什么宗教国家？",
        options: [
            { text: "基督教", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "伊斯兰教", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "佛教", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "印度教", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "印尼是世界上人口最多的伊斯兰教国家，约87%的人口信仰伊斯兰教。"
    },
    {
        question: "在印尼进行商务谈判时，以下哪种做法是正确的？",
        options: [
            { text: "直接进入正题，不谈废话", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "先建立关系，聊一些轻松话题", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "直接拒绝对方的提议", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "不准备任何资料", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "印尼人重视关系，商务谈判前通常会先建立个人关系，聊一些轻松话题。"
    },
    {
        question: "印尼的国庆日是哪一天？",
        options: [
            { text: "8月17日", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "7月4日", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "10月1日", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "12月25日", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "印尼国庆日是8月17日，纪念1945年印尼独立。"
    },
    {
        question: "煤炭按煤化程度从高到低排列，正确的顺序是？",
        options: [
            { text: "褐煤、烟煤、无烟煤", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "无烟煤、烟煤、褐煤", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "烟煤、褐煤、无烟煤", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "褐煤、无烟煤、烟煤", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "煤炭按煤化程度从高到低依次为：无烟煤、烟煤（包括焦煤、肥煤、气煤等）、褐煤。"
    },
    {
        question: "动力煤的主要质量指标中，哪个指标直接影响锅炉燃烧效率？",
        options: [
            { text: "灰分", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "硫分", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "发热量（热值）", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "挥发分", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "发热量（热值）是动力煤最重要的指标，直接决定锅炉燃烧效率和发电量。"
    },
    {
        question: "煤炭的收到基（ar）和空气干燥基（ad）有什么区别？",
        options: [
            { text: "没有区别，是同一概念", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "收到基包含全水分，空气干燥基仅含内在水分", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "空气干燥基包含全水分，收到基仅含内在水分", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "两者都是干燥状态", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。收到基是以实际收到的煤为基准，包含全水分和灰分。 收到基（ar）包含煤炭的全水分，空气干燥基（ad）仅包含内在水分（风干后的水分）。"
    },
    {
        question: "印尼动力煤的典型热值范围是多少大卡？",
        options: [
            { text: "3000-3500大卡", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "3800-5500大卡", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "6000-7000大卡", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "2000-2500大卡", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "印尼动力煤的典型热值范围是3800-5500大卡，属于中低热值煤。"
    },
    {
        question: "煤炭的灰分对电厂运行的主要影响是什么？",
        options: [
            { text: "提高燃烧效率", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "降低燃烧效率，增加排渣量", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "没有任何影响", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "降低硫排放", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "灰分是不燃物质，会降低燃烧效率，增加排渣量和除尘负担。"
    },
    {
        question: "以下哪种方式不是寻找煤炭资源的有效途径？",
        options: [
            { text: "参加煤炭行业展会", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "通过当地商会介绍", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "在网上随意搜索", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "实地考察矿区", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "网上随意搜索的信息可靠性低，应通过正规渠道寻找资源。"
    },
    {
        question: "煤炭贸易合同中，质量检验条款通常约定以哪方检验结果为准？",
        options: [
            { text: "仅以卖方检验为准", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "以双方认可的第三方检验机构为准", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "仅以买方检验为准", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "不需要检验", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "通常约定以双方认可的第三方检验机构（如CCIC）的检验结果为准。"
    },
    {
        question: "装船过程中，发现煤中有大量杂物，应该怎么做？",
        options: [
            { text: "继续装船，不管杂物", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "停止装船，要求清理杂物，记录并拍照取证", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "仅口头提醒", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "自己清理", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "发现杂物必须停止装船，要求清理，记录并拍照取证。"
    },
    {
        question: "船舶装载煤炭时，以下哪项记录是必须的？",
        options: [
            { text: "仅记录装载开始时间", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "装载时间、各舱装载量、天气情况、异常情况等", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "仅记录装载结束时间", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "不需要记录", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "必须详细记录装载时间、各舱装载量、天气情况、异常情况等。"
    },
    {
        question: "制样过程中，以下哪种操作是错误的？",
        options: [
            { text: "使用专用破碎机破碎煤样", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "使用家用搅拌机破碎煤样", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "按标准粒度要求逐级破碎", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "使用二分器缩分煤样", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。制样过程中的破碎、筛分、干燥等操作不当会导致结果偏差。 家用搅拌机可能引入污染，且无法保证粒度均匀，必须使用专用设备。"
    },
    {
        question: "出口煤炭的提单（B/L）应在什么时候签发？",
        options: [
            { text: "装船前", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "装船完成后，货物实际装船", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "货物到达目的港后", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "合同签订时", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "提单应在货物实际装船后签发，是货物收据和运输合同证明。"
    },
],
2: [
    {
        question: "动力煤的主要用途是什么？",
        options: [
            { text: "炼钢", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "发电、供热、产生动力", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "化工原料", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "炼焦", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。动力煤狭义上指用于火力发电的煤，广义上包括发电、机车推进、锅炉燃烧等产生动力的煤炭。 动力煤主要用于发电、供热、产生动力，不是用于炼焦或炼钢。"
    },
    {
        question: "同一种煤两次化验结果不一样，最主要的原因是什么？",
        options: [
            { text: "化验仪器故障", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "煤本身不均匀", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "化验人员不同", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
            { text: "天气原因", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "煤本身不均匀是最主要原因，同一堆煤的表层、中间、底部成分都可能不同。"
    },
    {
        question: "外水每增加1个百分点，收到基低位发热量约下降多少大卡/公斤？",
        options: [
            { text: "10-20大卡", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "60-80大卡", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "100-120大卡", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "不产生影响", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。外水（收到基水分）每增加1%，收到基低位发热量约下降60-70大卡/公斤。 外水每增加1%，收到基低位发热量约下降60-80大卡/公斤。"
    },
    {
        question: "内水每增加1个百分点，空气干燥基低位发热量约下降多少大卡/公斤？",
        options: [
            { text: "60-80大卡", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "40-60大卡", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "20-30大卡", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "100大卡以上", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。内水（空气干燥基水分）每增加1%，空气干燥基低位发热量约下降一定比例。 内水每增加1%，空气干燥基低位发热量约下降40-60大卡/公斤。"
    },
    {
        question: "煤炭贸易商的主要职能是什么？",
        options: [
            { text: "直接挖煤", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "链接上游煤矿和下游用户，提供贸易服务", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "只负责运输", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "只负责化验", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。煤炭贸易商的主要职能包括资源配置、信息服务、风险管理、供应链协调等。 煤炭贸易商主要职能是链接上游煤矿和下游用户，提供贸易、物流、金融等服务。"
    },
    {
        question: "收到基低位发热量（Qnet,ar）与空气干燥基低位发热量（Qnet,ad）的主要区别是什么？",
        options: [
            { text: "两者没有区别", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "收到基包含全水分，空气干燥基仅含内在水分", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "空气干燥基包含全水分，收到基仅含内在水分", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "两者都是干燥状态", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。收到基低位发热量（Qnet,ar）是包含全水分的实际收到煤样的发热量，是贸易结算常用基准。 收到基（ar）包含全水分，空气干燥基（ad）仅包含内在水分。"
    },
    {
        question: "发热量相差多少大卡属于正常波动范围？",
        options: [
            { text: "10-50大卡", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "100-200大卡", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "500大卡以上", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "不允许有任何差异", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。发热量化验允许误差通常为±120大卡/公斤（双方化验室）。 发热量相差100-200大卡属于正常波动范围。"
    },
    {
        question: "灰分相差多少属于正常波动范围？",
        options: [
            { text: "0.1%-0.2%", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "0.5%-1%", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "2%-3%", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "5%以上", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。灰分化验允许误差通常为±1.5%（双方化验室）。 灰分相差0.5%-1%属于正常波动范围。"
    },
    {
        question: "全水相差多少属于正常波动范围？",
        options: [
            { text: "0.1%-0.3%", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "1%-2%", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "3%-5%", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "不允许有差异", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。全水分化验允许误差通常为±1.0%（双方化验室）。 全水相差1%-2%非常普遍，属于正常波动范围。"
    },
    {
        question: "外水是指什么？",
        options: [
            { text: "煤颗粒内部毛细管中的水分", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "煤炭表面和大毛细管中的水分，烘干即失", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "煤中的结晶水", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "煤燃烧后产生的水", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。外水（外在水分）是指煤在开采、运输、储存过程中附着在煤表面的水分。 外水是煤炭表面和大毛细管中的水分，烘干即可失去。"
    },
    {
        question: "内水是指什么？",
        options: [
            { text: "煤炭表面水分", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "吸附在煤颗粒内部毛细管中的水分，需达到一定温度才能析出", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "煤中的自由水", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "煤燃烧后产生的水蒸气", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。内水（内在水分）是指煤在毛细管中吸附的水分，需要在较高温度下才能除去。 内水是吸附在煤颗粒内部毛细管中的水分，只有达到一定温度才能析出。"
    },
    {
        question: "煤的变质程度越低，内水含量会怎样？",
        options: [
            { text: "越低", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "越高", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "不变", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "与变质程度无关", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。煤的变质程度越低（如褐煤），内水含量越高。 变质程度越低的煤（如褐煤），内水越高，结构越疏松。"
    },
    {
        question: "在锅炉实际燃烧中，外水和内水哪个对热值的打击更明显？",
        options: [
            { text: "内水", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "外水", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "两者相同", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "都不影响", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。外水对收到基低位发热量影响更直接明显。 外水进入炉膛后会在低温区大量吸热，延缓着火，对热值的打击更明显。"
    },
    {
        question: "煤炭贸易中，为什么同一堆煤不同位置取样结果会不同？",
        options: [
            { text: "化验仪器误差", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "煤堆存在粒度偏析和成分不均匀", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "取样工具不同", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "天气影响", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。由于煤堆颗粒分布不均匀，不同位置取样结果会有差异。 煤堆存在粒度偏析，表层多为细粉，底部可能有大块和矸石，造成成分不均匀。"
    },
    {
        question: "制样过程中哪些操作会导致结果偏差？",
        options: [
            { text: "规范破碎、缩分", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "破碎、缩分、烘干操作不规范", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "使用标准筛子", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "充分混匀煤样", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。制样过程中的破碎、筛分、干燥等操作不当会导致结果偏差。 制样时破碎、缩分、烘干操作不规范会导致水分、灰分波动，产生偏差。"
    },
    {
        question: "运输过程中淋雨或风干会对煤样产生什么影响？",
        options: [
            { text: "没有影响", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "水分变化，导致发热量改变", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "只影响灰分", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "只影响硫分", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。运输过程中淋雨会增加煤的水分，风干会减少水分，都会影响化验结果。 运输过程中淋雨或风干会改变煤的水分，从而直接影响发热量。"
    },
    {
        question: "煤炭贸易商在产业链中处于什么位置？",
        options: [
            { text: "最上游，直接开采煤矿", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "中间环节，链接上游煤矿和下游用户", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "最下游，直接使用煤炭", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "只负责化验检测", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。煤炭贸易商在产业链中处于连接矿山和终端用户的中间环节。 煤炭贸易商处于产业链中间环节，链接上游煤矿和下游用户。"
    },
    {
        question: "煤炭贸易商提供的增值服务可能包括哪些？",
        options: [
            { text: "只卖煤，不提供其他服务", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "物流、金融、质检、信息等服务", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "只提供运输", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "只提供仓储", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。煤炭贸易商的增值服务包括配煤、物流、仓储、金融、风险管理等。 现代煤炭贸易商提供物流、金融、质检、市场信息等多种增值服务。"
    },
    {
        question: "收到基（ar）的全水分包括哪些？",
        options: [
            { text: "仅内在水分", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "外水加内水", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "仅外水", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "结晶水", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "收到基的全水分等于外水加内水，是煤炭的总水分含量。"
    },
    {
        question: "为什么内水反映了煤的",
        options: [
            { text: "与变质程度无关", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "变质程度越低，煤结构越疏松，内水越高", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "变质程度越高，内水越高", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "内水只与煤种有关", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "变质程度越低的煤（如褐煤），结构越疏松、有机质含氧量高，内水越高。"
    },
    {
        question: "在煤炭贸易结算中，通常更关注哪种水分？",
        options: [
            { text: "空气干燥基水分", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "收到基全水", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "内水", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "结晶水", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。在煤炭贸易结算中，通常更关注收到基全水分。 在煤炭贸易结算中，通常更关注收到基全水，因为它直接影响结算热值。"
    },
    {
        question: "简单的记忆法：全水每增减1%，收到基低位发热量如何变化？",
        options: [
            { text: "增加约60-70大卡/公斤", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "反方向增减约60-70大卡/公斤", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "不变", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "增加约100大卡/公斤", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。收到基低位发热量（Qnet,ar）是包含全水分的实际收到煤样的发热量，是贸易结算常用基准。 全水每增减1%，收到基低位发热量反方向增减约60-70大卡/公斤。"
    },
    {
        question: "化验室测出的基础数据通常是哪种发热量？",
        options: [
            { text: "收到基低位发热量", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "空气干燥基低位发热量", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "高位发热量", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
            { text: "弹筒发热量", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
        ],
        explanation: "答案正确。化验室测出的基础数据通常是空气干燥基低位发热量。 化验室测出的基础数据通常是空气干燥基低位发热量（Qnet,ad）。"
    },
    {
        question: "电厂结算和设计锅炉通常使用哪种发热量？",
        options: [
            { text: "空气干燥基低位发热量", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "收到基低位发热量", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "高位发热量", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
            { text: "弹筒发热量", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
        ],
        explanation: "答案正确。电厂结算和设计锅炉通常使用收到基低位发热量。 电厂结算和设计锅炉通常使用收到基低位发热量（Qnet,ar）。"
    },
    {
        question: "外水增加为什么会延缓锅炉着火？",
        options: [
            { text: "外水会提高煤的温度", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "外水在低温区大量吸热，导致机械不完全燃烧损失增加", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "外水会助燃", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "外水没有影响", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。外水增加会吸收更多热量用于水分蒸发，延缓锅炉着火。 外水进入炉膛后在低温区大量吸热，延缓着火，导致机械不完全燃烧损失增加。"
    },
    {
        question: "煤炭56提到的",
        options: [
            { text: "挥发分高，易燃", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "挥发分低，难燃，但发热量高", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "水分高", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "灰分高", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。无烟煤是变质程度最高的煤，特点是不易点燃、火焰短、无烟。 无烟煤挥发分低，难燃，但发热量高，燃烧时烟少。"
    },
    {
        question: "煤炭贸易中，为什么需要专业的取样和制样？",
        options: [
            { text: "为了增加工作量", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "确保样品具有代表性，减少偏差", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "为了延长交易时间", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "没有实际意义", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。专业取样和制样是确保化验结果准确、减少争议的关键。 专业的取样和制样可以确保样品具有代表性，减少因煤不均匀造成的偏差。"
    },
    {
        question: "国标允许发热量、灰分、硫分有多大的合理波动范围？",
        options: [
            { text: "不允许有任何波动", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "允许有合理波动范围", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "波动范围越大越好", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "国标没有规定", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。国标GB/T 19494规定了煤炭检验的精密度要求。 国标本身就允许发热量、灰分、硫分有合理的波动范围。"
    },
    {
        question: "不同化验室、不同设备、不同人操作，结果会有差异吗？",
        options: [
            { text: "不会有任何差异", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "正常允许有小误差", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "差异会非常大", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "无法确定", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。不同化验室的结果会有差异，但应在国标允许误差范围内。 不同化验室、不同设备、不同人操作，正常允许有小误差。"
    },
    {
        question: "动力煤和炼焦煤的主要区别是什么？",
        options: [
            { text: "没有区别", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "动力煤用于燃烧发电，炼焦煤用于炼焦炼钢", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "动力煤价格更高", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "炼焦煤热值更高", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。动力煤主要用于燃烧发热，炼焦煤主要用于焦化。 动力煤用于燃烧发电、供热，炼焦煤用于炼焦后炼钢，用途完全不同。"
    },
    {
        question: "做司机、物流、煤场相关，最常接触的是什么煤？",
        options: [
            { text: "炼焦煤", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "动力煤", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "无烟煤", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "褐煤", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。物流和煤场相关工作最常接触的是动力煤。 做司机、物流、煤场相关，最常接触、最常拉的就是动力煤。"
    },
    {
        question: "判断动力煤的简单标准是什么？",
        options: [
            { text: "看颜色", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "看用途：发电/烧锅炉 = 动力煤", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "看产地", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "看价格", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。简单判断：发热量在4500大卡以上、挥发分适中的煤可用作动力煤。 简单判断标准：看用途，发电/烧锅炉 = 动力煤。"
    },
    {
        question: "动力煤常看的指标有哪些？",
        options: [
            { text: "只看颜色", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "发热量（大卡）、硫分、灰分、水分", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "只看重量", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "只看产地", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。动力煤常看的指标包括发热量、水分、灰分、硫分、挥发分等。 动力煤常看发热量（大卡）、硫分、灰分、水分等指标。"
    },
    {
        question: "煤炭贸易商未来会消失吗？",
        options: [
            { text: "一定会消失", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "不会完全消失，但职能会转变", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "已经消失了", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "与数字化无关", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。贸易商不会消失，但需向服务型转型，提供增值服务。 煤炭贸易商不会完全消失，但职能会从传统贸易向供应链服务、金融服务等转变。"
    },
    {
        question: "数字化对煤炭贸易商的影响是什么？",
        options: [
            { text: "没有影响", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "促使贸易商提升效率、转型服务", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "让贸易商更容易作弊", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "降低了贸易门槛", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
        ],
        explanation: "答案正确。数字化提高了信息透明度，但专业贸易商仍有价值。 数字化促使煤炭贸易商提升效率、透明化，并向供应链服务转型。"
    },
    {
        question: "煤炭贸易商的核心竞争力是什么？",
        options: [
            { text: "只依靠关系", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "供应链整合能力、风控能力、服务能力", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "只依靠资金", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "只依靠信息差", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。核心竞争力包括资源整合能力、风险管理、专业服务等。 煤炭贸易商的核心竞争力是供应链整合能力、风控能力和服务能力。"
    },
    {
        question: "为什么煤炭需要混配？",
        options: [
            { text: "为了增加重量", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "满足不同用户对煤质的要求", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "为了降低价格", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "没有实际意义", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。混配可调整煤炭指标，满足不同用户需求，优化成本。 煤炭混配是为了满足不同用户对煤质（热值、硫分、灰分等）的特定要求。"
    },
    {
        question: "煤炭的",
        options: [
            { text: "收到煤炭时的状态，包含全水分", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "干燥状态", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "仅含内水的状态", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "燃烧后的状态", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "收到基（ar）是指收到煤炭时的状态，包含全水分（外水+内水）。"
    },
    {
        question: "为什么煤炭化验结果会有误差？",
        options: [
            { text: "煤本身不均匀、取样制样不规范、仪器误差", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "只有仪器误差", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "只有人为误差", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "无法解释", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。化验结果误差来源于取样、制样、化验多个环节。 煤炭化验误差来自三方面：煤本身不均匀、取样制样不规范、仪器与操作误差。"
    },
    {
        question: "煤炭贸易中，如何减少化验结果的争议？",
        options: [
            { text: "不化验，凭经验", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "规范取样、双方共同见证、第三方检测", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "只取一次样", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "只相信卖方数据", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。可通过共同取样、双方化验、选择认可实验室减少争议。 减少争议的方法包括：规范取样、双方共同见证取样过程、委托第三方检测机构。"
    },
    {
        question: "煤炭的发热量单位通常用什么表示？",
        options: [
            { text: "千卡/千克（kcal/kg）或大卡", correct: true, effect: {"knowledge": 8, "trust": 5, "risk": -5} },
            { text: "千瓦（kW）", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "立方米（m³）", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "吨（t）", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "煤炭的发热量单位通常用千卡/千克（kcal/kg）或大卡表示。"
    },
    {
        question: "煤炭的挥发分是指什么？",
        options: [
            { text: "煤炭中水分的含量", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "煤炭在高温下分解产生的气体和液体产物", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "煤炭燃烧后剩余的灰分", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "煤炭中的硫含量", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "挥发分是煤炭在高温下分解产生的气体和液体产物。"
    },
    {
        question: "煤炭的灰熔点高低对锅炉运行有什么影响？",
        options: [
            { text: "灰熔点越高越好，不易结渣", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "灰熔点越低越好，燃烧更充分", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "灰熔点对锅炉运行没有影响", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 10} },
            { text: "灰熔点只影响煤炭价格", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "灰熔点越高，煤灰越不容易结渣，有利于锅炉安全稳定运行。"
    },
    {
        question: "煤炭的全水分包括哪些部分？",
        options: [
            { text: "仅包括内在水分", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "外在水分和内在水分之和", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "仅包括外在水分", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "结晶水", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "全水分是外在水分（表面水分）和内在水分（毛细孔中的水分）之和。"
    },
    {
        question: "煤炭的硫分对环境的主要影响是什么？",
        options: [
            { text: "增加煤炭热值", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "燃烧产生二氧化硫，造成酸雨和大气污染", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "没有影响", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "降低燃烧温度", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。煤炭中的硫燃烧产生二氧化硫，是酸雨的主要成因之一，对环境和健康都有危害。 煤炭中的硫燃烧后产生二氧化硫（SO₂），是酸雨的主要成因之一。"
    },
    {
        question: "进口煤炭到港后，以下哪种情况可以提出索赔？",
        options: [
            { text: "煤炭热值比合同低1%", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "煤炭质量严重不符合合同约定的指标", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "煤炭颜色与预期不同", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "煤炭价格下降", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "只有当煤炭质量严重不符合合同约定的指标时，才能提出索赔。"
    },
    {
        question: "电厂煤炭招标中，以下哪种情况属于串通投标？",
        options: [
            { text: "投标人之间互相协商报价", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "投标人独立编制投标文件", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "投标人按招标文件要求投标", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "投标人按时提交投标文件", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "投标人之间互相协商报价、约定中标人等属于串通投标，是违法行为。"
    },
    {
        question: "煤炭贸易中，以下哪种情况可以终止合同？",
        options: [
            { text: "市场价格下跌", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "对方严重违约，如货物质量严重不符", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "运输成本上升", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "汇率波动", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "只有对方严重违约时，才能依法终止合同。市场价格波动不是终止合同的合法理由。"
    },
    {
        question: "印尼的'潘查希拉'是什么？",
        options: [
            { text: "一种传统舞蹈", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "印尼的建国五项原则", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "一种美食", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "一种乐器", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "潘查希拉（Pancasila）是印尼的建国五项原则，是国家的哲学基础。"
    },
    {
        question: "印尼印尼语中，表示'您好'或'请问'的词是什么？",
        options: [
            { text: "Selamat", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "Terima kasih", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "Maaf", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "Sampai jumpa", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "Selamat是印尼语中常用的问候词，Selamat pagi（早上好）、Selamat siang（午安）等。"
    },
    {
        question: "印尼的'哈拉尔'（Halal）认证对商务活动有什么影响？",
        options: [
            { text: "只影响食品行业", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "宴请、礼品、餐饮都应选择哈拉尔认证产品", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "对商务活动没有影响", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "仅在斋月期间需要注意", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "印尼绝大多数人口是穆斯林，哈拉尔认证非常重要，商务场合的餐饮、礼品都应注意。"
    },
    {
        question: "印尼的'橡皮时间'（Jam Karet）是指什么文化现象？",
        options: [
            { text: "印尼人非常守时", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "印尼人对时间观念较宽松，迟到被视为普遍现象", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "印尼有特殊的计时方式", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "印尼人用橡皮表计时", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "'橡皮时间'是印尼文化中对时间弹性态度的描述，外国商务人员应做好等待准备，但自己应尽量守时。"
    },
],
3: [
    {
        question: "印尼最大的煤炭产区是哪个省份？",
        options: [
            { text: "西爪哇省", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "东加里曼丹省", correct: true, effect: {"knowledge": 8, "trust": 8, "risk": -8} },
            { text: "巴厘岛省", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "雅加达特区", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 10} },
        ],
        explanation: "东加里曼丹省是印尼最大的煤炭产区，拥有丰富的煤炭资源和众多煤矿。"
    },
    {
        question: "寻找煤炭资源时，首先要核实矿山的什么证件？",
        options: [
            { text: "营业执照", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "IUP矿业经营许可证", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "税务登记证", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
            { text: "环保许可证", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "IUP是印尼矿业经营许可证，是合法采矿的必备证件。"
    },
    {
        question: "印尼煤炭的主要运输港口巴厘巴板位于哪个岛屿？",
        options: [
            { text: "爪哇岛", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "苏门答腊岛", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "加里曼丹岛", correct: true, effect: {"knowledge": 8, "trust": 8, "risk": -8} },
            { text: "苏拉威西岛", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "巴厘巴板港位于加里曼丹岛东海岸，是印尼最大的煤炭出口港之一。"
    },
    {
        question: "评估煤矿产能时，以下哪个指标最重要？",
        options: [
            { text: "矿区面积", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
            { text: "年产量ROM", correct: true, effect: {"knowledge": 8, "trust": 8, "risk": -8} },
            { text: "员工数量", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "矿区道路长度", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "年产量（ROM，Run of Mine）是评估煤矿产能的最重要指标。"
    },
    {
        question: "考察煤矿时，以下哪项不是必须了解的内容？",
        options: [
            { text: "煤矿的证照是否齐全", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
            { text: "矿主的个人爱好", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "煤炭的质量指标", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "运输条件和成本", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。考察煤矿需了解资质、产量、品质、开采条件、装运能力等。 考察煤矿时，矿主的个人爱好与业务无关，不是必须了解的内容。"
    },
    {
        question: "印尼煤炭的IUP证照有效期通常是多久？",
        options: [
            { text: "1年", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "5-20年不等，根据矿种和规模", correct: true, effect: {"knowledge": 8, "trust": 5, "risk": -5} },
            { text: "永久有效", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "3个月", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。印尼IUP（矿业经营许可证）有效期通常为10-20年，可续期。 印尼IUP证照有效期通常为5-20年不等，根据矿种和规模而定。"
    },
    {
        question: "煤矿的",
        options: [
            { text: "煤矿总面积", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "在现有技术经济条件下可以开采的煤炭储量", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "已经开采完的煤炭量", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "煤矿的探明储量", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。可采储量是指技术上可开采且经济上可行的煤炭储量。 可采储量是指在现有技术经济条件下可以开采的煤炭储量。"
    },
    {
        question: "以下哪种方式不是印尼煤炭的主要运输方式？",
        options: [
            { text: "公路运输", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "管道运输", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "铁路运输", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "内河运输", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭主要运输方式为卡车运输至港口，再装船出口。 印尼煤炭主要通过公路、铁路、内河运输，管道运输不是主要方式。"
    },
    {
        question: "考察煤矿时，如何判断煤矿的开采条件？",
        options: [
            { text: "只看煤矿外观", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "了解开采方式、设备、安全条件、环保措施", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "只听矿主介绍", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "不需要判断", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。考察煤矿需了解资质、产量、品质、开采条件、装运能力等。 判断开采条件需要了解开采方式、设备状况、安全条件、环保措施等。"
    },
    {
        question: "印尼煤炭从矿山到港口的典型运输距离是多少？",
        options: [
            { text: "1-5公里", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "50-200公里", correct: true, effect: {"knowledge": 8, "trust": 5, "risk": -5} },
            { text: "1000公里以上", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "就在港口旁边", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。印尼煤炭从矿山到港口运输距离通常为50-300公里。 印尼煤炭从矿山到港口的典型运输距离为50-200公里。"
    },
    {
        question: "以下哪种情况表明煤矿可能存在合规风险？",
        options: [
            { text: "证照齐全，正常年检", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "IUP证照过期或无法提供原件", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "有正规开采设备", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "有环保设施", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。无证开采、环保不达标、劳工问题等都是合规风险。 IUP证照过期或无法提供原件表明煤矿可能存在合规风险。"
    },
    {
        question: "印尼煤炭的主要出口港口有哪些？",
        options: [
            { text: "上海港、深圳港", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "巴厘巴板港、三马林达港、班贾尔马辛港", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "新加坡港、巴生港", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "曼谷港、马尼拉港", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。印尼煤炭主要出口港口包括东加里曼丹省的巴厘巴板(Balikpapan)、三马林达(Samarinda)、班贾尔马辛(Banjarmasin)等，详见印尼交通部港口管理局数据。"
    },
    {
        question: "考察煤矿时，以下哪种行为是不恰当的？",
        options: [
            { text: "实地查看矿区和设备", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
            { text: "只听取矿主介绍，不实地查看", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "查看相关证照原件", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "了解运输条件", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。考察煤矿应进行全面实地查看，仅听矿主介绍而不实地查看可能导致信息偏差或被骗。参考：煤矿尽职调查实务指南。"
    },
    {
        question: "以下哪种煤矿信息可以通过公开渠道查询？",
        options: [
            { text: "矿主的银行账户", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "矿山的IUP证照信息", correct: true, effect: {"knowledge": 8, "trust": 5, "risk": -5} },
            { text: "矿主的个人住址", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "矿山的具体产量数据", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。矿山的IUP(矿业经营许可证)证照信息可通过印尼能源与矿产资源部(MEMR)公开系统查询验证。"
    },
    {
        question: "印尼煤炭的典型硫分范围是多少？",
        options: [
            { text: "0.1%-0.5%", correct: true, effect: {"knowledge": 8, "trust": 5, "risk": -5} },
            { text: "2%-5%", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "10%以上", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "没有硫分", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。印尼煤炭以低硫煤为主，典型硫分范围为0.1%-0.85%，属于优质低硫煤。参考：印尼煤炭资源概况。"
    },
    {
        question: "以下哪种方式可以核实煤矿的真实性？",
        options: [
            { text: "只听朋友介绍", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "实地考察+政府网站查询证照+第三方验证", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "只看矿主提供的照片", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "不需要核实", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。核实煤矿真实性需要实地考察、政府网站查询证照、第三方验证等多种方式综合判断。"
    },
    {
        question: "印尼煤炭的",
        options: [
            { text: "3000-3500大卡", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "3800-5500大卡", correct: true, effect: {"knowledge": 8, "trust": 5, "risk": -5} },
            { text: "6000-7000大卡", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "2000大卡以下", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。印尼煤炭典型热值范围为3800-5500大卡/公斤(3800-5500 kcal/kg GAR)，次烟煤可达5700-7200大卡。"
    },
    {
        question: "以下哪种情况可能导致煤矿供应不稳定？",
        options: [
            { text: "证照齐全，设备完善", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "证照即将到期，开采设备老旧", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "有长期供应合同", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "有备用矿山", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。证照即将到期、开采设备老旧等因素可能导致供应不稳定，需提前评估。"
    },
    {
        question: "印尼煤炭的运输成本通常占FOB价格的多少？",
        options: [
            { text: "1%-5%", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "10%-30%", correct: true, effect: {"knowledge": 8, "trust": 5, "risk": -5} },
            { text: "50%以上", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "可以忽略不计", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。印尼煤炭从矿山到港口的运输成本通常占FOB价格的10%-30%，视距离和路况而定。"
    },
    {
        question: "以下哪种信息属于煤矿的商业机密？",
        options: [
            { text: "IUP证照信息", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "具体客户名单和合同价格", correct: true, effect: {"knowledge": 8, "trust": 5, "risk": -5} },
            { text: "矿区位置", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "煤炭质量指标", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。具体客户名单和合同价格属于商业机密，IUP证照、矿区位置、煤炭质量指标等相对公开。"
    },
    {
        question: "考察煤矿时，为什么要了解",
        options: [
            { text: "与业务无关", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "了解市场供应情况和价格竞争", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "只是为了社交", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "不需要了解", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。了解周边竞争情况有助于掌握市场供应情况和价格竞争态势。参考：煤炭市场分析方法。"
    },
    {
        question: "以下哪种方式可以降低煤矿考察的风险？",
        options: [
            { text: "只听信口头承诺", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "实地考察+多方验证+小批量试单", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "一次性大额采购", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "不需要考察", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。实地考察、多方验证、小批量试单可以有效降低煤矿考察的风险。"
    },
    {
        question: "以下哪种情况表明煤矿可能",
        options: [
            { text: "有正规生产记录", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "宣称产能很大，但实际设备很少", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "有长期客户", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "有完善设施", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。宣称产能很大但实际设备很少，可能是虚报产能的信号，需提高警惕。"
    },
    {
        question: "以下哪种情况可能导致煤矿",
        options: [
            { text: "证照齐全，生产正常", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "政府政策变化、证照被吊销、自然灾害", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "有长期合同", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "有备用产能", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。政府政策变化、证照被吊销、自然灾害等可能导致煤矿突然断供，需建立应急预案。"
    },
    {
        question: "以下哪种情况表明煤矿可能存在",
        options: [
            { text: "正常经营，按时付款", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "频繁更换合作伙伴，有法律诉讼记录", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "证照齐全", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "生产正常", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。频繁更换合作伙伴、有法律诉讼记录等可能是债务纠纷或信用问题的信号。"
    },
    {
        question: "以下哪种方式可以建立与煤矿的长期合作关系？",
        options: [
            { text: "一次性大额采购后不再联系", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "小批量试单→逐步增加→签订长期合同", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "只谈价格不谈其他", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "不需要建立关系", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。小批量试单→逐步增加→签订长期合同是建立长期合作关系的稳妥方式。"
    },
    {
        question: "在评估印尼煤矿资源可靠性时，以下哪项最能证明矿山的合规性？",
        options: [
            { text: "矿主的口头承诺", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
            { text: "IUP许可证、环保AMDAL报告和地质储量报告三项齐全", correct: true, effect: {"knowledge": 12, "trust": 12, "risk": -12} },
            { text: "只需要矿山的营业执照", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 10} },
            { text: "当地村长的推荐信", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 15} },
        ],
        explanation: "答案正确。合规煤矿需具备：IUP矿业经营许可证、环保影响评估报告(AMDAL)和专业地质储量报告，三项缺一不可。参考：印尼2009年矿业法。"
    },
    {
        question: "为什么内水反映了煤的'变质程度'？",
        options: [
            { text: "与变质程度无关", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "变质程度越低，煤结构越疏松，内水越高", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "变质程度越高，内水越高", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "内水只与煤种有关", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "变质程度越低的煤（如褐煤），结构越疏松、有机质含氧量高，内水越高。"
    },
    {
        question: "煤炭56提到的'无烟煤'有什么特点？",
        options: [
            { text: "挥发分高，易燃", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "挥发分低，难燃，但发热量高", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "水分高", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "灰分高", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。无烟煤是变质程度最高的煤，特点是不易点燃、火焰短、无烟。 无烟煤挥发分低，难燃，但发热量高，燃烧时烟少。"
    },
    {
        question: "煤炭的'收到基'是什么意思？",
        options: [
            { text: "收到煤炭时的状态，包含全水分", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "干燥状态", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "仅含内水的状态", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "燃烧后的状态", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "收到基（ar）是指收到煤炭时的状态，包含全水分（外水+内水）。"
    },
    {
        question: "煤炭的'空气干燥基'是什么意思？",
        options: [
            { text: "与空气接触后自然干燥的状态，仅含内在水分", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "完全干燥状态", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "收到时的状态", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "燃烧状态", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "空气干燥基（ad）是指与空气接触后自然干燥的状态，仅含内在水分。"
    },
    {
        question: "煤矿的'可采储量'是指什么？",
        options: [
            { text: "煤矿总面积", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "在现有技术经济条件下可以开采的煤炭储量", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "已经开采完的煤炭量", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "煤矿的探明储量", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。可采储量是指技术上可开采且经济上可行的煤炭储量。 可采储量是指在现有技术经济条件下可以开采的煤炭储量。"
    },
    {
        question: "煤矿的'剥采比'是指什么？",
        options: [
            { text: "煤炭的发热量", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "开采每吨煤需要剥离的废石量", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "煤矿的含水量", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "煤矿的硫含量", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。剥采比是指开采单位煤炭需要剥离的土石量。 剥采比是指开采每吨煤需要剥离的废石量，是衡量开采成本的重要指标。"
    },
],
4: [
    {
        question: "CFR条款与CIF条款的主要区别是什么？",
        options: [
            { text: "CFR包含保险，CIF不包含", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "CIF包含保险，CFR不包含", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "两者完全相同", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "CFR仅用于海运", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。CFR(成本加运费)和CIF(成本加保险费加运费)的主要区别是CIF包含保险费。参考：INCOTERMS 2020。"
    },
    {
        question: "EXW条款中，卖方的责任是什么？",
        options: [
            { text: "负责将货物运到目的港", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "在工厂或仓库将货物交给买方", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "负责装船", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "负责报关", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。EXW(工厂交货)是卖方责任最小的术语，卖方只需在工厂或仓库将货物交给买方。参考：INCOTERMS 2020。"
    },
    {
        question: "DAP条款的含义是什么？",
        options: [
            { text: "目的港船上交货", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "目的地交货（不含卸货）", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "装运港船上交货", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "工厂交货", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。DAP(Delivered at Place)目的地交货，卖方负责将货物运到指定目的地，但不含卸货。参考：INCOTERMS 2020。"
    },
    {
        question: "DDP条款中，谁负责进口报关和缴纳进口税费？",
        options: [
            { text: "买方", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "卖方", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "船公司", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "银行", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。DDP(完税后交货)是卖方责任最大的术语，卖方负责进口报关和缴纳进口税费。参考：INCOTERMS 2020。"
    },
    {
        question: "FAS条款中，卖方的责任截止到什么位置？",
        options: [
            { text: "货物装上船", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "货物交到船边（码头或驳船上）", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "货物到达目的港", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "货物通过海关", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。FAS(船边交货)中，卖方将货物交到船边(码头或驳船上)即完成交货义务。参考：INCOTERMS 2020。"
    },
    {
        question: "CPT条款与CFR条款的主要区别是什么？",
        options: [
            { text: "CPT仅用于海运，CFR可用于各种运输方式", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "CPT可用于各种运输方式，CFR仅用于海运", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "两者完全相同", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "CPT包含保险，CFR不包含", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。CPT(运费付至)可用于各种运输方式，而CFR仅适用于海运和内河运输。参考：INCOTERMS 2020。"
    },
    {
        question: "CIP条款与CIF条款的主要区别是什么？",
        options: [
            { text: "CIP仅用于海运，CIF可用于各种运输方式", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "CIP可用于各种运输方式，CIF仅用于海运", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "两者完全相同", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "CIP不包含保险", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。CIP(运费和保险费付至)可用于各种运输方式，而CIF仅适用于海运。参考：INCOTERMS 2020。"
    },
    {
        question: "DAT条款的含义是什么？",
        options: [
            { text: "目的地交货（不含卸货）", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "目的地或目的港的集散站交货（含卸货）", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "装运港船上交货", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "工厂交货", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。DAT(运输终端交货)在2020版INCOTERMS中改为DPU，指在目的地或目的港的集散站将货物卸下后完成交货。参考：INCOTERMS 2020。"
    },
    {
        question: "在FOB条款下，谁负责租船订舱？",
        options: [
            { text: "卖方", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "买方", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "船公司", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "银行", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。FOB条款下，买方负责租船订舱，卖方负责将货物装上买方指定的船舶。参考：INCOTERMS 2020。"
    },
    {
        question: "在CIF条款下，谁负责租船订舱和购买保险？",
        options: [
            { text: "买方", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "卖方", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "船公司", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "保险公司", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。CIF条款下，卖方负责租船订舱和购买保险，但风险在装运港货物装上船时转移给买方。参考：INCOTERMS 2020。"
    },
    {
        question: "煤炭贸易合同中，数量条款通常如何约定？",
        options: [
            { text: "固定数量，不允许浮动", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "约定基准数量，允许一定比例的溢短装", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "随意数量", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "仅按实际装载量", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。数量条款通常约定基准数量，并允许一定比例的溢短装(如±10%)，以应对实际装船差异。"
    },
    {
        question: "煤炭贸易中，检验条款通常如何约定？",
        options: [
            { text: "不需要检验", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "约定检验机构、检验标准、取样方法和争议处理机制", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "仅由买方检验", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "仅由卖方检验", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。检验条款必须明确约定检验机构(如 CCIC)、检验标准、取样方法和争议处理机制。"
    },
    {
        question: "煤炭贸易合同中，价格调整条款通常针对哪些指标？",
        options: [
            { text: "仅针对热值", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "热值、灰分、硫分、水分等质量指标", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "仅针对运输费用", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "不需要价格调整", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。价格调整条款通常针对热值(Qnet)、灰分(Ash)、硫分(S)、水分(Mt)等质量指标，根据实际检验结果按约定公式调整价格。"
    },
    {
        question: "煤炭贸易中，不可抗力条款通常包括哪些情况？",
        options: [
            { text: "仅包括自然灾害", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "自然灾害、战争、政府禁令等不能预见、不能避免、不能克服的情况", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "仅包括市场价格波动", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "仅包括运输延误", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。不可抗力包括自然灾害(地震、洪水、台风等)、战争、政府禁令、罢工等不能预见、不能避免、不能克服的客观情况。参考：联合国国际货物销售合同公约(CISG)。"
    },
    {
        question: "煤炭贸易合同中，争议解决条款通常如何约定？",
        options: [
            { text: "只能通过诉讼解决", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "约定仲裁机构或管辖法院，以及适用的法律", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "不需要约定", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "只能通过协商解决", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。争议解决条款应约定仲裁机构(如CIETAC、SICC等)或管辖法院，以及适用的法律(如英国法、新加坡法等)。"
    },
    {
        question: "煤炭贸易中，装运期条款通常如何约定？",
        options: [
            { text: "不约定具体装运期", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "约定具体装运期或装运期范围，以及延误的处理方式", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "仅口头约定", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "由船公司决定", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。装运期条款应约定具体装运期或装运期范围，以及延误的处理方式(如违约金、解除合同等)。"
    },
    {
        question: "煤炭贸易合同中，所有权转移条款通常在什么时候生效？",
        options: [
            { text: "合同签订时", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "根据贸易术语约定，如FOB在装运港装船后，CIF在装运港装船后", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "货物到达目的港时", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "买方付款时", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。所有权转移时间根据贸易术语约定，如FOB、CIF等都是在装运港货物装上船时转移，风险和所有权同时转移。"
    },
    {
        question: "煤炭贸易中，违约金条款的作用是什么？",
        options: [
            { text: "惩罚违约方", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "补偿守约方因违约造成的损失，并约束双方履约", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "增加合同金额", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "没有实际作用", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。违约金条款主要是为了补偿守约方因违约造成的损失，同时对双方形成履约约束，通常约定为合同金额的一定比例。"
    },
    {
        question: "煤炭贸易合同中，保密条款通常包括哪些内容？",
        options: [
            { text: "仅包括价格信息", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "价格、供应商信息、客户信息、技术资料等商业秘密", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "仅包括合同金额", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "不需要保密条款", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。保密条款通常包括价格条款、供应商信息、客户信息、技术资料等商业秘密，保护双方商业利益。"
    },
    {
        question: "煤炭贸易中，合同生效条款通常如何约定？",
        options: [
            { text: "双方签字后立即生效", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "约定生效条件，如双方签字盖章、预付款到账等", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "不需要约定", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "口头约定即可", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。合同生效条款应约定生效条件，如双方签字盖章、预付款到账等，明确合同何时开始具有法律效力。"
    },
    {
        question: "煤炭贸易合同中，通知条款的作用是什么？",
        options: [
            { text: "仅用于问候", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "明确双方通知方式、地址，确保重要信息及时送达", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "没有实际作用", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "仅用于催款", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。通知条款明确双方通知方式(邮件、传真等)、地址，确保装船通知、付款通知等重要信息能够及时送达。"
    },
    {
        question: "煤炭贸易中，合同修改条款通常如何约定？",
        options: [
            { text: "口头修改即可", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "必须以书面形式修改，并经双方签字确认", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "单方可以修改", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "不能修改", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。合同修改条款通常约定必须以书面形式修改，并经双方签字确认，口头约定不产生合同效力。"
    },
    {
        question: "煤炭贸易合同中，转让条款通常如何约定？",
        options: [
            { text: "可以随意转让", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "未经对方同意，不得转让合同权利和义务", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "只能转让权利，不能转让义务", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "不需要约定", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。转让条款通常约定未经对方书面同意，任何一方不得转让合同权利和义务，保护双方利益。"
    },
    {
        question: "煤炭贸易中，合同终止条款通常包括哪些情况？",
        options: [
            { text: "仅包括合同履行完毕", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "履行完毕、双方协商一致、一方违约、不可抗力等", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "单方可以随时终止", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "不能终止", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。合同终止条款通常包括：履行完毕、双方协商一致、一方严重违约、不可抗力持续一定时间等。"
    },
    {
        question: "信用证（L/C）付款方式中，开证行承担什么责任？",
        options: [
            { text: "仅负责传递单据", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "在单证相符条件下，承担第一性付款责任", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "仅负责通知", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "不承担任何责任", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。信用证是银行信用，开证行在单证相符条件下承担第一性付款责任，与买方是否付款无关，是银行保函。"
    },
    {
        question: "T/T（电汇）付款方式的主要风险是什么？",
        options: [
            { text: "银行风险", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "商业信用风险，买方可能不付款或延迟付款", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "没有风险", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "汇率风险", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
        ],
        explanation: "答案正确。T/T(电汇)是商业信用，主要风险是买方可能不付款或延迟付款，对卖方风险较大，通常结合预付款方式使用。"
    },
    {
        question: "D/P（付款交单）方式中，买方什么时候可以拿到单据？",
        options: [
            { text: "单据到达即可", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "付款后", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "承兑汇票后", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "不需要付款", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。D/P(付款交单)是指买方付款后才能从银行拿到单据，对卖方有一定保障，但仍依赖买方信用。"
    },
    {
        question: "D/A（承兑交单）方式中，买方什么时候可以拿到单据？",
        options: [
            { text: "付款后", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "承兑汇票后", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "单据到达即可", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "不需要任何条件", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。D/A(承兑交单)是指买方承兑汇票后即可从银行拿到单据，到期后再付款，对卖方风险较大。"
    },
    {
        question: "信用证中的",
        options: [
            { text: "对卖方有利的条款", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "使信用证实际无法生效或使卖方无法履约的条款", correct: true, effect: {"knowledge": 15, "trust": 15, "risk": -15} },
            { text: "标准条款", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "银行条款", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。软条款是使信用证实际无法生效或使卖方无法履约的条款，如要求买方签字的检验证书、限制船公司等，是常见的陷阱条款。"
    },
    {
        question: "煤炭贸易中，预付款（T/T in advance）方式对哪方风险最大？",
        options: [
            { text: "卖方", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "买方", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "银行", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "没有风险", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。预付款方式对买方风险最大，因为买方先付款，可能面临卖方不发货或货物质量不符的风险。"
    },
    {
        question: "煤炭贸易中，分期付款方式通常如何约定？",
        options: [
            { text: "一次性付清", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "合同签订付一部分，装船后付一部分，到港后付清", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "仅到货后付款", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "随意支付", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。分期付款通常约定合同签订付一部分(如30%)，装船后付一部分(如70%)，或到港后付清，平衡双方风险。"
    },
    {
        question: "信用证的有效期通常如何确定？",
        options: [
            { text: "随意设定", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "根据装运期和交单期合理设定，确保卖方有足够时间交单", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "越长越好", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "越短越好", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。信用证有效期应根据装运期和交单期合理设定，确保卖方有足够时间准备和提交单据，通常设定为装运后15-21天。"
    },
    {
        question: "煤炭贸易中，保证金（Deposit）的作用是什么？",
        options: [
            { text: "支付货款", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "保证合同履行，违约时可没收或抵扣", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "没有作用", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "支付运费", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。保证金是为了保证合同履行，一方违约时，另一方可以没收保证金或用于抵扣损失，通常为合同金额的5-10%。"
    },
    {
        question: "煤炭贸易谈判中，以下哪种做法是正确的？",
        options: [
            { text: "一开始就提出最低价", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "了解对方需求，寻找双赢方案", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "隐瞒关键信息", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "强硬施压，逼迫对方接受", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。成功的谈判应了解对方需求，寻找双赢方案，建立长期合作关系，而不是单方面施压或欺骗。"
    },
    {
        question: "在价格谈判中，以下哪种策略最有效？",
        options: [
            { text: "坚持自己的价格，不做任何让步", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "了解市场行情，提出合理价格，并准备让步空间", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "随意报价", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "只关注价格，不考虑其他条款", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。有效的价格谈判应了解市场行情，提出合理价格，准备让步空间，同时关注质量、付款方式、交货期等其他条款。"
    },
    {
        question: "煤炭贸易谈判中，以下哪种信息不应该透露给对方？",
        options: [
            { text: "公司的基本资质", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "自己的底价和迫切程度", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "产品的质量标准", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "交货时间", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。自己的底价和迫切程度是谈判的核心机密，不应轻易透露给对方，以免失去谈判主动权。"
    },
    {
        question: "在合同条款谈判中，以下哪种做法是正确的？",
        options: [
            { text: "只关注价格，其他条款不重要", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "综合考虑价格、质量、付款方式、交货期、违约责任等所有条款", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "完全接受对方提出的条款", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "口头约定即可", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。合同条款谈判应综合考虑价格、质量、付款方式、交货期、违约责任等所有条款，追求整体最优。"
    },
    {
        question: "煤炭贸易谈判中，遇到僵局时应该怎么做？",
        options: [
            { text: "终止谈判", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "暂时休会，寻找替代方案，或引入第三方协调", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "强行要求对方接受", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "放弃自己的要求", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。合同条款谈判应坦诚沟通，理解对方关切，找到双方都能接受的方案，而不是隐瞒重要信息。"
    },
    {
        question: "国际贸易合同中，FOB条款的含义是什么？",
        options: [
            { text: "卖方负责将货物运到买方港口", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "卖方在装运港将货物装上船后，风险和费用转移给买方", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "卖方负责所有运输费用", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "买方在卖方工厂提货", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "FOB（Free On Board）装运港船上交货，卖方负责将货物装上船，之后风险和费用转移给买方。"
    },
    {
        question: "国际贸易合同中，CIF条款的含义是什么？",
        options: [
            { text: "卖方仅负责装船", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "卖方负责成本、保险费和运费至目的港", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "买方负责所有费用", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "卖方不负责保险", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "CIF（Cost Insurance and Freight）成本加保险费加运费，卖方负责运费和保险至目的港。"
    },
    {
        question: "煤炭贸易合同中，价格条款通常采用什么方式？",
        options: [
            { text: "固定价格", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "基准价格+浮动机制，或指数挂钩", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "随意定价", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "仅按重量计价", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "煤炭价格波动大，通常采用基准价格+浮动机制，或与指数挂钩。"
    },
    {
        question: "煤炭贸易中，信用证（L/C）付款方式的主要风险是什么？",
        options: [
            { text: "买方风险最大", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "单证不符可能导致拒付", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "没有风险", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "卖方风险最大", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "信用证是单证交易，单证不符可能导致银行拒付。"
    },
    {
        question: "煤炭贸易合同中，质量条款通常如何约定？",
        options: [
            { text: "不约定质量标准", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "约定热值、灰分、硫分、水分等指标及允许误差范围", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "仅约定价格", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "口头约定即可", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。质量条款必须明确约定热值、灰分、硫分、水分等指标及允许误差范围，避免纠纷。参考：煤炭贸易合同范本。"
    },
    {
        question: "在国际煤炭贸易合同中，",
        options: [
            { text: "仅包括战争", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "自然灾害、战争、政府禁令、罢工等无法预见和控制的事件", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "只包括买方认为的情形", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "市场价格波动也属于不可抗力", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 10} },
        ],
        explanation: "答案正确。谈判破裂后仍应保持专业态度，保持沟通渠道畅通，为未来合作留有余地。"
    },
    {
        question: "煤炭长期供货合同中，",
        options: [
            { text: "买方无论是否提货都必须支付约定数量的货款", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "卖方必须按约定价格供货，不得涨价", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "双方可以随时修改数量", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "价格随市场波动调整", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。首次报价应给自己留出谈判空间，同时要价不能太离谱，否则可能被对方认为没有诚意。"
    },
    {
        question: "在煤炭采购谈判中，以下哪种策略有助于获得更有利的价格？",
        options: [
            { text: "只找一家供应商谈判", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "同时与多家供应商谈判，利用竞争压低价格", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "提前告知预算上限", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "直接接受第一次报价", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 10} },
        ],
        explanation: "答案正确。接受对方报价前应确认所有条款都已达成一致，避免遗漏重要细节导致后续纠纷。"
    },
    {
        question: "国际贸易合同中，争议解决条款通常选择哪种方式最为常见？",
        options: [
            { text: "仅通过外交途径解决", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "国际商会（ICC）仲裁或在新加坡、香港等地仲裁", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "只能通过印尼法院解决", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "口头协商解决，无需法律程序", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 10} },
        ],
        explanation: "答案正确。好的谈判结果是双方都感觉得到了合理利益，而不是一方完全让步。"
    },
    {
        question: "煤炭贸易中，",
        options: [
            { text: "±1%", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "±5%至±10%", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "±20%以上", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "不允许偏差", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 10} },
        ],
        explanation: "答案正确。谈判目标应设定为可实现的范围，而不是单一不可变的数字，灵活应对才能达成协议。"
    },
    {
        question: "在印中煤炭贸易谈判中，以下哪种合同条款能有效保护买方利益？",
        options: [
            { text: "仅约定价格", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "约定严格的质量指标、扣罚条款及第三方检验权", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "完全信任卖方自检结果", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
            { text: "只约定交货期", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。谈判准备应了解市场走势、对方背景、替代方案等，信息充分才能做出正确判断。"
    },
    {
        question: "煤矿的'发热量'指标为什么重要？",
        options: [
            { text: "只影响煤炭颜色", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "直接决定煤炭的价格和用途", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "只影响运输成本", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "不重要", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。发热量是煤炭最重要的质量指标，直接决定煤炭的价格和用途。发热量单位通常为大卡/公斤(kcal/kg)或MJ/kg。"
    },
    {
        question: "煤矿的'灰分'指标对贸易有什么影响？",
        options: [
            { text: "只影响煤炭颜色", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "灰分越高，热值越低，价格越低", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "灰分越高越好", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "不影响贸易", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。灰分是煤炭中不可燃的无机物质，灰分越高，热值越低，价格也越低。印尼煤炭灰分通常<10%。"
    },
    {
        question: "印尼煤炭的'典型热值'通常指什么范围？",
        options: [
            { text: "3000-3500大卡", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "3800-5500大卡", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "6000-7000大卡", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "2000大卡以下", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭典型热值范围为3800-5500大卡/公斤(3800-5500 kcal/kg GAR)，次烟煤可达5700-7200大卡。"
    },
    {
        question: "煤矿的'全水分'指标为什么重要？",
        options: [
            { text: "只影响煤炭重量", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "水分越高，实际热值越低，影响结算", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "水分越高越好", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "不影响贸易", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。全水分影响实际热值结算，水分越高，实际干基热值越低，直接影响贸易价格。"
    },
    {
        question: "煤矿的'环保合规'为什么重要？",
        options: [
            { text: "只影响矿区美观", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "不合规可能被政府关停，影响供应", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "不影响贸易", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "只影响当地环境", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。环保不合规的煤矿可能被政府关停(Denda或Tutup)，严重影响供应稳定性。"
    },
    {
        question: "考察煤矿时，为什么要了解'周边竞争情况'？",
        options: [
            { text: "与业务无关", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "了解市场供应情况和价格竞争", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "只是为了社交", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "不需要了解", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。了解周边竞争情况有助于掌握市场供应情况和价格竞争态势。参考：煤炭市场分析方法。"
    },
    {
        question: "印尼煤炭的'典型灰分'范围是多少？",
        options: [
            { text: "1%-5%", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "5%-15%", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "30%-40%", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "50%以上", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭灰分通常<10%，属于低灰分煤，部分优质煤可达5%以下。参考：印尼煤炭资源报告。"
    },
    {
        question: "煤矿的'开采年限'为什么重要？",
        options: [
            { text: "只影响矿区历史", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "影响长期供应的稳定性和可持续性", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "不影响贸易", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "只影响短期供应", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。开采年限影响长期供应的稳定性和可持续性，是评估煤矿长期价值的重要指标。"
    },
    {
        question: "印尼煤炭的'挥发分'通常是多少？",
        options: [
            { text: "5%以下", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "35%-45%", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "60%以上", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "没有挥发分", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭挥发分通常为35%-45%(次烟煤37%-42%)，属于中高挥发分煤。"
    },
    {
        question: "煤矿的'安全记录'为什么重要？",
        options: [
            { text: "只影响矿工心情", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "安全事故可能导致停产，影响供应", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "不影响贸易", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "只影响保险公司", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。安全事故可能导致煤矿停产整顿，影响供应稳定性和企业声誉。"
    },
    {
        question: "以下哪种情况表明煤矿可能'虚报产能'？",
        options: [
            { text: "有正规生产记录", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "宣称产能很大，但实际设备很少", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "有长期客户", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "有完善设施", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。宣称产能很大但实际设备很少，可能是虚报产能的信号，需提高警惕。"
    },
    {
        question: "印尼煤炭的'典型粒度'分布是怎样的？",
        options: [
            { text: "全部是大块", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "0-50mm混合，以中块和粉煤为主", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "全部是粉末", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "粒度不影响贸易", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭通常为0-50mm混合粒度，以中块(10-30mm)和粉煤(<10mm)为主。"
    },
    {
        question: "煤矿的'付款方式'通常有哪些？",
        options: [
            { text: "只能现金", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "信用证、电汇、预付款、货到付款等", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "只能赊账", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "不需要付款", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。煤矿付款方式包括信用证(L/C)、电汇(T/T)、预付款、货到付款等多种方式。"
    },
    {
        question: "以下哪种情况可能导致煤矿'突然断供'？",
        options: [
            { text: "证照齐全，生产正常", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "政府政策变化、证照被吊销、自然灾害", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "有长期合同", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "有备用产能", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。政府政策变化、证照被吊销、自然灾害等可能导致煤矿突然断供，需建立应急预案。"
    },
    {
        question: "考察煤矿时，为什么要了解'当地基础设施'？",
        options: [
            { text: "与业务无关", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "影响运输效率和成本", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "只是为了旅游", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "不需要了解", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。当地基础设施(道路、电力、通讯、港口等)直接影响运输效率和成本。"
    },
    {
        question: "印尼煤炭的'典型哈氏可磨性指数（HGI）'是多少？",
        options: [
            { text: "20-30", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "40-60", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "80-100", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "没有HGI指标", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭哈氏可磨性指数(HGI)通常为40-60，属于中等可磨性。参考：GB/T 2565-2014。"
    },
    {
        question: "煤矿的'信誉评价'可以从哪些方面了解？",
        options: [
            { text: "只听矿主自我介绍", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "行业口碑、历史履约记录、客户评价", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "只看矿区大小", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "不需要了解", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。煤矿信誉可通过行业口碑、历史履约记录、其他客户评价等多方面了解。"
    },
    {
        question: "以下哪种情况表明煤矿可能存在'债务纠纷'？",
        options: [
            { text: "正常经营，按时付款", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "频繁更换合作伙伴，有法律诉讼记录", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "证照齐全", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "生产正常", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。频繁更换合作伙伴、有法律诉讼记录等可能是债务纠纷或信用问题的信号。"
    },
    {
        question: "印尼煤炭的'典型灰熔点'是多少？",
        options: [
            { text: "800-1000°C", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "1100-1300°C", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "1500°C以上", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "没有灰熔点", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭典型灰熔点为1100-1300°C，影响锅炉设计和使用。"
    },
    {
        question: "煤矿的'技术支持能力'为什么重要？",
        options: [
            { text: "只影响矿区办公", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "影响煤质稳定性和问题处理能力", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "不影响贸易", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "只影响矿工培训", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。技术支持能力影响煤质稳定性和问题处理能力，是重要的软实力指标。"
    },
    {
        question: "以下哪种情况表明煤矿可能'过度承诺'？",
        options: [
            { text: "根据实际产能签订合同", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "承诺供应量远超实际产能", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "有备用产能", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "有长期客户", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。承诺供应量远超实际产能是过度承诺的典型表现，可能导致无法履约。"
    },
    {
        question: "印尼煤炭的'典型固定碳'含量是多少？",
        options: [
            { text: "10%以下", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "40%-55%", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "70%以上", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "没有固定碳", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭固定碳含量通常为40%-55%，是主要的发热成分。"
    },
    {
        question: "煤矿的'物流配套'包括哪些方面？",
        options: [
            { text: "只有矿山", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "道路、港口、仓储、运输工具等", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "只有办公楼", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "不需要物流配套", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。物流配套包括道路、港口、仓储、运输工具等，是保障供应的关键环节。"
    },
    {
        question: "印尼煤炭的'典型收到基低位发热量'是多少大卡/公斤？",
        options: [
            { text: "2000-2500", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "3800-5500", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "6000-7000", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "1000以下", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。收到基低位发热量(Qnet,ar)是包含全水分的实际收到煤样的发热量，是贸易结算常用基准。印尼煤典型范围3800-5500大卡/公斤。"
    },
    {
        question: "煤矿的'应急能力'为什么重要？",
        options: [
            { text: "只影响日常办公", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "应对突发情况，保障供应连续性", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "不影响贸易", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "只影响矿工安全", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。应急能力包括备用产能、应急物流、应急人员等，可应对突发情况保障供应。"
    },
    {
        question: "以下哪种情况表明煤矿可能'资金链紧张'？",
        options: [
            { text: "按时付款，信誉良好", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "频繁要求预付款，拖欠运费", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "有银行贷款", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "正常经营", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。频繁要求预付款、拖欠运费等可能是资金链紧张的信号。"
    },
    {
        question: "印尼煤炭的'典型空气干燥基低位发热量'是多少大卡/公斤？",
        options: [
            { text: "3000-3500", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "4500-6500", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "7000以上", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "2000以下", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。空气干燥基低位发热量(Qnet,ad)是去除外在水分后的发热量，印尼煤典型范围4500-6500大卡/公斤。"
    },
],
5: [
    {
        question: "装船前，船舶货舱的舱底污水井应该是什么状态？",
        options: [
            { text: "有少量积水没关系", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "清洁干燥，无积水", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "不需要检查", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "有积水可以吸收水分", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。与新客户建立信任应从小额交易开始，逐步增加，建立长期稳定合作关系。"
    },
    {
        question: "装船前，货舱舱盖的水密性检查应该怎么做？",
        options: [
            { text: "目视检查即可", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "进行冲水试验，确保无渗漏", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "不需要检查", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "仅检查外观", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。合同中约定装卸率条款，明确装卸效率要求和延误责任，确保货物顺利装卸。参考：航运惯例。"
    },
    {
        question: "装船前，以下哪种货舱状况可以接受？",
        options: [
            { text: "有锈迹和油漆剥落", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "有残留的上批货物", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "清洁、干燥、无异味、无残留物", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "有油污", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。滞期费(Demurrage)是船东因泊位占用向租船人收取的费用，超出约定装卸时间则产生滞期费。"
    },
    {
        question: "装船前，船舶的吃水标记应该是什么状态？",
        options: [
            { text: "模糊不清也没关系", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "清晰可见，便于准确测量", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "不需要检查", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "被油漆覆盖", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。速遣费(Despatch)是船东因装卸提前完成而奖励给租船人的费用，通常为滞期费的一半。"
    },
    {
        question: "装船前，以下哪项文件必须准备好？",
        options: [
            { text: "船舶国籍证书", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
            { text: "货舱清洁证书、船舶适载证书", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "船长身份证复印件", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "船员名单", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
        ],
        explanation: "答案正确。煤炭作为散货通常按重量计重，最常用的是水尺计重和地磅计重两种方式。"
    },
    {
        question: "装船时，以下哪种操作是正确的？",
        options: [
            { text: "集中在一个舱位装满后再装其他舱", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "轮流在各舱均匀装载，保持船舶平衡", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "随意装载", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "先装满船头", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。水尺计重(Draft Survey)是利用船舶吃水变化计算货物重量，是国际公认的散货计重方法。"
    },
    {
        question: "装船时，发现煤流中有大量石块应该怎么办？",
        options: [
            { text: "继续装船，不影响使用", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "立即停止装船，拍照取证，通知矿方处理", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "自己挑出来", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "视而不见", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。地磅计重使用港口地磅或装卸设备称重，适用于驳船和短途运输，精度较高。"
    },
    {
        question: "装船时，以下哪种天气可以继续作业？",
        options: [
            { text: "暴雨", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "雷电", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "大风（超过7级）", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "晴天微风", correct: true, effect: {"knowledge": 8, "trust": 5, "risk": -5} },
        ],
        explanation: "答案正确。装船数量的确认以提单数量为准，提单是货物所有权的凭证，也是结算依据。"
    },
    {
        question: "装船时，以下哪种情况应该立即停止作业？",
        options: [
            { text: "正常作业", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "输送带故障或发现明火", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "煤流正常", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "船舶轻微晃动", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。提单(B/L)是货物所有权的凭证，也是海上货物运输合同的证明，具有法律效力。"
    },
    {
        question: "装船时，如何防止煤炭自燃？",
        options: [
            { text: "不需要特别措施", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "控制煤堆温度，避免长时间堆积，及时通风", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "浇水降温", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "加盖塑料布", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。海运提单分为记名提单(Straight B/L)、指示提单(Order B/L)和空白提单(Blank B/L)，指示提单最常用可转让。"
    },
    {
        question: "装船完成后，以下哪项工作不是必须的？",
        options: [
            { text: "拍摄舱内照片", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "测量船舶吃水", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "核对装船数量", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "立即离港，不做任何记录", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
        ],
        explanation: "答案正确。选择谈判时间和地点应考虑对方的状态和立场，争取在对自己有利的环境下谈判。"
    },
    {
        question: "装船完成后，舱盖应该如何处理？",
        options: [
            { text: "敞开透气", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "立即关闭并密封，防止雨水进入", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "半开半闭", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "不需要关", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。清洁提单(Clean B/L)是指货物装船时表面状况良好，不载有不良批注的提单。"
    },
    {
        question: "装船数量的计算通常采用什么方法？",
        options: [
            { text: "仅按皮带秤读数", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "水尺计量（根据装船前后吃水差计算）", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "估算", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "按船舶载重吨", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。不清洁提单(Foul B/L)是指载有货物表面状况不良批注的提单，银行通常不接受不清洁提单。"
    },
    {
        question: "装船完成后，以下哪种文件必须签署？",
        options: [
            { text: "装船备忘录（SOF）", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "船员名单", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
            { text: "船舶维修记录", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "船长日记", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
        ],
        explanation: "答案正确。电放提单(Telex Release)是凭电放指令交付货物，无需正本提单，适合短周期货物。"
    },
    {
        question: "装船完成后，质量样品应该如何处理？",
        options: [
            { text: "丢弃", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "封存备查，保存至贸易结算完成", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "给船方带走", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "随意处理", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。印尼煤炭出口主要使用FOB和CFR条款，CIF条款较少使用，因为买方更倾向于自行安排保险。"
    },
    {
        question: "装船作业中，以下哪种行为是禁止的？",
        options: [
            { text: "佩戴安全帽", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "在作业区吸烟或使用明火", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "穿工作服", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "遵守指挥", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭出口主要使用5-6万吨的HandyMax或Supramax型散货船，更大船舶需在深水港装货。"
    },
    {
        question: "装船作业中，粉尘控制应该怎么做？",
        options: [
            { text: "不需要控制", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "使用洒水、吸尘等措施控制粉尘", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "加快装船速度", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "让工人忍受", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。煤炭货物在IMSBC Code中属于B类货物，具有自燃风险，需要特别注意通风和监控。"
    },
    {
        question: "装船作业中，以下哪种个人防护装备是必须的？",
        options: [
            { text: "安全帽、防尘口罩、安全鞋", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "普通衣服", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "拖鞋", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "不需要防护", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。IMSBC Code规定煤炭装运需申报其特性，发热值低于5800大卡的煤炭自燃风险相对较低。"
    },
    {
        question: "装船作业中，发现有人落水应该怎么办？",
        options: [
            { text: "继续作业", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "立即停止作业，启动应急预案，组织救援", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "观望", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "自己下水救人", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。煤炭自燃的主要原因是氧化反应，与空气接触面积越大、温度越高，自燃风险越大。"
    },
    {
        question: "装船作业中，以下哪种情况应该立即撤离人员？",
        options: [
            { text: "正常作业", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "发现明火或煤堆温度异常升高", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "煤流正常", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "船舶轻微晃动", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。防止煤炭自燃的关键是控制货舱温度和通风，航行中定期测量货舱温度是标准操作。"
    },
    {
        question: "船舶装煤前，以下哪项检查是必须的？",
        options: [
            { text: "仅检查船舶外观", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "检查货舱清洁度、舱盖水密性、舱内结构完整性", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "仅检查船舶证书", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "不需要检查", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "装船前必须检查货舱清洁度、舱盖水密性、舱内结构完整性。"
    },
    {
        question: "装船过程中，以下哪种操作是错误的？",
        options: [
            { text: "均匀装载，避免偏载", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
            { text: "集中在一个舱位快速装满", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "监控船舶吃水", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "记录装载进度", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "集中在一个舱位装载会导致船舶偏载、倾斜，必须均匀装载各舱。"
    },
    {
        question: "装船过程中，发现煤中有大量杂物（如木头、石头），应该怎么做？",
        options: [
            { text: "继续装船，不管杂物", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "停止装船，要求清理杂物，记录并拍照取证", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "仅口头提醒", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "自己清理", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。谈判中让对方感觉你是可以信任的，比单纯压价更重要，因为贸易是长期合作。"
    },
    {
        question: "装船过程中，以下哪种天气条件应该停止作业？",
        options: [
            { text: "晴天", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "暴雨、雷电、大风", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "阴天", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "轻微雾霾", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "暴雨、雷电、大风等恶劣天气应停止装船作业，确保安全。"
    },
    {
        question: "装船前，煤矿向港口驳运煤炭的驳船，其舱底应该是什么状态？",
        options: [
            { text: "有少量残油不影响", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
            { text: "清洁干燥，无油污、无杂物、无残余货物", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "残留上批煤炭无所谓", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "只要不漏水即可", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。锚地(Anchorage)是船舶停泊等待装卸的区域，印尼很多港口因水深限制需要锚地驳运。"
    },
    {
        question: "装船作业委托书（SOF，Statement of Facts）的作用是什么？",
        options: [
            { text: "仅记录价格", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "记录装船全过程的时间、数量、天气等关键事实，是争议处理的重要依据", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "是付款凭证", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "仅供内部记录使用", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。驳船(Barge)是浅水区转运煤炭的主要工具，通常由拖船拖带或自航。"
    },
    {
        question: "在装船港，船代（Shipping Agent）的主要职责是什么？",
        options: [
            { text: "负责检验煤炭质量", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "代表船东处理港口手续、联系引水、安排靠泊等", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "负责煤炭定价", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "监督矿山生产", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。装货港的锚地驳运(Ship-to-Ship Transfer)增加作业风险和成本，需在合同中明确责任划分。"
    },
    {
        question: "装船中，什么是",
        options: [
            { text: "调整船舶航向", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "对货舱内的煤炭进行平整，使其均匀分布，避免局部过高", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "减少装载量", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "清洁甲板", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。装船前需确认煤炭品质和数量，与合同要求匹配，避免装货后产生争议。"
    },
    {
        question: "煤炭的自燃倾向（Spontaneous Combustion Tendency）对装船有什么影响？",
        options: [
            { text: "没有影响", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
            { text: "高挥发分、低变质程度的煤易自燃，长途运输需特别监测舱温", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "自燃只在储存时发生，运输中不会", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "只有无烟煤会自燃", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。装船过程中船长需监督装货情况，确保装货安全，记录装货细节和异常情况。"
    },
    {
        question: "装船结束时，船方签发的",
        options: [
            { text: "是货物的最终权属证明", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "是货物实际装船的初步凭证，是签发提单的依据", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "是质量检验报告", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "等同于提单，可以流通转让", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。装船完毕后需核对提单数量与实际装载量，确保单货一致。"
    },
    {
        question: "以下哪种情况会导致",
        options: [
            { text: "货物按时装船", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
            { text: "大副收据上注明货物有破损或数量短少等批注", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "天气晴好", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "使用标准包装", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。印尼主要煤炭出口港分布在加里曼丹岛，如Balikpapan、Samarinda、Banjarmasin等。"
    },
    {
        question: "散装煤炭装船时，现场监装人员（Cargo Surveyor）的职责是什么？",
        options: [
            { text: "仅监督装船速度", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "监督装载数量、质量、舱况，确认装船数据，出具装船报告", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "负责安排船舶靠泊", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "负责煤炭销售", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。印尼煤炭主要出口到中国、印度、日本、韩国等亚洲国家，中国是最大进口国。"
    },
    {
        question: "装船时，如何通过",
        options: [
            { text: "直接用皮带秤计量", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "测量装货前后船舶六点吃水，根据吃水差计算排水量变化，再扣除压载水变化等", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "数驳船数量估算", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
            { text: "只看船方提供的数据", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。印尼煤炭出口到中国通常走南海航线，距离较近，航程约5-7天。"
    },
    {
        question: "煤炭装船时，港口的",
        options: [
            { text: "港口的水流速度", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "合同约定的船舶在港装卸货物的允许时间", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "装货期间的潮汐时间", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "船舶停靠港口的费用", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。卸货港通常在买方国家的主要煤炭进口港，如中国的黄岛港、鲅鱼圈港等。"
    },
    {
        question: "以下哪种情况，船方可以向货主索取",
        options: [
            { text: "装货提前完成", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "实际装货时间超过合同约定的允许装卸时间", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "天气原因导致停工", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "船舶提前抵港", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。卸货时需注意安全，防止卸货设备损坏煤炭，煤炭卸载通常使用卸船机或抓斗。"
    },
    {
        question: "散装煤炭的堆场存放通常需要注意什么？",
        options: [
            { text: "堆放越高越好，节省空间", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "控制堆高、定期翻堆降温、监控内部温度，防止自燃", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "不需要任何特殊处理", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
            { text: "淋水降温即可", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。卸货数量争议应以卸货港的检验结果为准，通常由第三方检验机构出具报告。"
    },
    {
        question: "装船时，发现货舱内存在有害气体（如甲烷），应该怎么办？",
        options: [
            { text: "继续作业，尽快完成装船", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 20} },
            { text: "立即停止作业，强制通风，检测气体浓度合格后再作业", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -12} },
            { text: "打开所有舱盖继续作业", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 10} },
            { text: "用风扇直接吹散", correct: false, effect: {"knowledge": -5, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。卸货后需平整货堆(平仓)，减少自燃风险，便于后续取样和搬运。"
    },
    {
        question: "以下哪种情况需要在提单上注明",
        options: [
            { text: "货物装入货舱", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "货物确实被放置在甲板上运输，而非舱内", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "货物超重时", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "散装货物一律注明", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。煤炭堆场管理需注意分区堆放、标识清晰、防自燃、通风散热等。"
    },
    {
        question: "在印尼港口装船时，以下哪项安全规定必须严格遵守？",
        options: [
            { text: "只需佩戴安全帽", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "穿戴安全帽、安全鞋、反光背心，进入密闭空间须携带气体检测仪", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "安全设备可选", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 15} },
            { text: "只有管理人员需要安全装备", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 10} },
        ],
        explanation: "答案正确。煤炭自燃的早期信号包括温度升高、冒烟、刺激性气味等，需密切监控。"
    },
    {
        question: "煤炭船舶在离港前，必须向港口当局提交的文件包括哪些？",
        options: [
            { text: "仅提单", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "装货完毕证明、大副收据、海关放行单、港口规费收据等", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "只需船长确认", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "只需邮件通知", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
        ],
        explanation: "答案正确。发现煤炭自燃应立即采取措施，如喷水、隔离、加速搬离等，并向保险公司报案。"
    },
    {
        question: "以下哪种设备用于检测货舱内的甲烷浓度？",
        options: [
            { text: "温度计", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "可燃气体检测仪（LEL检测仪）", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "湿度计", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "压力表", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。煤炭货损的赔偿通常依据保险条款和合同约定，需及时取证和报案。"
    },
    {
        question: "船舶靠泊装煤时，",
        options: [
            { text: "船舶维修通知", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "船舶到达并准备就绪、可以开始装货的正式通知", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "货物收讫通知", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "费率变更通知", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。共同海损是指为保护船舶和货物共同安全而采取的措施造成的损失，由各方分摊。参考：海牙-维斯比规则。"
    },
    {
        question: "煤炭驳船（Barge）在运输途中发生沉没，责任如何划定？",
        options: [
            { text: "由煤矿承担全部责任", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "依据货权转移节点和运输合同条款，结合保险理赔来处理", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "由买方承担", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "不需要处理", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 15} },
        ],
        explanation: "答案正确。驳运事故的责任划定取决于合同约定的货权转移时间(如FOB为装上船后)以及运输合同和保险条款。"
    },
    {
        question: "以下哪项是衡量港口装船效率的重要指标？",
        options: [
            { text: "港口面积", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "装船速率（Loading Rate），通常以吨/小时或吨/天表示", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "港口工人数量", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "港口水深", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
        ],
        explanation: "答案正确。装船速率(Loading Rate)是港口装船效率的关键指标，合同中通常约定最低装船速率(如15000吨/天)。"
    },
    {
        question: "印尼雨季对煤炭装船作业有什么主要影响？",
        options: [
            { text: "没有影响", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "频繁降雨导致作业中断，煤炭水分增加，装船效率下降", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "雨天装船更快", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
            { text: "雨季煤炭质量更好", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
        ],
        explanation: "答案正确。印尼雨季(11月至次年4月)降雨频繁，煤炭水分升高、装船作业经常中断，需提前做好计划应对。"
    },
    {
        question: "在散装煤炭的船务实践中，",
        options: [
            { text: "记录船员分工", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "规划各货舱的装载量分配，确保船舶纵向和横向稳性", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "标注货物集装箱编号", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "只是格式文件，没有实际用途", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。Stowage Plan由船方制定，规划每个货舱的装载量，确保船舶在装载过程中始终保持稳定安全。"
    },
    {
        question: "装船时，最终装船数量产生争议，以下哪种方法具有最高法律效力？",
        options: [
            { text: "矿方的磅秤计量", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "经双方认可的独立验货师出具的吃水计重报告", correct: true, effect: {"knowledge": 12, "trust": 12, "risk": -12} },
            { text: "船方单方面确认", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "买方的估算", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。独立第三方验货师(如SGS、Intertek、BV等)按国际标准出具的吃水计重报告具有最高公信力。"
    },
    {
        question: "煤炭装船中，",
        options: [
            { text: "港口当局", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "视合同约定而定，一般由租船人（货主）承担", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "船方单独承担", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "买方承担", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。洗舱费的承担方由租船合同约定，一般情况下由租船人(货主/贸易商)承担。"
    },
    {
        question: "以下哪种操作可以有效防止煤炭在运输途中的水分损失？",
        options: [
            { text: "不关舱盖", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
            { text: "无需特别措施，水分会自然保持", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "装船后及时关好舱盖，防止雨水进入；出港前核实舱盖密封性", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "向煤上喷水保持水分", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。运输中防水分变化的关键是确保货舱密封，防止外部雨水进入，合同通常对水分偏差有严格规定。"
    },
    {
        question: "以下哪项是印尼煤炭港口（如桑巴港、塔纳格罗港等）的典型特点？",
        options: [
            { text: "全部是深水港，可直接靠泊大型船舶", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "多为浅水港，大型船舶需在锚地通过驳船（Barge）转运", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "使用集装箱装运", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
            { text: "全天候24小时不间断作业", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。印尼加里曼丹很多煤炭装运港水深有限，无法直接靠泊大型货船，通常采用锚地驳运模式。"
    },
    {
        question: "信用证中的'软条款'是指什么？",
        options: [
            { text: "对卖方有利的条款", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "使信用证实际无法生效或使卖方无法履约的条款", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "标准条款", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "银行条款", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。软条款是使信用证实际无法生效或使卖方无法履约的条款，如要求买方签字的检验证书、限制船公司等，是常见的陷阱条款。"
    },
    {
        question: "信用证中的'不符点'是指什么？",
        options: [
            { text: "价格差异", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "单据与信用证条款不一致的地方", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "货物质量问题", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "运输延误", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。不符点是指单据与信用证条款不一致的地方，如发票金额与信用证不符、装运期逾期、提单日期晚于最迟装运日等，可能导致拒付。"
    },
    {
        question: "在国际煤炭贸易合同中，'不可抗力'（Force Majeure）条款通常包括哪些情形？",
        options: [
            { text: "仅包括战争", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "自然灾害、战争、政府禁令、罢工等无法预见和控制的事件", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "只包括买方认为的情形", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "市场价格波动也属于不可抗力", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。谈判破裂后仍应保持专业态度，保持沟通渠道畅通，为未来合作留有余地。"
    },
    {
        question: "煤炭长期供货合同中，'照付不议'（Take or Pay）条款意味着什么？",
        options: [
            { text: "买方无论是否提货都必须支付约定数量的货款", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "卖方必须按约定价格供货，不得涨价", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "双方可以随时修改数量", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "价格随市场波动调整", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。首次报价应给自己留出谈判空间，同时要价不能太离谱，否则可能被对方认为没有诚意。"
    },
    {
        question: "煤炭贸易中，'溢短装条款'（More or Less Clause）通常允许的偏差范围是多少？",
        options: [
            { text: "±1%", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "±5%至±10%", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "±20%以上", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "不允许偏差", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。谈判目标应设定为可实现的范围，而不是单一不可变的数字，灵活应对才能达成协议。"
    },
],
6: [
    {
        question: "在煤堆上取样，取样点应如何布置？",
        options: [
            { text: "只在煤堆顶部取样", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "按网格法均匀布置，包括顶部、中部和底部", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "随意取样", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "只在煤堆边缘取样", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。煤堆取样应按网格法均匀布置取样点，包括顶部、中部和底部，确保样品代表性。参考：GB 475。"
    },
    {
        question: "船舶舱内取样，每个舱至少应取几个点？",
        options: [
            { text: "1个点", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "3个点", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "不需要取样", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "10个点", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。船舶舱内取样，每个舱至少应取3个点，按上、中、下分布，确保样品代表性。参考：ISO 18283。"
    },
    {
        question: "皮带输送机上取样，应在什么位置取样？",
        options: [
            { text: "皮带任意位置", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "皮带落料处或横截面中部", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "皮带边缘", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "皮带接头处", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。皮带取样应在落料处或横截面中部取样，避免边缘和接头，确保样品代表性。参考：GB/T 19494。"
    },
    {
        question: "取样时，以下哪种天气条件最适宜？",
        options: [
            { text: "大风天气", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "晴天微风", correct: true, effect: {"knowledge": 8, "trust": 5, "risk": -5} },
            { text: "暴雨天气", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "雾霾天气", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。晴天微风是最适宜的取样天气，避免大风导致样品损失或暴雨改变煤的水分。"
    },
    {
        question: "取样铲的容量应满足什么要求？",
        options: [
            { text: "越小越好", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "能容纳至少5kg样品", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "不需要特定容量", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "越大越好", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。取样铲应能容纳至少5kg样品，确保取样量满足检验需要，符合标准要求。"
    },
    {
        question: "煤样制备的第一步是什么？",
        options: [
            { text: "直接化验", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "破碎", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "烘干", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "称重", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。煤样制备的第一步是破碎，将大块煤破碎到规定粒度(通常<3mm)，便于后续混合和缩分。"
    },
    {
        question: "样品缩分的目的是什么？",
        options: [
            { text: "减少样品数量，同时保持代表性", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "去除杂质", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "增加样品量", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "改变煤的性质", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。缩分是在保持样品代表性的前提下，减少样品数量，使样品量达到检验需要的水平。"
    },
    {
        question: "制备好的分析煤样应保存在什么容器中？",
        options: [
            { text: "纸袋", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "密封的塑料或玻璃容器", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "敞口容器", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "布袋", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。分析煤样应保存在密封的塑料或玻璃容器中，防止水分变化和氧化污染。"
    },
    {
        question: "样品制备过程中，以下哪种做法是错误的？",
        options: [
            { text: "按标准程序破碎、混合、缩分", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "随意丢弃部分样品", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "使用标准筛子筛分", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "充分混合", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。随意丢弃部分样品会破坏样品的代表性，必须按标准程序进行缩分，确保样品代表性。"
    },
    {
        question: "制备好的煤样应在多长时间内进行化验？",
        options: [
            { text: "立即化验", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "一般应在制备后24小时内进行", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "一个月后", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "没有时间限制", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。制备好的煤样一般应在24小时内进行化验，防止煤样氧化影响发热量等指标。"
    },
    {
        question: "煤炭工业分析包括哪四项指标？",
        options: [
            { text: "热值、灰分、硫分、水分", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "水分、灰分、挥发分、固定碳", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "热值、密度、硬度、粒度", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "硫分、磷分、氯分、氟分", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。工业分析包括水分(Mt)、灰分(Ash)、挥发分(Vd)、固定碳(FC)四项指标，是煤炭基本性质分析。"
    },
    {
        question: "发热量测定通常采用什么方法？",
        options: [
            { text: "目测法", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "氧弹量热法", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "称重法", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "筛分法", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。发热量测定采用氧弹量热法，在氧弹中燃烧煤样，测量释放的热量。参考：GB/T 213。"
    },
    {
        question: "灰分测定中，煤样应在什么温度下灼烧？",
        options: [
            { text: "500℃", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "815±10℃", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "1000℃", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "室温", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。灰分测定中，煤样应在815±10℃下灼烧至恒重，测定残留物质量。参考：GB/T 212。"
    },
    {
        question: "挥发分测定中，煤样应在什么条件下加热？",
        options: [
            { text: "开放环境，900℃", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "隔绝空气，900±10℃加热7分钟", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "开放环境，500℃", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "隔绝空气，500℃", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。挥发分测定应在隔绝空气条件下，900±10℃加热7分钟，测定挥发物质量损失。参考：GB/T 212。"
    },
    {
        question: "全水分测定中，煤样应在什么温度下干燥？",
        options: [
            { text: "105-110℃", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "815℃", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "50℃", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "200℃", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。全水分测定应在105-110℃下干燥至恒重，测定水分损失量。参考：GB/T 211。"
    },
    {
        question: "煤炭检验中，重复性限和再现性限的区别是什么？",
        options: [
            { text: "没有区别", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "重复性限是同一实验室多次测定的允许差，再现性限是不同实验室测定的允许差", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "重复性限更大", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "再现性限更小", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。重复性限是同一实验室多次测定的允许差，再现性限是不同实验室测定的允许差，再现性限通常更大。参考：煤炭检验标准。"
    },
    {
        question: "化验结果超差时，应该怎么做？",
        options: [
            { text: "直接采用平均值", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "查找原因，重新化验", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "随意选择一个结果", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "隐瞒不报", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。化验结果超差时，应查找原因(仪器、试剂、操作等)，重新化验，不能随意采用或隐瞒。"
    },
    {
        question: "煤炭检验中，以下哪种情况会导致系统误差？",
        options: [
            { text: "偶然的温度波动", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "天平未校准", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "读数时的视差", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "样品不均匀", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。天平未校准会导致系统误差，使所有测定结果都偏高或偏低，需定期校准仪器。"
    },
    {
        question: "质量控制中，标准煤样的作用是什么？",
        options: [
            { text: "作为商品出售", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "检验化验方法的准确性和精密度", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "装饰实验室", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "没有作用", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。标准煤样用于检验化验方法的准确性和精密度，是质量控制的重要手段。参考：GB/T 19494.3。"
    },
    {
        question: "煤炭检验报告应包含哪些内容？",
        options: [
            { text: "仅包含结果数值", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "样品信息、检验项目、检验结果、检验依据、检验日期、检验人员", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "仅包含检验日期", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "仅包含检验人员", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。检验报告应包含样品信息、检验项目、检验结果、检验依据、检验日期、检验人员等完整信息，具有法律效力。"
    },
    {
        question: "在皮带输送机上取样，取样点应选择在什么位置？",
        options: [
            { text: "皮带任意位置都可以", correct: false, effect: {"knowledge": -8, "trust": -8, "risk": 12} },
            { text: "皮带输送机落料处或皮带横截面中部，避免边缘和接头", correct: true, effect: {"knowledge": 15, "trust": 15, "risk": -15} },
            { text: "皮带边缘位置方便取样", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "皮带接头处", correct: false, effect: {"knowledge": -12, "trust": -12, "risk": 18} },
        ],
        explanation: "皮带边缘煤流不均匀，接头处可能有杂质，正确位置是落料处或皮带横截面中部。"
    },
    {
        question: "船舶舱内取样，以下哪种操作是错误的？",
        options: [
            { text: "按网格法布点，每舱至少3个点", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
            { text: "取样深度达到煤堆底部", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
            { text: "只在舱口表面取样，不深入煤堆内部", correct: true, effect: {"knowledge": 15, "trust": 15, "risk": -15} },
            { text: "记录取样深度和位置", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "只在表面取样是严重错误！舱内煤堆存在粒度偏析，必须深入煤堆内部取样。"
    },
    {
        question: "使用取样铲取样时，铲内应如何装满？",
        options: [
            { text: "装满即可，形状无所谓", correct: false, effect: {"knowledge": -8, "trust": -8, "risk": 12} },
            { text: "铲内煤样应呈自然堆积状态，不压实也不留空隙", correct: true, effect: {"knowledge": 15, "trust": 15, "risk": -15} },
            { text: "用力压实以多取一些", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "只取铲底一层", correct: false, effect: {"knowledge": -12, "trust": -12, "risk": 18} },
        ],
        explanation: "压实会改变煤样密度和粒度分布，留空隙则样品不足。应自然堆积。"
    },
    {
        question: "煤堆取样时，以下哪种天气条件最不宜取样？",
        options: [
            { text: "晴天微风", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
            { text: "大雨天气", correct: true, effect: {"knowledge": 15, "trust": 15, "risk": -15} },
            { text: "阴天", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "轻微雾霾", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "大雨会改变煤的水分，影响检验结果，不宜在大雨天气取样。"
    },
    {
        question: "制备煤样时，以下哪种操作是正确的？",
        options: [
            { text: "直接使用原煤样，不需要制备", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "破碎、混合、缩分，确保样品代表性", correct: true, effect: {"knowledge": 15, "trust": 15, "risk": -15} },
            { text: "只取大颗粒煤样", correct: false, effect: {"knowledge": -12, "trust": -12, "risk": 18} },
            { text: "随意丢弃部分煤样", correct: false, effect: {"knowledge": -15, "trust": -15, "risk": 20} },
        ],
        explanation: "答案正确。煤样制备必须经过破碎、混合、缩分等步骤，确保样品具有代表性。参考：GB/T 19494.2。"
    },
    {
        question: "煤炭水分检验中，",
        options: [
            { text: "50°C", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "105°C至110°C", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "200°C", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "室温自然风干", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。全水分测定按国标GB/T 211，煤样在(105±2)°C干燥箱中烘至恒重，计算重量损失为水分含量。"
    },
    {
        question: "煤炭灰分检验中，以下哪种方法是国际通用标准方法？",
        options: [
            { text: "目视法", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
            { text: "缓慢灰化法（将煤样在815±10°C下完全灰化）", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "快速燃烧法（500°C）", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "化学溶解法", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。按国际标准ISO 1171及中国标准GB/T 212，灰分测定采用缓慢灰化法，在815±10°C马弗炉中灼烧至恒重。"
    },
    {
        question: "煤炭硫分检验中，常用的库法（Eschka法）是什么原理？",
        options: [
            { text: "直接观察颜色", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
            { text: "将煤样与埃卡氏混合剂混合灼烧后，滴定生成的硫酸盐含量", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "通过气相色谱分离", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "用磁铁吸附含硫颗粒", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。Eschka法是测定全硫的经典方法，将煤与埃卡氏混合剂混合后高温灼烧，硫转化为硫酸盐，再用滴定法定量测定。参考：GB/T 214。"
    },
    {
        question: "以下哪种仪器用于快速测定煤炭发热量？",
        options: [
            { text: "分光光度计", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "氧弹量热计（Bomb Calorimeter）", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "气相色谱仪", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "原子吸收光谱仪", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。氧弹量热计是测定煤炭发热量的标准仪器，煤样在充满纯氧的密封钢弹中完全燃烧，通过测量水温升计算发热量。参考：GB/T 213。"
    },
    {
        question: "煤炭的",
        options: [
            { text: "在空气中加热至300°C", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "在隔绝空气的条件下，900°C±10°C加热7分钟", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "在水中加热至100°C", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "在空气中燃烧至无残留", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。挥发分测定按GB/T 212，在隔绝空气的坩埚中900°C±10°C加热7分钟，损失的质量减去水分即为挥发分。"
    },
    {
        question: "在煤炭检验中，",
        options: [
            { text: "仅供参观展示", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "在双方对检验结果有争议时，委托第三方用仲裁样重新检验", correct: true, effect: {"knowledge": 12, "trust": 12, "risk": -12} },
            { text: "用于下次装船的质量参考", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "保存满6个月后丢弃", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。仲裁样品须密封保存规定期限(通常90天至6个月)，一旦双方对主检结果有异议，可启动仲裁程序委托独立机构重检。"
    },
    {
        question: "国际标准中，煤炭检验的取样方法主要参照哪个标准？",
        options: [
            { text: "ISO 1213", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "ISO 18283（散装煤炭取样）", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "ISO 9000", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "ASTM D388", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
        ],
        explanation: "答案正确。ISO 18283是国际标准化组织发布的散装煤炭取样标准，规定了取样方案、取样设备和操作程序，是国际贸易中的主要参照标准。"
    },
    {
        question: "什么是煤炭检验中的",
        options: [
            { text: "随机抽取几铲样品", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "按固定时间或固定质量间隔，从整批煤流中有规律地取样", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "只取开始和结束时的样品", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "由矿方自行决定取样时间", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
        ],
        explanation: "答案正确。系统取样是按固定质量间隔(如每500吨取一次)或时间间隔对整批煤流进行均匀取样，保证样品的代表性。"
    },
    {
        question: "煤炭粒度（Size）检验中，以下哪种方法是标准方法？",
        options: [
            { text: "目测估计", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
            { text: "用标准筛网（筛分法）筛分，称量各粒级质量计算百分比", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "用尺子量几块煤的尺寸", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "依据煤炭颜色判断", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
        ],
        explanation: "答案正确。粒度检验按标准方法使用规定孔径的系列筛网，称量各筛层上的煤样质量，计算各粒级的百分比。"
    },
    {
        question: "煤炭检验结果出现异常偏高的热值，以下哪种原因最可能导致？",
        options: [
            { text: "天气寒冷", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "量热计校准不准确，或样品受到有机物污染", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "检验人员经验丰富", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "煤炭储存时间长", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。热值异常偏高通常是量热计未经正确标定，或样品受到油脂、有机物等高热值物质污染，需重新检验并排查原因。"
    },
    {
        question: "煤炭检验中，SGS、Intertek、Bureau Veritas等机构的证书有何意义？",
        options: [
            { text: "仅是形式文件，无实际意义", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
            { text: "是国际认可的第三方公正检验机构证书，具有较高公信力和法律效力", correct: true, effect: {"knowledge": 12, "trust": 12, "risk": -12} },
            { text: "只在欧洲有效", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "仅供买方内部使用", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。SGS、Intertek、BV等是国际知名的独立检验机构，其检验证书在全球范围内获得银行、保险和贸易方的广泛认可。"
    },
    {
        question: "煤炭化验报告中，",
        options: [
            { text: "收到基（含全水分）", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "空气干燥基（在实验室空气条件下平衡后的水分状态）", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "干燥无灰基（不含水分和灰分）", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "干燥基（不含水分）", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。Ad基(Air-dry basis)是空气干燥基，指煤样在实验室温湿度条件下达到平衡后进行分析的基准，是最常见的化验基准之一。"
    },
    {
        question: "以下哪种元素是衡量煤炭对锅炉腐蚀风险的关键指标？",
        options: [
            { text: "碳（C）", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "氯（Cl）和硫（S）", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "氧（O）", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "氮（N）", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。氯会导致锅炉高温腐蚀，硫在燃烧中形成SO2和SO3，二者共同导致低温露点腐蚀，是锅炉设计和运行中的重要控制指标。"
    },
    {
        question: "检验煤样时，以下哪种操作会影响水分检验结果的准确性？",
        options: [
            { text: "使用密封容器保存样品", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
            { text: "样品长时间暴露在空气中或受阳光直射", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "在实验室内检验", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
            { text: "使用已校准的天平称量", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
        ],
        explanation: "答案正确。水分对环境非常敏感，样品暴露在空气中会失水，直射阳光下更快蒸发，导致检验结果偏低，必须用密封容器迅速送检。"
    },
    {
        question: "在煤炭贸易检验中，买卖双方对质量结果有异议时，正确的处理程序是什么？",
        options: [
            { text: "直接停止合作", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "启动合同约定的仲裁程序，用封存的仲裁样委托合同指定机构重检", correct: true, effect: {"knowledge": 12, "trust": 12, "risk": -12} },
            { text: "由买方自行重新检验", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "向媒体曝光", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。按合同约定的仲裁程序，使用双方共同封存的仲裁样本，委托合同指定的公正第三方机构重检，结果对双方均有约束力。"
    },
    {
        question: "以下哪种方法可以在现场快速估测煤炭的大致热值？",
        options: [
            { text: "直接品尝", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "使用近红外光谱仪（NIR）或便携式XRF仪快速扫描", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "观察煤炭颜色", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "称重估算", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。近红外光谱仪(NIR)是一种先进的在线/现场快速分析工具，可在几秒内估测热值、水分、灰分等，但贸易合同中的正式结果仍需按标准方法在实验室检验。"
    },
    {
        question: "煤炭检验机构的化验室应定期进行哪项质量控制？",
        options: [
            { text: "不需要质量控制", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
            { text: "参加能力验证（PT，Proficiency Testing），使用标准煤样校验仪器和方法", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "只需更换新仪器", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "每年培训一次员工即可", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。能力验证(PT)是化验室质量管理体系(如ISO/IEC 17025)的核心要求，通过使用标准参考煤样与其他实验室比对结果，验证检测能力。"
    },
    {
        question: "煤样",
        options: [
            { text: "将煤样从高处倒下，随机分成两份", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "将煤样均匀倒入有交替方向槽口的二分器中，自动分成等量两份", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "用手工将煤样拨分两堆", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
            { text: "称重后取一半", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。Riffle Divider(二分器)有相互交替方向的槽口，煤样缓慢均匀倒入后，每隔一槽的煤料分别落入左右两个容器，将样品等量二分，代表性好。"
    },
    {
        question: "以下哪项煤炭指标对火力发电厂的脱硫系统设计影响最大？",
        options: [
            { text: "水分（Mt）", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "全硫（St,d）", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "挥发分（Vad）", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "粒度", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。全硫含量直接决定燃烧产生的SO2浓度，是脱硫系统(FGD)规模设计和运行的关键依据，也是环保排放标准的核心指标。"
    },
    {
        question: "煤炭灰熔点测定时，正确的判断依据是什么？",
        options: [
            { text: "灰样颜色变化", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "锥形灰样在加热过程中形态变化的四个特征温度：变形温度（DT）、软化温度（ST）、半球温度（HT）和流动温度（FT）", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "灰样重量变化", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "用温度计测量熔化时的温度", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。煤炭作为散货主要通过海运，使用巴拿马型或更小的灵便型船舶运输。"
    },
    {
        question: "以下关于煤炭化验报告中各分析基的换算，哪条是正确的？",
        options: [
            { text: "各分析基之间不可相互换算", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "通过水分、灰分数据，利用换算系数公式可将ad基换算为ar基、d基或daf基", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "只能从高基换算到低基", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "换算结果与实测值完全相同", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。印尼-中国南海航线是东南亚至中国的主要煤炭运输航线，航程约5-7天。"
    },
    {
        question: "煤炭检验报告上的",
        options: [
            { text: "煤炭重量", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "净收到基低位发热量（Net As Received Calorific Value）", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "煤炭体积", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "灰分含量", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。好望角型船舶(Cape Size)载重吨通常在15万吨以上，但吃水较深，印尼很多港口无法靠泊。"
    },
    {
        question: "检验机构对煤样进行化验时，为何要保留",
        options: [
            { text: "作为纪念品", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "以备复检或仲裁检验时使用，确保检验结果可追溯和可复核", correct: true, effect: {"knowledge": 12, "trust": 12, "risk": -12} },
            { text: "用于下一批次的检验参考", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "提供给矿方", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。港口吃水限制是影响船舶选择的重要因素，印尼很多煤炭港口水深有限，无法靠泊大型船舶。"
    },
    {
        question: "煤炭检验中，",
        options: [
            { text: "24小时以内，且全程密封保存", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "可以放置一周后再测定", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
            { text: "时间长短不影响水分结果", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "48小时后取样效果更稳定", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。运费是煤炭到岸价(CIF)的重要组成部分，通常占CIF价格的10-30%。"
    },
    {
        question: "装船中，什么是'拉稳（Trimming）'操作？",
        options: [
            { text: "调整船舶航向", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "对货舱内的煤炭进行平整，使其均匀分布，避免局部过高", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "减少装载量", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "清洁甲板", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。装船前需确认煤炭品质和数量，与合同要求匹配，避免装货后产生争议。"
    },
    {
        question: "装船结束时，船方签发的'大副收据'（Mate's Receipt）的作用是什么？",
        options: [
            { text: "是货物的最终权属证明", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "是货物实际装船的初步凭证，是签发提单的依据", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "是质量检验报告", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "等同于提单，可以流通转让", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。装船完毕后需核对提单数量与实际装载量，确保单货一致。"
    },
    {
        question: "以下哪种情况会导致'不清洁提单'（Claused B/L）？",
        options: [
            { text: "货物按时装船", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "大副收据上注明货物有破损或数量短少等批注", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "天气晴好", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "使用标准包装", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。印尼主要煤炭出口港分布在加里曼丹岛，如Balikpapan、Samarinda、Banjarmasin等。"
    },
    {
        question: "装船时，如何通过'吃水计重法'（Draft Survey）确定装船量？",
        options: [
            { text: "直接用皮带秤计量", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "测量装货前后船舶六点吃水，根据吃水差计算排水量变化，再扣除压载水变化等", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "数驳船数量估算", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "只看船方提供的数据", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭出口到中国通常走南海航线，距离较近，航程约5-7天。"
    },
    {
        question: "煤炭装船时，港口的'层流水（Laydays）'是指什么？",
        options: [
            { text: "港口的水流速度", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "合同约定的船舶在港装卸货物的允许时间", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "装货期间的潮汐时间", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "船舶停靠港口的费用", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。卸货港通常在买方国家的主要煤炭进口港，如中国的黄岛港、鲅鱼圈港等。"
    },
    {
        question: "以下哪种情况，船方可以向货主索取'滞期费'（Demurrage）？",
        options: [
            { text: "装货提前完成", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "实际装货时间超过合同约定的允许装卸时间", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "天气原因导致停工", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "船舶提前抵港", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。卸货时需注意安全，防止卸货设备损坏煤炭，煤炭卸载通常使用卸船机或抓斗。"
    },
    {
        question: "以下哪种情况需要在提单上注明'货物在甲板上'（On Deck）？",
        options: [
            { text: "货物装入货舱", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "货物确实被放置在甲板上运输，而非舱内", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "货物超重时", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "散装货物一律注明", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。煤炭堆场管理需注意分区堆放、标识清晰、防自燃、通风散热等。"
    },
    {
        question: "船舶靠泊装煤时，'NOR'（Notice of Readiness）是什么？",
        options: [
            { text: "船舶维修通知", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "船舶到达并准备就绪、可以开始装货的正式通知", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "货物收讫通知", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "费率变更通知", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。共同海损是指为保护船舶和货物共同安全而采取的措施造成的损失，由各方分摊。参考：海牙-维斯比规则。"
    },
    {
        question: "在散装煤炭的船务实践中，'舱位指定函'（Stowage Plan）的作用是什么？",
        options: [
            { text: "记录船员分工", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "规划各货舱的装载量分配，确保船舶纵向和横向稳性", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "标注货物集装箱编号", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "只是格式文件，没有实际用途", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。Stowage Plan由船方制定，规划每个货舱的装载量，确保船舶在装载过程中始终保持稳定安全。"
    },
    {
        question: "煤炭装船中，'洗舱费'（Cleaning Fee）通常由谁承担？",
        options: [
            { text: "港口当局", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "视合同约定而定，一般由租船人（货主）承担", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "船方单独承担", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "买方承担", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。洗舱费的承担方由租船合同约定，一般情况下由租船人(货主/贸易商)承担。"
    },
],
7: [
    {
        question: "印尼煤炭出口许可证（ET）的有效期通常是多久？",
        options: [
            { text: "永久有效", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "1年", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "5年", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "不需要更新", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。印尼煤炭出口通常以FOB价为主，由买方承担运费和保险费。"
    },
    {
        question: "申请印尼煤炭出口许可证需要满足什么条件？",
        options: [
            { text: "只需要有煤矿", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "拥有有效的IUP矿业经营许可证、缴纳相关税费、符合环保要求", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "只需要缴纳税费", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "不需要任何条件", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。海运费通常以美元计，按重量吨(WMT)或体积吨计费。"
    },
    {
        question: "印尼煤炭出口许可证由哪个部门颁发？",
        options: [
            { text: "财政部", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "能源和矿产资源部", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "交通部", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "商务部", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。煤炭海运附加费包括燃油附加费(BAF)、货币贬值附加费(CAF)等。"
    },
    {
        question: "没有出口许可证（ET）出口煤炭会有什么后果？",
        options: [
            { text: "没有后果", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "货物被扣留、罚款、甚至刑事责任", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "只需要补交税费", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "只需要道歉", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。煤炭运费旺季较高，淡季较低，受供需关系影响大。"
    },
    {
        question: "出口许可证上的数量可以超出实际出口数量吗？",
        options: [
            { text: "可以，越多越好", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "不可以，实际出口数量不能超过许可证数量", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "没有关系", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "可以超出50%", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。巴拿马型船舶(Panamax)适合通过巴拿马运河，载重吨约6-8万吨。"
    },
    {
        question: "印尼海关报关单（PEB）应在什么时候提交？",
        options: [
            { text: "货物装船后", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "货物装船前或装船时", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "货物到达目的港后", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "不需要提交", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。灵便型船舶(Handy Size)载重吨约3-5万吨，适合挂靠中小港口。"
    },
    {
        question: "报关单上的商品编码（HS Code）有什么作用？",
        options: [
            { text: "没有作用", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "确定关税税率、监管条件、统计类别", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "仅用于统计", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "仅用于识别商品", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。超灵便型船舶(Supramax)载重吨约5-6万吨，装卸效率较高。"
    },
    {
        question: "煤炭的HS Code通常是什么？",
        options: [
            { text: "2701", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "9999", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "1234", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "0000", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。煤炭通常用防水帆布覆盖，防止水分进入和货物损失。"
    },
    {
        question: "报关时低报价格会有什么后果？",
        options: [
            { text: "没有后果", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "海关处罚、补税、罚款、甚至刑事责任", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "只需要道歉", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "只需要补税", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。租船合同明确规定装卸时间计算方法、滞期费和速遣费计算方式。"
    },
    {
        question: "海关查验时，以下哪种做法是正确的？",
        options: [
            { text: "拒绝查验", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "配合查验，提供必要协助", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "隐瞒货物", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "逃跑", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。装卸时间(Laytime)是租船合同中约定的可用于装卸的时间，超出则产生滞期费。"
    },
    {
        question: "报关单上的FOB价格应包括哪些费用？",
        options: [
            { text: "仅包括货物成本", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "货物成本、装船前运费、装船费用", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "包括海运费", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "包括保险费", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。滞期费(Demurrage)是船舶滞期时租船人向船东支付的费用，通常按每天多少美元计算。"
    },
    {
        question: "海关对出口煤炭的估价依据是什么？",
        options: [
            { text: "卖方随意报价", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "实际成交价格、基准价格（HBA）等", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "买方报价", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "不需要估价", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。速遣费(Despatch)是船舶提前完成装卸时船东向租船人支付的费用，通常为滞期费的一半。"
    },
    {
        question: "出口报关需要提交哪些主要单据？",
        options: [
            { text: "只需要发票", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "发票、装箱单、合同、出口许可证、提单等", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "只需要合同", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "只需要提单", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。装卸时间通常从船舶提交装货准备通知书(NOR)后一定时间(如24小时)开始计算。"
    },
    {
        question: "海关放行后，以下哪种做法是正确的？",
        options: [
            { text: "立即装船离港", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "核对放行信息，确认无误后装船", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "不需要核对", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "可以更改货物", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。装卸时间可以连续计算(CW)，也可以按工作日计算，需在合同中明确。"
    },
    {
        question: "出口关税的计算基础是什么？",
        options: [
            { text: "货物重量", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "FOB价格", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "货物体积", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "随意确定", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。滞期费通常按船舶滞期天数计算，不足一天按比例计算。"
    },
    {
        question: "印尼煤炭出口需要缴纳哪些主要税费？",
        options: [
            { text: "只需要缴纳增值税", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "出口关税、增值税、所得税等", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "不需要缴税", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "只需要缴纳所得税", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。装卸效率是港口或船舶装卸货物的速度，通常以每天装卸多少吨表示。"
    },
    {
        question: "印尼煤炭出口关税的税率是如何确定的？",
        options: [
            { text: "固定税率", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "累进税率，根据基准价格（HBA）和实际价格计算", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "随意确定", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "按重量计算", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。煤炭装船时，船方和货方通常会共同签署装货确认单，记录实际装货数量。"
    },
    {
        question: "基准价格（HBA）是由谁确定的？",
        options: [
            { text: "出口商", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "能源和矿产资源部每月发布", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "海关", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "买方", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。煤炭卸货后，货物所有权转移到买方，买方承担后续风险。"
    },
    {
        question: "出口煤炭的增值税税率是多少？",
        options: [
            { text: "不需要缴纳", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "0%（出口免税）", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "10%", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "20%", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。国际航运公会(BIMCO)是制定航运标准合同的重要组织。"
    },
    {
        question: "滞港费是什么费用？",
        options: [
            { text: "货物在港口停留超过免费期后产生的费用", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "装船费", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "运费", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "保险费", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。金康合同(Gencon)是BIMCO标准航次租船合同，广泛用于干散货运输。"
    },
    {
        question: "原产地证（CO）有什么作用？",
        options: [
            { text: "仅用于统计", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "证明货物原产地，享受关税优惠，清关必备", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "仅用于识别货物", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "没有作用", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。煤炭在海牙-维斯比规则下运输，承运人责任限制有一定标准。"
    },
    {
        question: "出口煤炭的提单（B/L）由谁签发？",
        options: [
            { text: "卖方", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "承运人或其代理人", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "买方", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "银行", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。共同海损是为保护船舶和货物共同安全而采取的措施造成的损失，由各方按比例分摊。参考：约克-安特卫普规则。"
    },
    {
        question: "装船通知（Shipping Advice）应在什么时候发送？",
        options: [
            { text: "装船前", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "装船后及时发送", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "到达目的港后", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "不需要发送", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。船舶在航行中因不可抗力导致货物损失，承运人不承担责任。"
    },
    {
        question: "出口煤炭的保险应由谁购买？",
        options: [
            { text: "必须由卖方购买", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "根据贸易术语，FOB由买方购买，CIF由卖方购买", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "必须由买方购买", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "不需要保险", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。船舶互撞责任条款(Hague Visby Rule)规定承运人最低责任和免责事项。"
    },
    {
        question: "出口文件中的",
        options: [
            { text: "提单表面清洁", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "承运人未对货物表面状况作不良批注的提单", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "新提单", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "空白提单", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。货物保险单转让需要保险单背面背书。"
    },
    {
        question: "印尼煤炭出口时，以下哪种证件是必须的？",
        options: [
            { text: "仅需要发票", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "出口许可证（ET）、原产地证、质量检验报告、报关单等", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "仅需合同", correct: false, effect: {"knowledge": -8, "trust": -8, "risk": 12} },
            { text: "仅需装箱单", correct: false, effect: {"knowledge": -8, "trust": -8, "risk": 12} },
        ],
        explanation: "印尼煤炭出口需要出口许可证、原产地证、质量检验报告、报关单等多种证件。"
    },
    {
        question: "印尼海关对煤炭出口征收的出口关税是如何计算的？",
        options: [
            { text: "固定税率", correct: false, effect: {"knowledge": -5, "trust": -5, "risk": 8} },
            { text: "根据煤炭基准价格（HBA）和实际出口价格，采用累进税率", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "按重量征收固定费用", correct: false, effect: {"knowledge": -8, "trust": -8, "risk": 12} },
            { text: "不征收出口关税", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "印尼煤炭出口关税采用累进税率，根据煤炭基准价格和实际出口价格计算。"
    },
    {
        question: "煤炭出口报关时，以下哪种申报方式是错误的？",
        options: [
            { text: "如实申报煤种、数量、价值", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
            { text: "低报价格以少缴税款", correct: true, effect: {"knowledge": 15, "trust": 15, "risk": -15} },
            { text: "提供真实的质量检验报告", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "按海关要求提供完整单证", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "低报价格是严重的违法行为，会导致海关处罚、滞港、甚至刑事责任。"
    },
    {
        question: "印尼海关对出口煤炭的质量检验通常由谁执行？",
        options: [
            { text: "出口商自行检验", correct: false, effect: {"knowledge": -8, "trust": -8, "risk": 12} },
            { text: "政府指定的检验机构或认可的第三方检验机构", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "进口商指定的机构", correct: false, effect: {"knowledge": -5, "trust": -5, "risk": 8} },
            { text: "不需要检验", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "印尼海关要求出口煤炭由政府指定的检验机构或认可的第三方检验机构检验。"
    },
    {
        question: "出口煤炭的提单（B/L）有什么重要作用？",
        options: [
            { text: "仅作为运输凭证", correct: false, effect: {"knowledge": -5, "trust": -5, "risk": 8} },
            { text: "是货物所有权凭证、运输合同证明和提货凭证", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "仅用于报关", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "没有实际作用", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。BDI指数(波罗的海干散货指数)是反映干散货运输市场运费水平的权威指数。"
    },
    {
        question: "印尼煤炭出口需要提交的",
        options: [
            { text: "印尼环保许可证", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "印尼出口商注册证书（Eksportir Terdaftar Produk Industri Kehutanan的缩写变体，煤炭出口商注册证）", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "印尼矿山安全证书", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "印尼质量认证证书", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。平安险(FPA)承保自然灾害造成的全损和部分损失，是海运货物保险的基本险别。"
    },
    {
        question: "印尼煤炭出口时，原产地证（Certificate of Origin）的签发机构是？",
        options: [
            { text: "印尼煤炭协会", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "印尼贸易部下属机构或印尼工商总会（KADIN）", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "煤矿企业自行签发", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
            { text: "进口国大使馆", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。水渍险(WPA)除承保平安险责任外，还承保自然灾害造成的单独海损。"
    },
    {
        question: "以下哪种说法正确描述了印尼煤炭出口的HBA（基准价格）制度？",
        options: [
            { text: "HBA是出口的固定价格，不得偏离", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "HBA是印尼政府每月公布的煤炭基准价格，用于计算出口关税", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "HBA只影响国内销售价格", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "HBA是矿山自行制定的价格", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。一切险(All Risks)是最高险别，除承保水渍险责任外，还承保一般外来原因造成的损失。"
    },
    {
        question: "在印尼港口，",
        options: [
            { text: "检查货物质量", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "熟悉当地水道，引领船舶安全进出港口", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "负责办理海关手续", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "管理码头工人", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。保险金额通常为CIF价的110%，以便覆盖预期利润。"
    },
    {
        question: "印尼海关的",
        options: [
            { text: "颜色不同，没有实际区别", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "绿色通道免于查验直接放行，红色通道需要逐票查验货物", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "绿色通道收费更高", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "红色通道速度更快", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
        ],
        explanation: "答案正确。保险费率受航线、货物类型、船龄等因素影响。"
    },
    {
        question: "煤炭出口合规中，",
        options: [
            { text: "所有煤炭必须全部出口", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "煤矿企业必须将部分产量（通常25%）以优惠价格供应国内市场后，才能申请出口配额", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "出口商必须在国内注册公司", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "进口商必须在印尼设厂", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。煤炭作为易自燃货物，保险公司通常要求特殊条款或加收保费。"
    },
    {
        question: "出口煤炭的装船指令（Shipping Instruction，SI）应该包含哪些要素？",
        options: [
            { text: "仅包含货物名称", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "收货人、通知方、目的港、提单条款、货物描述、数量、唛头等完整信息", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "只需目的港", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "只需买方联系方式", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。保险索赔应在事故发生后及时向保险公司报案，并在规定时限内提交索赔文件。"
    },
    {
        question: "以下哪种情形会导致印尼海关扣押出口货物？",
        options: [
            { text: "按时提交所有单证", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
            { text: "货物描述与申报不符、价格明显低于市场价（涉嫌低报逃税）", correct: true, effect: {"knowledge": 12, "trust": 12, "risk": -12} },
            { text: "船舶正常靠泊", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
            { text: "支付了所有港口费用", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
        ],
        explanation: "答案正确。保险代位求偿权是指保险公司赔付后取代被保险人向第三方追偿的权利。"
    },
    {
        question: "出口信用证（L/C）业务中，",
        options: [
            { text: "签发信用证", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "审核出口商提交的单据，符合信用证条款后买入单据并付款", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "负责货物检验", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "安排船舶运输", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。伦敦保险协会条款(ICC)是国际通用的海运保险条款。"
    },
    {
        question: "ICSB（印尼煤炭出口确认书）主要用于什么目的？",
        options: [
            { text: "确认煤炭质量", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "向印尼矿业能源部报告出口数量和价格，用于监管和关税计算", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "替代提单使用", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "用于保险索赔", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。检验鉴定类保单由第三方检验机构出具，比如CCIC。"
    },
    {
        question: "在印尼出口通关中，",
        options: [
            { text: "大批量煤炭出口", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "展品、商业样品、专业设备等临时出境物品的通关", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "煤炭出口退税", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "所有货物出口都用ATA单证册", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
        ],
        explanation: "答案正确。保险单是向银行结汇的重要单据之一。"
    },
    {
        question: "在处理印尼煤炭出口中的",
        options: [
            { text: "接受来历不明的资金", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 20} },
            { text: "对客户进行KYC（了解你的客户）审查，通过正规银行渠道收付款", correct: true, effect: {"knowledge": 12, "trust": 12, "risk": -12} },
            { text: "用现金结算以避免审查", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 20} },
            { text: "拒绝提供任何资金来源证明", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 20} },
        ],
        explanation: "答案正确。无单放货是指在正本提单未到达情况下凭保函放货，是常见的贸易风险。"
    },
    {
        question: "印尼煤炭出口关税的计算基础是什么价格？",
        options: [
            { text: "买方报价", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "印尼政府公布的每月HBA基准价格", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "矿山成本价", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "国际期货价格", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。印尼是东盟成员国，中国从印尼进口煤炭享受中国-东盟自由贸易区协定税率。"
    },
    {
        question: "离港时，船长需要向港口当局提交",
        options: [
            { text: "不需要，煤炭不是危险货物", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "需要。散装煤炭在IMSBC Code中被列为B类货物（可能产生可燃气体），须按规定申报和采取安全措施", correct: true, effect: {"knowledge": 12, "trust": 12, "risk": -12} },
            { text: "只有爆炸物需要申报", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "视矿山而定", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。原产地证书是享受协定税率的必要凭证，需在进口时向海关提交。"
    },
    {
        question: "出口单证中，",
        options: [
            { text: "散装煤炭不需要装箱单", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "散装煤炭通常以重量清单（Weight List）代替，记录各舱的装载量", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "与集装箱货物完全相同", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "只需提单即可，不需要装箱单", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。进口煤炭需符合中国国家标准，主要指标包括热值、灰分、硫分等。"
    },
    {
        question: "以下哪种做法可以有效降低信用证（L/C）业务中的单证不符（Discrepancy）风险？",
        options: [
            { text: "等货物装船后再准备单据", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "在开证前与买方仔细核对条款，确保所有单证要求可以做到，装船后尽快制单", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "只关注价格条款", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "让船方准备所有单据", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。中国对进口煤炭实施自动进口许可管理，不是禁止或限制进口的商品。"
    },
    {
        question: "以下哪种单据是进口银行向买方结汇的直接依据？",
        options: [
            { text: "装船指令（SI）", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "信用证项下的全套单据（提单、发票、检验报告、原产地证等）", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "合同副本", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "报关单", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。中国海关对进口煤炭实施法定检验，不合格不得进口。"
    },
    {
        question: "在印尼，煤炭出口的环保合规要求主要体现在哪些方面？",
        options: [
            { text: "只需缴纳环境税", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "矿山需持有有效的AMDAL（环境影响评估）批准文件，且需缴纳矿山复垦保证金", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "没有环保合规要求", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 15} },
            { text: "只需要种植树木", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。进口煤炭放射性超标将被退运或销毁，不能在中国市场销售。"
    },
    {
        question: "以下哪种情况，出口商可以要求将",
        options: [
            { text: "向船方缴纳额外费用后直接更改", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "不能随意更改；但若批注是因误解造成且实际货物无问题，可出具保函申请更改，风险由出口商承担", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "任何时候都可以更改", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "通知买方后可以更改", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。无单放货可能导致贸易欺诈，银行可能不接受此做法，且属于欺诈风险领域。"
    },
    {
        question: "在印尼煤炭出口实务中，",
        options: [
            { text: "船舶无偿使用港口的时间", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "租船合同中，货主可以免费使用船舶进行装卸的允许时间（Laytime内的免费时间）", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "港口工人的休息时间", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "海关免于检查的时间", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。租船合同中的Laytime就是货主免费使用船舶的时间(即免租期)，在此时间内完成装卸无需额外支付费用。"
    },
    {
        question: "煤炭水分检验中，'全水分'（Mt）测定时，煤样应在多少度烘干？",
        options: [
            { text: "50°C", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "105°C至110°C", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "200°C", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "室温自然风干", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。全水分测定按国标GB/T 211，煤样在(105±2)°C干燥箱中烘至恒重，计算重量损失为水分含量。"
    },
    {
        question: "煤炭的'挥发分'（Volatile Matter）测定条件是什么？",
        options: [
            { text: "在空气中加热至300°C", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "在隔绝空气的条件下，900°C±10°C加热7分钟", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "在水中加热至100°C", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "在空气中燃烧至无残留", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。挥发分测定按GB/T 212，在隔绝空气的坩埚中900°C±10°C加热7分钟，损失的质量减去水分即为挥发分。"
    },
    {
        question: "在煤炭检验中，'仲裁样品'的保存目的是什么？",
        options: [
            { text: "仅供参观展示", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "在双方对检验结果有争议时，委托第三方用仲裁样重新检验", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "用于下次装船的质量参考", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "保存满6个月后丢弃", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。仲裁样品须密封保存规定期限(通常90天至6个月)，一旦双方对主检结果有异议，可启动仲裁程序委托独立机构重检。"
    },
    {
        question: "什么是煤炭检验中的'系统取样'（Systematic Sampling）？",
        options: [
            { text: "随机抽取几铲样品", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "按固定时间或固定质量间隔，从整批煤流中有规律地取样", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "只取开始和结束时的样品", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "由矿方自行决定取样时间", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。系统取样是按固定质量间隔(如每500吨取一次)或时间间隔对整批煤流进行均匀取样，保证样品的代表性。"
    },
    {
        question: "煤炭的'哈氏可磨性指数'（HGI）测量的是什么？",
        options: [
            { text: "煤炭的硬度", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "煤炭在电厂磨煤机中被磨碎的难易程度", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "煤炭的含水量", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "煤炭的颗粒大小", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。HGI(Hardgrove Grindability Index)是评价煤炭被磨成细粉的难易程度，HGI越高说明越易磨，对电厂磨煤机设计和运行至关重要。参考：GB/T 2565。"
    },
    {
        question: "煤炭化验报告中，'Ad'基代表什么分析基准？",
        options: [
            { text: "收到基（含全水分）", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "空气干燥基（在实验室空气条件下平衡后的水分状态）", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "干燥无灰基（不含水分和灰分）", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "干燥基（不含水分）", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。Ad基(Air-dry basis)是空气干燥基，指煤样在实验室温湿度条件下达到平衡后进行分析的基准，是最常见的化验基准之一。"
    },
    {
        question: "煤样'缩分'操作中，常用的'二分器'（Riffle Divider）如何使用？",
        options: [
            { text: "将煤样从高处倒下，随机分成两份", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "将煤样均匀倒入有交替方向槽口的二分器中，自动分成等量两份", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "用手工将煤样拨分两堆", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "称重后取一半", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。Riffle Divider(二分器)有相互交替方向的槽口，煤样缓慢均匀倒入后，每隔一槽的煤料分别落入左右两个容器，将样品等量二分，代表性好。"
    },
    {
        question: "煤炭检验报告上的'CV (NAR)'是什么意思？",
        options: [
            { text: "煤炭重量", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "净收到基低位发热量（Net As Received Calorific Value）", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "煤炭体积", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "灰分含量", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。好望角型船舶(Cape Size)载重吨通常在15万吨以上，但吃水较深，印尼很多港口无法靠泊。"
    },
    {
        question: "检验机构对煤样进行化验时，为何要保留'副样'（Reserve Sample）？",
        options: [
            { text: "作为纪念品", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "以备复检或仲裁检验时使用，确保检验结果可追溯和可复核", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "用于下一批次的检验参考", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "提供给矿方", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。港口吃水限制是影响船舶选择的重要因素，印尼很多煤炭港口水深有限，无法靠泊大型船舶。"
    },
    {
        question: "煤炭检验中，'全水分'样品采集后，从取样到开始测定的最长允许时间是多少？",
        options: [
            { text: "24小时以内，且全程密封保存", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "可以放置一周后再测定", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "时间长短不影响水分结果", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "48小时后取样效果更稳定", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。运费是煤炭到岸价(CIF)的重要组成部分，通常占CIF价格的10-30%。"
    },
],
8: [
    {
        question: "中国煤炭进口需要办理什么许可证？",
        options: [
            { text: "不需要许可证", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "自动进口许可证", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "特殊进口许可证", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "出口许可证", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。中国煤炭进口需要办理自动进口许可证，由商务部或其授权机构签发。"
    },
    {
        question: "煤炭进口企业需要具备什么资质？",
        options: [
            { text: "任何企业都可以进口", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "具有进出口经营权，并在商务部备案", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "只需要营业执照", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "不需要任何资质", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。煤炭进口企业需要具有进出口经营权，并在商务部备案，不是任何企业都可以进口。"
    },
    {
        question: "自动进口许可证的有效期是多久？",
        options: [
            { text: "永久有效", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "当年有效，一般6个月", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "5年", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "1个月", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。自动进口许可证当年有效，一般为6个月，需要在有效期内使用。"
    },
    {
        question: "没有自动进口许可证可以进口煤炭吗？",
        options: [
            { text: "可以", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "不可以，属于无证进口，会被海关扣留处罚", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "可以事后补办", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "只需要罚款", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。没有自动进口许可证不能进口煤炭，属于无证进口，会被海关扣留并处罚。"
    },
    {
        question: "自动进口许可证可以跨年度使用吗？",
        options: [
            { text: "可以", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "不可以，当年有效", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "可以延期", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "可以跨年使用3个月", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。自动进口许可证当年有效，不能跨年度使用，过期需要重新申请。"
    },
    {
        question: "中国海关对进口煤炭实施什么检验监管制度？",
        options: [
            { text: "不需要检验", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "法定检验，必须经海关检验合格才能销售使用", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "自愿检验", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "仅抽查", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。进口煤炭属于法定检验商品，必须经海关检验合格后才能销售使用。"
    },
    {
        question: "进口煤炭的放射性检验标准是什么？",
        options: [
            { text: "不需要检验", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "放射性核素活度浓度不得超过规定限值", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "任何放射性都可以", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "仅检验铀", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。进口煤炭放射性核素活度浓度不得超过规定限值，超标将退运或销毁。"
    },
    {
        question: "进口煤炭的环保项目包括哪些？",
        options: [
            { text: "仅检验热值", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "灰分、硫分、汞、砷、磷、氟、氯等", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "仅检验水分", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "不需要环保检验", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。进口煤炭需要检验灰分、硫分、汞、砷、磷、氟、氯等环保项目。"
    },
    {
        question: "进口煤炭检验不合格会有什么后果？",
        options: [
            { text: "可以销售", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "退运、销毁或技术处理，不能销售使用", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "只需要罚款", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "可以降级使用", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。进口煤炭检验不合格必须退运、销毁或技术处理，不能销售使用。"
    },
    {
        question: "进口煤炭的检验地点通常在哪里？",
        options: [
            { text: "产地", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "卸货港", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "买方仓库", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "卖方仓库", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。进口煤炭通常在卸货港进行检验，由海关或指定检验机构执行。"
    },
    {
        question: "进口煤炭的取样应该在什么时候进行？",
        options: [
            { text: "装船前", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "卸货过程中", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "销售后", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "不需要取样", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。进口煤炭取样应在卸货过程中进行，确保样品代表性。"
    },
    {
        question: "进口煤炭的质量索赔期通常是多久？",
        options: [
            { text: "没有期限", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "合同约定的期限，通常60-90天", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "1年", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "5年", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。质量索赔期由合同约定，通常为卸货后60-90天，超过期限不能索赔。"
    },
    {
        question: "进口煤炭的重量检验通常采用什么方法？",
        options: [
            { text: "目测", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "水尺计重或衡器计重", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "估算", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "按提单数量", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。进口煤炭重量检验采用水尺计重或衡器计重，以确定实际到货数量。"
    },
    {
        question: "进口煤炭发现短重时，应该怎么办？",
        options: [
            { text: "接受损失", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "及时向船方或保险公司提出索赔", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "隐瞒不报", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "自己承担", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。发现短重应及时向船方或保险公司提出索赔，并保留相关证据。"
    },
    {
        question: "进口煤炭的检验结果与合同不符时，应该怎么办？",
        options: [
            { text: "接受货物", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "根据合同条款提出索赔或拒收", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "隐瞒不报", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "自己处理", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。检验结果与合同不符时，应根据合同条款提出索赔或拒收，维护自身权益。"
    },
    {
        question: "进口煤炭的关税税率是多少？",
        options: [
            { text: "20%", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "0%（最惠国税率）", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "10%", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "5%", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。进口煤炭最惠国税率为0%，东盟国家享受协定税率也是0%。"
    },
    {
        question: "进口煤炭的增值税税率是多少？",
        options: [
            { text: "0%", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "13%", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "17%", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "6%", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。进口煤炭增值税税率为13%，以CIF价加关税为计税基础。"
    },
    {
        question: "进口煤炭的完税价格如何确定？",
        options: [
            { text: "随意确定", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "CIF价格，包括货价、运费、保险费", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "仅货价", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "FOB价格", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。进口煤炭完税价格以CIF价格为基础，包括货价、运费、保险费。"
    },
    {
        question: "进口报关单应在什么时候提交？",
        options: [
            { text: "货物到港后14天内", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "货物装船时", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "货物销售后", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "不需要报关", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。进口报关单应在货物到港后14天内提交，逾期将产生滞报金。"
    },
    {
        question: "滞报金是如何计算的？",
        options: [
            { text: "固定金额", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "按日征收，为完税价格的0.05%", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "按货物重量", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "不需要缴纳", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。滞报金按日征收，为完税价格的0.05%，起征日为第15天。"
    },
    {
        question: "进口煤炭卸货时，以下哪种做法是正确的？",
        options: [
            { text: "直接卸货，不需要监督", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "派人现场监督，记录卸货数量和质量", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "等卸完货后再检查", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "不需要任何记录", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。进口煤炭卸货时应派人现场监督，记录卸货数量和质量，发现问题及时取证。"
    },
    {
        question: "进口煤炭仓储时，以下哪种做法是错误的？",
        options: [
            { text: "分类存放，标识清楚", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "与易燃物品混放", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "定期测温，防止自燃", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "保持通风", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。煤炭不能与易燃物品混放，应分类存放，标识清楚，定期测温，保持通风。"
    },
    {
        question: "进口煤炭堆存时，以下哪种措施可以防止自燃？",
        options: [
            { text: "压实堆存", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "控制堆高，定期倒堆，监测温度", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "覆盖塑料布", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "不需要措施", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。控制堆高，定期倒堆，监测温度可以防止煤炭自燃。"
    },
    {
        question: "进口煤炭的堆存高度一般不应超过多少米？",
        options: [
            { text: "20米", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "10米", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "30米", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "没有限制", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。进口煤炭堆存高度一般不应超过10米，过高会增加自燃风险。"
    },
    {
        question: "进口煤炭发现自燃迹象时，应该怎么办？",
        options: [
            { text: "继续堆存", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "立即倒堆降温，必要时使用阻燃剂", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "浇水", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "隐瞒不报", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。发现自燃迹象应立即倒堆降温，必要时使用阻燃剂，不能浇水或隐瞒。"
    },
    {
        question: "煤炭进口到中国，以下哪种证件是必须的？",
        options: [
            { text: "仅需发票", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "进口许可证、原产地证、质量检验报告、报关单、合同、发票、提单等", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "仅需合同", correct: false, effect: {"knowledge": -8, "trust": -8, "risk": 12} },
            { text: "仅需提单", correct: false, effect: {"knowledge": -8, "trust": -8, "risk": 12} },
        ],
        explanation: "煤炭进口需要进口许可证、原产地证、质量检验报告、报关单等多种证件。"
    },
    {
        question: "中国海关对进口煤炭的放射性检验要求是什么？",
        options: [
            { text: "不需要检验", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "必须检验，放射性超标将退运或销毁", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "仅对特定国家检验", correct: false, effect: {"knowledge": -5, "trust": -5, "risk": 8} },
            { text: "仅抽查", correct: false, effect: {"knowledge": -8, "trust": -8, "risk": 12} },
        ],
        explanation: "中国海关对进口煤炭实施放射性检验，放射性超标的煤炭将退运或销毁。"
    },
    {
        question: "进口煤炭的报关单应在什么时候提交？",
        options: [
            { text: "货物到港前或到港后14天内", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "货物装船时", correct: false, effect: {"knowledge": -8, "trust": -8, "risk": 12} },
            { text: "货物销售后", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "不需要报关", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "进口报关单应在货物到港前或到港后14天内提交，逾期将产生滞报金。"
    },
    {
        question: "中国海关对进口煤炭的环保项目检验包括哪些？",
        options: [
            { text: "仅检验热值", correct: false, effect: {"knowledge": -8, "trust": -8, "risk": 12} },
            { text: "灰分、硫分、汞、砷、磷、氟、氯等环保指标", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "仅检验水分", correct: false, effect: {"knowledge": -8, "trust": -8, "risk": 12} },
            { text: "不需要环保检验", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "中国海关对进口煤炭实施环保项目检验，包括灰分、硫分、汞、砷等有害元素。"
    },
    {
        question: "煤炭进口到中国，海关监管代码对应的HS编码是什么？",
        options: [
            { text: "2701（无烟煤等）和2701.12、2701.19（烟煤/其他煤）", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "8501（发电机）", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "7201（生铁）", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "4401（木材）", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。煤炭的HS编码在第27章：2701.11(无烟煤)、2701.12(烟煤/动力煤)、2701.19(其他煤)。正确归类对报关和关税计算至关重要。"
    },
    {
        question: "中国进口煤炭实行的",
        options: [
            { text: "任何来源的煤炭均可进口", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "进口商和进口口岸需在政府核定的名单内，部分口岸有进口煤炭资质要求", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "只有国有企业可以进口煤炭", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "不需要任何资质", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
        ],
        explanation: "答案正确。中国对煤炭进口实行一定的管理制度，进口口岸、进口企业资质以及煤炭质量标准均有规定。"
    },
    {
        question: "在中国港口卸煤时，船方通常要求签署的",
        options: [
            { text: "货方要求船方提前放货，未提交正本提单时，向船方出具的保函", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "货物损坏时的理赔申请", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "延迟卸货的赔偿说明", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "海关的进口许可证", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。LOI(以保函换提单)是指在正本提单未到达时，收货人向船东出具保函，承诺日后提交提单并赔偿船东由此产生的损失，换取船东放货。"
    },
    {
        question: "中国海关进口煤炭时，检验检疫项目中",
        options: [
            { text: "无任何标准限制", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
            { text: "煤炭的天然放射性核素含量不得超过规定限值，超标将被退运或销毁", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "只对特定国家进行检测", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "仅抽查部分批次", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。中国海关对所有进口煤炭强制实施放射性检测，依据《进出口固体废物放射性污染防治规定》，超标批次将被退运。"
    },
    {
        question: "进口煤炭到港后，如果发现数量短少，买方应如何处理？",
        options: [
            { text: "直接接受，不追究", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
            { text: "立即委托公证机构出具公证重量报告，在合同规定期限内向卖方或船方提出书面索赔", correct: true, effect: {"knowledge": 12, "trust": 12, "risk": -12} },
            { text: "向媒体曝光", correct: false, effect: {"knowledge": -8, "trust": -8, "risk": 10} },
            { text: "等下次购货时扣款", correct: false, effect: {"knowledge": -5, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。发现数量短少必须及时取证（委托公证行出具重量证明），并在合同约定的索赔期限内（通常30-60天）向责任方索赔。"
    },
    {
        question: "中国对进口煤炭的灰分、硫分的环保限值要求中，以下哪项描述准确？",
        options: [
            { text: "没有任何限制", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
            { text: "对灰分不超过40%、硫分不超过3%有明确上限，部分地区有更严格的地方标准", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "只限制硫分，不限制灰分", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "仅限制印尼来源的煤炭", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。中国国家标准对进口煤炭有明确的质量限值（灰分≤40%、硫分≤3%等），部分发达省市地方标准更严。超标煤炭需处理或退运。"
    },
    {
        question: "卸煤港口的",
        options: [
            { text: "胶带输送机计量更准确", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "合同约定的计量方式更重要；通常采用经双方认可的第三方吃水计重或岸上地磅", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "两者完全相同，随意选择", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "不需要精确计量", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
        ],
        explanation: "答案正确。贸易结算应以合同约定的计量方式为准。实践中常用第三方出具的吃水计重报告，或在固定地磅上过磅计量。"
    },
    {
        question: "进口煤炭的",
        options: [
            { text: "按矿山成本价计算", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "以成交价格为基础，通常为CIF价格（含运费、保险）", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "由进口商自行申报任何价格", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
            { text: "按国际期货价格", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。海关对进口货物的关税完税价格以成交价为基础（通常为CIF价），若申报价格明显低于正常市场水平，海关可进行价格质疑和调整。"
    },
    {
        question: "以下哪种情况，进口商可以申请海关",
        options: [
            { text: "任何进口货物都可以", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "货物进入特殊监管区后，可暂缓缴纳进口税，待实际销售或转移到境内时再缴税", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "只有出口商品享受此待遇", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "保税区内完全免税", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。保税仓库、综合保税区等特殊监管区允许货物"
    },
    {
        question: "在进口煤炭卸船作业中，",
        options: [
            { text: "清洁甲板", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "在抓斗无法取尽后，由工人进入舱内将残余煤炭清扫干净，计入总卸货量", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "清扫港口道路", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "清洗舱壁", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。卸煤时抓斗作业完成后，舱底仍有残余煤炭，需要工人进舱清扫并吊出，这部分"
    },
    {
        question: "进口煤炭卸货港对",
        options: [
            { text: "压载水可以随意排放", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
            { text: "压载水须经过处理符合标准才能排放，防止外来物种入侵", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "与货物无关，不需要管理", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "只需申报不需处理", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。《压载水管理国际公约》(BWM Convention)要求船舶在排放压载水前必须进行处理，防止将外来水生生物带入。"
    },
    {
        question: "电厂煤炭卸货后，做",
        options: [
            { text: "仅为了记录存档", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "验证实际到货质量是否符合合同，作为结算（热值扣罚）和向卖方索赔的依据", correct: true, effect: {"knowledge": 12, "trust": 12, "risk": -12} },
            { text: "用于销售宣传", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "满足政府要求，无实际意义", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。到港检验是买方维权的关键环节，结果直接影响结算金额（按合同热值扣罚/溢价条款），也是向卖方提出质量索赔的依据。"
    },
    {
        question: "中国海关进口煤炭时，进口增值税的税率通常是多少？",
        options: [
            { text: "0%", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "13%", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "25%", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "6%", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。中国对进口煤炭征收13%的增值税（部分情况有阶段性调整），煤炭进口关税税率视来源国和具体品类而定。"
    },
    {
        question: "进口商收到货物后，发现质量严重不符，以下哪种情况会导致索赔失败？",
        options: [
            { text: "立即委托公证机构取证", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
            { text: "超过合同规定的索赔时效，且未保留货物样品和相关证据", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "在合同约定期限内书面提出索赔", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
            { text: "提供第三方检验机构报告", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
        ],
        explanation: "答案正确。索赔的关键是时效和证据：必须在合同约定期限内（通常30-90天）提出，并保留完整的检验报告、照片、样品等证据。"
    },
    {
        question: "进口煤炭中，",
        options: [
            { text: "用于将煤炭的热值折算成等效燃料油价格，便于不同燃料的成本比较", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "煤炭不能与燃料油比较", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "仅用于海关申报", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "没有实际意义", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。能量当量换算（如：1吨5500大卡煤的能量≈0.786吨标准煤）是电厂和贸易商评估不同燃料竞争力的重要工具。"
    },
    {
        question: "在卸货港，",
        options: [
            { text: "对各方没有影响", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "船舶等待时间延长，会产生额外的", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "只影响港口收入", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "仅影响船期", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
        ],
        explanation: "答案正确。港口拥堵会延长船舶停泊时间，产生滞期费（租船人承担），还导致货物晚到影响电厂用煤，增加供应链的各项成本。"
    },
    {
        question: "中国进口煤炭时，",
        options: [
            { text: "进口量增加时", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "依据国内供需、贸易政策调整、检疫风险或外交因素，主管部门可暂停特定来源国的进口", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "价格太低时", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "永远不会暂停", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
        ],
        explanation: "答案正确。中国政府会根据国内煤炭供需形势、外交关系、检疫安全等因素动态调整进口政策，贸易商须密切关注政策动态。"
    },
    {
        question: "进口商收到的提单（B/L）上显示货物在途中曾转船（Transhipment），对买方有什么影响？",
        options: [
            { text: "没有任何影响", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "转船可能增加货物损失风险；信用证一般禁止转船，须注意L/C条款", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "转船会让货物更安全", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "转船是煤炭运输的惯例", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。散装煤炭通常要求直运，转船会增加货物损失风险、延误风险，且大多数信用证明确禁止转船(Transhipment not allowed)。"
    },
    {
        question: "中国进口商在海外购买煤炭时，通常需要为货物投保哪种保险？",
        options: [
            { text: "火灾险", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "远洋货物运输保险（CIF条件下由卖方投保；FOB条件下由买方自行投保）", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "责任险", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "不需要保险", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
        ],
        explanation: "答案正确。国际货物运输保险是进口贸易的必要保障。CIF条件下卖方负责投保，FOB条件下买方须自行投保，建议投保一切险或水渍险。"
    },
    {
        question: "以下哪种是进口煤炭进港卸货时，港口会向货主收取的标准费用？",
        options: [
            { text: "只收港口建设费", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "港口建设费、卸货操作费、堆场使用费（堆存费）、装车费等", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "仅收取海关关税", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "不收任何费用", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
        ],
        explanation: "答案正确。进口煤炭在港口产生多项费用：港口规费、卸货费、堆场使用费（超期则收高额堆存费）、取样化验费、装车/装船费等。"
    },
    {
        question: "出口文件中的'清洁提单'是指什么？",
        options: [
            { text: "提单表面清洁", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "承运人未对货物表面状况作不良批注的提单", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "新提单", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "空白提单", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。货物保险单转让需要保险单背面背书。"
    },
    {
        question: "印尼煤炭出口需要提交的'ETPIK'证书是什么？",
        options: [
            { text: "印尼环保许可证", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "印尼出口商注册证书（Eksportir Terdaftar Produk Industri Kehutanan的缩写变体，煤炭出口商注册证）", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "印尼矿山安全证书", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "印尼质量认证证书", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。平安险(FPA)承保自然灾害造成的全损和部分损失，是海运货物保险的基本险别。"
    },
    {
        question: "在印尼港口，'引水员'（Pilot）的职责是什么？",
        options: [
            { text: "检查货物质量", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "熟悉当地水道，引领船舶安全进出港口", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "负责办理海关手续", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "管理码头工人", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。保险金额通常为CIF价的110%，以便覆盖预期利润。"
    },
    {
        question: "印尼海关的'绿色通道'（Green Lane）和'红色通道'（Red Lane）有什么区别？",
        options: [
            { text: "颜色不同，没有实际区别", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "绿色通道免于查验直接放行，红色通道需要逐票查验货物", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "绿色通道收费更高", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "红色通道速度更快", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。保险费率受航线、货物类型、船龄等因素影响。"
    },
    {
        question: "煤炭出口合规中，'DMO'（国内市场义务）政策要求什么？",
        options: [
            { text: "所有煤炭必须全部出口", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "煤矿企业必须将部分产量（通常25%）以优惠价格供应国内市场后，才能申请出口配额", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "出口商必须在国内注册公司", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "进口商必须在印尼设厂", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。煤炭作为易自燃货物，保险公司通常要求特殊条款或加收保费。"
    },
    {
        question: "出口信用证（L/C）业务中，'议付行'（Negotiating Bank）的作用是什么？",
        options: [
            { text: "签发信用证", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "审核出口商提交的单据，符合信用证条款后买入单据并付款", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "负责货物检验", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "安排船舶运输", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。伦敦保险协会条款(ICC)是国际通用的海运保险条款。"
    },
    {
        question: "在印尼出口通关中，'ATA单证册'（ATA Carnet）通常用于哪种情况？",
        options: [
            { text: "大批量煤炭出口", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "展品、商业样品、专业设备等临时出境物品的通关", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "煤炭出口退税", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "所有货物出口都用ATA单证册", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。保险单是向银行结汇的重要单据之一。"
    },
    {
        question: "在处理印尼煤炭出口中的'洗钱'风险时，以下哪种做法是合规的？",
        options: [
            { text: "接受来历不明的资金", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "对客户进行KYC（了解你的客户）审查，通过正规银行渠道收付款", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "用现金结算以避免审查", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "拒绝提供任何资金来源证明", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。无单放货是指在正本提单未到达情况下凭保函放货，是常见的贸易风险。"
    },
    {
        question: "离港时，船长需要向港口当局提交'危险货物申报'（DG Declaration）吗？煤炭需要申报吗？",
        options: [
            { text: "不需要，煤炭不是危险货物", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "需要。散装煤炭在IMSBC Code中被列为B类货物（可能产生可燃气体），须按规定申报和采取安全措施", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "只有爆炸物需要申报", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "视矿山而定", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。原产地证书是享受协定税率的必要凭证，需在进口时向海关提交。"
    },
    {
        question: "出口单证中，'装箱单'（Packing List）在散装煤炭贸易中有何作用？",
        options: [
            { text: "散装煤炭不需要装箱单", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "散装煤炭通常以重量清单（Weight List）代替，记录各舱的装载量", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "与集装箱货物完全相同", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "只需提单即可，不需要装箱单", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。进口煤炭需符合中国国家标准，主要指标包括热值、灰分、硫分等。"
    },
    {
        question: "以下哪种情况，出口商可以要求将'不清洁提单'更改为'清洁提单'？",
        options: [
            { text: "向船方缴纳额外费用后直接更改", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "不能随意更改；但若批注是因误解造成且实际货物无问题，可出具保函申请更改，风险由出口商承担", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "任何时候都可以更改", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "通知买方后可以更改", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。无单放货可能导致贸易欺诈，银行可能不接受此做法，且属于欺诈风险领域。"
    },
    {
        question: "在印尼煤炭出口实务中，'免租期'（Free Time）是指什么？",
        options: [
            { text: "船舶无偿使用港口的时间", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "租船合同中，货主可以免费使用船舶进行装卸的允许时间（Laytime内的免费时间）", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "港口工人的休息时间", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "海关免于检查的时间", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。租船合同中的Laytime就是货主免费使用船舶的时间(即免租期)，在此时间内完成装卸无需额外支付费用。"
    },
    {
        question: "中国进口煤炭实行的'准入名单'制度要求什么？",
        options: [
            { text: "任何来源的煤炭均可进口", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "进口商和进口口岸需在政府核定的名单内，部分口岸有进口煤炭资质要求", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "只有国有企业可以进口煤炭", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "不需要任何资质", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。中国对煤炭进口实行一定的管理制度，进口口岸、进口企业资质以及煤炭质量标准均有规定。"
    },
    {
        question: "在中国港口卸煤时，船方通常要求签署的'货损保函'（LOI，Letter of Indemnity）用于什么情况？",
        options: [
            { text: "货方要求船方提前放货，未提交正本提单时，向船方出具的保函", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "货物损坏时的理赔申请", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "延迟卸货的赔偿说明", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "海关的进口许可证", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。LOI(以保函换提单)是指在正本提单未到达时，收货人向船东出具保函，承诺日后提交提单并赔偿船东由此产生的损失，换取船东放货。"
    },
    {
        question: "中国海关进口煤炭时，检验检疫项目中'放射性检测'的标准是什么？",
        options: [
            { text: "无任何标准限制", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "煤炭的天然放射性核素含量不得超过规定限值，超标将被退运或销毁", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "只对特定国家进行检测", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "仅抽查部分批次", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。中国海关对所有进口煤炭强制实施放射性检测，依据《进出口固体废物放射性污染防治规定》，超标批次将被退运。"
    },
],
9: [
    {
        question: "电厂煤炭招标通常采用什么方式？",
        options: [
            { text: "直接采购", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "公开招标或邀请招标", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "私下协商", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "不需要招标", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。电厂煤炭采购通常采用公开招标或邀请招标方式，确保公平竞争。"
    },
    {
        question: "资格预审的主要目的是什么？",
        options: [
            { text: "确定中标价格", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "筛选符合条件的投标人", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "签订合同", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "支付保证金", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。资格预审是筛选符合条件的投标人，审查资质、业绩、财务状况等。"
    },
    {
        question: "招标文件发售期不得少于多少天？",
        options: [
            { text: "3天", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "5个工作日", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "1天", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "10天", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。招标文件发售期不得少于5个工作日，确保投标人有足够时间准备。"
    },
    {
        question: "投标保证金一般为投标报价的多少？",
        options: [
            { text: "10%-20%", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "2%-5%", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "50%", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "不需要", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。投标保证金一般为投标报价的2%-5%，最高不超过80万元。"
    },
    {
        question: "投标有效期一般为多少天？",
        options: [
            { text: "7天", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "60-90天", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "1天", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "180天", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。投标有效期一般为60-90天，确保有足够时间完成评标和合同签订。"
    },
    {
        question: "开标时，以下哪种情况会导致废标？",
        options: [
            { text: "报价合理", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "投标文件未密封或逾期送达", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "资质齐全", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "签字盖章完整", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。投标文件未密封或逾期送达会导致废标，必须严格遵守投标要求。"
    },
    {
        question: "评标委员会成员一般不少于多少人？",
        options: [
            { text: "3人", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "5人", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "1人", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "10人", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。评标委员会成员一般不少于5人，其中技术经济专家不少于2/3。"
    },
    {
        question: "中标通知书发出后，应在多少天内签订合同？",
        options: [
            { text: "7天", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "30天内", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "90天", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "不需要签订", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。中标通知书发出后，应在30天内签订合同，逾期可能需要重新招标。"
    },
    {
        question: "以下哪种行为属于串通投标？",
        options: [
            { text: "独立编制投标文件", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "投标人之间协商报价", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "按要求提供资质", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "如实报价", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。投标人之间协商报价属于串通投标，是违法行为，会导致投标无效。"
    },
    {
        question: "招标文件中，以下哪项不是必须包含的内容？",
        options: [
            { text: "投标人须知", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "投标人的家庭住址", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "评标办法", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "合同条款", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。招标文件应包含投标人须知、评标办法、合同条款等，不需要家庭住址。"
    },
    {
        question: "最低评标价法是指什么？",
        options: [
            { text: "报价最低者中标", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "在满足实质性要求的投标人中，评标价最低者中标", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "质量最好者中标", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "关系最好者中标", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。最低评标价法是在满足招标文件实质性要求的前提下，选择评标价格最低的投标人为中标候选人。"
    },
    {
        question: "综合评估法通常考虑哪些因素？",
        options: [
            { text: "仅价格", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "价格、质量、技术、服务、信誉等", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "仅质量", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "仅关系", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。综合评分法是将价格、技术、商务等各项因素量化打分，总分最高者中标。"
    },
    {
        question: "技术评分一般占总分的多少？",
        options: [
            { text: "100%", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "30%-60%", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "0%", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "90%", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。技术评分主要考察投标文件对技术要求的响应程度、方案可行性等。"
    },
    {
        question: "价格分计算中，以下哪种方法常用？",
        options: [
            { text: "随机打分", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "基准价法或最低投标价法", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "最高投标价法", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "平均价法", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。商务评分主要考察投标人的资质、业绩、服务能力、交货期等。"
    },
    {
        question: "评标过程中，以下哪种情况可以澄清？",
        options: [
            { text: "报价错误", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "投标文件中的细微偏差", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "资质不符", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "重大偏差", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。投标报价明显低于成本价可能被视为恶性低价竞争，导致废标或启动成本调查。"
    },
    {
        question: "中标候选人一般推荐几名？",
        options: [
            { text: "1名", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "1-3名", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "10名", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "不需要推荐", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。投标人不足3家应重新招标，确保竞争的充分性。"
    },
    {
        question: "以下哪种情况可以否决所有投标？",
        options: [
            { text: "报价都合理", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "所有投标都不符合招标文件要求", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "投标人太多", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "评标时间太长", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。中标结果应在指定媒体公示，公示期不得少于3天。"
    },
    {
        question: "评标报告应由谁签字？",
        options: [
            { text: "仅招标人", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "全体评标委员会成员", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "仅中标人", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "不需要签字", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。投标人对招标文件有异议的，应在投标截止时间10日前提出。"
    },
    {
        question: "中标结果应公示多少天？",
        options: [
            { text: "不需要公示", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "不少于3天", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "1天", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "30天", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。中标人放弃中标的，招标人可以没收投标保证金，并选择其他中标候选人。"
    },
    {
        question: "投标人对评标结果有异议，应在什么时候提出？",
        options: [
            { text: "任何时间", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "中标候选人公示期间", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "合同签订后", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "1年后", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。招标人和中标人应在中标通知书发出之日起30天内签订书面合同。"
    },
    {
        question: "中标后，中标人拒绝签订合同会有什么后果？",
        options: [
            { text: "没有后果", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "投标保证金被没收，可能被列入黑名单", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "只需要道歉", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "可以重新投标", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。招标文件要求中标人提交履约保证金的，中标人应提交，金额一般不超过合同金额的10%。"
    },
    {
        question: "履约保证金一般为合同金额的多少？",
        options: [
            { text: "20%", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "10%", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "50%", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "不需要", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。印尼煤炭出口需要获得出口许可证，由印尼能源与矿产资源部(MEMR)签发。"
    },
    {
        question: "合同履行过程中，以下哪种情况可以变更合同？",
        options: [
            { text: "单方决定", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "双方协商一致，且不改变实质性内容", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "随意变更", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "不需要协商", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。印尼对煤炭出口实施国内市场义务(DMO)，要求生产商将一定比例煤炭供应国内市场。"
    },
    {
        question: "供煤过程中，质量不合格应如何处理？",
        options: [
            { text: "接受不合格煤炭", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "按合同约定扣款或退货", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "隐瞒不报", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "自己处理", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。印尼煤炭出口报关需要提交商业发票、装箱单、提单、原产地证书等。"
    },
    {
        question: "合同履行完毕后，履约保证金应如何处理？",
        options: [
            { text: "归招标人所有", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "无息退还给中标人", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "转为下一年保证金", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "捐赠", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。印尼主要煤炭出口港包括塔巴尼奥(Taboneo)、三马林达(Samarinda)、巴厘巴板(Balikpapan)等。"
    },
    {
        question: "电厂招投标中，资格预审的主要目的是什么？",
        options: [
            { text: "确定中标价格", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "筛选符合条件的投标人，确保其具备履约能力", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "确定合同条款", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "选择付款方式", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "资格预审是筛选符合条件的投标人，审查其资质、业绩、财务状况等。"
    },
    {
        question: "电厂煤炭招标文件中，以下哪项不是必须包含的内容？",
        options: [
            { text: "煤炭质量标准", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "投标人的家庭住址", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "交货时间和地点", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "评标方法和标准", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "招标文件应包含质量标准、交货要求、评标方法等，不需要家庭住址。"
    },
    {
        question: "电厂煤炭招标中，综合评标法通常考虑哪些因素？",
        options: [
            { text: "仅考虑价格", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "价格、质量、交货期、信誉、服务等多方面因素", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "仅考虑质量", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "仅考虑交货期", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "综合评标法综合考虑价格、质量、交货期、信誉、服务等多方面因素。"
    },
    {
        question: "投标保证金的作用是什么？",
        options: [
            { text: "支付招标费用", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "保证投标人认真参与投标，防止恶意投标", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "支付中标费用", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "作为合同定金", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "投标保证金是为了保证投标人认真参与投标，防止恶意投标或中标后弃标。"
    },
    {
        question: "电厂煤炭投标中，以下哪种行为属于串通投标？",
        options: [
            { text: "独立编制投标文件", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "投标人之间协商报价", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "按要求提供资质证明", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "如实填写投标报价", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。投标人之间协商报价属于串通投标，是违法行为，会导致投标无效和法律责任。参考：《招标投标法》。"
    },
    {
        question: "电厂年度煤炭采购量通常如何确定？",
        options: [
            { text: "随意确定，不需要计划", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "根据机组容量、年利用小时数、供电煤耗等参数测算年耗煤量，再考虑库存策略", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "只根据上年采购量", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "由煤炭供应商决定", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。印尼煤炭出口到中国可享受中国-东盟自贸区协定税率(0关税)，需提供FORM E原产地证书。"
    },
    {
        question: "电厂煤炭采购招标中，",
        options: [
            { text: "仅用于报表填写", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "将不同热值的煤炭换算为同一热值基准进行价格比较，确保评标公平", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "增加煤炭热值", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "计算运输成本", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭出口商应确保煤炭符合中国的质量和安全标准，否则可能退运。"
    },
    {
        question: "电厂煤炭采购合同中，",
        options: [
            { text: "到货热值低于合同值时无需处理", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
            { text: "到货热值低于合同保证值时，按比例扣减货款；高于合同值时，买方按比例溢价付款", correct: true, effect: {"knowledge": 12, "trust": 12, "risk": -12} },
            { text: "热值低于合同值就退货", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "热值偏差不影响货款", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。印尼煤炭出口企业需要具有合法的矿业经营许可证(IUP)或工作合同(COW)。"
    },
    {
        question: "电厂对煤炭供应商进行资格审查时，最关注哪些核心指标？",
        options: [
            { text: "供应商的办公室位置", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "供应商的过往供货业绩、资金实力、煤炭来源稳定性和履约能力", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "供应商的员工数量", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "供应商的网站质量", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。印尼对煤炭出口实施环保监管，确保煤炭开采和出口符合环境法规。"
    },
    {
        question: "在电厂投标中，",
        options: [
            { text: "两种方法完全相同", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "最低评标价法只看价格；综合评分法同时考虑价格、质量、交货、信誉等多项因素打分", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "只有价格低的才能中标", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "两种方法都不考虑价格", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。印尼煤炭出口需要经过装港检验，由第三方检验机构出具检验报告。"
    },
    {
        question: "电厂签订长协煤（年度协议煤）的主要优势是什么？",
        options: [
            { text: "价格通常最低", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "保障供应稳定性，降低价格波动风险，便于生产计划", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "质量最好", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "运输距离最短", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭出口量的季节性变化主要受雨季影响(11-4月装运困难)。"
    },
    {
        question: "投标报价时，以下哪些成本应该计入完整的到厂成本（Landed Cost）？",
        options: [
            { text: "只计算煤炭采购价格", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "煤价+海运费+保险+港口费+卸货费+国内运输费+检验费+关税+增值税", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "只计算运费", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "煤价加国内运费即可", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。印尼是全球最大的动力煤出口国，主要出口市场为中国、印度、日本、韩国等。"
    },
    {
        question: "电厂煤炭招标中的",
        options: [
            { text: "提前宣布中标结果", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "投标截止后，所有投标文件被密封保存，在开标前任何人不得拆封查阅", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "拒绝接受新的投标", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "公布招标标准", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭产业为当地创造大量就业机会，是重要的支柱产业。"
    },
    {
        question: "电厂煤炭供应合同中，",
        options: [
            { text: "1%以内", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "5%~10%", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "50%以上", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "100%", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。印尼政府通过矿业法规监管煤炭出口，确保资源可持续利用。"
    },
    {
        question: "在电厂煤炭评标中，如何处理",
        options: [
            { text: "给予废标方补偿", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "不符合招标文件实质性要求的投标被认定为废标，不参与评比", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "废标也可以中标", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
            { text: "废标自动改为有效标", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
        ],
        explanation: "答案正确。印尼煤炭出口面临国际市场竞争，主要竞争对手为澳大利亚、俄罗斯等。"
    },
    {
        question: "电厂在评估煤炭供应商的",
        options: [
            { text: "煤炭颜色", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "煤炭含碳量和单位热值碳排放因子（CO₂排放系数）", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "煤炭重量", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "产地距离", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭出口为中国能源供应提供重要补充，尤其在东南沿海地区。"
    },
    {
        question: "以下哪种采购策略可以帮助电厂降低煤炭供应中断的风险？",
        options: [
            { text: "只与一家大型供应商合作", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "多元化供应来源（长协+现货+多产地），维持合理安全库存", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "完全依赖现货市场", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "不需要库存管理", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
        ],
        explanation: "答案正确。印尼煤炭出口使用美元计价，价格参照ICE API2指数或印尼HBA价格。"
    },
    {
        question: "电厂煤炭验收时，如果对供应商提供的质检报告有疑问，应如何处理？",
        options: [
            { text: "直接接受，不质疑", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "按合同规定启动复检程序，由双方认可的第三方机构对仲裁样进行检验", correct: true, effect: {"knowledge": 12, "trust": 12, "risk": -12} },
            { text: "自行重新化验后直接扣款", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "立即终止合同", correct: false, effect: {"knowledge": -5, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。印尼煤炭出口的定价机制通常为指数定价，价格随市场波动。"
    },
    {
        question: "在电厂煤炭采购谈判中，",
        options: [
            { text: "所有煤炭必须同一价格", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "合同价格与某指数（如秦皇岛港价或热值折算价）挂钩，定期调整", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "价格与汇率直接挂钩", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "价格永久固定不变", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭出口合同的签订需要明确质量规格、数量、交货期等条款。"
    },
    {
        question: "电厂在评标中，以下哪种情形属于",
        options: [
            { text: "按照招标文件要求认真准备标书", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
            { text: "向招标方工作人员提供礼品或好处，试图影响评标结果", correct: true, effect: {"knowledge": 12, "trust": 12, "risk": -12} },
            { text: "在截止日期前提交完整标书", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
            { text: "根据市场情况合理定价", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
        ],
        explanation: "答案正确。印尼煤炭出口需要购买货物运输保险，通常由买方或卖方投保。"
    },
    {
        question: "电厂煤炭采购中，",
        options: [
            { text: "两者完全相同", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "坑口价是矿山出矿价；到厂价=坑口价+运费+港口费+中间环节费用，反映电厂的真实成本", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "到厂价只包含运费", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "坑口价包含所有费用", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭出口的装运期应合理约定，考虑雨季影响和港口能力。"
    },
    {
        question: "以下哪种保险是电厂在采购煤炭时通常要求供应商投保的？",
        options: [
            { text: "人寿保险", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "货物运输保险、产品责任险，及供应商自身的履约保险", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "只需要履约保证金", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "不需要保险", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
        ],
        explanation: "答案正确。印尼煤炭出口的检验条款应明确检验机构、检验标准、取样方法等。"
    },
    {
        question: "电厂参与煤炭采购的",
        options: [
            { text: "价格最低", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "一次谈判确定基本条款，简化后续每批次采购流程，降低交易成本", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "不需要签订任何合同", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "可以任意更改质量要求", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。印尼煤炭出口的付款条款通常使用信用证(L/C)或电汇(T/T)。"
    },
    {
        question: "电厂采购招标中，",
        options: [
            { text: "只有采购部门人员", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "由燃料管理、技术、财务、法务等多部门人员及外部专家共同组成，确保评标公正性", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "由供应商推荐的人员组成", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
            { text: "只有最高领导", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。印尼煤炭出口的争议解决通常约定仲裁条款，常用机构为新加坡国际仲裁中心(SIAC)。"
    },
    {
        question: "中标供应商在签订合同前，提交",
        options: [
            { text: "仅为形式需要", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "确保中标方按合同条款认真履约，若违约则电厂可没收保证金作为赔偿", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "作为货款预付", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "支付招标费用", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭出口合同中的不可抗力条款应明确约定自然灾害等免责情况。"
    },
    {
        question: "卸煤港口的'胶带输送机计量'和'吃水计重'两种方式，哪种更适合作为贸易结算依据？",
        options: [
            { text: "胶带输送机计量更准确", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "合同约定的计量方式更重要；通常采用经双方认可的第三方吃水计重或岸上地磅", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "两者完全相同，随意选择", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "不需要精确计量", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。贸易结算应以合同约定的计量方式为准。实践中常用第三方出具的吃水计重报告，或在固定地磅上过磅计量。"
    },
    {
        question: "进口煤炭的'关税完税价格'是如何确定的？",
        options: [
            { text: "按矿山成本价计算", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "以成交价格为基础，通常为CIF价格（含运费、保险）", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "由进口商自行申报任何价格", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "按国际期货价格", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。海关对进口货物的关税完税价格以成交价为基础（通常为CIF价），若申报价格明显低于正常市场水平，海关可进行价格质疑和调整。"
    },
    {
        question: "以下哪种情况，进口商可以申请海关'特殊监管区域'（如保税区）的优惠政策？",
        options: [
            { text: "任何进口货物都可以", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "货物进入特殊监管区后，可暂缓缴纳进口税，待实际销售或转移到境内时再缴税", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "只有出口商品享受此待遇", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "保税区内完全免税", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。保税仓库、综合保税区等特殊监管区允许货物'保税入区'，在区内暂不缴纳进口税和增值税，转内销时才按规定完税。"
    },
    {
        question: "在进口煤炭卸船作业中，'舱底清扫'（Sweeping）是指什么？",
        options: [
            { text: "清洁甲板", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "在抓斗无法取尽后，由工人进入舱内将残余煤炭清扫干净，计入总卸货量", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "清扫港口道路", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "清洗舱壁", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。卸煤时抓斗作业完成后，舱底仍有残余煤炭，需要工人进舱清扫并吊出，这部分'扫舱煤'也计入卸货总量。"
    },
    {
        question: "进口煤炭卸货港对'压载水'（Ballast Water）的管理要求是什么？",
        options: [
            { text: "压载水可以随意排放", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "压载水须经过处理符合标准才能排放，防止外来物种入侵", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "与货物无关，不需要管理", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "只需申报不需处理", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。《压载水管理国际公约》(BWM Convention)要求船舶在排放压载水前必须进行处理，防止将外来水生生物带入。"
    },
    {
        question: "电厂煤炭卸货后，做'来煤检验'（Incoming Coal Analysis）的主要目的是什么？",
        options: [
            { text: "仅为了记录存档", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "验证实际到货质量是否符合合同，作为结算（热值扣罚）和向卖方索赔的依据", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "用于销售宣传", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "满足政府要求，无实际意义", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。到港检验是买方维权的关键环节，结果直接影响结算金额（按合同热值扣罚/溢价条款），也是向卖方提出质量索赔的依据。"
    },
    {
        question: "进口煤炭的'转口贸易'（Entrepot Trade）中，以下哪种做法必须符合规定？",
        options: [
            { text: "原产地证可以随意更改", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "转口货物需如实申报原产地，不得伪造原产地证书", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "转口过程中可以随意改变货物质量", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "可以通过第三国规避进口国的贸易限制", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。转口贸易必须如实申报货物原产地，伪造原产地证书属于欺诈行为，违反WTO规则，可能面临严重的法律处罚。"
    },
    {
        question: "进口煤炭中，'燃料油等能量当量换算'在电厂采购中有何应用？",
        options: [
            { text: "用于将煤炭的热值折算成等效燃料油价格，便于不同燃料的成本比较", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "煤炭不能与燃料油比较", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "仅用于海关申报", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "没有实际意义", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。能量当量换算（如：1吨5500大卡煤的能量≈0.786吨标准煤）是电厂和贸易商评估不同燃料竞争力的重要工具。"
    },
    {
        question: "在卸货港，'港口拥堵'（Port Congestion）对贸易各方有什么影响？",
        options: [
            { text: "对各方没有影响", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "船舶等待时间延长，会产生额外的'运费待港费'或'滞期费'，同时影响货物资金周转", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "只影响港口收入", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "仅影响船期", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。港口拥堵会延长船舶停泊时间，产生滞期费（租船人承担），还导致货物晚到影响电厂用煤，增加供应链的各项成本。"
    },
    {
        question: "中国进口煤炭时，'市场准入'政策在哪种情况下会暂停某国的进口？",
        options: [
            { text: "进口量增加时", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "依据国内供需、贸易政策调整、检疫风险或外交因素，主管部门可暂停特定来源国的进口", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "价格太低时", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "永远不会暂停", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。中国政府会根据国内煤炭供需形势、外交关系、检疫安全等因素动态调整进口政策，贸易商须密切关注政策动态。"
    },
    {
        question: "电厂煤炭采购招标中，'热值折算价'（Normalized Price）的作用是什么？",
        options: [
            { text: "仅用于报表填写", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "将不同热值的煤炭换算为同一热值基准进行价格比较，确保评标公平", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "增加煤炭热值", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "计算运输成本", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭出口商应确保煤炭符合中国的质量和安全标准，否则可能退运。"
    },
    {
        question: "电厂煤炭采购合同中，'热值扣罚条款'（Calorific Value Penalty Clause）是如何运作的？",
        options: [
            { text: "到货热值低于合同值时无需处理", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "到货热值低于合同保证值时，按比例扣减货款；高于合同值时，买方按比例溢价付款", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "热值低于合同值就退货", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "热值偏差不影响货款", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭出口企业需要具有合法的矿业经营许可证(IUP)或工作合同(COW)。"
    },
    {
        question: "在电厂投标中，'最低评标价法'和'综合评分法'各有什么特点？",
        options: [
            { text: "两种方法完全相同", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "最低评标价法只看价格；综合评分法同时考虑价格、质量、交货、信誉等多项因素打分", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "只有价格低的才能中标", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "两种方法都不考虑价格", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭出口需要经过装港检验，由第三方检验机构出具检验报告。"
    },
],
10: [
    {
        question: "煤炭贸易全流程包括哪些主要环节？",
        options: [
            { text: "仅包括采购和销售", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "采购、运输、检验、通关、销售、结算", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "仅包括运输", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "仅包括结算", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "煤炭贸易全流程包括采购、运输、检验、通关、销售、结算等多个环节。"
    },
    {
        question: "煤炭贸易中，以下哪种风险属于系统性风险？",
        options: [
            { text: "单批货物质量问题", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "政策变化、市场价格大幅波动、汇率剧烈变动", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "单船延误", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "单一客户违约", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "系统性风险是影响整个市场的风险，如政策变化、市场价格大幅波动等。"
    },
    {
        question: "煤炭贸易中，以下哪种风险可以通过保险转移？",
        options: [
            { text: "市场风险", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "运输风险（海运货物保险）", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "政策风险", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "信誉风险", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "运输风险可以通过海运货物保险转移，但市场风险、政策风险等通常无法通过保险转移。"
    },
    {
        question: "煤炭贸易中，以下哪种做法可以对冲价格风险？",
        options: [
            { text: "现货交易", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "期货套期保值、签订长期合同、多元化采购", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "单一来源采购", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "一次性大量采购", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "期货套期保值、签订长期合同、多元化采购可以对冲价格风险。"
    },
    {
        question: "煤炭贸易中，建立长期合作关系的关键是什么？",
        options: [
            { text: "仅关注价格", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "诚信履约、质量稳定、服务到位", correct: true, effect: {"knowledge": 10, "trust": 10, "risk": -10} },
            { text: "压低供应商价格", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "频繁更换供应商", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
        ],
        explanation: "答案正确。印尼煤炭出口的装运通知应在装运后及时发送给买方。"
    },
    {
        question: "煤炭贸易的整条供应链中，哪个环节最容易产生质量纠纷？",
        options: [
            { text: "签订合同阶段", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "装船/卸货阶段，因两端检验结果不一致导致纠纷", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "付款阶段", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "谈判阶段", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭出口的单证包括提单、商业发票、装箱单、检验证书、原产地证书等。"
    },
    {
        question: "印尼煤炭贸易中，汇率风险（Currency Risk）主要体现在哪里？",
        options: [
            { text: "没有汇率风险", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "煤炭以美元计价，人民币升值时利润被压缩；采购时的汇率锁定策略至关重要", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "只影响运输成本", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "汇率对煤炭价格无影响", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭出口的保险条款通常约定保险金额、保险范围等。"
    },
    {
        question: "以下哪种做法是煤炭贸易公司",
        options: [
            { text: "以利润最大化为唯一目标", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
            { text: "建立完善的内控制度，遵守贸易法规，进行反洗钱（AML）和了解你的客户（KYC）审查", correct: true, effect: {"knowledge": 12, "trust": 12, "risk": -12} },
            { text: "只要有利润就可以不管合规", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 20} },
            { text: "合规只是形式，不影响经营", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 20} },
        ],
        explanation: "答案正确。印尼煤炭出口的违约金条款应明确约定违约责任和赔偿方式。"
    },
    {
        question: "贸易信用风险（Counterparty Credit Risk）在煤炭贸易中如何有效管理？",
        options: [
            { text: "完全信任对方，不需要管理", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
            { text: "建立信用评级体系，要求保证金或L/C，购买信用保险，分散客户集中度", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "只与熟人交易", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "所有交易先付款", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭出口的履约保函是保障合同履行的重要工具。"
    },
    {
        question: "煤炭贸易中，",
        options: [
            { text: "完全不使用金融工具", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "买入现货同时卖出相应数量的煤炭期货，锁定价格波动风险", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "只做期货投机", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "通过大量储存煤炭对冲风险", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭出口的质量争议应以装港检验结果为准或双方协商解决。"
    },
    {
        question: "完整的煤炭贸易操作流程，从市场开发到回款，正确顺序是哪个？",
        options: [
            { text: "签合同→找煤源→付款→装船", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "市场开发→询价报价→签合同→落实煤源→安排船舶→装船→检验→通关→卸货→结算", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "装船→签合同→找客户", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
            { text: "结算→装船→签合同", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
        ],
        explanation: "答案正确。印尼煤炭出口的数量争议应以提单数量或卸港数量为准。"
    },
    {
        question: "印尼煤炭贸易中，",
        options: [
            { text: "只来自价格差（买卖差价）", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "买卖差价+运费优化+汇率收益+质量溢价+资金运营效率", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "完全依靠补贴", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "靠拖延付款赚取利差", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
        ],
        explanation: "答案正确。印尼煤炭出口的延期交货应按合同约定承担违约责任。"
    },
    {
        question: "一个完整的煤炭进口业务，从签合同到全部回款，通常需要多长时间？",
        options: [
            { text: "1-3天", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "30-90天（从装船到回款通常45-75天）", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "超过1年", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "仅需1周", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。印尼煤炭出口的终止条款应明确约定终止条件和后果。"
    },
    {
        question: "在煤炭贸易中，什么是",
        options: [
            { text: "两个合同内容完全相同，签给两个不同客户", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "贸易商的购煤合同条款与销售合同条款基本对应，将上下游风险对齐", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "只签购煤合同，不签销售合同", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "两个买方共同购买一批煤", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭出口合同应适用国际商法(ICC)或双方约定的法律。"
    },
    {
        question: "煤炭贸易中，货物在港口滞留过久（超过免费堆存期），会产生什么费用？",
        options: [
            { text: "没有任何费用", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "高额的堆存费（Demurrage/Storage Charges），且时间越长费率越高", correct: true, effect: {"knowledge": 10, "trust": 8, "risk": -8} },
            { text: "只需缴纳少量管理费", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "货物会被自动清关", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭出口的管辖权应明确约定仲裁机构或法院。"
    },
    {
        question: "国际动力煤定价中，常用的基准价格指数有哪些？",
        options: [
            { text: "只有OPEC油价指数", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "澳大利亚纽卡斯尔价（API4）、南非理查兹湾价（API2）、印尼HBA基准价、中国环渤海动力煤价格指数（BSPI）", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "仅用纽约商品交易所价格", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "由卖方自行决定", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。印尼煤炭出口的保密条款应约定双方对商业信息的保密义务。"
    },
    {
        question: "国际煤炭运输中，散货船的主要类型有哪些？",
        options: [
            { text: "只有集装箱船", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "海岬型（Capesize，>100,000吨）、巴拿马型（Panamax，60,000-80,000吨）、超灵便型（Supramax，50,000-60,000吨）等", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "仅有油轮", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "所有船型都一样", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭出口的通知条款应约定通知方式和送达地址。"
    },
    {
        question: "波罗的海干散货指数（BDI，Baltic Dry Index）与煤炭贸易有什么关系？",
        options: [
            { text: "没有任何关系", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "BDI反映全球干散货运输市场供需，直接影响煤炭海运费，进而影响进口煤总成本", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "只影响石油价格", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "仅是历史数据，没有预测价值", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭出口的修改条款应约定合同修改的形式要求。"
    },
    {
        question: "《联合国国际货物销售合同公约》（CISG）在煤炭贸易中的适用条件是什么？",
        options: [
            { text: "所有国际贸易都自动适用CISG", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "双方当事人的营业地在不同的CISG成员国，且合同未明确排除CISG适用", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "只适用于欧洲国家", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "CISG与煤炭贸易无关", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。中国进口印尼煤炭享受最惠国税率和协定税率，需提供FORM E原产地证书。"
    },
    {
        question: "在中国，进口煤炭需要遵守哪部法律关于环保指标的要求？",
        options: [
            { text: "《食品安全法》", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "《商品煤质量管理暂行办法》及相关进口煤炭质量指标强制性标准", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "不需要遵守任何法律", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 15} },
            { text: "只需遵守国际标准", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。中国对进口煤炭实施自动进口许可管理，企业需提前办理许可证。"
    },
    {
        question: "国际制裁（Economic Sanctions）对煤炭贸易有什么影响？",
        options: [
            { text: "制裁只影响武器贸易，与煤炭无关", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "受制裁国家（如某些国家）的煤炭不得进出口；违反制裁可能面临巨额罚款和刑事追诉", correct: true, effect: {"knowledge": 12, "trust": 12, "risk": -12} },
            { text: "制裁不影响已签合同", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "通过第三国可以规避所有制裁", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 20} },
        ],
        explanation: "答案正确。中国海关对进口煤炭实施法定检验，包括品质、重量、放射性等。"
    },
    {
        question: "在双边自贸协定（FTA）框架下，印尼煤炭出口到中国可以享受什么优惠？",
        options: [
            { text: "没有任何优惠", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "中国-东盟自贸区（CAFTA）框架下，部分煤炭品类享受优惠关税甚至零关税", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "优惠只适用于其他商品", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "中印尼之间没有自贸协定", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。中国-东盟自贸区(FTA)框架下印尼煤炭出口中国可享受关税优惠，税率为0。"
    },
    {
        question: "中国《进出口商品检验法》对进口煤炭的检验要求是什么？",
        options: [
            { text: "不需要检验", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
            { text: "法定检验商品，需接受海关（原检验检疫）机构的进口检验", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "只检验重量", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "仅由买方自行检验", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。煤炭是列入中国《法定检验进出口商品目录》的商品，进口时必须经海关商品检验。"
    },
    {
        question: "当国际煤炭价格大幅上涨时，已签订长协的出口商可能采取哪些规避违约的策略？",
        options: [
            { text: "不存在任何风险", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "可能以", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "会主动增加供货量", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "价格上涨不影响长协执行", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。历史上多次出现印尼矿山在行情上涨时以各种理由减少供货甚至违约，这是长协买方的重要风险。防范措施：在合同中明确违约责任和赔偿条款。"
    },
    {
        question: "以下哪种情形最能说明贸易商具备优秀的",
        options: [
            { text: "从不参与任何煤炭贸易", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "能够在采购、运输、检验、通关各环节系统性地识别风险、制定预案，并在风险发生时快速有效应对", correct: true, effect: {"knowledge": 12, "trust": 12, "risk": -12} },
            { text: "每次都预测价格涨跌", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "只做现货，回避所有期货工具", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。优秀的风险管理不是消除风险，而是系统识别→量化评估→制定预案→全流程监控→快速响应的完整体系。"
    },
    {
        question: "以下哪些是影响印尼对华煤炭出口量的主要宏观因素？",
        options: [
            { text: "只有煤炭价格一个因素", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "中国能源政策（如可再生能源占比）、中印尼外交关系、印尼DMO政策、全球煤炭价格水平、两国经济增速", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "只受天气影响", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "没有宏观因素的影响", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。印尼对华煤炭出口受多重因素影响：中国能源转型（减煤政策vs供应短缺）、两国政治关系、印尼国内DMO政策、汇率波动等。"
    },
    {
        question: "在ESG（环境、社会、治理）理念盛行的背景下，煤炭贸易面临哪些新挑战？",
        options: [
            { text: "没有任何挑战", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "银行融资受限（绿色信贷不支持煤炭）、客户绿色采购要求、碳边境调节机制（CBAM）压力、保险公司退出", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "ESG只影响科技公司", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "ESG要求反而有利于煤炭贸易", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。全球ESG浪潮对煤炭贸易形成系统性压力：国际银行缩减煤炭融资、欧洲碳边境调节机制对高碳进口产品征税、投资者撤离等。"
    },
    {
        question: "以下哪项最能描述",
        options: [
            { text: "价格最低的煤炭一定最好卖", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "在合规经营的前提下，通过专业知识积累、关系建设、风险管理，实现可持续的商业成功", correct: true, effect: {"knowledge": 15, "trust": 15, "risk": -15} },
            { text: "只要量大就能成功", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "走捷径、拒绝合规是成功之道", correct: false, effect: {"knowledge": -15, "trust": -15, "risk": 20} },
        ],
        explanation: "答案正确。印尼煤炭贸易的成功之道：扎实的专业知识（知识值）+赢得合作伙伴信任（信任度）+有效管控风险（风险值）。"
    },
    {
        question: "某批印尼煤合同热值5000大卡，合同价格60美元/吨，到货实测热值4800大卡，应如何计算实际结算价？",
        options: [
            { text: "按60美元/吨结算，热值偏差不影响价格", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
            { text: "按热值比例折算：60 × (4800/5000) = 57.6美元/吨", correct: true, effect: {"knowledge": 15, "trust": 12, "risk": -12} },
            { text: "直接退货", correct: false, effect: {"knowledge": -5, "trust": -5, "risk": 8} },
            { text: "按60美元但扣除2%费用", correct: false, effect: {"knowledge": -5, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。按热值比例折算是煤炭贸易的标准结算方式：实际价格 = 合同价 × 实际热值 ÷ 合同热值 = 60 × 4800 ÷ 5000 = 57.6美元/吨。"
    },
    {
        question: "某贸易商买入5万吨印尼煤（FOB价50美元/吨），租船费5美元/吨，卸货及港杂费3美元/吨，国内铁路运费2美元/吨，汇率7.2，到厂完全成本（人民币）是多少？",
        options: [
            { text: "360元/吨", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "(50+5+3+2)×7.2 = 432元/吨（不含关税增值税，仅含直接贸易成本）", correct: true, effect: {"knowledge": 15, "trust": 12, "risk": -12} },
            { text: "500元/吨以上", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "只需计算煤炭本身价格", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
        ],
        explanation: "答案正确。到厂成本 = (FOB价+运费+港杂+国内运费+检验费+保险费等) × 汇率 + 关税 + 进项税。"
    },
    {
        question: "如果一批进口煤在印尼装船时检验热值为5000大卡，到中国港口后检验热值为4700大卡，差异原因最可能是什么？",
        options: [
            { text: "煤炭在船上自行升华了", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "航行途中水分增加（天气原因/舱盖漏水）导致热值换算值降低，或取样代表性差异", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "两个检验机构设备误差", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "中间停靠某港口偷换了煤", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤到港热值普遍低于装港检验值，主要原因：①航行中水分增加（收到基热值对水分敏感）；②取样代表性差异；③化验误差。"
    },
    {
        question: "某电厂年用煤量100万吨，当地港口卸煤设施能力为每天1万吨，安全库存要求15天，最低库存是多少万吨？",
        options: [
            { text: "5万吨", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "15万吨（100万吨/年 ÷ 365天 × 15天 ≈ 4.1万吨，但按港口卸煤能力计算为15万吨）", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 3} },
            { text: "约4.1万吨（日耗约2740吨×15天）", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "50万吨", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。最低库存 = 日耗量 × 安全天数：100万吨/365天 ≈ 2740吨/日，2740×15天 ≈ 4.1万吨。"
    },
    {
        question: "以下哪项描述了",
        options: [
            { text: "只要关系好就能成功", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "专业知识+合规意识+风险管理+信任关系+资金管理，五位一体缺一不可", correct: true, effect: {"knowledge": 15, "trust": 15, "risk": -15} },
            { text: "只要价格低就能中标", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "依靠运气", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
        ],
        explanation: "答案正确。成功的印尼煤炭贸易需要：①专业知识（懂煤炭品质、懂合同、懂物流）②合规意识（遵守法规，不走捷径）③风险管理能力。"
    },
    {
        question: "贸易商在处理一批因质量争议被买方拒绝的印尼煤时，以下哪种处理方式最为专业？",
        options: [
            { text: "丢弃煤炭", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
            { text: "立即委托独立机构取样化验，启动合同仲裁程序，同时评估转售可能性（寻找接受该质量的替代买家）", correct: true, effect: {"knowledge": 12, "trust": 12, "risk": -12} },
            { text: "悄悄混入其他批次", correct: false, effect: {"knowledge": -15, "trust": -15, "risk": 20} },
            { text: "立即向媒体曝光买方", correct: false, effect: {"knowledge": -8, "trust": -8, "risk": 12} },
        ],
        explanation: "答案正确。专业处理：①保留证据（取样化验）②依法维权（按合同仲裁程序）③降低损失（寻找其他可接受该质量的买方）。"
    },
    {
        question: "在中印尼煤炭贸易的背景下，以下哪项宏观趋势对贸易商最具战略意义？",
        options: [
            { text: "中国完全禁止煤炭进口", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "中国能源转型中短期仍依赖煤炭保障能源安全，同时推动更高质量（低硫低灰）和更低碳的进口煤需求", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "印尼将停止所有煤炭出口", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "煤炭价格将永久保持高位", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。中国能源转型是渐进式的，预计2030年前仍是煤炭消费大国，但对进口煤的要求趋严：更低的硫分、灰分，更高热值。"
    },
    {
        question: "以下哪个情景描述了理想的",
        options: [
            { text: "以最低合规代价完成一票交易", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "通过合规经营、专业操作完成全流程，建立了与矿山、船公司、买方的长期信任关系，为下一批业务奠定基础", correct: true, effect: {"knowledge": 15, "trust": 15, "risk": -15} },
            { text: "只要赚了钱其他都不重要", correct: false, effect: {"knowledge": -5, "trust": -5, "risk": 8} },
            { text: "做成一票后立即退出市场", correct: false, effect: {"knowledge": -5, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。贸易的最高境界不是一次性获利，而是建立可持续的商业生态：矿山信任你、船公司愿意给优先舱位、银行愿意给融资。"
    },
    {
        question: "在煤炭供应链中，",
        options: [
            { text: "仅用于娱乐目的", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "实时掌握船舶位置、在途货量、预计到港时间，优化库存管理和风险应对", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "只对船公司有用", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "增加运营成本，没有实际价值", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。现代贸易管理中，船舶AIS追踪、在途货物状态监控让贸易商随时了解供应链状态，预判风险（如船舶延误、天气影响）。"
    },
    {
        question: "在印尼煤炭贸易中，以下哪种情形属于",
        options: [
            { text: "关联企业间交易价格明显偏离市场公允价格，用于转移利润避税", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "正常的货物价格波动", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "不同港口的价格差异", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "汇率变动带来的价格变化", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。转移定价是跨国企业间的税务合规重点：若母子公司或关联方之间的煤炭交易价格偏离独立第三方市场价格，可能引发税务风险。"
    },
    {
        question: "煤炭贸易中，商业谈判的",
        options: [
            { text: "一种煤炭品种的名称", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "谈判破裂时己方能接受的最好替代方案，决定了谈判的最低底线", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "贸易合同的附件模板", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "一种价格计算方法", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。BATNA(Best Alternative To a Negotiated Agreement)是谈判中最重要的概念，指如果当前谈判不成，你的最佳替代方案是什么。"
    },
    {
        question: "中国电厂对进口印尼煤炭的",
        options: [
            { text: "降低煤炭质量", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "将低热值进口煤与高热值国内煤混合，在满足锅炉设计参数的前提下，实现成本最优化", correct: true, effect: {"knowledge": 12, "trust": 10, "risk": -10} },
            { text: "掺烧没有任何意义", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "只是为了消耗库存", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。掺烧是电厂燃料管理的重要手段：进口低热值煤（如印尼3800大卡）价格便宜，与高热值国内煤（5500大卡）掺配使用可降低成本。"
    },
    {
        question: "贸易商在与印尼供应商签订长期供货协议前，应进行哪些尽职调查（Due Diligence）？",
        options: [
            { text: "不需要做任何调查", correct: false, effect: {"knowledge": -10, "trust": -8, "risk": 12} },
            { text: "核查IUP许可证有效性、矿山实地参观、财务状况、过往供货记录、法律合规情况", correct: true, effect: {"knowledge": 12, "trust": 12, "risk": -12} },
            { text: "只需看官网介绍", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "询问同行意见即可", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。供应商尽职调查是防范资源风险、合规风险的必要环节：①核查IUP矿业证有效期和覆盖范围②实地参观矿山设施③核实产能和物流能力。"
    },
    {
        question: "以下哪种商业模式在印尼煤炭贸易中最具可持续性？",
        options: [
            { text: "一次性交易，追求最大单笔利润", correct: false, effect: {"knowledge": -5, "trust": -5, "risk": 8} },
            { text: "建立长期稳定的供销关系，通过服务质量和专业能力持续创造价值", correct: true, effect: {"knowledge": 12, "trust": 12, "risk": -12} },
            { text: "靠信息不对称赚差价，不透明经营", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "只靠低价竞争", correct: false, effect: {"knowledge": -5, "trust": -5, "risk": 8} },
        ],
        explanation: "答案正确。可持续的贸易商业模式：以专业服务和稳定供应赢得长期合约，而非靠信息不对称的一次性套利。随着市场透明度提高，套利空间越来越小。"
    },
    {
        question: "黄老师在印尼煤炭贸易中建立",
        options: [
            { text: "给更多好处，用金钱买信任", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "诚实守信，按时履约，专业能力出众，出现问题主动沟通解决", correct: true, effect: {"knowledge": 12, "trust": 15, "risk": -15} },
            { text: "隐瞒不好的消息", correct: false, effect: {"knowledge": -10, "trust": -10, "risk": 15} },
            { text: "只报喜不报忧", correct: false, effect: {"knowledge": -8, "trust": -8, "risk": 12} },
        ],
        explanation: "答案正确。信任是商业关系的基石：按约履行承诺、遇到困难及时透明沟通、凭专业能力帮助解决问题，这些行为积累起来才能建立长期信任。"
    },
    {
        question: "完成印尼煤炭贸易全流程后，最重要的",
        options: [
            { text: "只关注利润数字", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
            { text: "分析每个环节的执行质量、风险点、成本结构，总结经验教训，优化下次操作流程", correct: true, effect: {"knowledge": 15, "trust": 12, "risk": -12} },
            { text: "复盘没有任何意义", correct: false, effect: {"knowledge": -8, "trust": -5, "risk": 8} },
            { text: "只总结失败原因", correct: false, effect: {"knowledge": -5, "trust": -3, "risk": 5} },
        ],
        explanation: "答案正确。专业复盘应涵盖：①利润拆解（每个环节的成本和收益）②风险点分析（哪些地方险些出问题）③流程优化（下次如何做得更好）。"
    },
    {
        question: "电厂煤炭招标中的'封标'是指什么？",
        options: [
            { text: "提前宣布中标结果", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "投标截止后，所有投标文件被密封保存，在开标前任何人不得拆封查阅", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "拒绝接受新的投标", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "公布招标标准", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭产业为当地创造大量就业机会，是重要的支柱产业。"
    },
    {
        question: "电厂煤炭供应合同中，'履约保证金'（Performance Bond/Guarantee）通常是合同金额的多少比例？",
        options: [
            { text: "1%以内", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "5%~10%", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "50%以上", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "100%", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。印尼政府通过矿业法规监管煤炭出口，确保资源可持续利用。"
    },
    {
        question: "在电厂煤炭评标中，如何处理'废标'（Invalid Bid）？",
        options: [
            { text: "给予废标方补偿", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "不符合招标文件实质性要求的投标被认定为废标，不参与评比", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "废标也可以中标", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "废标自动改为有效标", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭出口面临国际市场竞争，主要竞争对手为澳大利亚、俄罗斯等。"
    },
    {
        question: "电厂在评估煤炭供应商的'碳排放'表现时，主要关注哪项指标？",
        options: [
            { text: "煤炭颜色", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "煤炭含碳量和单位热值碳排放因子（CO₂排放系数）", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "煤炭重量", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "产地距离", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭出口为中国能源供应提供重要补充，尤其在东南沿海地区。"
    },
    {
        question: "在电厂煤炭采购谈判中，'价格联动机制'（Price Linkage Mechanism）是指什么？",
        options: [
            { text: "所有煤炭必须同一价格", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "合同价格与某指数（如秦皇岛港价或热值折算价）挂钩，定期调整", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "价格与汇率直接挂钩", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "价格永久固定不变", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭出口合同的签订需要明确质量规格、数量、交货期等条款。"
    },
    {
        question: "电厂在评标中，以下哪种情形属于'不正当竞争'行为？",
        options: [
            { text: "按照招标文件要求认真准备标书", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "向招标方工作人员提供礼品或好处，试图影响评标结果", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "在截止日期前提交完整标书", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "根据市场情况合理定价", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭出口需要购买货物运输保险，通常由买方或卖方投保。"
    },
    {
        question: "电厂煤炭采购中，'到厂价'和'坑口价'有什么区别？",
        options: [
            { text: "两者完全相同", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "坑口价是矿山出矿价；到厂价=坑口价+运费+港口费+中间环节费用，反映电厂的真实成本", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "到厂价只包含运费", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "坑口价包含所有费用", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭出口的装运期应合理约定，考虑雨季影响和港口能力。"
    },
    {
        question: "电厂参与煤炭采购的'框架协议'（Framework Agreement）模式有何优势？",
        options: [
            { text: "价格最低", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "一次谈判确定基本条款，简化后续每批次采购流程，降低交易成本", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "不需要签订任何合同", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "可以任意更改质量要求", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭出口的付款条款通常使用信用证(L/C)或电汇(T/T)。"
    },
    {
        question: "电厂采购招标中，'定标委员会'（Bid Evaluation Committee）一般由哪些人员组成？",
        options: [
            { text: "只有采购部门人员", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "由燃料管理、技术、财务、法务等多部门人员及外部专家共同组成，确保评标公正性", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "由供应商推荐的人员组成", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "只有最高领导", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭出口的争议解决通常约定仲裁条款，常用机构为新加坡国际仲裁中心(SIAC)。"
    },
    {
        question: "中标供应商在签订合同前，提交'投标保证金'转为'履约保证金'的主要目的是什么？",
        options: [
            { text: "仅为形式需要", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "确保中标方按合同条款认真履约，若违约则电厂可没收保证金作为赔偿", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "作为货款预付", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "支付招标费用", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭出口合同中的不可抗力条款应明确约定自然灾害等免责情况。"
    },
    {
        question: "以下哪种做法是煤炭贸易公司'合规经营'的核心体现？",
        options: [
            { text: "以利润最大化为唯一目标", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "建立完善的内控制度，遵守贸易法规，进行反洗钱（AML）和了解你的客户（KYC）审查", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "只要有利润就可以不管合规", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "合规只是形式，不影响经营", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭出口的违约金条款应明确约定违约责任和赔偿方式。"
    },
    {
        question: "煤炭贸易中，'套期保值'（Hedging）在实际中如何操作？",
        options: [
            { text: "完全不使用金融工具", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "买入现货同时卖出相应数量的煤炭期货，锁定价格波动风险", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "只做期货投机", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "通过大量储存煤炭对冲风险", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭出口的质量争议应以装港检验结果为准或双方协商解决。"
    },
    {
        question: "印尼煤炭贸易中，'贸易商利润'主要来源于哪里？",
        options: [
            { text: "只来自价格差（买卖差价）", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "买卖差价+运费优化+汇率收益+质量溢价+资金运营效率", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "完全依靠补贴", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "靠拖延付款赚取利差", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭出口的延期交货应按合同约定承担违约责任。"
    },
    {
        question: "在煤炭贸易中，什么是'背靠背合同'（Back-to-Back Contract）模式？",
        options: [
            { text: "两个合同内容完全相同，签给两个不同客户", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "贸易商的购煤合同条款与销售合同条款基本对应，将上下游风险对齐", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "只签购煤合同，不签销售合同", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "两个买方共同购买一批煤", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭出口合同应适用国际商法(ICC)或双方约定的法律。"
    },
    {
        question: "煤炭贸易中，'市场流动性风险'是指什么？",
        options: [
            { text: "煤炭的水分含量变化", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "在需要买入或卖出时，市场上没有足够的交易对手，无法以合理价格成交", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "港口储存空间不足", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "银行贷款审批风险", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭出口的转让条款应约定合同权利义务的转让条件。"
    },
    {
        question: "煤炭贸易中，'FOB与CIF选择'对买卖双方的风险分配有何不同？",
        options: [
            { text: "两种条款没有区别", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "FOB条款下买方负责运输和保险，掌握运价主动权但承担更多风险；CIF下卖方安排运输和保险，买方省事但失去运费控制权", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "CIF对卖方更有利，因为卖方全部负责", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "FOB对卖方更有利", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭出口的完整合同条款应包括质量、数量、价格、付款、交货、检验、争议解决等所有重要事项。"
    },
    {
        question: "煤炭贸易中，'知识产权保护'主要体现在哪些方面？",
        options: [
            { text: "煤炭本身无需知识产权保护", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "检验技术、贸易信息系统、品牌商标等商业秘密需要保护，泄露将损害商业利益", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "知识产权与大宗商品贸易完全无关", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "只需保护采购价格信息", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。煤炭贸易中的知识产权涵盖：企业的客户资源和采购渠道（商业秘密）、IT系统和贸易平台、品牌信誉等。"
    },
    {
        question: "以下哪种情形最能说明贸易商具备优秀的'风险管理能力'？",
        options: [
            { text: "从不参与任何煤炭贸易", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "能够在采购、运输、检验、通关各环节系统性地识别风险、制定预案，并在风险发生时快速有效应对", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "每次都预测价格涨跌", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "只做现货，回避所有期货工具", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。优秀的风险管理不是消除风险，而是系统识别→量化评估→制定预案→全流程监控→快速响应的完整体系。"
    },
    {
        question: "以下哪项最能描述'黄老师贸易之旅'游戏所模拟的核心商业逻辑？",
        options: [
            { text: "价格最低的煤炭一定最好卖", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "在合规经营的前提下，通过专业知识积累、关系建设、风险管理，实现可持续的商业成功", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "只要量大就能成功", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "走捷径、拒绝合规是成功之道", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。印尼煤炭贸易的成功之道：扎实的专业知识（知识值）+赢得合作伙伴信任（信任度）+有效管控风险（风险值）。"
    },
    {
        question: "以下哪项描述了'印尼煤炭贸易全流程'中最重要的成功要素？",
        options: [
            { text: "只要关系好就能成功", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "专业知识+合规意识+风险管理+信任关系+资金管理，五位一体缺一不可", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "只要价格低就能中标", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "依靠运气", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。成功的印尼煤炭贸易需要：①专业知识（懂煤炭品质、懂合同、懂物流）②合规意识（遵守法规，不走捷径）③风险管理能力。"
    },
    {
        question: "以下哪个情景描述了理想的'印尼煤炭贸易之旅'结局？",
        options: [
            { text: "以最低合规代价完成一票交易", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "通过合规经营、专业操作完成全流程，建立了与矿山、船公司、买方的长期信任关系，为下一批业务奠定基础", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "只要赚了钱其他都不重要", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "做成一票后立即退出市场", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。贸易的最高境界不是一次性获利，而是建立可持续的商业生态：矿山信任你、船公司愿意给优先舱位、银行愿意给融资。"
    },
    {
        question: "煤炭贸易中，'贸易融资'（Trade Finance）的主要工具有哪些？",
        options: [
            { text: "只能用自有资金", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "信用证（L/C）、保理（Factoring）、银行承兑汇票、供应链融资、出口信贷等", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "只能向私人借贷", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "不需要融资工具", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。大宗商品贸易的资金需求量大，专业贸易融资工具不可缺少：信用证降低信用风险、保理将应收账款变现、银行承兑汇票延期付款等。"
    },
    {
        question: "在煤炭供应链中，'物流追踪系统'对贸易管理有何价值？",
        options: [
            { text: "仅用于娱乐目的", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "实时掌握船舶位置、在途货量、预计到港时间，优化库存管理和风险应对", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "只对船公司有用", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "增加运营成本，没有实际价值", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。现代贸易管理中，船舶AIS追踪、在途货物状态监控让贸易商随时了解供应链状态，预判风险（如船舶延误、天气影响）。"
    },
    {
        question: "煤炭贸易中，'数字化单证'（e-B/L，电子提单）的趋势对行业有什么影响？",
        options: [
            { text: "电子提单完全替代纸质提单，已全面推广", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "逐步推广中，可提高单证传递效率、降低欺诈风险，但需要各方互认平台", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "电子提单没有法律效力", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "大宗商品不能使用电子提单", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。电子提单(e-B/L)正在逐步推广，主要平台有波罗的海电子提单平台(BOLERO)、essDOCS等，提高效率和安全性。"
    },
    {
        question: "在印尼煤炭贸易中，以下哪种情形属于'转移定价'（Transfer Pricing）风险？",
        options: [
            { text: "关联企业间交易价格明显偏离市场公允价格，用于转移利润避税", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "正常的货物价格波动", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "不同港口的价格差异", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "汇率变动带来的价格变化", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。转移定价是跨国企业间的税务合规重点：若母子公司或关联方之间的煤炭交易价格偏离独立第三方市场价格，可能引发税务风险。"
    },
    {
        question: "煤炭贸易中，商业谈判的'BATNA'（最佳替代方案）是什么概念？",
        options: [
            { text: "一种煤炭品种的名称", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "谈判破裂时己方能接受的最好替代方案，决定了谈判的最低底线", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "贸易合同的附件模板", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "一种价格计算方法", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。BATNA(Best Alternative To a Negotiated Agreement)是谈判中最重要的概念，指如果当前谈判不成，你的最佳替代方案是什么。"
    },
    {
        question: "中国电厂对进口印尼煤炭的'掺烧'（Blending）策略有什么商业逻辑？",
        options: [
            { text: "降低煤炭质量", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "将低热值进口煤与高热值国内煤混合，在满足锅炉设计参数的前提下，实现成本最优化", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "掺烧没有任何意义", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "只是为了消耗库存", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。掺烧是电厂燃料管理的重要手段：进口低热值煤（如印尼3800大卡）价格便宜，与高热值国内煤（5500大卡）掺配使用可降低成本。"
    },
    {
        question: "黄老师在印尼煤炭贸易中建立'老板信任度'的核心方法是什么？",
        options: [
            { text: "给更多好处，用金钱买信任", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "诚实守信，按时履约，专业能力出众，出现问题主动沟通解决", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "隐瞒不好的消息", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "只报喜不报忧", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。信任是商业关系的基石：按约履行承诺、遇到困难及时透明沟通、凭专业能力帮助解决问题，这些行为积累起来才能建立长期信任。"
    },
    {
        question: "煤炭贸易中，'风险值'居高不下的根本原因通常是什么？",
        options: [
            { text: "天气太热", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "知识不足（做出错误决策）、不合规操作（走捷径）、风险意识薄弱（不提前规划）", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "运气不好", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "市场价格太低", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。风险积累的根源：①专业知识缺乏→做出错误判断②走捷径不合规→埋下定时炸弹③缺乏预案→遇到问题手忙脚乱。"
    },
    {
        question: "完成印尼煤炭贸易全流程后，最重要的'复盘'内容是什么？",
        options: [
            { text: "只关注利润数字", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "分析每个环节的执行质量、风险点、成本结构，总结经验教训，优化下次操作流程", correct: true, effect: {"knowledge": 5, "trust": 3, "risk": -5} },
            { text: "复盘没有任何意义", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
            { text: "只总结失败原因", correct: false, effect: {"knowledge": -3, "trust": -2, "risk": 5} },
        ],
        explanation: "答案正确。专业复盘应涵盖：①利润拆解（每个环节的成本和收益）②风险点分析（哪些地方险些出问题）③流程优化（下次如何做得更好）。"
    },
],
};

// 随机打乱选项函数
function shuffleOptions(options) {
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
}
