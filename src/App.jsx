import { useState , useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  function startTimer() {
    setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
  }
  useEffect(() => {

  const intervalId =
    setInterval(() => {
      console.log("Tick");
    }, 1000);

  return () => {
    clearInterval(intervalId);
  };

}, []);

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