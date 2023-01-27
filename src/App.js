import { createContext, useState } from "react";
import "./App.css";
import Father from "./components/Father/Father";

export const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  const value = {
    count,
    setCount,
  };
  return (
    <div className="App">
      <CountContext.Provider value={value}>
        <div>
          <Father></Father>
        </div>
      </CountContext.Provider>
    </div>
  );
}

export default App;
