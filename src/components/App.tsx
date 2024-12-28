import { updateNestedStore, updateStore, useExampleStore } from "@stores/exampleStore";
import { useState } from "react";

function App() {
  console.log("rerender");
  const [count, setCount] = useState(0);
  const bar = useExampleStore.use.list();
  console.log(bar);
  const handleClick = () => {
    updateStore({ bar: "test" });
    updateNestedStore("list", { param2: "hello world" });
    setCount((count) => count + 1);
  };

  return (
    <>
      <div className="card">
        <h1>Hello World</h1>
        <h2>Hello World</h2>
        <h3>Hello World</h3>
        <a href="hello">hello</a>
        <button onClick={handleClick}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
