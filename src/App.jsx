import Counter from "./Counter";
import { useState } from "react";

function App() {
  const [count, setCount] =
    useState(0);

  function increaseCount() {
    if(count > 0){
      setCount(count - 1);
    }
  }
  function decrementCount() {
    setCount(count - 1);
  }

  return (
    <>
      <Counter count={count} onIncrement={increaseCount} onDecrement={decrementCount} />
    </>
  );
}

export default App;