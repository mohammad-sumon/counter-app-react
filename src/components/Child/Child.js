import React, { useContext } from "react";
import { CountContext } from "../../App";
import Son from "../Son/Son";
import "./Child.css";

const Child = () => {
  const { count, setCount } = useContext(CountContext);
  return (
    <div className="child-main">
      <h2>Child</h2>
      <p>{count}</p>
      <span>
        <button className="btn-less" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
        <button
          className="btn-add"
          onClick={() => setCount((prvState) => prvState + 1)}
        >
          Increment
        </button>
      </span>
      <Son></Son>
    </div>
  );
};

export default Child;
