import styles from "./index.module.css";

const TagDemo = () => {
  return (
    <main className={styles.tagDemo}>
      <h1>语义化标签示例</h1>
      <h2>
        header 元素:
        用于展示介绍性内容，通常包含一组介绍性的或是辅助导航的实用元素。它可能包含一些标题元素，但也可能包含其他元素，比如
        Logo、搜索框、作者名称，等等。
      </h2>
      <div className={styles.header}>
        <header>
          header 标签在此, 粉色区域, 包含下面图片
          <a className={styles.logo} href="#">
            Cute Puppies Express!
          </a>
        </header>
        <article>
          <header>
            header again
            <h3>Beagles</h3>
            <time>08.12.2014</time>
          </header>
          <div>
            I love beagles <em>so</em> much! Like, really, a lot. They’re adorable and their ears
            are so, so snugly soft!
          </div>
        </article>
      </div>
      <hr />

      <h2>
        main 元素: 呈现了文档的 body
        或应用的主体部分。主体部分由与文档直接相关，或者扩展于文档的中心主题、应用的主要功能部分的内容组成。
      </h2>
      <div className={styles.tip}>
        页面中不可以出现多个 main 元素。 main 对文档的大纲（outline）没有贡献；也就是说，它与诸如
        body 之类的元素/ h2 之类的标题等不同，main 不会影响 DOM
        的页面结构概念。它仅有提供信息的作用。（原文：It's strictly informative.）
      </div>
      <div className={styles.main}>
        <main>
          main 元素在此
          <p>
            Geckos are a group of usually small, usually nocturnal lizards. They are found on every
            continent except Antarctica.
          </p>
          <div>
            Many species of gecko have adhesive toe pads which enable them to climb walls and even
            windows.
          </div>
        </main>
      </div>
      <hr />

      <h2>
        nav 元素:
        表示页面的一部分，其目的是在当前文档或其他文档中提供导航链接。导航部分的常见示例是菜单，目录和索引。
      </h2>
      <div className={styles.nav}>
        <nav className={styles.crumbs}>
          nav 元素在此
          <ol>
            <li className={styles.crumb}>
              <a href="#">Bikes</a>
            </li>
            <li className={styles.crumb}>
              <a href="#">BMX</a>
            </li>
            <li className={styles.crumb}>Jump Bike 3000</li>
          </ol>
        </nav>
        <h3>Jump Bike 3000</h3>
        <div>
          This BMX bike is a solid step into the pro world. It looks as legit as it rides and is
          built to polish your skills.
        </div>
      </div>
      <hr />

      <h2>article 标签： 表示文档、页面、应用或网站中的独立结构</h2>
      <article className={styles.forecast}>
        <h3>Weather forecast for Seattle - 当前灰色区域是一个 article 标签</h3>
        <span>下面白色区域也是 article 标签 & 设置了 margin</span>
        {[
          { date: "01 March 2018", weather: "Rain." },
          { date: "02 March 2018", weather: "Periods of rain." },
          { date: "03 March 2018", weather: "Heavy rain." },
        ].map(({ date, weather }) => (
          <article className={styles["day-forecast"]} key={date}>
            <h4>{date}</h4>
            <p>{weather}</p>
          </article>
        ))}
      </article>
      <hr />

      <h2>
        section 元素: HTML
        文档中一个通用独立章节，它没有更具体的语义元素来表示。一般来说会包含一个标题。
      </h2>
      <section>
        <h3>Introduction</h3>
        <p>
          This document provides a guide to help with the important task of choosing the correct
          Apple.
        </p>
      </section>
      <section>
        <h3>Criteria</h3>
        <p>
          There are many different criteria to be considered when choosing an Apple — size, color,
          firmness, sweetness, tartness...
        </p>
      </section>
      <hr />

      <h2>
        aside 元素:
        表示一个和其余页面内容几乎无关的部分，被认为是独立于该内容的一部分并且可以被单独的拆分出来而不会使整体受影响。其通常表现为侧边栏或者标注框（call-out
        boxes）。
      </h2>
      <div className={styles.aside}>
        <p>
          Salamanders are a group of amphibians with a lizard-like appearance, including short legs
          and a tail in both larval and adult forms.
        </p>
        <aside>
          aside 元素在此
          <p>The Rough-skinned Newt defends itself with a deadly neurotoxin.</p>
        </aside>
        <div>
          Several species of salamander inhabit the temperate rainforest of the Pacific Northwest,
          including the Ensatina, the Northwestern Salamander and the Rough-skinned Newt. Most
          salamanders are nocturnal, and hunt for insects, worms and other small creatures.
        </div>
      </div>
      <hr />

      <h2>
        details 元素可创建一个组件，仅在被切换成展开状态时，它才会显示内含的信息。 summary
        元素可为该部件提供概要或者标签。
      </h2>
      <div className={styles.tip}>
        <ol>
          <li>
            summary 元素的内容可以是任意标题内容、纯文本，或是可以在段落内使用的 HTML 代码。 summary
            元素<b>仅可作为 details 元素的第一个子节点</b>。
          </li>
          <li>
            当用户在 summary 元素上点击时，父元素 details 会切换开启和关闭的状态，并会向 details
            元素发送 toggle 事件，令用户得知这样的状态改变何时发生。
          </li>
          <li>
            如果一个 details 元素的第一个子节点不是 summary
            元素，用户代理会使用一个默认字符串（通常为“详细信息”或“详情”）作为展开盒子的标签内容。
          </li>
          <li>
            根据 HTML 规范，summary 元素的默认样式包括 display:
            list-item。这使得改变或移除显示为标签旁边的展现部件的图标成为可能，默认的图标通常是一个三角形。
            你也可以将样式改变为 display: block 来移除展开三角形。
          </li>
        </ol>
      </div>
      <div className={styles.details}>
        <details>
          details 元素在此
          <summary>Details(被 summary 标签包裹)</summary>
          Something small enough to escape casual notice.
        </details>
        <details>单独的 details 标签</details>
        <summary>单独的 summary 标签, 无三角形旋钮</summary>
      </div>
      <hr />

      <h2>
        footer 元素: footer 元素表示其最近的祖先分段内容的页脚或分段根元素。footer
        通常包含有关该部分作者、版权数据或相关文档链接的信息。
      </h2>
      <div className={styles.footer}>
        <footer>
          <div>© 2024 Gillian</div>
        </footer>
      </div>
    </main>
  );
};

export default TagDemo;
