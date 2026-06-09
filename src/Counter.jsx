

function Counter({
  count,
  onIncrement,
  onDecrement,
}) {
  return (
    <>
      <h2>{count}</h2>

      <button
        onClick={onIncrement}
      >
        KOOTT PUNDAKALE
      </button>
      <button
        onClick={onDecrement}
      >
        KURAKK MYROLE
      </button>
    </>
  );
}

export default Counter;
