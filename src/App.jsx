import {
  useState,
  useRef
} from "react";

function App() {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current++;
    console.log(countRef.current);
  };

  return (
    <button onClick={handleClick}>
      Click
    </button>
  );
}

export default App;