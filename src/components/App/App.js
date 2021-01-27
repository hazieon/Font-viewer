import React, { useState } from "react";
import "./App.css";
import Input from "../Input";
import Item from "../Item";

function App() {
  const [text, setText] = useState("");

  //our version: takes EVENT and takes fired event's value
  function handleChange(e) {
    setText(e.target.value);
  }

  //before event is added:
  // function handleChange(inputText) {
  //   setText(inputText);
  // }
  return (
    <div className="App">
      <h1 style={{ fontFamily: "Comic Sans Ms" }}>Replace Comic Sans!</h1>
      <Input handleChange={handleChange} />
      <div className="fontSpace">
        <h5>Comic Sans:</h5> <Item text={text} font="Comic Sans Ms" />
        <h5>Arial:</h5> <Item text={text} font="Arial" />
        <h5>Times New Roman:</h5> <Item text={text} font="Times New Roman" />
        <h5>Consolas:</h5> <Item text={text} font="Consolas" />
        <h5>Tahoma:</h5> <Item text={text} font="Tahoma" />
      </div>
    </div>
  );
}

export default App;
