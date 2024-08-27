import { useEffect, useState } from "react";

export default function Demo() {
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
      {/* <script defer src="https://javascript.info/article/script-async-defer/long.js"></script> */}
      {/* <script defer src="https://javascript.info/article/script-async-defer/small.js"></script> */}
      <script defer src="/long.js"></script>
      {/* 立即可见 */}
      <p>...content after script...</p>
    </>
  );
}
