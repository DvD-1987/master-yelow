// 第2关补充题目（45道）- 煤炭基础知识
const level2ExtraQuestions = [
    {
        question: "动力煤的主要用途是什么？",
        options: [
            { text: "炼钢", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "发电、供热、产生动力", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "化工原料", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "炼焦", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "动力煤主要用于发电、供热、产生动力，不是用于炼焦或炼钢。"
    },
    {
        question: "同一种煤两次化验结果不一样，最主要的原因是什么？",
        options: [
            { text: "化验仪器故障", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "煤本身不均匀", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "化验人员不同", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "天气原因", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "煤本身不均匀是最主要原因，同一堆煤的表层、中间、底部成分都可能不同。"
    },
    {
        question: "外水每增加1个百分点，收到基低位发热量约下降多少大卡/公斤？",
        options: [
            { text: "10-20大卡", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "60-80大卡", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "100-120大卡", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不产生影响", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "外水每增加1%，收到基低位发热量约下降60-80大卡/公斤。"
    },
    {
        question: "内水每增加1个百分点，空气干燥基低位发热量约下降多少大卡/公斤？",
        options: [
            { text: "60-80大卡", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "40-60大卡", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "20-30大卡", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "100大卡以上", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "内水每增加1%，空气干燥基低位发热量约下降40-60大卡/公斤。"
    },
    {
        question: "煤炭贸易商的主要职能是什么？",
        options: [
            { text: "直接挖煤", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "链接上游煤矿和下游用户，提供贸易服务", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "只负责运输", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "只负责化验", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "煤炭贸易商主要职能是链接上游煤矿和下游用户，提供贸易、物流、金融等服务。"
    },
    {
        question: "收到基低位发热量（Qnet,ar）与空气干燥基低位发热量（Qnet,ad）的主要区别是什么？",
        options: [
            { text: "两者没有区别", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "收到基包含全水分，空气干燥基仅含内在水分", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "空气干燥基包含全水分，收到基仅含内在水分", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "两者都是干燥状态", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "收到基（ar）包含全水分，空气干燥基（ad）仅包含内在水分。"
    },
    {
        question: "发热量相差多少大卡属于正常波动范围？",
        options: [
            { text: "10-50大卡", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "100-200大卡", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "500大卡以上", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "不允许有任何差异", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "发热量相差100-200大卡属于正常波动范围。"
    },
    {
        question: "灰分相差多少属于正常波动范围？",
        options: [
            { text: "0.1%-0.2%", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "0.5%-1%", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "2%-3%", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "5%以上", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "灰分相差0.5%-1%属于正常波动范围。"
    },
    {
        question: "全水相差多少属于正常波动范围？",
        options: [
            { text: "0.1%-0.3%", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "1%-2%", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "3%-5%", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不允许有差异", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "全水相差1%-2%非常普遍，属于正常波动范围。"
    },
    {
        question: "外水是指什么？",
        options: [
            { text: "煤颗粒内部毛细管中的水分", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "煤炭表面和大毛细管中的水分，烘干即失", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "煤中的结晶水", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "煤燃烧后产生的水", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "外水是煤炭表面和大毛细管中的水分，烘干即可失去。"
    },
    {
        question: "内水是指什么？",
        options: [
            { text: "煤炭表面水分", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "吸附在煤颗粒内部毛细管中的水分，需达到一定温度才能析出", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "煤中的自由水", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "煤燃烧后产生的水蒸气", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "内水是吸附在煤颗粒内部毛细管中的水分，只有达到一定温度才能析出。"
    },
    {
        question: "煤的变质程度越低，内水含量会怎样？",
        options: [
            { text: "越低", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "越高", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "不变", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "与变质程度无关", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "变质程度越低的煤（如褐煤），内水越高，结构越疏松。"
    },
    {
        question: "在锅炉实际燃烧中，外水和内水哪个对热值的打击更明显？",
        options: [
            { text: "内水", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "外水", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "两者相同", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "都不影响", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "外水进入炉膛后会在低温区大量吸热，延缓着火，对热值的打击更明显。"
    },
    {
        question: "煤炭贸易中，为什么同一堆煤不同位置取样结果会不同？",
        options: [
            { text: "化验仪器误差", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "煤堆存在粒度偏析和成分不均匀", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "取样工具不同", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "天气影响", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "煤堆存在粒度偏析，表层多为细粉，底部可能有大块和矸石，造成成分不均匀。"
    },
    {
        question: "制样过程中哪些操作会导致结果偏差？",
        options: [
            { text: "规范破碎、缩分", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "破碎、缩分、烘干操作不规范", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "使用标准筛子", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "充分混匀煤样", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "制样时破碎、缩分、烘干操作不规范会导致水分、灰分波动，产生偏差。"
    },
    {
        question: "运输过程中淋雨或风干会对煤样产生什么影响？",
        options: [
            { text: "没有影响", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "水分变化，导致发热量改变", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "只影响灰分", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "只影响硫分", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "运输过程中淋雨或风干会改变煤的水分，从而直接影响发热量。"
    },
    {
        question: "煤炭贸易商在产业链中处于什么位置？",
        options: [
            { text: "最上游，直接开采煤矿", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "中间环节，链接上游煤矿和下游用户", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "最下游，直接使用煤炭", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "只负责化验检测", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "煤炭贸易商处于产业链中间环节，链接上游煤矿和下游用户。"
    },
    {
        question: "煤炭贸易商提供的增值服务可能包括哪些？",
        options: [
            { text: "只卖煤，不提供其他服务", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "物流、金融、质检、信息等服务", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "只提供运输", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "只提供仓储", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "现代煤炭贸易商提供物流、金融、质检、市场信息等多种增值服务。"
    },
    {
        question: "收到基（ar）的全水分包括哪些？",
        options: [
            { text: "仅内在水分", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "外水加内水", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "仅外水", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "结晶水", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "收到基的全水分等于外水加内水，是煤炭的总水分含量。"
    },
    {
        question: "为什么内水反映了煤的'变质程度'？",
        options: [
            { text: "与变质程度无关", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "变质程度越低，煤结构越疏松，内水越高", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "变质程度越高，内水越高", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "内水只与煤种有关", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "变质程度越低的煤（如褐煤），结构越疏松、有机质含氧量高，内水越高。"
    },
    {
        question: "在煤炭贸易结算中，通常更关注哪种水分？",
        options: [
            { text: "空气干燥基水分", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "收到基全水", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "内水", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "结晶水", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "在煤炭贸易结算中，通常更关注收到基全水，因为它直接影响结算热值。"
    },
    {
        question: "简单的记忆法：全水每增减1%，收到基低位发热量如何变化？",
        options: [
            { text: "增加约60-70大卡/公斤", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "反方向增减约60-70大卡/公斤", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "不变", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "增加约100大卡/公斤", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "全水每增减1%，收到基低位发热量反方向增减约60-70大卡/公斤。"
    },
    {
        question: "化验室测出的基础数据通常是哪种发热量？",
        options: [
            { text: "收到基低位发热量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "空气干燥基低位发热量", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "高位发热量", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "弹筒发热量", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} }
        ],
        explanation: "化验室测出的基础数据通常是空气干燥基低位发热量（Qnet,ad）。"
    },
    {
        question: "电厂结算和设计锅炉通常使用哪种发热量？",
        options: [
            { text: "空气干燥基低位发热量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "收到基低位发热量", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "高位发热量", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} },
            { text: "弹筒发热量", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} }
        ],
        explanation: "电厂结算和设计锅炉通常使用收到基低位发热量（Qnet,ar）。"
    },
    {
        question: "外水增加为什么会延缓锅炉着火？",
        options: [
            { text: "外水会提高煤的温度", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "外水在低温区大量吸热，导致机械不完全燃烧损失增加", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "外水会助燃", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "外水没有影响", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "外水进入炉膛后在低温区大量吸热，延缓着火，导致机械不完全燃烧损失增加。"
    },
    {
        question: "煤炭56提到的'无烟煤'有什么特点？",
        options: [
            { text: "挥发分高，易燃", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "挥发分低，难燃，但发热量高", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "水分高", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "灰分高", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "无烟煤挥发分低，难燃，但发热量高，燃烧时烟少。"
    },
    {
        question: "煤炭贸易中，为什么需要专业的取样和制样？",
        options: [
            { text: "为了增加工作量", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "确保样品具有代表性，减少偏差", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "为了延长交易时间", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "没有实际意义", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "专业的取样和制样可以确保样品具有代表性，减少因煤不均匀造成的偏差。"
    },
    {
        question: "国标允许发热量、灰分、硫分有多大的合理波动范围？",
        options: [
            { text: "不允许有任何波动", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "允许有合理波动范围", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "波动范围越大越好", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "国标没有规定", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "国标本身就允许发热量、灰分、硫分有合理的波动范围。"
    },
    {
        question: "不同化验室、不同设备、不同人操作，结果会有差异吗？",
        options: [
            { text: "不会有任何差异", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "正常允许有小误差", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "差异会非常大", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "无法确定", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "不同化验室、不同设备、不同人操作，正常允许有小误差。"
    },
    {
        question: "动力煤和炼焦煤的主要区别是什么？",
        options: [
            { text: "没有区别", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "动力煤用于燃烧发电，炼焦煤用于炼焦炼钢", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "动力煤价格更高", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "炼焦煤热值更高", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "动力煤用于燃烧发电、供热，炼焦煤用于炼焦后炼钢，用途完全不同。"
    },
    {
        question: "做司机、物流、煤场相关，最常接触的是什么煤？",
        options: [
            { text: "炼焦煤", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "动力煤", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "无烟煤", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "褐煤", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "做司机、物流、煤场相关，最常接触、最常拉的就是动力煤。"
    },
    {
        question: "判断动力煤的简单标准是什么？",
        options: [
            { text: "看颜色", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "看用途：发电/烧锅炉 = 动力煤", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "看产地", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "看价格", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "简单判断标准：看用途，发电/烧锅炉 = 动力煤。"
    },
    {
        question: "动力煤常看的指标有哪些？",
        options: [
            { text: "只看颜色", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "发热量（大卡）、硫分、灰分、水分", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "只看重量", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "只看产地", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "动力煤常看发热量（大卡）、硫分、灰分、水分等指标。"
    },
    {
        question: "煤炭贸易商未来会消失吗？",
        options: [
            { text: "一定会消失", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "不会完全消失，但职能会转变", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "已经消失了", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "与数字化无关", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "煤炭贸易商不会完全消失，但职能会从传统贸易向供应链服务、金融服务等转变。"
    },
    {
        question: "数字化对煤炭贸易商的影响是什么？",
        options: [
            { text: "没有影响", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "促使贸易商提升效率、转型服务", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "让贸易商更容易作弊", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "降低了贸易门槛", correct: false, effect: {knowledge: -3, trust: -2, risk: 3} }
        ],
        explanation: "数字化促使煤炭贸易商提升效率、透明化，并向供应链服务转型。"
    },
    {
        question: "煤炭贸易商的核心竞争力是什么？",
        options: [
            { text: "只依靠关系", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "供应链整合能力、风控能力、服务能力", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "只依靠资金", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "只依靠信息差", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} }
        ],
        explanation: "煤炭贸易商的核心竞争力是供应链整合能力、风控能力和服务能力。"
    },
    {
        question: "为什么煤炭需要混配？",
        options: [
            { text: "为了增加重量", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "满足不同用户对煤质的要求", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "为了降低价格", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "没有实际意义", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} }
        ],
        explanation: "煤炭混配是为了满足不同用户对煤质（热值、硫分、灰分等）的特定要求。"
    },
    {
        question: "煤炭的'收到基'是什么意思？",
        options: [
            { text: "收到煤炭时的状态，包含全水分", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "干燥状态", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "仅含内水的状态", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "燃烧后的状态", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "收到基（ar）是指收到煤炭时的状态，包含全水分（外水+内水）。"
    },
    {
        question: "煤炭的'空气干燥基'是什么意思？",
        options: [
            { text: "与空气接触后自然干燥的状态，仅含内在水分", correct: true, effect: {knowledge: 10, trust: 8, risk: -8} },
            { text: "完全干燥状态", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "收到时的状态", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "燃烧状态", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "空气干燥基（ad）是指与空气接触后自然干燥的状态，仅含内在水分。"
    },
    {
        question: "为什么煤炭化验结果会有误差？",
        options: [
            { text: "煤本身不均匀、取样制样不规范、仪器误差", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "只有仪器误差", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "只有人为误差", correct: false, effect: {knowledge: -5, trust: -3, risk: 5} },
            { text: "无法解释", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "煤炭化验误差来自三方面：煤本身不均匀、取样制样不规范、仪器与操作误差。"
    },
    {
        question: "煤炭贸易中，如何减少化验结果的争议？",
        options: [
            { text: "不化验，凭经验", correct: false, effect: {knowledge: -10, trust: -10, risk: 15} },
            { text: "规范取样、双方共同见证、第三方检测", correct: true, effect: {knowledge: 10, trust: 10, risk: -10} },
            { text: "只取一次样", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} },
            { text: "只相信卖方数据", correct: false, effect: {knowledge: -8, trust: -5, risk: 8} }
        ],
        explanation: "减少争议的方法包括：规范取样、双方共同见证取样过程、委托第三方检测机构。"
    }
];

// 将补充题目添加到第2关
if (typeof questionBankData !== 'undefined' && questionBankData[2]) {
    questionBankData[2] = questionBankData[2].concat(level2ExtraQuestions);
}
