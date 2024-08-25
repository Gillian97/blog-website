// import { Divider, Typography } from "@arco-design/web-react";
import Admonition from "@theme-original/Admonition";
// import WriteIcon from "@site/static/img/write.svg";
import { IconQuestionCircle, IconEdit } from "@arco-design/web-react/icon";

export const SelfUnderstanding = ({ children, type, title = "笔记" }) => {
  return (
    // <Typography.Paragraph type="secondary" spacing="close">
    //   <Divider />
    //   {children}
    //   <Divider />
    // </Typography.Paragraph>
    <Admonition type={type} icon={<IconEdit />} title={title}>
      {children}
    </Admonition>
  );
};

export const InterviewQuestion = ({ children, type = "warning", title = "面试题" }) => {
  return (
    <Admonition type={type} icon={<IconQuestionCircle />} title={title}>
      {children}
    </Admonition>
  );
};
