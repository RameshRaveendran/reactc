function Counter({
  count,
  maxLimit,
  onIncrement,
  onDecrement,
  onReset,
}) {
  let color = "gray";

  if (count > 0) {
    color = "green";
  }

  if (count >= 25) {
    color = "blue";
  }

  if(count >= 30){
    color = "red"
  }

  return (
    <div>
      <h2 style={{ color }}>
        Count: {count}
      </h2>

      <button
        onClick={onIncrement}
        disabled={count >= maxLimit}
      >
        Increment
      </button>

      <button
        onClick={onDecrement}
        disabled={count === 0}
      >
        Decrement
      </button>

      <button onClick={onReset}>
        Reset
      </button>

      {count === 0 && (
        <p>Count is Zero</p>
      )}

      {count >= 25 && count < maxLimit && (
        <p>High Count</p>
      )}

      {count === maxLimit && (
        <p>Maximum Reached</p>
      )}
    </div>
  );
}

export default Counter;