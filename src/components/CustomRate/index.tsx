import { Rate, Typography } from "@arco-design/web-react";
import { useState } from "react";

function App({ value = 5 }) {
  const [rate, setRate] = useState(5);
  const desc = ["从来不用", "不常用", "一般", "常用", "很常用"];
  const descEn = ["Never", "Rarely", "Sometimes", "Usually", "Always"];
  return (
    <div style={{ display: "flex", alignItems: "center", margin: "12px 0px" }}>
      <Rate
        value={value}
        readonly
        //   onChange={(value) => setRate(value)}
      />
      <Typography.Text style={{ margin: "0 16px" }}>{desc[value - 1]}</Typography.Text>
    </div>
  );
}

export default App;
