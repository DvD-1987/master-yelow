// 第6关补充题目（25道新题）- 煤炭检验
const level6SupplementQuestions = [
    {
        question: "煤炭水分检验中，'全水分'（Mt）测定时，煤样应在多少度烘干？",
        options: [
            { text: "50°C", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "105°C至110°C", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "200°C", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "室温自然风干", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。全水分测定按国标GB/T 211，煤样在(105±2)°C干燥箱中烘至恒重，计算重量损失为水分含量。"
    },
    {
        question: "煤炭灰分检验中，以下哪种方法是国际通用标准方法？",
        options: [
            { text: "目视法", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "缓慢灰化法（将煤样在815±10°C下完全灰化）", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "快速燃烧法（500°C）", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "化学溶解法", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。按国际标准ISO 1171及中国标准GB/T 212，灰分测定采用缓慢灰化法，在815±10°C马弗炉中灼烧至恒重。"
    },
    {
        question: "煤炭硫分检验中，常用的库法（Eschka法）是什么原理？",
        options: [
            { text: "直接观察颜色", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "将煤样与埃卡氏混合剂混合灼烧后，滴定生成的硫酸盐含量", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "通过气相色谱分离", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "用磁铁吸附含硫颗粒", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。Eschka法是测定全硫的经典方法，将煤与埃卡氏混合剂混合后高温灼烧，硫转化为硫酸盐，再用滴定法定量测定。参考：GB/T 214。"
    },
    {
        question: "以下哪种仪器用于快速测定煤炭发热量？",
        options: [
            { text: "分光光度计", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "氧弹量热计（Bomb Calorimeter）", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "气相色谱仪", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "原子吸收光谱仪", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。氧弹量热计是测定煤炭发热量的标准仪器，煤样在充满纯氧的密封钢弹中完全燃烧，通过测量水温升计算发热量。参考：GB/T 213。"
    },
    {
        question: "煤炭的'挥发分'（Volatile Matter）测定条件是什么？",
        options: [
            { text: "在空气中加热至300°C", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "在隔绝空气的条件下，900°C±10°C加热7分钟", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "在水中加热至100°C", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "在空气中燃烧至无残留", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。挥发分测定按GB/T 212，在隔绝空气的坩埚中900°C±10°C加热7分钟，损失的质量减去水分即为挥发分。"
    },
    {
        question: "在煤炭检验中，'仲裁样品'的保存目的是什么？",
        options: [
            { text: "仅供参观展示", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "在双方对检验结果有争议时，委托第三方用仲裁样重新检验", correct: true, effect: {knowledge: 12, trust: 12, risk: -12} },
            { text: "用于下次装船的质量参考", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "保存满6个月后丢弃", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。仲裁样品须密封保存规定期限(通常90天至6个月)，一旦双方对主检结果有异议，可启动仲裁程序委托独立机构重检。"
    },
    {
        question: "国际标准中，煤炭检验的取样方法主要参照哪个标准？",
        options: [
            { text: "ISO 1213", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "ISO 18283（散装煤炭取样）", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "ISO 9000", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "ASTM D388", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} }
        ],
        explanation: "答案正确。ISO 18283是国际标准化组织发布的散装煤炭取样标准，规定了取样方案、取样设备和操作程序，是国际贸易中的主要参照标准。"
    },
    {
        question: "什么是煤炭检验中的'系统取样'（Systematic Sampling）？",
        options: [
            { text: "随机抽取几铲样品", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "按固定时间或固定质量间隔，从整批煤流中有规律地取样", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "只取开始和结束时的样品", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "由矿方自行决定取样时间", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} }
        ],
        explanation: "答案正确。系统取样是按固定质量间隔(如每500吨取一次)或时间间隔对整批煤流进行均匀取样，保证样品的代表性。"
    },
    {
        question: "煤炭粒度（Size）检验中，以下哪种方法是标准方法？",
        options: [
            { text: "目测估计", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "用标准筛网（筛分法）筛分，称量各粒级质量计算百分比", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "用尺子量几块煤的尺寸", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "依据煤炭颜色判断", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} }
        ],
        explanation: "答案正确。粒度检验按标准方法使用规定孔径的系列筛网，称量各筛层上的煤样质量，计算各粒级的百分比。"
    },
    {
        question: "煤炭的'哈氏可磨性指数'（HGI）测量的是什么？",
        options: [
            { text: "煤炭的硬度", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "煤炭在电厂磨煤机中被磨碎的难易程度", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "煤炭的含水量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "煤炭的颗粒大小", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。HGI(Hardgrove Grindability Index)是评价煤炭被磨成细粉的难易程度，HGI越高说明越易磨，对电厂磨煤机设计和运行至关重要。参考：GB/T 2565。"
    },
    {
        question: "煤炭检验结果出现异常偏高的热值，以下哪种原因最可能导致？",
        options: [
            { text: "天气寒冷", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "量热计校准不准确，或样品受到有机物污染", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "检验人员经验丰富", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "煤炭储存时间长", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。热值异常偏高通常是量热计未经正确标定，或样品受到油脂、有机物等高热值物质污染，需重新检验并排查原因。"
    },
    {
        question: "煤炭检验中，SGS、Intertek、Bureau Veritas等机构的证书有何意义？",
        options: [
            { text: "仅是形式文件，无实际意义", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "是国际认可的第三方公正检验机构证书，具有较高公信力和法律效力", correct: true, effect: {knowledge: 12, trust: 12, risk: -12} },
            { text: "只在欧洲有效", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "仅供买方内部使用", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。SGS、Intertek、BV等是国际知名的独立检验机构，其检验证书在全球范围内获得银行、保险和贸易方的广泛认可。"
    },
    {
        question: "煤炭化验报告中，'Ad'基代表什么分析基准？",
        options: [
            { text: "收到基（含全水分）", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "空气干燥基（在实验室空气条件下平衡后的水分状态）", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "干燥无灰基（不含水分和灰分）", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "干燥基（不含水分）", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。Ad基(Air-dry basis)是空气干燥基，指煤样在实验室温湿度条件下达到平衡后进行分析的基准，是最常见的化验基准之一。"
    },
    {
        question: "以下哪种元素是衡量煤炭对锅炉腐蚀风险的关键指标？",
        options: [
            { text: "碳（C）", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "氯（Cl）和硫（S）", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "氧（O）", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "氮（N）", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。氯会导致锅炉高温腐蚀，硫在燃烧中形成SO2和SO3，二者共同导致低温露点腐蚀，是锅炉设计和运行中的重要控制指标。"
    },
    {
        question: "检验煤样时，以下哪种操作会影响水分检验结果的准确性？",
        options: [
            { text: "使用密封容器保存样品", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "样品长时间暴露在空气中或受阳光直射", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "在实验室内检验", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "使用已校准的天平称量", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} }
        ],
        explanation: "答案正确。水分对环境非常敏感，样品暴露在空气中会失水，直射阳光下更快蒸发，导致检验结果偏低，必须用密封容器迅速送检。"
    },
    {
        question: "在煤炭贸易检验中，买卖双方对质量结果有异议时，正确的处理程序是什么？",
        options: [
            { text: "直接停止合作", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "启动合同约定的仲裁程序，用封存的仲裁样委托合同指定机构重检", correct: true, effect: {knowledge: 12, trust: 12, risk: -12} },
            { text: "由买方自行重新检验", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "向媒体曝光", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "答案正确。按合同约定的仲裁程序，使用双方共同封存的仲裁样本，委托合同指定的公正第三方机构重检，结果对双方均有约束力。"
    },
    {
        question: "以下哪种方法可以在现场快速估测煤炭的大致热值？",
        options: [
            { text: "直接品尝", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "使用近红外光谱仪（NIR）或便携式XRF仪快速扫描", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "观察煤炭颜色", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "称重估算", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。近红外光谱仪(NIR)是一种先进的在线/现场快速分析工具，可在几秒内估测热值、水分、灰分等，但贸易合同中的正式结果仍需按标准方法在实验室检验。"
    },
    {
        question: "煤炭检验机构的化验室应定期进行哪项质量控制？",
        options: [
            { text: "不需要质量控制", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "参加能力验证（PT，Proficiency Testing），使用标准煤样校验仪器和方法", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "只需更换新仪器", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "每年培训一次员工即可", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。能力验证(PT)是化验室质量管理体系(如ISO/IEC 17025)的核心要求，通过使用标准参考煤样与其他实验室比对结果，验证检测能力。"
    },
    {
        question: "煤样'缩分'操作中，常用的'二分器'（Riffle Divider）如何使用？",
        options: [
            { text: "将煤样从高处倒下，随机分成两份", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "将煤样均匀倒入有交替方向槽口的二分器中，自动分成等量两份", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "用手工将煤样拨分两堆", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "称重后取一半", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。Riffle Divider(二分器)有相互交替方向的槽口，煤样缓慢均匀倒入后，每隔一槽的煤料分别落入左右两个容器，将样品等量二分，代表性好。"
    },
    {
        question: "以下哪项煤炭指标对火力发电厂的脱硫系统设计影响最大？",
        options: [
            { text: "水分（Mt）", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "全硫（St,d）", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "挥发分（Vad）", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "粒度", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。全硫含量直接决定燃烧产生的SO2浓度，是脱硫系统(FGD)规模设计和运行的关键依据，也是环保排放标准的核心指标。"
    },
    {
        question: "煤炭灰熔点测定时，正确的判断依据是什么？",
        options: [
            { text: "灰样颜色变化", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "锥形灰样在加热过程中形态变化的四个特征温度：变形温度（DT）、软化温度（ST）、半球温度（HT）和流动温度（FT）", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "灰样重量变化", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "用温度计测量熔化时的温度", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。煤炭作为散货主要通过海运，使用巴拿马型或更小的灵便型船舶运输。"
    },
    {
        question: "以下关于煤炭化验报告中各分析基的换算，哪条是正确的？",
        options: [
            { text: "各分析基之间不可相互换算", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "通过水分、灰分数据，利用换算系数公式可将ad基换算为ar基、d基或daf基", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "只能从高基换算到低基", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "换算结果与实测值完全相同", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。印尼-中国南海航线是东南亚至中国的主要煤炭运输航线，航程约5-7天。"
    },
    {
        question: "煤炭检验报告上的'CV (NAR)'是什么意思？",
        options: [
            { text: "煤炭重量", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "净收到基低位发热量（Net As Received Calorific Value）", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "煤炭体积", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "灰分含量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。好望角型船舶(Cape Size)载重吨通常在15万吨以上，但吃水较深，印尼很多港口无法靠泊。"
    },
    {
        question: "检验机构对煤样进行化验时，为何要保留'副样'（Reserve Sample）？",
        options: [
            { text: "作为纪念品", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "以备复检或仲裁检验时使用，确保检验结果可追溯和可复核", correct: true, effect: {knowledge: 12, trust: 12, risk: -12} },
            { text: "用于下一批次的检验参考", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "提供给矿方", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "答案正确。港口吃水限制是影响船舶选择的重要因素，印尼很多煤炭港口水深有限，无法靠泊大型船舶。"
    },
    {
        question: "煤炭检验中，'全水分'样品采集后，从取样到开始测定的最长允许时间是多少？",
        options: [
            { text: "24小时以内，且全程密封保存", correct: true, effect: {knowledge: 12, trust: 10, risk: -10} },
            { text: "可以放置一周后再测定", correct: false, effect: {knowledge: -10, trust: -8, risk: 12} },
            { text: "时间长短不影响水分结果", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "48小时后取样效果更稳定", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "答案正确。运费是煤炭到岸价(CIF)的重要组成部分，通常占CIF价格的10-30%。"
    }
];

// 将补充题目添加到第6关
if (typeof questionBankData !== 'undefined' && questionBankData[6]) {
    questionBankData[6] = questionBankData[6].concat(level6SupplementQuestions);
}
