import Counter from "./Counter";
import { useState } from "react";

function App() {

  let color = "";

  if (count === 0) {
  color = "gray";
}
else if (count < 10) {
  color = "green";
}
  const [count, setCount] =
    useState(0);

    

  function increaseCount() {
    
    setCount(count + 1);
  }
  function decrementCount() {
    if(count > 0){
      setCount(count - 1)
    }
  }

  return (
    <>
      <Counter count={count} onIncrement={increaseCount} onDecrement={decrementCount} />
    </>
  );
}

export default App;