import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Components/Button";
import SearchBar from "./Components/SearchBar";
import MainContainer from "./Components/MainContainer";

function App() {
  const [inputData, setInputData] = useState("Sample Text");
  return (
    <div className="App">
      <SearchBar setInputData={setInputData} />
      <MainContainer inputData={inputData} />
      {/* <header   className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button page="Home" />
      </header> */}
    </div>
  );
}

export default App;
