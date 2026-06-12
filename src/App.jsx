import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function startTimer() {
    setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
  }

  return (
    <>
      <h1>{count}</h1>

      <button onClick={startTimer}>
        Start
      </button>
    </>
  );
}

export default App;