// ============================================================
// 题目数据 - 共12题，每题对应一个MBTI维度
// 每道题可自由修改题干和选项文案，不要修改 dim 字段
// ============================================================
const QUESTIONS = [
  // ── E / I ──
  {
    id: 1,
    dim: 'EI',
    text: '深夜 emo，你的第一反应是？',
    options: [
      { text: '翻通讯录，找人彻夜长谈', value: 'E' },
      { text: '插上耳机，独自消化', value: 'I' }
    ]
  },
  {
    id: 2,
    dim: 'EI',
    text: '约会结束后，你通常感觉？',
    options: [
      { text: '充了电，还想继续', value: 'E' },
      { text: '累了，需要独处充电', value: 'I' }
    ]
  },
  {
    id: 3,
    dim: 'EI',
    text: '你在关系里更像？',
    options: [
      { text: '主动出击，先表白那个', value: 'E' },
      { text: '等对方来找我', value: 'I' }
    ]
  },
  // ── S / N ──
  {
    id: 4,
    dim: 'SN',
    text: '你更在意对方的？',
    options: [
      { text: '当下条件：工作、收入、长相', value: 'S' },
      { text: '精神共鸣：聊得来、有灵魂', value: 'N' }
    ]
  },
  {
    id: 5,
    dim: 'SN',
    text: '理想约会是？',
    options: [
      { text: '好吃好喝好玩，实实在在', value: 'S' },
      { text: '聊到天亮，感觉找到了同类', value: 'N' }
    ]
  },
  {
    id: 6,
    dim: 'SN',
    text: '对于未来，你更倾向？',
    options: [
      { text: '脚踏实地，一步一步来', value: 'S' },
      { text: '充满可能性，想象力才是浪漫', value: 'N' }
    ]
  },
  // ── T / F ──
  {
    id: 7,
    dim: 'TF',
    text: '吵架后，你会？',
    options: [
      { text: '冷静分析谁对谁错', value: 'T' },
      { text: '先道歉，感情比道理重要', value: 'F' }
    ]
  },
  {
    id: 8,
    dim: 'TF',
    text: '对方哪个行为让你瞬间下头？',
    options: [
      { text: '逻辑混乱，说话自相矛盾', value: 'T' },
      { text: '冷漠回复，感受不到温度', value: 'F' }
    ]
  },
  {
    id: 9,
    dim: 'TF',
    text: '你选伴侣更看重？',
    options: [
      { text: '有能力、有边界感、靠谱', value: 'T' },
      { text: '懂我、体贴、情绪稳定', value: 'F' }
    ]
  },
  // ── J / P ──
  {
    id: 10,
    dim: 'JP',
    text: '关于前任的东西，你会？',
    options: [
      { text: '果断清空，眼不见为净', value: 'J' },
      { text: '留着，毕竟是一段经历', value: 'P' }
    ]
  },
  {
    id: 11,
    dim: 'JP',
    text: '你对恋爱节奏的偏好是？',
    options: [
      { text: '按部就班，循序渐进', value: 'J' },
      { text: '感觉对了就 all in', value: 'P' }
    ]
  },
  {
    id: 12,
    dim: 'JP',
    text: '周末计划，你倾向？',
    options: [
      { text: '提前安排好，按时执行', value: 'J' },
      { text: '随性，走到哪算哪', value: 'P' }
    ]
  }
];

// ============================================================
// 人格数据 - 16种类型
// persona: 人设标签   analysis: 分析文案   product: 商品文案
// link: 商品链接（替换为你的实际链接）
// tags: 结果页展示的关键词
// radar: 四个维度的分值（0~1），用于雷达图展示
//   [上头, 理性, 感官, 灵魂]
// ============================================================
const PERSONALITIES = {
  INTJ: {
    persona: '战略型闷骚',
    analysis: '亲密如下棋，色色像实验，冷感但精准。',
    product: '金属的冰冷，准确的操作，惹火的氛围',
    link: 'https://item.jd.com/10160781623061.html',
    tags: ['精准', '冷感', '高效'],
    radar: [0.3, 0.9, 0.5, 0.7],
    color: '#6C63FF'
  },
  INTP: {
    persona: '理论派懒虫',
    analysis: '脑补满分，实操关机——查完文献就累了。',
    product: 'AI影音识别大模型+突破视界影音随动+尺寸自适应通道，精准手游快感',
    link: 'https://item.jd.com/100245029815.html',
    tags: ['脑补王', '懒得动', '研究员'],
    radar: [0.2, 0.95, 0.3, 0.8],
    color: '#5B8FF9'
  },
  ENTJ: {
    persona: '霸道指挥官',
    analysis: '亲密要KPI，色色冲业绩，不服来战。',
    product: '时间不是问题，腰力久经考验',
    link: 'https://item.jd.com/100278426962.html',
    tags: ['掌控欲', '高效率', '不服来战'],
    radar: [0.6, 0.9, 0.7, 0.5],
    color: '#FF4D4F'
  },
  ENTP: {
    persona: '辩论老司机',
    analysis: '撩你是为论证，花样多为防腻，嘴强王者。',
    product: '最能说话的ta，此刻静音',
    link: 'https://item.jd.com/100113137431.html',
    tags: ['嘴强王者', '花样多', '防腻专家'],
    radar: [0.7, 0.8, 0.6, 0.7],
    color: '#FA8C16'
  },
  INFJ: {
    persona: '神秘诱惑者',
    analysis: '灵魂共鸣才开门，不行就拉黑，傲娇天花板。',
    product: '傲娇猫娘，考验耐力的交付',
    link: 'https://detail.tmall.com/item.htm?id=733386891054',
    tags: ['傲娇', '灵魂共鸣', '神秘感'],
    radar: [0.5, 0.6, 0.4, 0.95],
    color: '#722ED1'
  },
  INFP: {
    persona: '纯爱小哭包',
    analysis: '先写情诗再抱抱，色色看月亮心情。',
    product: '怎么不是一种奖励呢？',
    link: 'https://item.jd.com/100153303919.html',
    tags: ['纯爱脑', '情绪化', '月亮心情'],
    radar: [0.8, 0.2, 0.3, 0.95],
    color: '#EB2F96'
  },
  ENFJ: {
    persona: '全民暖宝宝',
    analysis: '温柔到你窒息，床上也是教育片风格。',
    product: '重组胶原蛋白×玻尿酸，医用级别，呵护每一寸感受',
    link: 'https://item.jd.com/100261990364.html',
    tags: ['温柔过头', '全员照顾', '教育系'],
    radar: [0.9, 0.5, 0.6, 0.8],
    color: '#13C2C2'
  },
  ENFP: {
    persona: '快乐小狗',
    analysis: '扑倒你然后拆家，新鲜感是唯一忠诚。',
    product: '新鲜感永动机，今天也要解锁新玩法',
    link: 'https://item.jd.com/100329216956.html',
    tags: ['新鲜感', '扑倒型', '拆家达人'],
    radar: [0.95, 0.3, 0.8, 0.7],
    color: '#FF69B4'
  },
  ISTJ: {
    persona: '规矩打工人',
    analysis: '亲密度按流程，色色排班表，拒绝意外。',
    product: '安全系数✅ 水感润滑✅ 防脱落微米附着专利✅ 亲密安全流程✅',
    link: 'https://item.jd.com/10147795248211.html',
    tags: ['按流程', '排班表', '拒绝意外'],
    radar: [0.2, 0.9, 0.6, 0.3],
    color: '#52C41A'
  },
  ISFJ: {
    persona: '默默奉献妈',
    analysis: '你要啥我给啥，事后煮汤，别太野就行。',
    product: '医用同源，低敏超薄，水润柔滑',
    link: 'https://item.jd.com/100324457638.html',
    tags: ['无限付出', '低调照顾', '别太野'],
    radar: [0.4, 0.5, 0.7, 0.6],
    color: '#A0D911'
  },
  ESTJ: {
    persona: '纪检委主任',
    analysis: '先签字后贴贴，色色要合规，否则扣年终。',
    product: '爱可以谈，但不能高危，懂安全才能do',
    link: 'https://item.jd.com/100041522385.html',
    tags: ['先签字', '合规操作', '年终奖'],
    radar: [0.3, 0.95, 0.7, 0.2],
    color: '#1890FF'
  },
  ESFJ: {
    persona: '社交女王',
    analysis: '朋友圈秀恩爱，床上求好评，请五星。',
    product: '我要验牌，亲密的牌，他的她的都能玩，认可感最重要',
    link: 'https://item.jd.com/100027019937.html',
    tags: ['秀恩爱', '求好评', '五星服务'],
    radar: [0.8, 0.4, 0.8, 0.6],
    color: '#FF85C2'
  },
  ISTP: {
    persona: '动手老工匠',
    analysis: '亲密不如修车，色色直接来，少废话。',
    product: '开车得有润滑液，一滴润滑车速升级',
    link: 'https://item.jd.com/2388387.html',
    tags: ['直接来', '少废话', '动手派'],
    radar: [0.3, 0.7, 0.9, 0.3],
    color: '#8C8C8C'
  },
  ISFP: {
    persona: '艺术小野猫',
    analysis: '灯光香薰不能少，色色到一半："等等，这个角度不美。"',
    product: '香气如镜，照见欲望的彼此，美的当下',
    link: 'https://item.jd.com/10154484489875.html',
    tags: ['美学至上', '香薰控', '角度党'],
    radar: [0.6, 0.3, 0.95, 0.7],
    color: '#FF7A45'
  },
  ESTP: {
    persona: '冒险王',
    analysis: '撩完就跑，色色如蹦极，刺激就完事。',
    product: '出街小神器，无人知晓的超快乐',
    link: 'https://item.jd.com/100105588045.html',
    tags: ['撩完就跑', '蹦极式', '刺激优先'],
    radar: [0.9, 0.5, 0.95, 0.3],
    color: '#F5222D'
  },
  ESFP: {
    persona: '派对动物',
    analysis: '你负责嗨，我负责让全世界都知道咱俩嗨了。',
    product: '爱就是一场永不散场的after party，可以加入两人对战的玩具，让一起更一起',
    link: 'https://item.jd.com/100329216956.html',
    tags: ['全场最嗨', 'after party', '一起更一起'],
    radar: [0.95, 0.2, 0.9, 0.5],
    color: '#FADB14'
  }
};

// 计算 MBTI 类型
function calcMBTI(answers) {
  const count = { E:0, I:0, S:0, N:0, T:0, F:0, J:0, P:0 };
  answers.forEach(v => { if (count[v] !== undefined) count[v]++; });
  return (count.E >= count.I ? 'E' : 'I')
       + (count.S >= count.N ? 'S' : 'N')
       + (count.T >= count.F ? 'T' : 'F')
       + (count.J >= count.P ? 'J' : 'P');
}
