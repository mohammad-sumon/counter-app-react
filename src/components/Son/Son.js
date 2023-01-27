import React, { useReducer } from "react";
import "./Son.css";

// Son component used "useReducer"
// Father and Child component used "useContext"

const Son = () => {
  const initialState = 0;

  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + action.payload.count;
    } else if (action.type === "DECREMENT") {
      return state - action.payload.count;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="son-main">
      <h2>Son</h2>
      <p>{state}</p>
      <span>
        <button
          className="btn-less"
          onClick={() => dispatch({ type: "DECREMENT", payload: { count: 2 } })}
        >
          Decrement
        </button>
        <button
          className="btn-add"
          onClick={() => dispatch({ type: "INCREMENT", payload: { count: 2 } })}
        >
          Increment
        </button>
      </span>
    </div>
  );
};

export default Son;
