// import ClassDemo from "./components/classDemo";
// import FuncDemo from "./components/funcDemo";
// import { useState } from "react";
import "./App.css";
// import UseContextDemo from "./components/useContextDemo";
// import UseContextSol from "./components/useContextSol";
import UseMemoDemo from "./components/useMemoDemo";
// import ConditionalDemo from "./components/conditionalDemo";
// import LifeCycleDemo from "./components/lifeCycleDemo";
// import UseEffectDemo from "./components/useEffectDemo";

function App() {
  // const [show, setShow] = useState(true);

  // Task- create a btn and on btn click, hide the LifeCycleDemo comp

  return (
    <div>
      <UseMemoDemo />
      {/* <UseContextSol /> */}
      {/* <UseContextDemo /> */}
      {/* <button onClick={() => setShow(false)}>Remove Comp</button>
      {show ? <UseEffectDemo color="red" /> : ""} */}
      {/* <ConditionalDemo /> */}
      {/* Hello User
      <br />
      <div className="container">
        <div className="compBox">
          <FuncDemo age="20" gender="Male" />
        </div>
        <div className="compBox">
          <ClassDemo state="UP" gender="Female" />
        </div>
      </div> */}
    </div>
  );
}

export default App;

// index.html (root) ----------> index.js (create VD) --------> App.js render inside index.js
