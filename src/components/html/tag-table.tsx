import { Table, type TableColumnProps } from "@arco-design/web-react";
import { useEffect, useState } from "react";

const columns: TableColumnProps[] = [
  {
    title: "标签名",
    dataIndex: "name",
    width: 120,
  },
  {
    title: "含义",
    dataIndex: "meaning",
  },
];

const data = [
  {
    name: "<header>",
    meaning: (
      <>
        用于展示介绍性内容，通常包含一组介绍性的或是辅助导航的实用元素。它可能包含一些标题元素，但也可能包含其他元素，比如
        Logo、搜索框、作者名称，等等。
      </>
    ),
  },
  {
    name: "<main>",
    meaning: (
      <>
        <p>
          呈现了文档的 body
          或应用的主体部分。主体部分由与文档直接相关，或者扩展于文档的中心主题、应用的主要功能部分的内容组成。
        </p>
        <p>
          页面中不可以出现多个 main 元素。 main 对文档的大纲（outline）没有贡献；也就是说，它与诸如
          body 之类的元素/ h2 之类的标题等不同，main 不会影响 DOM
          的页面结构概念。它仅有提供信息的作用。（原文：It's strictly informative.）
        </p>
      </>
    ),
  },
  {
    name: "<nav>",
    meaning: (
      <>
        表示页面的一部分，其目的是提供导航功能，比如目录、索引、表格目录。
        <p>注意：nav 元素不一定是导航栏，比如在侧边栏中，nav 元素就是侧边栏。</p>
      </>
    ),
  },
  {
    name: "<article>",
    meaning: (
      <>
        表示文档、页面、应用或网站中的独立结构，其意在成为可独立分配的或可复用的结构，如在发布中，它可能是论坛帖子、杂志或新闻文章、用户提交的评论、交互式组件，或者其他独立的内容项目。
      </>
    ),
  },
  {
    name: "<section>",
    meaning: (
      <>HTML 文档中一个通用独立章节，它没有更具体的语义元素来表示。一般来说会包含一个标题。 </>
    ),
  },
  {
    name: "<aside>",
    meaning: (
      <>
        表示一个和其余页面内容几乎无关的部分，被认为是独立于该内容的一部分并且可以被单独的拆分出来而不会使整体受影响。其通常表现为侧边栏或者标注框（call-out
        boxes）。
      </>
    ),
  },
  {
    name: "<details>",
    meaning: (
      <>
        <p>
          可创建一个组件，仅在被切换成展开状态时，它才会显示内含的信息。表示用户可以查看或隐藏的额外细节。
        </p>
      </>
    ),
  },
  {
    name: "<summary>",
    meaning: (
      <>
        <p>表示 details 元素的标题，当用户点击 summary 元素时，会显示出 details 元素的内容。</p>
      </>
    ),
  },
  {
    name: "<footer>",
    meaning: (
      <>
        <p>
          表示其最近的祖先分段内容的页脚或分段根元素。footer
          通常包含有关该部分作者、版权数据或相关文档链接的信息。
        </p>
      </>
    ),
  },
];

const TagTable = () => {
  return (
    <>
      <Demo />
      <Table border={false} columns={columns} data={data} pagination={false} />
    </>
  );
};
export default TagTable;

function Demo() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const callback = () => alert("DOM ready after defer!");
    document.addEventListener("DOMContentLoaded", callback);
    return () => {
      document.removeEventListener("DOMContentLoaded", callback);
    };
  }, []);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>点击重新渲染组件 {count}</button>
      <p>...content before script...</p>
      {/* 脚本执行保持相对顺序 */}
      {/* 当我们需要先加载 JavaScript 库，然后再加载依赖于它的脚本时，这可能会很有用。 */}
      <script defer src="https://javascript.info/article/script-async-defer/long.js"></script>
      <script defer src="https://javascript.info/article/script-async-defer/small.js"></script>
      {/* 立即可见 */}
      <p>...content after script...</p>
    </>
  );
}
