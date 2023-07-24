import React from "react";
import Author from "./Author";
import Tweet from "./Tweet";
import NewQuote from "./NewQuote";
import Quote from "./Quote";
import { useState, useEffect } from "react";
import { data } from "../data/data.js";

function QuoteBox() {
  const [rgbValue, setRgbValue] = useState([0, 0, 0]);
  const [quote, setQuote] = useState(data[0]);
  const bgColorHandler = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let index = Math.floor(Math.random() * data.length);
    setQuote(data[index]);
    setRgbValue([red, green, blue]);
  };
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--text-color",
      `rgb(${rgbValue[0]}, ${rgbValue[1]}, ${rgbValue[2]})`
    );
    document.documentElement.style.setProperty(
      "--background-color",
      `rgb(${rgbValue[0]}, ${rgbValue[1]}, ${rgbValue[2]})`
    );
  }, [rgbValue]);
  return (
    <div id="quote-box" className="container">
      <div className="row m-4">
        <Quote newQuote={quote} />
      </div>
      <div className="row m-4">
        <Author newAuthor={quote.author} />
      </div>
      <div className="row m-4">
        <Tweet />
        <NewQuote colorHandler={bgColorHandler} />
      </div>
    </div>
  );
}

export default QuoteBox;
