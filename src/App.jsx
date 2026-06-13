

import { useRef } from "react";

function App() {

  const timerRef = useRef(null);

  const start = () => {
    timerRef.current = setInterval(() => {
      console.log("Running");
    },1000);
  };

  const stop = () => {
    clearInterval(timerRef.current);
  };

  return (
    <>
      <button onClick={start}>
        Start
      </button>

      <button onClick={stop}>
        Stop
      </button>
    </>
  );
}

export default App;