import useCounter
from "./hooks/useCounter";

function Counter() {

  const {
    count,
    increment,
    decrement,
    reset
  } = useCounter();

  return (
    <>
      <h1>{count}</h1>

      <button onClick={increment}>
        +
      </button>

      <button onClick={decrement}>
        -
      </button>

      <button onClick={reset}>
        Reset
      </button>
    </>
  );
}

export default Counter;