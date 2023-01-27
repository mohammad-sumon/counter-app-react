import "./App.css";
import Child from "./components/Child/Child";
import Father from "./components/Father/Father";

function App() {
  return (
    <div className="App">
      <div>
        <Father></Father>
        <Child></Child>
      </div>
    </div>
  );
}

export default App;
