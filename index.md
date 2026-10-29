---
layout: home
title: 瓜沥发展建议
subtitle: 让灵感落地的地方
---

<!-- 首页大标题和副标题 -->

# 内容目录

<!-- 这里是你之前的分类导航，请保持这种排版结构 -->

### 01. 城镇与社区
关注公共空间、社区治理、出行体验与日常生活的便利性。

### 02. 文化与活动
聚焦本地文旅策划、创意活动与社区文化营造。

### 03. 科技与生活
探讨人工智能、数字化工具在日常生活中的实际应用与展望。

<!-- 下方保持原有的文章列表生成逻辑 -->
{% for post in site.posts %}
<div class="post-preview">
  <a href="{{ post.url | prepend: site.baseurl }}">
    <h2 class="post-title">{{ post.title }}</h2>
  </a>
  <p class="post-subtitle">{{ post.subtitle | default: post.content | strip_html | truncatewords: 20 }}</p>
  <p class="post-meta">Posted on {{ post.date | date: "%B %-d, %Y" }}</p>
</div>
{% endfor %}