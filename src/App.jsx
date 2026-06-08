import Counter from "./Counter";

function App() {
  return (
    <>
      <Counter
        title="Likes"
        startValue={1000000}
      />

      <Counter
        title="Followers"
        startValue={100}
      />
    </>
  );
}

export default App;