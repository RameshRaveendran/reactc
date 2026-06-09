

function Counter({
  count,
  setCount,
}) {
  return (
    <>
      <h2>{count}</h2>

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
