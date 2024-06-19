import React, { useState, useMemo } from "react";

const UseMemoDemo = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(20);

  // Memoized calculation function
  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");
    let result = 0;
    for (let i = 0; i < count * 1000000; i++) {
      result += i;
    }
    return result;
  }, [count]);

  //  Note -  useEffect will calculate the value everytime on the basis of count if value is coming even same but useMemo will only work if count's value is changing

  return (
    <div>
      <h1>useMemo Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <br />
      <p>Data: {data}</p>
      <button onClick={() => setData(data + 1)}>Increment data</button>
      <p>Result of expensive calculation: {expensiveCalculation}</p>
    </div>
  );
};

export default UseMemoDemo;
