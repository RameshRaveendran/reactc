import { useState } from "react";

function useCounter(initialValue = 0, step = 1) {
//   const [count, setCount] = useState(initialValue);
  const { count, increment } = useCounter(100, 5);

  function increment() {
    setCount((prev) => prev + step);
  }

  function decrement() {
    setCount((prev) => prev - step);
  }

  function reset() {
    setCount(initialValue);
  }

  return {
    count,
    increment,
    decrement,
    reset,
  };
}

export default useCounter;
