import { useState } from "react";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const MAX_LIMIT = 50;

  function increase() {
    if (count + step <= MAX_LIMIT) {
      setCount(count + step);
    }
  }

  function decrease() {
    if (count - step >= 0) {
      setCount(count - step);
    }
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <h1>Counter App V2</h1>

      <h3>Current Step: {step}</h3>

      <button onClick={() => setStep(1)}>
        Step 1
      </button>

      <button onClick={() => setStep(5)}>
        Step 5
      </button>

      <button onClick={() => setStep(10)}>
        Step 10
      </button>

      <hr />

      <Counter
        count={count}
        maxLimit={MAX_LIMIT}
        onIncrement={increase}
        onDecrement={decrease}
        onReset={reset}
      />
    </div>
  );
}

export default App;