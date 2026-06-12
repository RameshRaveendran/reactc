import { useState } from "react";
import Timer from "./Timer";

function App() {
  const [showTimer, setShowTimer] =
    useState(true);

  return (
    <>
      <button
        onClick={() =>
          setShowTimer(
            !showTimer
          )
        }
      >
        Toggle Timer
      </button>

      {showTimer && <Timer />}
    </>
  );
}

export default App;