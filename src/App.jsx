import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>nasikki vidu sivakami</h1>

      <h2>{count}</h2>
      <h1>{setCount}</h1>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default App;
