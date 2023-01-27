import React, { useContext } from "react";
import { CountContext } from "../../App";
import Child from "../Child/Child";
import "./Father.css";

const Father = () => {
  //   const [count, setCount] = useState(0);
  const { count, setCount } = useContext(CountContext);
  return (
    <div className="father-main">
      <h2>Father</h2>
      <p>{count}</p>
      <Child count={count} setCount={setCount}></Child>
    </div>
  );
};

export default Father;
