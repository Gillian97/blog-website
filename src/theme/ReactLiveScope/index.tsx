import React from "react";

const ButtonExample = (props) => (
  <button
    {...props}
    style={{
      backgroundColor: "white",
      color: "black",
      border: "solid red",
      borderRadius: 20,
      padding: 10,
      cursor: "pointer",
      ...props.style,
    }}
  />
);

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
};

function Demo() {
  return (
    <header style={{ backgroundColor: "pink" }}>
      header block
      <h3>Beagles</h3>
      <time>08.12.2014</time>
    </header>
  );
}

export default ReactLiveScope;
