import React, { useState } from "react";

function Two() {
  const [activeUser, setActiveUser] = useState("Mark");

  function changeUser() {
    setActiveUser("Otto");
  }
  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>Challenge 2</h2>
      <p>Active User is: {activeUser}</p>
      <button onClick={changeUser}>Change Me!</button>
    </div>
  );
}

export default Two;
