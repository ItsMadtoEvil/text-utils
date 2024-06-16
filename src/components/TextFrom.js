import React, { useState } from "react";

export default function TextFrom(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerCase", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared Textbox", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const wordCount = (text) => {
    let regex = /\s+\S+/;
    let numOfWords = text.split(regex);
    return numOfWords.length;
  };
  const [text, setText] = useState("Enter Text Here");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            value={text}
            onChange={handleOnChange}
            className="form-control"
            id="mybox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "lightgrey" : "darkgray",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your Summary Here</h2>
        <p>
          {text === "" ? 0 : wordCount(text)} words and {text.length} characters
        </p>
        <p>{text === "" ? 0 * 0.008 : wordCount(text) * 0.008} Minutes read</p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
