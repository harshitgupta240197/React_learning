import React, { useEffect, useState } from "react";

export default function UseEffectDemo() {
  const [val, setVal] = useState(10);
  const [data, setData] = useState(20);

  //   componentDidMount
  useEffect(() => {
    alert("comp has mounted");
  }, []);

  //   componentDidMount & componentDidUpdate
  useEffect(() => {
    alert("comp has mounted/updated");
  });

  //   state dependent useEffect
  useEffect(() => {
    alert("val has mounted/updated");
  }, [val]);

  //   componentWillUnmount
  useEffect(() => {
    return () => {
      alert("component will unmount");
    };
  }, []);

  return (
    <div>
      This is UseEffectDemo <br />
      <button onClick={() => setVal(25)}>Change Val</button>
      States are- {val}
      <br />
      <button onClick={() => setData(500)}>Change Data</button>
      States are- {data}
    </div>
  );
}
