(function () {
  'use strict';

  var STORAGE_KEY = 'vg_lang';

  // localStorage throws (rather than just failing) on some browsers when a
  // page is opened via file:// (e.g. Safari treats each local file as an
  // opaque/restricted origin). Guard every access so a storage error can't
  // take down the whole translation script.
  function safeGetItem(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function safeSetItem(key, val) {
    try { localStorage.setItem(key, val); } catch (e) { /* storage unavailable, ignore */ }
  }

  var currentLang = safeGetItem(STORAGE_KEY) || 'en';

  var zh = {
    /* ── Brand name ─────────────────────────────────────────────── */
    'desktop.brand': 'Matrix Bond<br>管理公司',
    'mobile.brand':  'Matrix Bond<br>管理公司',

    /* ── Navigation (shared across all pages) ─────────────────── */
    'nav.home':             '首页',
    'nav.about':            '关于我们',
    'nav.clients-partners': '客户与合作伙伴',
    'nav.our-clients':      '我们的客户',
    'nav.our-partners':     '我们的合作伙伴',
    'nav.products':         '产品',
    'nav.mb-options':       'MBM 期权',
    'nav.mb-futures':       'MBM 期货',
    'nav.news-insights':    '新闻与洞察',
    'nav.insights':         '洞察',
    'nav.news':             '新闻',
    'nav.contact':          '联系我们',
    'nav.faqs':             '常见问题',
    'nav.contact-info':     '联系信息',

    /* ── Footer ──────────────────────────────────────────────── */
    'footer.copyright': '版权所有 © 2026 Matrix Bond 管理公司。保留所有权利。',

    /* ── Index page ──────────────────────────────────────────── */
    'index.hero.subtitle': '熊猫债券期货与期权',
    'index.hero.title':    '更智慧地<span class="title-accent">投资<br class="vg-mobile-br">中国债券市场</span>',
    'index.hero.desc':     '熊猫债券衍生品及全球金融策略的先驱',
    'index.hero.btn1':     '了解更多',
    'index.hero.btn2':     '我们的客户',

    'index.flip1.front':      '风险管理',
    'index.flip1.back-title': '自信地驾驭风险',
    'index.flip1.back-desc':  '利用我们的熊猫债券衍生品对冲货币、利率和信用风险。Matrix Bond 管理公司的定制解决方案助您在动态市场中实现财务稳定。',
    'index.flip1.btn':        '了解更多',
    'index.flip2.front':      '市场准入',
    'index.flip2.back-title': '无缝进入中国债券市场',
    'index.flip2.back-desc':  '简化您进入世界增长最快经济体之一的渠道。我们的工具和专业知识助跨国公司和机构投资者拓展中国金融市场。',
    'index.flip2.btn':        '了解更多',
    'index.flip3.front':      '技术驱动的交易',
    'index.flip3.back-title': '安全高效的金融运营',
    'index.flip3.back-desc':  '体验强大的技术驱动系统，实现安全透明的熊猫债券衍生品交易。我们确保每笔交易的合规性和精确性。',
    'index.flip3.btn':        '了解更多',

    'index.about.subtitle':    '关于Matrix Bond',
    'index.about.title':       '引领熊猫债券衍生品领域',
    'index.about.desc':        'Matrix Bond 管理公司为全球投资者提供熊猫债券及衍生品定制解决方案。凭借风险管理、市场准入和先进交易技术方面的专业知识，我们简化了参与中国动态债券市场的过程。',
    'index.about.icon1-title': '定制策略',
    'index.about.icon1-desc':  '用于风险管理和投资组合优化的定制解决方案。',
    'index.about.icon2-title': '团队专业知识',
    'index.about.icon2-desc':  '拥有全球金融市场经验的专业团队。',
    'index.about.btn':         '了解更多',

    'index.partners.subtitle': '我们的合作伙伴',
    'index.partners.title':    '通过战略性全球合作推动创新',
    'index.partners.para1':    '我们与全球金融行业最具影响力和声望的机构建立了战略伙伴关系。这些合作使我们能够汇聚顶级机构的专业知识、资源和网络，为客户提供创新有效的解决方案。',
    'index.partners.para2':    '通过与投资银行、资产管理和衍生品交易领域的领导者密切合作，我们始终走在行业趋势的前沿。这一承诺确保我们在不断演变的市场中提供卓越的价值和适应能力。',

    'index.news.subtitle': '最新动态',
    'index.news.title':    '最新新闻与洞察',

    /* ── About page ──────────────────────────────────────────── */
    'about.page-title': '关于Matrix Bond 管理公司',
    'about.breadcrumb': '关于Matrix Bond 管理公司',
    'about.main-text':
      '<p>&nbsp;</p>' +
      '<p>在Matrix Bond 管理公司，我们处于金融创新的前沿——专注于熊猫债券发行和衍生品。作为全球金融市场的可信伙伴，我们提供量身定制的解决方案，帮助投资者在这个快速扩张的市场中管理风险并优化回报。</p>' +
      '<p><strong>我们是谁</strong><br />建立在透明度和专业知识原则之上，我们的团队汇聚了深厚的市场洞察和前沿的金融策略。凭借在固定收益衍生品领域的成功记录，我们引导客户应对跨境投资和货币管理的复杂性。</p>' +
      '<p><strong>我们的业务</strong><br />我们的核心聚焦于熊猫债券衍生品——与外国实体在中国债券市场发行的人民币计价债券价值或表现挂钩的金融工具。我们赋予投资者对冲风险敞口、分散投资组合并简化进入世界增长最快经济体之一的渠道。</p>',
    'about.commitment':
      '<p><strong>我们的承诺</strong><br />我们致力于通过以下方式提供卓越服务：</p>' +
      '<ul>' +
      '<li><strong>全球专业知识：</strong>我们的专业人员在中国和国际金融市场均拥有丰富经验。</li>' +
      '<li><strong>定制解决方案：</strong>我们制定专属衍生品策略，与您的特定财务目标保持一致。</li>' +
      '<li><strong>道德准则：</strong>我们坚守最高诚信标准，确保完全合规和问责。</li>' +
      '</ul>',

    /* ── Contact page ────────────────────────────────────────── */
    'contact.page-title':   '联系我们',
    'contact.breadcrumb':   '联系我们',
    'contact.office-title': '办公地址',
    'contact.address.vancouver': '加拿大不列颠哥伦比亚省<br>温哥华里查兹街422号，V6B 2Z4',
    'contact.address.singapore': '新加坡上加连尼路5号<br>石英工业大厦，邮编367903',
    'contact.address.hongkong': '香港九龙观塘开源道49号<br>创佳中心',
    'contact.email-title':  '电子邮件地址',
    'contact.email-text':   '发送邮件至：<br>info@matrixbond.vip',
    'contact.info-title':   '联系信息',
    'contact.global-title': '全球布局',
    'contact.map.vancouver': '温哥华',
    'contact.map.singapore': '新加坡',
    'contact.map.hongkong':  '香港',

    /* ── FAQs page ───────────────────────────────────────────── */
    'faqs.page-title': '常见问题',
    'faqs.breadcrumb': '常见问题',

    'faqs.q1': '1. 什么是熊猫债券？',
    'faqs.a1': '熊猫债券是由外国实体在中国国内市场发行的以人民币（CNY）计价的债券。这些债券为外国发行人提供进入中国资本市场的渠道，同时为国内投资者提供投资组合多样化的机会。熊猫债券通常由主权政府、跨国公司或金融机构发行，并受中国法规和金融法律约束。',
    'faqs.q2': '2. 为何发行熊猫债券？',
    'faqs.a2': '发行熊猫债券有三大主要优势：<br><br>• <b>以人民币融资：</b>在中国有业务的公司或政府可直接筹集人民币。<br><br>• <b>市场拓展：</b>外国实体可在中国金融市场建立业务存在。<br><br>• <b>成本效益：</b>以人民币发行债券可降低在中国运营的货币兑换风险。',
    'faqs.q3': '3. 熊猫债券的潜在投资者有哪些？',
    'faqs.a3': '熊猫债券的投资者包括中国机构投资者，如银行、保险公司和资产管理公司，以及寻求接触外国发行人的个人投资者。',
    'faqs.q4': '4. 发行熊猫债券的主要挑战是什么？',
    'faqs.a4': '通常，外国实体在发行熊猫债券时面临三大主要挑战：<br><br><b>• 合规：</b>遵守中国的监管和信息披露要求。<br><b>• 市场深度：</b>与其他国际债券市场相比，市场深度有限。<br><b>• 货币风险：</b>管理因人民币汇率波动而导致的资金汇回风险。',
    'faqs.q5': '5. 什么是熊猫债券衍生品？',
    'faqs.a5': '熊猫债券衍生品是与熊猫债券价值或表现挂钩的金融工具，熊猫债券是外国实体在中国国内市场发行的人民币计价债券。这些衍生品通常用于管理风险或进行投机。<br><br>四种常见类型：<br><br><b>1) 利率互换（IRS）：</b><br>• 帮助投资者或发行人对冲利率波动风险。<br>• 发行人可将固定利息支付换为浮动利率，以与市场条件保持一致。<br><br><b>2) 货币互换：</b><br>• 适用于以人民币筹资但负债以其他货币计价的外国发行人。<br>• 允许将人民币现金流转换为其他货币。<br><br><b>3) 信用违约互换（CDS）：</b><br>• 提供针对熊猫债券发行人违约风险的保护。<br>• 投资者使用CDS为投资保险或对发行人信用度进行投机。<br><br><b>4) 期货和期权：</b><br>• 熊猫债券期货：在未来特定日期以设定价格买卖特定熊猫债券的合约。<br>• 期权：赋予持有人在特定期限内以特定价格买卖熊猫债券的权利（但无义务）。',
    'faqs.q6': '6. Matrix Bond 管理公司提供哪些熊猫债券衍生品产品？',
    'faqs.a6': '作为熊猫债券衍生品市场的领导者，Matrix Bond 管理公司提供四种衍生品产品：利率互换（IRS）、货币互换、信用违约互换（CDS）以及期货和期权。',
    'faqs.q7': '7. 如何交易Matrix Bond 管理公司提供的衍生品产品？',
    'faqs.a7': '立即联系我们，开立账户。',

    /* ── Futures page ────────────────────────────────────────── */
    'futures.page-title': 'Matrix Bond 期货',
    'futures.breadcrumb': 'Matrix Bond 期货',
    'futures.subtitle':   'Matrix Bond 管理公司',
    'futures.title':      'Matrix Bond 期货',
    'futures.overview':
      '<h4><strong>概述</strong></h4>' +
      '<p>Matrix Bond 期货旨在帮助投资者对冲货币和利率波动等风险。这些可交割合约提供灵活且流动性强的机制，以适应多样化的市场策略。</p>',
    'futures.highlights':
      '<h4><strong>合约要点</strong></h4>' +
      '<ul><li><strong>合约单位</strong>：到期面值港币100,000元</li>' +
      '<li><strong>价格报价</strong>：以点数和点数的分数表示，基于100点</li>' +
      '<li><strong>最小价格波动</strong>：<ul>' +
      '<li>直接：1/32点（0.03125）= 港币31.25元</li>' +
      '<li>日历价差：1/4的1/32点（0.0078125）= 港币7.8125元</li></ul></li>' +
      '<li><strong>交易时间</strong>：<ul>' +
      '<li><strong>香港期货交易所平台</strong>：周日至周五，晚上9:00至下午4:00（香港时间）</li></ul></li>' +
      '<li><strong>挂牌合约</strong>：季度合约（3月、6月、9月、12月），连续3个季度挂牌</li>' +
      '<li><strong>交易终止</strong>：交易于合约月份最后一个工作日前7个工作日的中午12:01终止。</li></ul>',
    'futures.settlement':
      '<h4><strong>结算与交割</strong></h4>' +
      '<ul><li><strong>结算方式</strong>：可交割</li>' +
      '<li><strong>最后交割日</strong>：交割月份的最后一个工作日</li></ul>' +
      '<h4><strong>附加特点</strong></h4>' +
      '<ul><li><strong>对冲优势</strong>：保护投资组合免受市场波动和利率风险影响。</li>' +
      '<li><strong>投机机会</strong>：利用短期市场趋势获利。</li>' +
      '<li><strong>法规合规</strong>：符合国际交易标准设计。</li></ul>',
    'futures.cta':
      '<h4><strong>准备开始了吗？</strong></h4>' +
      '<p>Matrix Bond 管理公司的熊猫债券期货和期权提供参与市场的无缝方式。准备好交易或需要协助？立即联系我们的团队，踏上您的投资之旅。</p>',

    /* ── Options page ────────────────────────────────────────── */
    'options.page-title': 'Matrix Bond 期权',
    'options.breadcrumb': 'Matrix Bond 期权',
    'options.subtitle':   'Matrix Bond 管理公司',
    'options.title':      'Matrix Bond 期权',
    'options.overview':
      '<h4><strong>概述</strong></h4>' +
      '<p>Matrix Bond 期权提供美式可行权合约，使投资者能够以精准和可控的方式对冲风险、投机获利或分散投资组合。</p>',
    'options.highlights':
      '<h4><strong>合约要点</strong></h4>' +
      '<ul><li><strong>合约单位</strong>：一份期货合约，面值100,000美元</li>' +
      '<li><strong>价格报价</strong>：以点数和点数的分数表示，基于100点</li>' +
      '<li><strong>最小价格波动</strong>：<ul>' +
      '<li>1点的1/64（0.015625）= 15.625美元</li></ul></li>' +
      '<li><strong>行使价间距</strong>：以0.5点为增量挂牌</li>' +
      '<li><strong>交易时间</strong>：<ul>' +
      '<li><strong>香港交易所平台</strong>：周日至周五，晚上9:00至下午4:00（香港时间）</li></ul></li>' +
      '<li><strong>挂牌合约</strong>：每周合约，连续3周挂牌</li>' +
      '<li><strong>行权方式</strong>：美式；到期前任何工作日均可行权。</li>' +
      '<li><strong>交易终止</strong>：期权于合约周的星期五到期。</li></ul>',
    'options.settlement':
      '<h4><strong>结算与交割</strong></h4>' +
      '<ul><li><strong>结算方式</strong>：可交割</li>' +
      '<li><strong>自动行权</strong>：价内期权将自动行权，除非持有人另有指示。</li></ul>' +
      '<h4><strong>附加特点</strong></h4>' +
      '<ul><li><strong>投资组合多元化</strong>：通过精准的期权策略提升收益并降低风险。</li>' +
      '<li><strong>执行灵活性</strong>：提供广泛的行使价选择，实现最大适应性。</li>' +
      '<li><strong>市场精准度</strong>：适合寻求在波动市场中把握机会的投资者。</li></ul>',
    'options.cta':
      '<h4><strong>准备开始了吗？</strong></h4>' +
      '<p>Matrix Bond 的熊猫债券期权和期货提供参与市场的无缝方式。准备好交易或需要协助？立即联系我们的团队，踏上您的投资之旅。</p>',

    /* ── Clients page ────────────────────────────────────────── */
    'clients.page-title': '我们的客户',
    'clients.breadcrumb': '我们的客户',
    'clients.heading':    '我们的客户',
    'clients.subheading': '谁能从我们的熊猫债券相关产品和服务中受益？',
    'clients.content':
      '<p>各类金融和企业实体均可利用我们的熊猫债券衍生品进行风险管理、投资组合多样化和战略投资。</p>' +
      '<h3>1. <strong>跨国公司</strong></h3>' +
      '<p>跨国公司使用熊猫债券衍生品对冲货币风险（如人民币/美元波动）并管理利率敞口。这些工具稳定了成本和回报，尤其适用于在中国有重大业务或供应链的企业。<br><em>示例：</em>欧洲公司可使用衍生品确保人民币计价债务的可预测还款成本。</p>' +
      '<h3>2. <strong>机构投资者</strong></h3>' +
      '<p>寻求人民币计价资产敞口的资产管理公司、养老基金和保险公司可使用衍生品降低货币和久期风险，同时受益于中国的经济增长。<br><em>示例：</em>投资熊猫债券的养老基金可采用利率或跨货币互换，使回报与其他货币的负债保持一致。</p>' +
      '<h3>3. <strong>主权财富基金和中央银行</strong></h3>' +
      '<p>这些机构通过投资人民币资产实现外汇储备多样化。熊猫债券衍生品使其能够对冲货币贬值等风险，同时参与中国债券市场。<br><em>示例：</em>管理人民币敞口的中央银行可使用衍生品防范不利的汇率变动。</p>' +
      '<h3>4. <strong>全球金融机构</strong></h3>' +
      '<p>参与新兴市场债务的银行和金融机构通常使用衍生品进行自营交易、对冲或为客户提供流动性。<br><em>示例：</em>交易熊猫债券的投资银行可通过衍生品抵消价格或利率波动风险。</p>' +
      '<h3>5. <strong>私募股权和对冲基金</strong></h3>' +
      '<p>这些公司利用熊猫债券衍生品实施套利策略、投机性投资或优化风险调整后的回报。<br><em>示例：</em>押注中国利率变化的对冲基金可能使用衍生品强化其策略。</p>' +
      '<h3>6. <strong>进出口银行和贸易导向机构</strong></h3>' +
      '<p>参与跨境贸易融资的机构使用衍生品管理人民币计价交易中的利率和货币风险敞口。<br><em>示例：</em>为人民币贸易融资的进出口银行可通过衍生品稳定财务敞口。</p>' +
      '<h3>7. <strong>拥有境外业务的中国机构</strong></h3>' +
      '<p>拥有境外业务的中国企业和金融机构使用衍生品管理人民币计价债务和其他金融风险。<br><em>示例：</em>在境外筹集资金的中国国有企业可使用熊猫债券衍生品稳定其成本。</p>',

    /* ── Partners page ───────────────────────────────────────── */
    'partners.page-title': '我们的合作伙伴',
    'partners.breadcrumb': '我们的合作伙伴',
    'partners.heading':    '我们的合作伙伴',
    'partners.content':
      '<p>我们与全球金融行业最具影响力和声望的机构建立了战略伙伴关系。这些合作使我们能够汇聚顶级机构的专业知识、资源和网络，为客户提供创新有效的解决方案。</p>' +
      '<p>通过与投资银行、资产管理和衍生品交易领域的领导者密切合作，我们始终走在行业趋势的前沿。这一承诺确保我们在不断演变的市场中提供卓越的价值和适应能力。</p>',

    /* ── News page ───────────────────────────────────────────── */
    'news.page-title': '加拿大国家银行在中国大陆发行熊猫债券',
    'news.hero-title': '加拿大国家银行在<br class="vg-mobile-br">中国大陆发行熊猫债券',
    'news.breadcrumb': '新闻',

    /* ── Insights page ───────────────────────────────────────── */
    'insights.page-title': '熊猫债券激增：增长背后的原因？',
    'insights.breadcrumb': '洞察',

    /* ── Insights listing page ─────────────────────────────────── */
    'insights.listing.views':   '276 次浏览',
    'insights.listing.excerpt': '2024年有望成为自2005年市场开放以来熊猫债券发行量最高的一年。2023年熊猫债券发行量同比增长82%，截至2024年7月，发行量已占2023年全年总量的78%。熊猫债券发行量',

    /* ── News listing page ──────────────────────────────────────── */
    'news.listing.views':   '347 次浏览',
    'news.listing.excerpt': '蒙特利尔，2023年11月24日。加拿大国家银行欣然宣布，于2023年10月30日，在中国大陆银行间债券市场成功完成2023年熊猫债券计划第一期公开发行，募集人民币10亿元。',

    /* ── Blog detail pages (shared) ────────────────────────────── */
    'blog.read-more':       '了解更多',
    'blog.details-title':   '博客详情',
    'panda-surge.details-title': '熊猫债券激增详情',
    'nbc-panda.details-title': '加拿大国家银行发行熊猫债券',
    'blog.related-tags':    '相关标签：',
    'blog.share-now':       '立即分享：',
    'blog.prev-post':       '上一篇',
    'blog.next-post':       '下一篇',
    'blog.recent-posts':    '近期文章',
    'blog.recent-comments': '近期评论',
    'blog.no-comments':     '暂无评论。',
    'blog.archives':        '归档',
    'blog.categories':      '分类',
    'blog.dec17-date':      '2024年12月17日',

    /* ── Archives page ───────────────────────────────────────── */
    'archives.page-title': '归档',
    'archives.breadcrumb': '归档',
    'archives.subtitle':   '所有文章',
    'archives.coming-soon': '即将推出 - 归档的文章将在此显示。',
    'archive.pakistan': '巴基斯坦',
    'archive.p1-date': '2026年5月25日',
    'archive.p2-date': '2026年5月26日',
    'archive.indonesia': '印尼',
    'archive.kazakhstan': '哈萨克斯坦',

    /* ── Panda Bonds Surge article ─────────────────────────────── */
    'article.panda-surge.views':   '298 次浏览',
    'article.panda-surge.content':
      '<p>来源：<a href="https://www.spglobal.com/ratings/en/research/articles/240807-your-three-minutes-in-panda-bonds-why-issuance-is-surging-13204721">https://www.spglobal.com/ratings/en/research/articles/240807-your-three-minutes-in-panda-bonds-why-issuance-is-surging-13204721</a></p>' +
      '<p><strong>2024年有望成为自2005年市场开放以来熊猫债券发行最旺盛的一年。 </strong> 熊猫债券发行量2023年同比增长82%。截至2024年7月12日，2024年熊猫债券发行量已占2023年全年发行量的78%。 </p>' +
      '<p>熊猫债券以中国人民币（RMB）计价，由非中国实体在中国国内债券市场发行。在中国大陆以外注册的中资实体同样具备发行资格。例如，所谓的红筹公司——在开曼群岛等离岸税务中心注册、但业务基地位于中国大陆的企业。 </p>' +
      '<p><a></a><strong>是什么推动了发行量的激增？</strong></p>' +
      '<p><strong>两大关键驱动因素之一是中美利率差。 </strong> 自2023年初以来美国利率的上升，使得实体在考虑交叉货币互换成本后，发行熊猫债券仍比直接进入美元市场更为便宜。</p>' +
      '<p><strong>另一驱动因素是募集资金用途的明确化。 </strong> 2022年，中国政府出台政策，明确熊猫债券募集资金可以汇回境外。因此，外资跨国公司更加积极地进入熊猫债券市场，以筹集在华扩张所需资金。 </p>' +
      '<figure class="wp-block-image size-full is-resized"><img fetchpriority="high" decoding="async" width="624" height="438" src="wp-content/uploads/2024/12/Picture1.png" alt="" class="wp-image-6102" style="width:840px;height:auto" srcset="wp-content/uploads/2024/12/Picture1.png 624w, wp-content/uploads/2024/12/Picture1-300x211.png 300w" sizes="(max-width: 624px) 100vw, 624px" /></figure>' +
      '<p><strong>为何此事重要？ </strong></p>' +
      '<p><strong>熊猫债券市场有望成为非中国实体的重要融资渠道。 </strong> 目前，从熊猫债券市场筹集的资金规模相对较小。去年，熊猫债券融资仅占中国国内债券融资的0.8%（不含中央政府和地方政府债券）。发行人多样性的提升也增加了中国国内债券市场的深度和广度。 </p>' +
      '<p><strong>深化债券市场、鼓励以人民币作为结算货币的政府政策，可能进一步推动熊猫债券市场的发展。 </strong> 寻求分散货币敞口的外国投资者也受到人民币债券与全球债券低相关性的吸引。外国投资者仅持有极小比例的人民币计价债券。 </p>' +
      '<p><a></a><strong>未来展望 </strong></p>' +
      '<p><strong>市场的进一步深化取决于长期债务的发行。 </strong> 熊猫债券的平均期限已从2022年的两年增加至三年以上。此外，外国发行人（不含中资实体）的质量和多样性将推动深化进程。发行监管和市场透明度对部分发行人而言仍是障碍。</p>' +
      '<p><strong>汇率波动可能对募集资金的跨境管理产生影响。 </strong>人民币汇率波动是否会偶尔干扰熊猫债券发行资金从境内汇回境外的便利性，目前仍存在疑问。人民币稳定一直是中国政府的主要政策目标。</p>',

    /* ── National Bank article ─────────────────────────────────── */
    'article.national-bank.views':   '374 次浏览',
    'article.national-bank.content':
      '<p>蒙特利尔，2023年11月24日</p>' +
      '<p>来源：<a href="https://www.nbc.ca/about-us/news-media/press-release/2023/20231124-nbc-panda-bonds.html">https://www.nbc.ca/about-us/news-media/press-release/2023/20231124-nbc-panda-bonds.html</a></p>' +
      '<p>加拿大国家银行欣然宣布，于2023年10月30日，在中国大陆银行间债券市场公开发行，完成2023年熊猫债券计划第一期，募集人民币10亿元（约合加拿大元1.91亿元）。这是加拿大国家银行依据最新人民币100亿元熊猫债券计划（该计划已于2023年2月17日获中国人民银行批准）的首次发行，延续了其2016年首期熊猫债券计划的传统。本期债券年票面利率为3.20%，期限为三年。</p>' +
      '<p>本次发行得到了加拿大国家银行指定的主承销商及主簿记行中国银行股份有限公司的大力支持，以及联席主承销商及联席主簿记行招商证券股份有限公司、中国工商银行股份有限公司、中国农业银行股份有限公司和星展银行（中国）有限公司的协助，同时还有联合体成员兴业银行股份有限公司和德意志银行（中国）股份有限公司的参与。</p>' +
      '<p>作为本次发行的一部分，作为加拿大六家系统重要性银行之一的加拿大国家银行及其2023年熊猫债券（第一期）均获得中国大陆信用评级机构中诚信国际信用评级有限责任公司授予的AAA评级。</p>' +
      '<p><strong><em>关于前瞻性陈述的提示声明<br></em></strong><em>本新闻稿中的某些陈述属于前瞻性陈述。这些陈述基于若干假设，并受到风险因素、固有风险和不确定性的影响，其中许多因素超出加拿大国家银行的控制范围，且其影响难以预测，包括与加拿大国家银行发行人民币计价熊猫债券的时间及完成相关的风险。除法律要求外，加拿大国家银行不承担更新任何前瞻性陈述的义务，无论该等陈述为书面形式还是口头形式，也无论其以何种方式或代表银行提出。本新闻稿所含前瞻性信息仅供解读本文所含信息之用，不适用于其他目的。 </em></p>' +
      '<p><strong><em>关于加拿大国家银行<br></em></strong><em>截至2023年7月31日，</em><a href="http://www.nbc.ca/" target="_blank" rel="noreferrer noopener"><em>加拿大国家银行</em></a><em>资产规模达4260亿加元，连同其附属机构，共同构成加拿大领先的综合性金融集团之一。该行拥有约30,000名知识密集型岗位员工，并多次被评为最佳雇主，并因其对多元化的承诺而获得广泛认可。其证券在多伦多证券交易所上市（股票代码：TSX: NA）。欢迎通过</em><a href="http://www.nbc.ca/" target="_blank" rel="noreferrer noopener"><em>nbc.ca</em></a><em> 或社交媒体关注该行动态。</em></p>',
  };

  var enTitle = document.title;

  var zhTitles = {
    'index.html':    'Matrix Bond 管理公司',
    'about.html':    '关于Matrix Bond 管理公司 — Matrix Bond 管理公司控股',
    'contact.html':  '联系我们 — Matrix Bond 管理公司控股',
    'clients.html':  '我们的客户 — Matrix Bond 管理公司控股',
    'news.html':     '新闻 — Matrix Bond 管理公司控股',
    'partners.html': '我们的合作伙伴 — Matrix Bond 管理公司控股',
    'futures.html':  'Matrix Bond 期货 — Matrix Bond 管理公司控股',
    'options.html':  'Matrix Bond 期权 — Matrix Bond 管理公司控股',
    'insights.html': '洞察 — Matrix Bond 管理公司控股',
    'archives.html':                  '归档 — Matrix Bond 管理公司控股',
    'faqs.html':                      '常见问题 — Matrix Bond 管理公司控股',
    'panda-bonds-surge.html':         '熊猫债券激增：增长背后的原因？ — Matrix Bond 管理公司控股',
    'national-bank-panda-bonds.html': '加拿大国家银行在中国大陆发行熊猫债券 — Matrix Bond 管理公司控股',
  };

  function updateTitle(lang) {
    if (lang === 'zh') {
      var page = location.pathname.split('/').pop() || 'index.html';
      document.title = zhTitles[page] || 'Matrix Bond 管理公司控股';
    } else {
      document.title = enTitle;
    }
  }

  function applyLang(lang) {
    updateTitle(lang);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (lang === 'zh') {
        if (zh[key] !== undefined) {
          if (!el.hasAttribute('data-en-html')) {
            el.setAttribute('data-en-html', el.innerHTML);
          }
          el.innerHTML = zh[key];
        }
      } else {
        if (el.hasAttribute('data-en-html')) {
          el.innerHTML = el.getAttribute('data-en-html');
        }
      }
    });

    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en-US';

    document.querySelectorAll('.vg-lang-btn').forEach(function (btn) {
      btn.innerHTML = lang === 'zh'
        ? '<span class="vg-flag">🇨🇦</span><span class="vg-lang-text">EN</span>'
        : '<span class="vg-flag">🇨🇳</span><span class="vg-lang-text">中文</span>';
    });

    var enMailUrl = 'https://qiye.aliyun.com/?lang=en';
    var zhMailUrl = 'https://qiye.aliyun.com/?lang=zh_CN';
    var mailUrl = lang === 'zh' ? zhMailUrl : enMailUrl;

    var desktopMail = document.getElementById('vg-desktop-mail-link');
    if (desktopMail) {
      desktopMail.href = mailUrl;
      desktopMail.style.display = '';
    }

    var mobileMail = document.getElementById('vg-mobile-mail-link');
    if (mobileMail) {
      mobileMail.href = mailUrl;
    }

    document.querySelectorAll('[data-href-en][data-href-zh]').forEach(function (el) {
      el.href = lang === 'zh' ? el.getAttribute('data-href-zh') : el.getAttribute('data-href-en');
    });

    safeSetItem(STORAGE_KEY, lang);
    currentLang = lang;
  }

  function toggle() {
    applyLang(currentLang === 'zh' ? 'en' : 'zh');
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.vg-lang-btn').forEach(function (btn) {
      btn.addEventListener('click', toggle);
      btn.innerHTML = currentLang === 'zh'
        ? '<span class="vg-flag">🇨🇦</span><span class="vg-lang-text">EN</span>'
        : '<span class="vg-flag">🇨🇳</span><span class="vg-lang-text">中文</span>';
    });
    if (currentLang === 'zh') applyLang('zh');
  });
})();
