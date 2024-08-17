---
sidebar_position: 2
---

# HTML5

## 定义

MDN

术语 HTML5 本质上是指一组现代 Web 技术的流行词汇。这包括 HTML 动态标准，以及用于增强存储、多媒体和硬件访问的 JavaScript API。

你有时会听到“新的 HTML5 元素”，或发现 HTML5 被描述为 HTML 的新版本。HTML5 是以前版本 HTML 的继任者，引入了新的元素和功能，改进或删除了一些现有功能。然而，作为动态标准，HTML 现在没有版本。最新的规范可以在 html.spec.whatwg.org/ 找到。

任何现代网站都应该使用 HTML 文档类型(doctype)——这将确保你使用的是最新版本的 HTML。

通俗理解: 随着 HTML 标准迭代, html5 是一个较大变化的标准, 增加了较多的规范和特性, 使得 html 的使用与编写更加规范

[维基百科](https://zh.wikipedia.org/wiki/HTML5)

HTML5 是 HTML 最新的修订版本，由万维网联盟（W3C）于 2014 年 10 月完成标准制定。目标是取代 1999 年所制定的 HTML 4.01 和 XHTML 1.0 标准，以期能在互联网应用迅速发展的时候，使网络标准达到符合当代的网络需求。

**广义论及 HTML5 时，实际指的是包括 HTML、CSS 和 JavaScript 在内的一套技术组合**。它希望能够减少网页浏览器对于需要插件的丰富性网络应用服务（Plug-in-Based Rich Internet Application，RIA），例如：Adobe Flash、Microsoft Silverlight 与 Oracle JavaFX 的需求，并且提供更多能有效加强网络应用的标准集。

下述均为 HTML5 新特性。

## HTML 语义化

### 理解语义化

使用正确的 HTML 元素来做正确的工作。

HTML 应该编写为表示将要填充的数据，而不是基于其默认的演示样式。演示（应该是什么样子），是 CSS 的唯一责任。

写语义标记的一些好处如下：

- 搜索引擎将其内容视为影响页面搜索排名的重要关键字（参见 [SEO](https://developer.mozilla.org/zh-CN/docs/Glossary/SEO)）。
- 屏幕阅读器可以将其用作指引，帮助视力受损的用户导航页面。
- 比起搜索无休止的带有或不带有语义/命名空间类的 div，找到有意义的代码块显然容易得多。
- 向开发人员建议将要填充的数据类型。
- 语义命名反映了正确的自定义元素/组件命名。
- 默认情况下，绝大多数浏览器的用户代理样式表会赋予语义化标签对应的样式

### 语义化标签

这里是大约 100 个语义化[元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)中的一些：

1. [\<article\>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/article)
2. [\<aside\>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/aside)
3. [\<details\>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/details)
4. [\<figcaption\>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/figcaption)
5. [\<figure\>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/figure)
6. [\<footer\>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/footer)
7. [\<header\>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/header)
8. [\<main\>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/main)
9. [\<mark\>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/mark)
10. [\<nav\>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/nav)
11. [\<section\>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/section)
12. [\<summary\>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/summary)
13. [\<time\>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/time)

## 增强表单

为 input 增加 color、email、date、range 等类型

## 存储

提供了 sessionStorage 、localStorage 和离线存储，通过这些存储方式方便数据在客户端的存储和获取

## 多媒体

规定了音频和视频元素 audio 和 vedio

## 其他

地理定位、canvas 画布、拖放、多线程编程的 web workers 和 websocket 协议
