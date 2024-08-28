import { Table, type TableColumnProps } from "@arco-design/web-react";
import { useEffect, useState } from "react";
import CodeBlock from "@theme/CodeBlock";

const TAG_COLUMNS: TableColumnProps[] = [
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

const TAG_DATA = [
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

const STORAGE_COLUMNS: TableColumnProps[] = [
  {
    title: "特点\\存储类型",
    dataIndex: "feat",
    width: 120,
  },
  {
    title: "HTTP cookie",
    dataIndex: "cookie",
  },
  {
    title: "localStorage",
    dataIndex: "localStorage",
  },
  {
    title: "sessionStorage",
    dataIndex: "sessionStorage",
    width: 160,
  },
  {
    title: "indexedDB",
    dataIndex: "indexedDB",
    width: 160,
  },
];

const STORAGE_DATA = [
  {
    feat: "设置方式",
    cookie: (
      <>
        <CodeBlock language="http" title="HTTP Response Set-Cookie" showLineNumbers>
          {`HTTP/1.1 200 OK
Content-type: text/html
Set-Cookie: name=value
Other-header: other-header-value`}
        </CodeBlock>
      </>
    ),
    localStorage: <>客户端设置 getItem()、removeItem()和setItem()方法</>,
    sessionStorage: <>客户端设置 getItem()、removeItem()和setItem()方法</>,
    indexedDB: (
      <>
        <p>客户端设置</p>
        <CodeBlock language="js" title="indexedDB" showLineNumbers>
          {`var request = window.indexedDB.open('dbName', 1); // 打开数据库`}
        </CodeBlock>
      </>
    ),
  },
  {
    feat: "容量",
    cookie: (
      <>
        4KB(单个cookie)
        <div>每个域能设置的cookie总数也是受限的，但不同浏览器的限制不同, 超出数量限制会被删除</div>
      </>
    ),
    localStorage: "每个源 5MB",
    sessionStorage: "每个源 5MB",
    indexedDB: "无限",
  },
  {
    feat: "存储机制",
    cookie: "取决于是否设置了过期时间",
    localStorage: "永久存储机制, 直至手动删除或者清除浏览器缓存",
    sessionStorage: "跨会话存储机制, 只存储会话数据, 数据只会存储到浏览器关闭",
    indexedDB: "永久存储机制",
  },
  {
    feat: "写入方式",
    cookie: "HTTP Response Set-Cookie",
    localStorage: "同步阻塞方式, 数据会被立即提交到存储, 可以立即被读取",
    sessionStorage: "同步阻塞方式, 数据会被立即提交到存储, 可以立即被读取",
    indexedDB: "异步写入, 使用时需要指定相关回调",
  },
  {
    feat: "同源策略",
    cookie: "同源",
    localStorage: "同源(子域不行)",
    sessionStorage: "同源",
    indexedDB: "同源",
  },
  {
    feat: "存储内容（不要存储敏感信息）",
    cookie: "字符串",
    localStorage: "字符串",
    sessionStorage: "字符串",
    indexedDB: "对象",
  },
];

const DATA_SET = {
  tag: {
    columns: TAG_COLUMNS,
    data: TAG_DATA,
  },
  storage: {
    columns: STORAGE_COLUMNS,
    data: STORAGE_DATA,
  },
};

const ShowTable = ({ type, style }) => {
  return (
    <>
      <Table
        border={false}
        columns={DATA_SET[type].columns}
        data={DATA_SET[type].data}
        pagination={false}
        style={style ?? {}}
      />
    </>
  );
};
export default ShowTable;

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

// import VideoUrl from '@site/static/media/flower.webm';
function AudioDemo() {
  const audioUrl = "https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3";

  return (
    <figure>
      <figcaption>Listen to the T-Rex:</figcaption>
      {/* 在浏览器不支持该元素时，会显示 <audio></audio> 标签之间的内容作为回退。 */}
      <audio controls src={audioUrl}>
        当前不支持 audio 元素
      </audio>
      <a href={audioUrl}> Download audio </a>
    </figure>
  );
}
