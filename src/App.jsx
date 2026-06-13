import {
  useState,
  useRef
} from "react";

function App() {

  const [notes, setNotes] =
    useState([]);

  const inputRef =
    useRef(null);

  function addNote() {

    const value =
      inputRef.current.value;

    if (!value) return;

    setNotes([
      ...notes,
      value
    ]);

    inputRef.current.value = "";

    inputRef.current.focus();
  }

  return (
    <>
      <input
        ref={inputRef}
      />

      <button
        onClick={addNote}
      >
        Add Note
      </button>

      <ul>
        {notes.map(note => (
          <li>{note}</li>
        ))}
      </ul>
    </>
  );
}

export default App;