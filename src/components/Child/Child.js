import React, { useState } from "react";
import "./Child.css";

const Child = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="child-main">
      <h2>Child</h2>
      <p>{count}</p>
      <span>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </span>
    </div>
  );
};

export default Child;
