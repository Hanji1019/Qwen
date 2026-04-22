const groups = [
  ["onboarding", "流程一 · 入门引导"],
  ["incubation", "流程二 · 一句话孵化"],
  ["workflow", "流程三 · 工作流工坊"],
  ["industry", "流程四 · 新物种展馆"]
];

const screens = [
  ["screen-01", "01", "onboarding", "流程一 · 入门引导", "品牌启动页", "用深空光束、粒子汇聚和液态玻璃字标建立“千问不止一问”的第一品牌印象。", "在最短时间内把千问从聊天工具抬升为 AI 时代的操作系统。", ["自动播放 3 秒品牌动画", "支持上滑进入", "底部提示做呼吸式微动效"], ["深空渐变底", "橙蓝双核光束", "液态玻璃品牌字标"], ["品牌首屏", "Slogan", "电影感"], ["千问文本", "千问视觉", "万相"], "品牌启动", "splash"],
  ["screen-02", "02", "onboarding", "流程一 · 入门引导", "身份标签选择页", "以卡片化身份选择驱动生成式 UI，让后续桌面与内容推荐真正因人而异。", "收集人群标签，为桌面布局、快捷指令和推荐模块做差异化适配。", ["身份卡片单选", "支持附加标签", "选中后按钮激活"], ["高圆角卡片", "品牌橙激活描边", "明亮对比界面"], ["身份驱动", "生成式 UI"], ["千问文本", "百炼Agent"], "身份选择", "persona"],
  ["screen-03", "03", "onboarding", "流程一 · 入门引导", "千问能力预演页", "把“旧机器到新生命”的命题解析做成 15 秒叙事动画，让抽象概念具象化。", "快速破除“聊天机器人”偏见，突出多模态、推理与工具调度能力。", ["自动播放三段动画", "轻触可加速", "最后定格到进入按钮"], ["灰到彩的叙事转场", "能力图标环绕", "新物种生长结构"], ["能力预演", "品牌叙事"], ["千问文本", "千问多模态", "万相", "工具调用"], "能力预演", "prelude"],
  ["screen-04", "04", "onboarding", "流程一 · 入门引导", "个性化 OS 桌面", "进入系统后直接看到会随身份变化的智能桌面，而不是固定首页。", "证明千问OS 是可重组、可适配、可调度的工作台。", ["模块可拖拽排序", "横滑查看更多", "下拉刷新推荐"], ["多模块仪表盘", "Dock 式导航", "高亮焦点卡片"], ["桌面层", "个性化"], ["Qwen-Coder", "百炼Agent", "万相"], "个性化桌面", "desktop"],
  ["screen-05", "05", "incubation", "流程二 · 一句话孵化", "快捷指令输入页", "将输入区设计成舞台，把语音、文本、附件统一到一句话发起任务的 Agent 入口。", "降低复杂任务的进入门槛，让用户直接用自然语言启动完整工作流。", ["语音与键盘切换", "实时转写", "预设指令一键填充"], ["大输入区", "发光语音波形", "横向任务胶囊"], ["多模态输入", "Agent 入口"], ["千问语音", "千问文本", "千问多模态"], "快捷指令", "prompt"],
  ["screen-06", "06", "incubation", "流程二 · 一句话孵化", "AI 任务执行页", "把“理解、规划、执行、反馈”全过程可视化，展示千问像 OS 一样在调度工具链。", "让观众理解千问不只是在对话，而是在主动执行任务。", ["点击节点查看参数", "支持人工确认", "日志面板可展开"], ["任务进度条", "节点式工具链", "实时日志流"], ["工具调用", "过程可视化"], ["千问推理", "工具调用", "百炼Agent"], "任务执行", "execution"],
  ["screen-07", "07", "incubation", "流程二 · 一句话孵化", "任务完成页", "结果页不仅展示完成状态，还强调节省步骤、可保存、可分享和可复用。", "把单次任务转成长期可调用的智能资产。", ["保存为快捷指令", "生成分享二维码", "推荐下一步任务"], ["成功状态牌", "结果摘要卡片", "相关推荐入口"], ["完成反馈", "可复用资产"], ["千问推理", "工具调用"], "任务完成", "result"],
  ["screen-08", "08", "workflow", "流程三 · 工作流工坊", "新物种模板库", "用模板降低上手门槛，让“孵化新物种”像选业务模板一样轻松。", "帮助不同层次用户迅速进入工作流设计而不是面对空白画布。", ["支持搜索筛选", "点击模板进入编辑", "可一键部署"], ["两列模板网格", "难度标签", "业务导向命名"], ["模板库", "降门槛"], ["千问文本", "Qwen-Coder", "百炼Agent"], "模板库", "templates"],
  ["screen-09", "09", "workflow", "流程三 · 工作流工坊", "工作流画布页", "这是区别于普通聊天应用的核心页面，必须做出系统级编排能力。", "让用户像搭建操作系统能力一样构建 DAG 任务链。", ["拖拽节点到画布", "连线配置参数", "支持缩放和平移"], ["无限画布", "节点状态", "推理与工具联动"], ["核心差异", "编排能力"], ["百炼Agent", "千问推理", "Qwen-Coder"], "工作流画布", "canvas"],
  ["screen-10", "10", "workflow", "流程三 · 工作流工坊", "工作流调试页", "调试页负责建立信任，让每一步输出和错误原因都能被看到。", "让工作流从黑箱变成可控系统。", ["单步调试", "全流程运行", "错误节点高亮"], ["状态指示灯", "输入输出双面板", "日志级别切换"], ["调试", "可控性"], ["千问推理", "工具调用", "百炼Agent"], "调试预览", "debug"],
  ["screen-11", "11", "workflow", "流程三 · 工作流工坊", "新物种发布页", "把工作流升级成可上线、可分享、可分发的新物种成果物。", "明确发布形式、模型配置和生态入口。", ["选择发布形式", "配置模型与权限", "发布后生成二维码"], ["发布形式选择", "千问大脑配置卡", "成果预览"], ["发布", "生态开放"], ["千问推理", "万相", "百炼Agent"], "发布新物种", "publish"],
  ["screen-12", "12", "industry", "流程四 · 新物种展馆", "行业分类导航页", "用展馆视角展示千行百业的 AI 进化，而不是把场景塞进列表。", "建立品牌覆盖面的宏观认知并引导继续探索。", ["点击行业卡进入详情", "支持行业搜索", "热门入口承接"], ["行业矩阵", "新上线横幅", "热门新物种推荐"], ["千行百业", "展馆入口"], ["千问多模态", "万相"], "新物种展馆", "industry-nav"],
  ["screen-13", "13", "industry", "流程四 · 新物种展馆", "行业新物种详情页", "以智慧出行为例，把自动驾驶、智能座舱和模糊需求理解做成一屏行业故事。", "解释千问如何真正赋予产品“灵魂”和决策能力。", ["场景卡片跳转体验页", "支持分享", "体验按钮强引导"], ["行业头图", "效率数据", "场景列表"], ["行业案例", "智慧出行"], ["千问推理", "千问语音", "万相"], "智慧出行", "industry-detail"],
  ["screen-14", "14", "industry", "流程四 · 新物种展馆", "新物种体验页", "通过推理过程与模拟对话，让观众看到千问像老司机一样理解复杂场景。", "把大模型的思考价值从结果层提升到过程层。", ["输入框可模拟提问", "切换不同路况场景", "支持收藏与分享"], ["HUD 推理面板", "对话气泡", "决策结果高亮"], ["推理可视化", "沉浸体验"], ["千问推理", "千问语音", "工具调用"], "自动驾驶助手", "industry-experience"],
  ["screen-15", "15", "industry", "流程四 · 新物种展馆", "新物种广场页", "以生态广场收束所有能力，证明千问可以持续孵化和分发新物种。", "让用户从体验者转成创造者。", ["Tab 切换内容流", "点击卡片直接体验", "一键创建自己的新物种"], ["星选 Banner", "双列智能体卡", "孵化入口卡"], ["生态广场", "智能体聚合"], ["千问全系", "万相", "百炼Agent"], "新物种广场", "square"]
].map(([id, no, group, flow, title, summary, goal, interactions, visuals, badges, abilityTags, status, type]) => ({
  id, no, group, flow, title, summary, goal, interactions, visuals, badges, abilityTags, status, type
}));

const $ = (id) => document.getElementById(id);

const flowGroups = $("flow-groups");
const flowList = $("flow-list");
const screenFlow = $("screen-flow");
const screenTitle = $("screen-title");
const screenSummary = $("screen-summary");
const screenBadges = $("screen-badges");
const screenCounter = $("screen-counter");
const phoneStatusTitle = $("phone-status-title");
const phoneScreen = $("phone-screen");
const screenGoal = $("screen-goal");
const screenInteractions = $("screen-interactions");
const screenVisuals = $("screen-visuals");
const screenModelTags = $("screen-model-tags");
const prevButton = $("screen-prev");
const nextButton = $("screen-next");
const exportModeToggle = $("export-mode-toggle");

let activeGroup = groups[0][0];
let activeScreen = screens[0].id;

const listHtml = (items) => items.map((item) => `<li>${item}</li>`).join("");

function renderGroups() {
  if (!flowGroups) return;
  flowGroups.innerHTML = groups.map(([id, label]) => `
    <button class="flow-chip${id === activeGroup ? " is-active" : ""}" type="button" data-group="${id}">${label}</button>
  `).join("");
}

function renderFlowList() {
  if (!flowList) return;
  const visible = screens.filter((item) => item.group === activeGroup);
  if (!visible.some((item) => item.id === activeScreen)) {
    activeScreen = visible[0].id;
  }
  flowList.innerHTML = visible.map((item) => `
    <button class="flow-item${item.id === activeScreen ? " is-active" : ""}" type="button" data-screen="${item.id}">
      <strong>界面 ${item.no} · ${item.title}</strong>
      <small>${item.summary}</small>
    </button>
  `).join("");
}

function mockTemplate(type) {
  const map = {
    splash: `
      <div class="phone-screen phone-screen--dark">
        <div style="padding:24px; min-height:664px; display:grid; align-content:space-between; background:
          radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 30%),
          linear-gradient(180deg, #08111f 0%, #0d1730 48%, #142b53 100%);">
          <div>
            <p class="screen-copy__eyebrow" style="color:#9eb4e6;">启动中 · 粒子汇聚</p>
            <h4 style="font-size:2.22rem; margin:8px 0 0; color:#fff;">千问</h4>
            <p style="margin:14px 0 0; color:#d7e4ff;">千问不止一问</p>
          </div>
          <div style="position:relative; height:300px; border-radius:30px; overflow:hidden; background:#0a1224;">
            <img src="video_refs/ref_04_27s.jpg" alt="" loading="lazy" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:0.34;">
            <div class="cinema-core" style="height:300px; margin:0; position:relative; z-index:1;">
            <div class="cinema-core__beams"></div>
            <div class="cinema-core__ring cinema-core__ring--one"></div>
            <div class="cinema-core__ring cinema-core__ring--two"></div>
            <div class="cinema-core__chip" style="font-size:1.7rem;">千问</div>
            </div>
          </div>
          <div>
            <p style="margin:0; color:#d7e4ff;">让每一个想法，都能生长为智能</p>
            <div class="progress-bar" style="margin-top:18px; background:rgba(255,255,255,0.12);"><span style="width:72%;"></span></div>
            <p style="margin:18px 0 0; color:#9eb4e6;">上滑进入</p>
          </div>
        </div>
      </div>`,
    persona: `
      <div class="phone-screen">
        <div class="screen-copy">
          <p class="screen-copy__eyebrow">Tell me who you are</p>
          <h4>选择你的身份</h4>
          <p>千问OS 会根据你的目标重排桌面内容与能力入口。</p>
        </div>
        <div class="stack">
          <article class="mock-card" style="border-color:rgba(255,106,0,0.32); background:linear-gradient(180deg, rgba(255,106,0,0.06), rgba(255,255,255,0.96));"><small>前后端 / AI / 算法</small><h4>技术开发者</h4></article>
          <article class="mock-card"><small>文案 / 设计 / 视频</small><h4>内容创作者</h4></article>
          <article class="mock-card"><small>降本增效 / 业务创新</small><h4>企业决策者</h4></article>
          <article class="mock-card"><small>探索 AI / 体验前沿</small><h4>泛科技爱好者</h4></article>
        </div>
        <a class="primary-button" href="#flows" style="width:100%;">下一步</a>
      </div>`,
    prelude: `
      <div class="phone-screen">
        <article class="mock-card" style="padding:0; overflow:hidden;">
          <div style="position:relative; height:170px; background:#101a2f;">
            <img src="video_refs/ref_02_10s.jpg" alt="" loading="lazy" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:0.72;">
            <div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(8,17,31,0.08), rgba(8,17,31,0.56));"></div>
            <div style="position:absolute; left:18px; right:18px; bottom:18px; color:#fff;">
              <small style="display:block; color:#dbe5fb;">宣传片镜头语言</small>
              <strong style="font-size:1.12rem;">光束撕裂画面，旧机器进化为有灵魂的新生命</strong>
            </div>
          </div>
        </article>
        <article class="mock-card" style="background:#eff2f6;">
          <small>阶段 1</small>
          <h4>旧机器时代</h4>
          <ul class="grid-list"><li>只能执行固定命令</li><li>交互生硬机械</li><li>不理解模糊需求</li></ul>
        </article>
        <article class="mock-card" style="background:linear-gradient(180deg, rgba(0,102,255,0.08), rgba(255,255,255,1));">
          <small>阶段 2</small>
          <h4>千问注入灵魂</h4>
          <div class="hero-pills" style="margin-top:12px; color:#10203a;"><span>文本</span><span>图像</span><span>视频</span><span>语音</span><span>推理</span><span>工具</span></div>
        </article>
        <article class="mock-card" style="background:linear-gradient(180deg, rgba(0,200,83,0.08), rgba(255,255,255,1));">
          <small>阶段 3</small>
          <h4>新物种诞生</h4>
          <div class="industry-grid" style="grid-template-columns:1fr 1fr;"><article>懂你的车</article><article>智能玩伴</article><article>会思考的软件</article><article>智能家居</article></div>
        </article>
        <a class="primary-button" href="#flows" style="width:100%;">进入千问OS</a>
      </div>`,
    desktop: `
      <div class="phone-screen">
        <div class="screen-copy">
          <p class="screen-copy__eyebrow">开发者，下午好</p>
          <h4>你的 AI 新物种工坊</h4>
          <div class="screen-tags"><span>桌面</span><span>能力中心</span><span>千问对话</span></div>
        </div>
        <article class="mock-card" style="padding:0; overflow:hidden; background:#0f1930;">
          <div style="position:relative; height:168px;">
            <img src="video_refs/ref_05_36s.jpg" alt="" loading="lazy" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:0.54;">
            <div style="position:absolute; inset:0; background:linear-gradient(90deg, rgba(8,17,31,0.74), rgba(8,17,31,0.18));"></div>
            <div style="position:absolute; left:18px; bottom:18px; color:#fff;">
              <small style="display:block; color:#dbe5fb;">Qwen-Coder / Agent / Workflow</small>
              <strong style="font-size:1.14rem;">像操控智能中枢一样组织你的开发工作台</strong>
            </div>
          </div>
        </article>
        <div class="stack">
          <article class="mock-card" style="background:linear-gradient(180deg, rgba(255,106,0,0.08), rgba(255,255,255,1));">
            <small>快捷孵化指令</small>
            <h4>一句话就开始</h4>
            <div class="prompt-pills" style="color:#10203a;"><span>写 Python 爬虫</span><span>生成 API 文档</span></div>
          </article>
          <article class="mock-card">
            <small>模型调用状态</small>
            <h4>今日 Token 12.3k / 50k</h4>
            <div class="progress-bar"><span style="width:24%;"></span></div>
          </article>
          <article class="mock-card">
            <small>我的新物种</small>
            <h4>智能客服 Agent · 80%</h4>
            <ul class="grid-list"><li>数据分析助手 · 45%</li><li>点击继续孵化</li></ul>
          </article>
        </div>
      </div>`,
    prompt: `
      <div class="phone-screen">
        <div class="screen-copy">
          <p class="screen-copy__eyebrow">千问正在聆听</p>
          <h4>说一句话，孵化一个新物种</h4>
        </div>
        <article class="mock-card" style="padding:18px 18px 24px; background:linear-gradient(180deg, rgba(0,102,255,0.08), rgba(255,255,255,1));">
          <small>输入任务</small>
          <h4>“分析这份财报并生成汇报 PPT”</h4>
          <div class="mini-phone__signal" style="margin-top:18px;"><span></span><span></span><span></span></div>
        </article>
        <div class="prompt-pills" style="color:#10203a;"><span>一句话点奶茶</span><span>帮我订机票</span><span>生成策划案</span></div>
        <article class="mock-card"><small>状态</small><h4>理解中 → 规划中 → 执行中</h4></article>
      </div>`,
    execution: `
      <div class="phone-screen">
        <div class="screen-copy"><p class="screen-copy__eyebrow">任务进行中</p><h4>一句话点奶茶</h4></div>
        <article class="timeline">
          <div class="timeline__header"><strong>工具调用链</strong><span class="status-pill">总耗时 2.3s</span></div>
          <ol class="timeline__steps">
            <li class="timeline__step"><i>1</i><div><strong>定位店铺</strong><small>调用地图 API 锁定附近门店</small></div></li>
            <li class="timeline__step"><i>2</i><div><strong>搜索菜单</strong><small>筛选销量、库存和配送速度</small></div></li>
            <li class="timeline__step"><i>3</i><div><strong>计算优惠</strong><small>自动比价并匹配可用券</small></div></li>
            <li class="timeline__step"><i>4</i><div><strong>完成下单</strong><small>等待用户确认支付</small></div></li>
          </ol>
        </article>
        <article class="mock-card"><small>实时日志</small><ul class="grid-list"><li>已识别位置：地铁站 600m 内</li><li>已过滤配送超时店铺 3 家</li><li>已匹配少冰少糖偏好</li></ul></article>
      </div>`,
    result: `
      <div class="phone-screen">
        <article class="success-card">
          <small>任务已完成</small>
          <h4>下单成功，预计 18 分钟送达</h4>
          <div class="result-meta"><div><span>调用工具</span><strong>3 个</strong></div><div><span>耗时</span><strong>2.3 秒</strong></div><div><span>节省</span><strong>12 步</strong></div></div>
        </article>
        <article class="mock-card"><small>订单详情</small><h4>轻乳果茶 + 椰椰冰沙</h4><ul class="grid-list"><li>优惠后：￥18.6</li><li>预计送达：19:20</li></ul></article>
        <div class="stack"><a class="primary-button" href="#flows" style="width:100%;">保存为快捷指令</a><a class="ghost-button" href="#flows" style="width:100%; justify-content:center; color:#10203a;">分享工作流</a></div>
      </div>`,
    templates: `
      <div class="phone-screen">
        <div class="screen-copy"><p class="screen-copy__eyebrow">新物种模板库</p><h4>先选模板，再做定制</h4></div>
        <div class="prompt-pills" style="color:#10203a;"><span>全部</span><span>客服</span><span>内容</span><span>数据</span><span>代码</span></div>
        <div class="template-grid">
          <article class="template-card"><strong>智能客服机器人</strong><small>12.8k 使用</small></article>
          <article class="template-card"><strong>爆款文案生成器</strong><small>8.2k 使用</small></article>
          <article class="template-card"><strong>财报分析助手</strong><small>6.4k 使用</small></article>
          <article class="template-card"><strong>代码审查 + 修复</strong><small>Qwen-Coder</small></article>
        </div>
      </div>`,
    canvas: `
      <div class="phone-screen">
        <div class="screen-copy"><p class="screen-copy__eyebrow">工作流画布</p><h4>像搭建操作系统一样编排 AI</h4></div>
        <article class="canvas-shell">
          <div class="node node--input"><strong>文本输入</strong><small>用户需求</small></div>
          <div class="node node--ai"><strong>千问推理</strong><small>任务拆解</small></div>
          <div class="node node--tool"><strong>工具调用</strong><small>搜索 / HTTP</small></div>
          <div class="node node--output"><strong>输出结果</strong><small>文件 / API</small></div>
          <span class="canvas-link canvas-link--a"></span>
          <span class="canvas-link canvas-link--b"></span>
          <span class="canvas-link canvas-link--c"></span>
        </article>
        <div class="status-pills"><span class="status-pill">拖拽节点</span><span class="status-pill">连线</span><span class="status-pill">配置参数</span></div>
      </div>`,
    debug: `
      <div class="phone-screen">
        <div class="screen-copy"><p class="screen-copy__eyebrow">工作流调试</p><h4>看到每一步，才会相信它</h4></div>
        <article class="mock-card" style="background:linear-gradient(180deg, rgba(0,102,255,0.08), rgba(255,255,255,1));">
          <small>运行状态</small>
          <h4>节点 3 / 6 正在执行</h4>
          <div class="status-pills"><span class="status-pill">运行中</span><span class="status-pill">单步调试</span><span class="status-pill">日志详细</span></div>
        </article>
        <article class="mock-card"><small>输入 / 输出</small><ul class="grid-list"><li>输入：上传 PDF 财报</li><li>输出：3 页摘要 + PPT 大纲</li><li>错误：图表识别节点超时</li></ul></article>
      </div>`,
    publish: `
      <div class="phone-screen">
        <div class="screen-copy"><p class="screen-copy__eyebrow">发布为新物种</p><h4>从工作流走向生态</h4></div>
        <article class="publish-panel">
          <div class="publish-panel__header"><strong>发布形式</strong><span class="status-pill">Powered by 千问</span></div>
          <div class="prompt-pills" style="margin-top:14px; color:#10203a;"><span>API</span><span>小程序</span><span>智能体</span><span>硬件大脑</span></div>
          <ul class="grid-list"><li>模型：千问推理模型</li><li>权限：公开到广场</li><li>配额：1000 次 / 天</li></ul>
        </article>
        <article class="mock-card"><small>预览卡片</small><h4>智能客服机器人</h4><div class="screen-tags"><span>大脑：千问</span><span>二维码</span></div></article>
        <a class="primary-button" href="#flows" style="width:100%;">发布新物种</a>
      </div>`,
    "industry-nav": `
      <div class="phone-screen">
        <div class="screen-copy"><p class="screen-copy__eyebrow">新物种展馆</p><h4>千行百业的 AI 进化</h4></div>
        <div class="industry-grid">
          <article><strong>出行</strong><small>12 个新物种</small></article>
          <article><strong>家居</strong><small>8 个新物种</small></article>
          <article><strong>教育</strong><small>15 个新物种</small></article>
          <article><strong>零售</strong><small>20 个新物种</small></article>
          <article><strong>制造</strong><small>6 个新物种</small></article>
          <article><strong>政务</strong><small>9 个新物种</small></article>
        </div>
        <article class="industry-banner"><div class="industry-banner__header"><strong>智能硬件 · 刚刚上线</strong><span class="status-pill">热点</span></div><p>会讲故事的毛绒玩具，搭载千问大脑。</p></article>
      </div>`,
    "industry-detail": `
      <div class="phone-screen">
        <article class="industry-banner" style="padding:0; overflow:hidden; background:#0f1f38; color:#fff; border-color:rgba(255,255,255,0.08);">
          <div style="position:relative; height:210px;">
            <img src="video_refs/ref_07_58s.jpg" alt="" loading="lazy" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:0.82;">
            <div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(8,17,31,0.14), rgba(8,17,31,0.72));"></div>
            <div style="position:absolute; left:18px; right:18px; bottom:18px;">
              <div class="industry-banner__header"><strong>智慧出行</strong><span class="status-pill" style="background:rgba(255,255,255,0.1); color:#fff;">千问赋能</span></div>
              <p style="color:#dbe6ff; margin-top:10px;">让汽车进化成懂你情绪与意图的出行伙伴。</p>
            </div>
          </div>
        </article>
        <div class="stats-row"><div><span>新物种</span><strong>5</strong></div><div><span>客户</span><strong>50+</strong></div><div><span>效率</span><strong>40%</strong></div></div>
        <div class="stack">
          <article class="mock-card"><small>场景 01</small><h4>自动驾驶决策助手</h4><p>像拥有十年驾龄老司机的大脑，能预判下一步风险。</p></article>
          <article class="mock-card"><small>场景 02</small><h4>智能座舱语音助手</h4><p>能理解“找个能吃饭又方便停车的地方”这种模糊需求。</p></article>
        </div>
      </div>`,
    "industry-experience": `
      <div class="phone-screen">
        <article class="reasoning-panel">
          <div class="reasoning-panel__header"><strong>千问推理过程</strong><span class="status-pill" style="background:rgba(255,255,255,0.1); color:#eaf1ff;">实时</span></div>
          <div class="reasoning-list">
            <div><strong>行人</strong><span>看手机，可能突然过街</span></div>
            <div><strong>电动车</strong><span>正在加速，存在变道风险</span></div>
            <div><strong>前车</strong><span>刹车灯亮，需保持安全距离</span></div>
          </div>
        </article>
        <article class="chat-card">
          <div class="chat-bubble chat-bubble--user">找个能吃饭又方便停车的地方。</div>
          <div class="chat-bubble chat-bubble--bot">已筛出 3 个地点，并按停车便利和距离排序。</div>
        </article>
        <article class="mock-card"><small>千问决策</small><h4>减速至 20km/h，预判电动车变道，保持安全距离。</h4></article>
      </div>`,
    square: `
      <div class="phone-screen">
        <div class="screen-copy"><p class="screen-copy__eyebrow">推荐 / 热门 / 最新 / 我的</p><h4>新物种广场</h4></div>
        <article class="industry-banner" style="padding:0; overflow:hidden;">
          <div style="position:relative; height:172px;">
            <img src="video_refs/ref_08_68s.jpg" alt="" loading="lazy" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:0.84;">
            <div style="position:absolute; inset:0; background:linear-gradient(90deg, rgba(8,17,31,0.76), rgba(8,17,31,0.18));"></div>
            <div style="position:absolute; left:18px; right:18px; bottom:18px; color:#fff;">
              <div class="industry-banner__header"><strong>本周星选新物种</strong><span class="status-pill" style="background:rgba(255,255,255,0.12); color:#fff;">轮播</span></div>
              <p style="margin-top:10px; color:#eaf1ff;">自动驾驶决策助手 · 已服务 1.2 亿次决策</p>
            </div>
          </div>
        </article>
        <div class="gallery-grid">
          <article class="gallery-card"><strong>千问官方助手</strong><small>大脑：千问全系</small></article>
          <article class="gallery-card"><strong>自动驾驶助手</strong><small>大脑：千问 + 百炼</small></article>
          <article class="gallery-card"><strong>万相创作助手</strong><small>大脑：万相</small></article>
          <article class="gallery-card"><strong>智能玩伴</strong><small>大脑：千问</small></article>
        </div>
        <a class="ghost-button" href="#flows" style="width:100%; justify-content:center; color:#10203a;">孵化你的新物种</a>
      </div>`
  };

  return map[type] || map.square;
}

function renderScreen() {
  const item = screens.find((screen) => screen.id === activeScreen);
  const index = screens.findIndex((screen) => screen.id === activeScreen);
  if (!item) return;

  if (screenFlow) screenFlow.textContent = item.flow;
  if (screenTitle) screenTitle.textContent = `界面 ${item.no} · ${item.title}`;
  if (screenSummary) screenSummary.textContent = item.summary;
  if (screenBadges) screenBadges.innerHTML = item.badges.map((badge) => `<span>${badge}</span>`).join("");
  if (screenCounter) screenCounter.textContent = `${String(index + 1).padStart(2, "0")} / ${String(screens.length).padStart(2, "0")}`;
  if (phoneStatusTitle) phoneStatusTitle.textContent = item.status;
  if (phoneScreen) phoneScreen.innerHTML = mockTemplate(item.type);
  if (screenGoal) screenGoal.textContent = item.goal;
  if (screenInteractions) screenInteractions.innerHTML = listHtml(item.interactions);
  if (screenVisuals) screenVisuals.innerHTML = listHtml(item.visuals);
  if (screenModelTags) screenModelTags.innerHTML = item.abilityTags.map((tag) => `<span>${tag}</span>`).join("");
  if (prevButton) prevButton.disabled = index === 0;
  if (nextButton) nextButton.disabled = index === screens.length - 1;
  if (!exportMode) {
    const url = new URL(window.location.href);
    url.searchParams.set("screen", item.id);
    url.searchParams.delete("export");
    history.replaceState(null, "", url);
  }
}

function stepScreen(offset) {
  const index = screens.findIndex((screen) => screen.id === activeScreen);
  const nextIndex = index + offset;
  if (nextIndex < 0 || nextIndex >= screens.length) return;
  activeScreen = screens[nextIndex].id;
  activeGroup = screens[nextIndex].group;
  renderGroups();
  renderFlowList();
  renderScreen();
}

if (flowGroups) {
  flowGroups.addEventListener("click", (event) => {
    const button = event.target.closest("[data-group]");
    if (!button) return;
    activeGroup = button.dataset.group;
    renderGroups();
    renderFlowList();
    renderScreen();
  });
}

if (flowList) {
  flowList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-screen]");
    if (!button) return;
    activeScreen = button.dataset.screen;
    renderFlowList();
    renderScreen();
  });
}

if (prevButton) {
  prevButton.addEventListener("click", () => stepScreen(-1));
}

if (nextButton) {
  nextButton.addEventListener("click", () => stepScreen(1));
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") stepScreen(-1);
  if (event.key === "ArrowRight") stepScreen(1);
});

const params = new URLSearchParams(window.location.search);
const requestedScreen = params.get("screen");
const exportMode = params.get("export") === "1";

if (requestedScreen && screens.some((screen) => screen.id === requestedScreen)) {
  activeScreen = requestedScreen;
  activeGroup = screens.find((screen) => screen.id === requestedScreen).group;
}

if (exportMode) {
  document.body.classList.add("export-mode");
}

if (exportModeToggle) {
  exportModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("export-mode");
  });
}

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

renderGroups();
renderFlowList();
renderScreen();
