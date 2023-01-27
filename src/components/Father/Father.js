import React, { useState } from "react";
import "./Father.css";

const Father = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="father-main">
      <h2>Father</h2>
      <p count={count} setCount={setCount}>
        {count}
      </p>
    </div>
  );
};

export default Father;
