import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(() => {
    return Number(localStorage.getItem("count")) || 0;
  });

  useEffect(() => {
    document.title = `Count: ${count}`;
  });
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default App;
