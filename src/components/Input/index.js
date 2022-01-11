import { useState } from "react";

function Input({ handleSearchSubmit }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <input onChange={handleChange} value={text}></input>
      <button
        onClick={() => {
          handleSearchSubmit(text);
        }}
      >
        Search
      </button>
    </div>
  );
}

export default Input;
