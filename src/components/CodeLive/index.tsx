import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const CodeLive = ({ code }) => {
  return (
    <LiveProvider code={code}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  );
};

export default CodeLive;
