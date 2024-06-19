import React, { useState } from "react";

export default function FuncDemo(props) {
  const [val, setVal] = useState(10);

  return (
    <div>
      This is FuncDemo <br />
      Props are- {props.age} {props.gender} <br />
      <button onClick={() => setVal(25)}>Change Val</button>
      States are- {val}
    </div>
  );
}


