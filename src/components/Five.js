import React, { useState } from "react";
import Little from "./Little";

function Five() {
  const [showText, setShowText] = useState(true);

  function showLittle() {
    if (!showText) {
      setShowText(true);
    } else {
      setShowText(false);
    }
  }
  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>Challenge 5</h2>
      <h3>Here below lies little text in a box</h3>
      <button onClick={showLittle}>Click to toggle Little</button>
      {showText ? <Little /> : ""}
    </div>
  );
}

export default Five;
