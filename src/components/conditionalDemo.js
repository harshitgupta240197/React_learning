import React, { Component, useState } from "react";

export default function ConditionalDemo() {
  const [show, setShow] = useState(true);

  return (
    <div>
      This is ConditionalDemo <br />
      <button onClick={() => setShow(false)}>Change show</button>
      {show ? "Hello User" : ""}
    </div>
  );
}
