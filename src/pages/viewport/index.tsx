import { useEffect, useState } from "react";
import styles from "./index.module.scss";
export interface IViewportProps {}

function Viewport(props: IViewportProps) {
  const [Update, setUpdate] = useState({});

  useEffect(() => {
    const onResize = () => {
      setUpdate({});
    };
    // resize 事件在文档视图（窗口）调整大小时触发。
    // resize 事件只在 window 对象（即由 document.defaultView 返回）上触发。只有在 window 对象上注册的处理器才能接收 resize 事件。
    window.addEventListener("resize", onResize);
    if (!document.getElementsByName("viewport")[0]) {
      const meta = document.createElement("meta");
      meta.name = "viewport";
      meta.content = "width=device-width";
      document.head.appendChild(meta);
    }

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <section>
        <h4>大小关系</h4>
        <p>
          <span>浏览器没有左右边框: window.innerWidth</span>
          <b>{window.innerWidth === window.outerWidth ? "=" : "!="}</b>
          <span>window.outerWidth</span>
        </p>
        <p>
          标签栏+地址栏+书签栏<b>({window.outerHeight - window.innerHeight}px)</b> =
          window.outerHeight - window.innerHeight
        </p>
        <p>
          {/* 视口宽度 = 浏览器窗口宽度 - 水平滚动条宽度 */}
          <span>document.documentElement.clientWidth</span>
          <b>{document.documentElement.clientWidth === window.innerWidth ? "=" : "!="}</b>
          <span>window.innerWidth</span>
        </p>
        <p>
          {/* 视口高度 = 浏览器窗口高度 - 垂直滚动条高度 */}
          <span>document.documentElement.clientHeight</span>
          <b>{document.documentElement.clientHeight === window.innerHeight ? "=" : "!="}</b>
          <span>window.innerHeight</span>
        </p>
      </section>
      <h4>布局视口</h4>
      <p>window.innerWidth: {window.innerWidth}</p>
      <p>window.innerHeight: {window.innerHeight}</p>
      <h4>浏览器外边框长宽</h4>
      <p>window.outerWidth: {window.outerWidth}</p>
      <p>window.outerHeight: {window.outerHeight}</p>
      <h4>视觉视口</h4>
      <p>
        <b>视口宽度</b>document.documentElement.clientWidth: {document.documentElement.clientWidth}
      </p>
      <p>
        <b>视口高度</b>document.documentElement.clientHeight:
        {document.documentElement.clientHeight}
      </p>
      <div className={styles.long}>long</div>
    </div>
  );
}

export default Viewport;
