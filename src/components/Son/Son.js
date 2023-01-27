import React, { useReducer } from "react";
import "./Son.css";

// Son component used "useReducer"
// Father and Child component used "useContext"

const Son = () => {
  const initialState = 0;

  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + 1;
    } else if (action.type === "DECREMENT") {
      return state - 1;
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
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>
        <button
          className="btn-add"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increment
        </button>
      </span>
    </div>
  );
};

export default Son;
