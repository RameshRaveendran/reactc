import { useState } from "react";

function Counter({ title, startValue }) {
  const [count, setCount] =
    useState(startValue);

  return (
    <>
      <h2>{title}</h2>

      <h3>{count}</h3>

      <button
        onClick={() =>
          setCount(count + 1)
        }
      >
        Increment
      </button>
    </>
  );
}

export default Counter;