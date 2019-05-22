import React, { useState } from "react";

function Three() {
  const [year, setYear] = useState(1995);
  const [type, setType] = useState("Mercedes");
  const [used, setUsed] = useState(false);

  function swapCar() {
    setYear(2018);
    setType("BMW");
    setUsed(false);
  }

  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>Challenge 3</h2>
      <h3>Car Spec is:</h3>
      <ul>
        <li>{type}</li>
        <li>{year}</li>
        <li>{used ? "Used Car" : "Brand New!"}</li>
      </ul>
      <button onClick={swapCar}>Swap Car!</button>
    </div>
  );
}
export default Three;
