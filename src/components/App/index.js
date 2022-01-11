import "./App.css";

import {useState} from "react"

import Input from "../Input";

function App() {

  const [search, setSearch] = useState("");

  function handleSearchSubmit(text) {
    setSearch(text);
  }

  return (
    <div className="App">
      <Input handleSearchSubmit={handleSearchSubmit}/>    
    </div>
  );
}

export default App;
