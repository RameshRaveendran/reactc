import Counter from "./Counter";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Counter
  count={count}
  setCount={setCount}
/>
  );
}

export default App;