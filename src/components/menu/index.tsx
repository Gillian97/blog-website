import { useState } from "react";
import { BackTop, Menu, Slider } from "@arco-design/web-react";
import { IconApps, IconBug, IconBulb } from "@arco-design/web-react/icon";
import Html from "@site/src/components/html";
import styles from "./index.module.scss";

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const COMMON_CONFIG = [
  {
    key: "html",
    title: "html demo",
    children: [
      {
        key: "html/tag",
        title: "tag demo",
        component: Html,
      },
      {
        key: "html/table",
        title: "table demo",
        component: Html,
      },
    ],
  },
];

function App() {
  const [selectedKeys, setSelectedKeys] = useState(["html/tag"]);
  const SelectedDemo = COMMON_CONFIG.find((module) =>
    selectedKeys[0].startsWith(module.key)
  )?.children.find((v) => selectedKeys[0] === v.key).component;

  return (
    <div className={styles["menu-demo"]}>
      <Menu
        style={{ width: 220 }}
        hasCollapseButton
        defaultOpenKeys={["html"]}
        selectedKeys={selectedKeys}
        onClickMenuItem={(key) => {
          console.log(key);
          setSelectedKeys([key]);
        }}
      >
        {COMMON_CONFIG.map((config) => {
          return (
            <SubMenu key={config.key} title={config.title}>
              {config.children.map((child) => {
                return <MenuItem key={child.key}>{child.title}</MenuItem>;
              })}
            </SubMenu>
          );
        })}
      </Menu>
      <div className={styles.content} id="custom_backtop">
        <SelectedDemo />
        <BackTop
          visibleHeight={30}
          style={{ position: "absolute" }}
          target={() => document.getElementById("custom_backtop")}
        />
      </div>
    </div>
  );
}

export default App;
