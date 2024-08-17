---
sidebar_position: 1
---

# HTML 基础

![picture 2](.assets_images/basic/IMG_20240817-152750625.png)

## 文档模式（DOCTYPE）

IE5.5 发明了**文档模式**的概念，即可以使用 DOCTYPE 切换文档模式。最初的文档模式有两种：**混杂模式（quirks mode）**和**标准模式（standards mode）**。前者让 IE 像 IE5 一样（支持一些非标准的特性），后者让 IE 具有兼容标准的行为。虽然这两种模式的主要区别只体现在通过 CSS 渲染的内容方面，但对 JavaScript 也有一些关联影响，或称为副作用。

随着浏览器的普遍实现，又出现了第三种文档模式：**准标准模式（almost standards mode）**。这种模式下的浏览器支持很多标准的特性，但是没有标准规定得那么严格。主要区别在于如何对待图片元素周围的空白（在表格中使用图片时最明显）。

### 开启声明

#### 混杂模式/怪异模式

混杂模式在所有浏览器中都以**省略文档开头的 DOCTYPE** 声明作为开关。这种约定并不合理，因为混杂模式在不同浏览器中的差异非常大，不使用黑科技基本上就没有浏览器一致性可言。

#### 标准模式

标准模式通过下列几种文档类型声明开启：

```html
<!-- HTML 4.01 Strict -->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<!-- XHTML 1.0 Strict -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- HTML5 -->
<!DOCTYPE html>
```

#### 准标准模式

准标准模式通过**过渡性**文档类型（Transitional）和**框架集**文档类型（Frameset）来触发：

```html
<!-- HTML 4.01 Transitional -->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<!-- HTML 4.01 Frameset -->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">

<!-- XHTML 1.0 Transitional -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<!-- XHTML 1.0 Frameset -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
```

准标准模式与标准模式非常接近，很少需要区分。人们在说到“标准模式”时，可能指其中任何一个。而对文档模式的检测也不会区分它们。

### 历史

在 HTML 的形成期，web 标准还没有达成一致。浏览器供应商会以他们想要的方式创建新的特性。人们很少关注竞争性的浏览器。

其结果是，web 开发者不得不选择一个浏览器来开发他们的网站。这意味着网站在不支持的浏览器中无法很好地呈现。这种情况不能再继续下去了。

W3C（万维网联盟）制定了一套 web 标准来处理这种情况。所有的浏览器供应商和 web 开发人员都应该遵守这些标准。这将确保网站在不同的浏览器上都能很好地呈现。

该标准所要求的变化与一些现有的做法有很大的不同。遵循这些标准会破坏现有的不符合标准的网站。

为了解决这个问题，供应商开始在他们的浏览器中设置渲染模式。web 开发者需要在 HTML 文档的顶部添加一个 DOCTYPE 声明。DOCTYPE 声明将**告诉浏览器对该文档使用何种渲染模式**。

各个浏览器通常有三种不同的渲染模式：

- 完全标准模式是根据 W3C 网络标准来渲染页面。
- 怪异模式以不符合标准的方式渲染页面。
- 准标准模式接近于完全标准模式，但具有支持少量怪异的特性。

在现代的 HTML5 时代，web 标准在所有主要的浏览器中都得到了充分的实施。网站一般都是以符合标准的方式开发的。正因为如此，**HTML5 DOCTYPE 声明的存在只是为了告诉浏览器以完全标准模式来渲染文档**。

---

个人总结，在 web 非标准到标准的过渡时期，浏览器厂商用 DOCTYPE 来与开发者交互，从而保证任何 html（非标准/标准） 都能在逐步支持标准特性的浏览器中正常渲染。

---

参考

[HTML 中的 DOCTYPE 声明是什么？](https://www.freecodecamp.org/chinese/news/what-is-the-doctype-declaration-in-html/)

[将 VS Code 打造成一个体验舒适的 Markdown 编辑器](https://blog.cxplay.org/works/vscode-to-markdown-editor/#%E5%89%8D%E8%A8%80)