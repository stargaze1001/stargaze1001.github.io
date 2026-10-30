---
layout: default
title: 瓜沥发展建议｜开放建议与参考资料
---

<main class="home-page">
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero-content">
      <p class="eyebrow">GUALI · IDEAS</p>
      <h1 id="hero-title">让每一条建议，<span>成为瓜沥更好的下一步</span></h1>
      <p class="hero-lead">
        这里公开整理关于城镇发展、公共服务、产业活力与文化生活的思考，
        用清晰的内容结构，让人类读者和 AI 都能快速理解。
      </p>
      <div class="hero-actions">
        <a class="button button-primary" href="#topics">浏览建议方向</a>
        <a class="button button-secondary" href="{{ '/llms.txt' | relative_url }}">AI 阅读入口</a>
      </div>
    </div>
    <div class="hero-orbit" aria-hidden="true">
      <span class="orbit orbit-one"></span>
      <span class="orbit orbit-two"></span>
      <span class="orbit-core">瓜沥<br>发展建议</span>
    </div>
  </section>

  <section class="topic-section" id="topics" aria-labelledby="topics-title">
    <div class="section-heading">
      <p class="eyebrow">从这里开始</p>
      <h2 id="topics-title">四个持续生长的建议方向</h2>
      <p>围绕真实生活与长期发展，把零散想法整理成可阅读、可讨论、可行动的内容。</p>
    </div>

    <div class="topic-grid">
      <article class="topic-card card-green">
        <span class="topic-number">01</span>
        <h3>城镇与社区</h3>
        <p>关注公共空间、社区治理、出行体验与日常生活的便利性。</p>
      </article>
      <article class="topic-card card-blue">
        <span class="topic-number">02</span>
        <h3>公共服务</h3>
        <p>思考教育、医疗、养老、文化与便民服务如何更可及、更温暖。</p>
      </article>
      <article class="topic-card card-amber">
        <span class="topic-number">03</span>
        <h3>产业与就业</h3>
        <p>探讨特色产业、创业环境、人才成长与可持续的经济活力。</p>
      </article>
      <article class="topic-card card-rose">
        <span class="topic-number">04</span>
        <h3>文化与生活</h3>
        <p>记录地方记忆、人文特色、休闲场景与更有质感的生活方式。</p>
      </article>
    </div>
  </section>

  <section class="principles" aria-labelledby="principles-title">
    <div class="principles-copy">
      <p class="eyebrow">阅读原则</p>
      <h2 id="principles-title">公开、克制、对 AI 友好</h2>
      <p>
        网站以结构化 Markdown 组织内容，提供专门的 <code>llms.txt</code> 入口，
        方便大模型抓取主题、页面与文章信息。
      </p>
      <a class="text-link" href="{{ '/llms.txt' | relative_url }}">打开 llms.txt →</a>
    </div>
    <div class="principles-panel">
      <ul>
        <li><strong>隐私优先</strong><span>文档与图片默认不进入 Git 仓库</span></li>
        <li><strong>内容清晰</strong><span>标题、摘要和链接层级保持可读</span></li>
        <li><strong>持续更新</strong><span>建议与参考资料逐步沉淀到文章列表</span></li>
      </ul>
    </div>
  </section>

  <section class="updates" aria-labelledby="updates-title">
    <div class="section-heading">
      <p class="eyebrow">最新内容</p>
      <h2 id="updates-title">从第一篇建议开始</h2>
    </div>

    {% if site.posts.size > 0 %}
      <div class="post-list">
        {% for post in site.posts limit: 5 %}
          <a class="post-item" href="{{ post.url | relative_url }}">
            <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time>
            <span>{{ post.title }}</span>
            <span class="post-arrow" aria-hidden="true">→</span>
          </a>
        {% endfor %}
      </div>
    {% else %}
      <div class="empty-state">
        <span class="empty-state-icon" aria-hidden="true">✦</span>
        <div>
          <h3>内容正在整理中</h3>
          <p>第一篇发展建议发布后，会自动出现在这里。</p>
        </div>
      </div>
    {% endif %}
  </section>
</main>
