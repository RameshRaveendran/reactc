

function Counter({
  count,
  setCount,
}) {
  return (
    <>
      <h1>ivide nokk myrole</h1>
      <h2>{count}</h2>

      <button
        onClick={() =>
          setCount(count + 1)
        }
      >
        koottan
      </button>
      <button
        onClick={() =>
          setCount(count - 1)
        }
      >
        kurakkan
      </button>
      <button
        onClick={() =>
          setCount(count - count)
        }
      >
        0 aakkan 
      </button>
    </>
  );
}

export default Counter;
