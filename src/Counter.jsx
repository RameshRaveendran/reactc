

function Counter({
  count,
  onIncrement,
}) {
  return (
    <>
      <h2>{count}</h2>

      <button
        onClick={onIncrement}
      >
        Increment
      </button>
    </>
  );
}

export default Counter;
