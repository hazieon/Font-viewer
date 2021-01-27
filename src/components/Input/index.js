import React from "react";

function Input({ handleChange }) {
  return (
    <input
      className="input"
      type="text"
      onInput={handleChange}
      placeholder="Type here to test..."
    />
  );
}
//or instead of onInput= :
//onChange, it will run this function:
//onChange = ((event) => {handleChange(event.target.value)})

//pass text from the EVENT into this
export default Input;
