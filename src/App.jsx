import Counter from "./Counter";

function App() {
  return (
    <>
      <Counter
        title="Likes"
        startValue={0}
      />

      <Counter
        title="Followers"
        startValue={100}
      />
    </>
  );
}

export default App;