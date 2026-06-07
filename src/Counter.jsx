import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{count}</h2>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        KOOTTAN
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        KURAKKAN
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        MUZHUVAN MAYKKAN
      </button>
    </>
  );
}

export default Counter;
