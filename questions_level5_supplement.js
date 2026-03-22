// 第5关补充题目（26道新题）- 煤炭装载
const level5SupplementQuestions = [
    // 装船前准备
    {
        question: "装船前，煤矿向港口驳运煤炭的驳船，其舱底应该是什么状态？",
        options: [
            { text: "有少量残油不影响", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "清洁干燥，无油污、无杂物、无残余货物", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "残留上批煤炭无所谓", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "只要不漏水即可", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "驳船舱底必须清洁干燥，无油污和杂物，否则可能污染煤炭，导致买方索赔。"
    },
    {
        question: "装船作业委托书（SOF，Statement of Facts）的作用是什么？",
        options: [
            { text: "仅记录价格", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "记录装船全过程的时间、数量、天气等关键事实，是争议处理的重要依据", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "是付款凭证", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "仅供内部记录使用", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "SOF是装船作业过程的官方记录文件，详细记录每个环节的时间、天气、数量，是日后处理Laytime、索赔等争议的重要依据。"
    },
    {
        question: "在装船港，船代（Shipping Agent）的主要职责是什么？",
        options: [
            { text: "负责检验煤炭质量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "代表船东处理港口手续、联系引水、安排靠泊等", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "负责煤炭定价", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "监督矿山生产", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "船代代表船东在港口处理各种手续，包括联系引水领港、安排靠泊、办理进出港申报等。"
    },
    {
        question: "装船中，什么是'拉稳（Trimming）'操作？",
        options: [
            { text: "调整船舶航向", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "对货舱内的煤炭进行平整，使其均匀分布，避免局部过高", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "减少装载量", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "清洁甲板", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "Trimming是装船过程中对货舱内煤炭进行平整的作业，使其均匀分布，保持船舶平衡，同时最大化利用舱容。"
    },
    {
        question: "煤炭的自燃倾向（Spontaneous Combustion Tendency）对装船有什么影响？",
        options: [
            { text: "没有影响", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "高挥发分、低变质程度的煤易自燃，长途运输需特别监测舱温", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "自燃只在储存时发生，运输中不会", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "只有无烟煤会自燃", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "低变质程度的动力煤（如印尼煤）挥发分高，具有自燃倾向，长途运输中需定期监测舱温，必要时通风降温。"
    },
    {
        question: "装船结束时，船方签发的'大副收据'（Mate's Receipt）的作用是什么？",
        options: [
            { text: "是货物的最终权属证明", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "是货物实际装船的初步凭证，是签发提单的依据", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "是质量检验报告", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "等同于提单，可以流通转让", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "大副收据是货物实际装船的初步证明，记录装货情况和货物状态，是船公司据以签发提单的依据。"
    },
    {
        question: "以下哪种情况会导致'不清洁提单'（Claused B/L）？",
        options: [
            { text: "货物按时装船", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "大副收据上注明货物有破损或数量短少等批注", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "天气晴好", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "使用标准包装", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "若装船过程中发现货物有破损、短少、杂质等问题，大副会在大副收据上批注，导致签发不清洁提单，影响信用证议付。"
    },
    {
        question: "散装煤炭装船时，现场监装人员（Cargo Surveyor）的职责是什么？",
        options: [
            { text: "仅监督装船速度", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "监督装载数量、质量、舱况，确认装船数据，出具装船报告", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "负责安排船舶靠泊", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "负责煤炭销售", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "Cargo Surveyor负责全程监督装船作业，核实装载量、记录舱况、取样送检，最终出具专业的装船勘验报告。"
    },
    {
        question: "装船时，如何通过'吃水计重法'（Draft Survey）确定装船量？",
        options: [
            { text: "直接用皮带秤计量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "测量装货前后船舶六点吃水，根据吃水差计算排水量变化，再扣除压载水变化等", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "数驳船数量估算", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "只看船方提供的数据", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "吃水计重是大宗散货计量的标准方法，通过精确测量船舶前后吃水差，利用船体稳性表计算出装载量，精度可达0.3%左右。"
    },
    {
        question: "煤炭装船时，港口的'层流水（Laydays）'是指什么？",
        options: [
            { text: "港口的水流速度", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "合同约定的船舶在港装卸货物的允许时间", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "装货期间的潮汐时间", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "船舶停靠港口的费用", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "Laydays/Laytime是合同约定的允许装卸货时间。超过此时间船方可向货主索取'滞期费'（Demurrage），节省时间则货主可获'速遣费'（Despatch）。"
    },
    {
        question: "以下哪种情况，船方可以向货主索取'滞期费'（Demurrage）？",
        options: [
            { text: "装货提前完成", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "实际装货时间超过合同约定的允许装卸时间", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "天气原因导致停工", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "船舶提前抵港", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "当实际装货时间（包括有效工作时间）超过合同规定的Laytime时，船方有权向货主（租船人）索取滞期费。"
    },
    {
        question: "散装煤炭的堆场存放通常需要注意什么？",
        options: [
            { text: "堆放越高越好，节省空间", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "控制堆高、定期翻堆降温、监控内部温度，防止自燃", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "不需要任何特殊处理", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "淋水降温即可", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "煤堆管理的关键是防自燃：控制堆高（一般不超过8-10米）、监控内部温度、定期检测，必要时翻堆散热。"
    },
    {
        question: "装船时，发现货舱内存在有害气体（如甲烷），应该怎么办？",
        options: [
            { text: "继续作业，尽快完成装船", correct: false, effect: {knowledge: -10, trust: -10, risk: 20} },
            { text: "立即停止作业，强制通风，检测气体浓度合格后再作业", correct: true, effect: {knowledge: 12, trust: 10, risk: -12} },
            { text: "打开所有舱盖继续作业", correct: false, effect: {knowledge: -8, trust: -5, risk: 10} },
            { text: "用风扇直接吹散", correct: false, effect: {knowledge: -5, trust: -5, risk: 8} }
        ],
        explanation: "发现有害气体（如CH4、CO、H2S等）必须立即停止作业并撤离人员，进行强制通风，经专业仪器检测浓度达标后才能恢复作业。"
    },
    {
        question: "以下哪种情况需要在提单上注明'货物在甲板上'（On Deck）？",
        options: [
            { text: "货物装入货舱", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "货物确实被放置在甲板上运输，而非舱内", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "货物超重时", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "散装货物一律注明", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "煤炭通常装入货舱，若因特殊原因放置甲板，必须在提单上注明，否则会影响保险理赔和买方权益。"
    },
    {
        question: "在印尼港口装船时，以下哪项安全规定必须严格遵守？",
        options: [
            { text: "只需佩戴安全帽", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "穿戴安全帽、安全鞋、反光背心，进入密闭空间须携带气体检测仪", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "安全设备可选", correct: false, effect: {knowledge: -10, trust: -8, risk: 15} },
            { text: "只有管理人员需要安全装备", correct: false, effect: {knowledge: -8, trust: -5, risk: 10} }
        ],
        explanation: "港口作业安全是头等大事，进入作业区必须全套防护，进入密闭空间还需要气体检测和监护人员。"
    },
    {
        question: "煤炭船舶在离港前，必须向港口当局提交的文件包括哪些？",
        options: [
            { text: "仅提单", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "装货完毕证明、大副收据、海关放行单、港口规费收据等", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "只需船长确认", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "只需邮件通知", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} }
        ],
        explanation: "离港前需取得所有相关放行文件，包括港口主管机关放行、海关放行、规费结清等，缺一不可。"
    },
    {
        question: "以下哪种设备用于检测货舱内的甲烷浓度？",
        options: [
            { text: "温度计", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "可燃气体检测仪（LEL检测仪）", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "湿度计", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "压力表", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "可燃气体检测仪（LEL：Lower Explosive Limit检测仪）用于检测甲烷等可燃气体的爆炸下限浓度，是货舱安全检查的必备工具。"
    },
    {
        question: "船舶靠泊装煤时，'NOR'（Notice of Readiness）是什么？",
        options: [
            { text: "船舶维修通知", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "船舶到达并准备就绪、可以开始装货的正式通知", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "货物收讫通知", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "费率变更通知", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "NOR是船方向货方发出的'装卸准备就绪通知'，NOR被接受后，Laytime开始计算。其有效性与合同条款密切相关。"
    },
    {
        question: "煤炭驳船（Barge）在运输途中发生沉没，责任如何划定？",
        options: [
            { text: "由煤矿承担全部责任", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "依据货权转移节点和运输合同条款，结合保险理赔来处理", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "由买方承担", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不需要处理", correct: false, effect: {knowledge: -10, trust: -8, risk: 15} }
        ],
        explanation: "驳运事故的责任划定取决于合同约定的货权转移时间（如FOB为装上船后）以及运输合同和保险条款，需综合判断。"
    },
    {
        question: "以下哪项是衡量港口装船效率的重要指标？",
        options: [
            { text: "港口面积", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "装船速率（Loading Rate），通常以吨/小时或吨/天表示", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "港口工人数量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "港口水深", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} }
        ],
        explanation: "装船速率（Loading Rate）是关键效率指标，合同中通常约定最低装船速率，低于此标准货主可以要求赔偿。"
    },
    {
        question: "印尼雨季对煤炭装船作业有什么主要影响？",
        options: [
            { text: "没有影响", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "频繁降雨导致作业中断，煤炭水分增加，装船效率下降", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "雨天装船更快", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "雨季煤炭质量更好", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} }
        ],
        explanation: "印尼雨季（11月至次年4月）降雨频繁，煤炭水分升高、装船作业经常中断，需提前做好计划应对。"
    },
    {
        question: "在散装煤炭的船务实践中，'舱位指定函'（Stowage Plan）的作用是什么？",
        options: [
            { text: "记录船员分工", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "规划各货舱的装载量分配，确保船舶纵向和横向稳性", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "标注货物集装箱编号", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "只是格式文件，没有实际用途", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "Stowage Plan由船方制定，规划每个货舱的装载量，确保船舶在装载过程中始终保持稳定安全的状态。"
    },
    {
        question: "装船时，最终装船数量产生争议，以下哪种方法具有最高法律效力？",
        options: [
            { text: "矿方的磅秤计量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "经双方认可的独立验货师出具的吃水计重报告", correct: true, effect: {knowledge: 12, trust: 12, risk: -12} },
            { text: "船方单方面确认", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "买方的估算", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "独立第三方验货师（如SGS、Intertek等）按国际标准出具的吃水计重报告具有最高公信力，是争议解决的关键依据。"
    },
    {
        question: "煤炭装船中，'洗舱费'（Cleaning Fee）通常由谁承担？",
        options: [
            { text: "港口当局", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "视合同约定而定，一般由租船人（货主）承担", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "船方单独承担", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "买方承担", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "洗舱费的承担方由租船合同约定，一般情况下由租船人（货主/贸易商）承担，是合同谈判中的常见条款。"
    },
    {
        question: "以下哪种操作可以有效防止煤炭在运输途中的水分损失？",
        options: [
            { text: "不关舱盖", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "无需特别措施，水分会自然保持", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "装船后及时关好舱盖，防止雨水进入；出港前核实舱盖密封性", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "向煤上喷水保持水分", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "运输中防水分变化的关键是确保货舱密封，防止外部雨水进入（会增加水分）或煤炭水分蒸发散失，合同通常对水分偏差有严格规定。"
    },
    {
        question: "以下哪项是印尼煤炭港口（如桑巴港、塔纳格罗港等）的典型特点？",
        options: [
            { text: "全部是深水港，可直接靠泊大型船舶", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "多为浅水港，大型船舶需在锚地通过驳船（Barge）转运", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "使用集装箱装运", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "全天候24小时不间断作业", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "印尼加里曼丹很多煤炭装运港水深有限，无法直接靠泊大型货船，通常采用'锚地驳运'（Ship-to-Barge-to-Ship）模式。"
    }
];

// 将补充题目添加到第5关
if (typeof questionBankData !== 'undefined' && questionBankData[5]) {
    questionBankData[5] = questionBankData[5].concat(level5SupplementQuestions);
}
