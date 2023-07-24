import React from "react";

function Quote(props) {
  return (
    <div
      id="text"
      className="col-12 text-center p-5"
      style={{ fontSize: "1.5rem" }}
    >
      <i class="bi bi-quote" style={{ verticalAlign: "super" }}></i>
      {props.newQuote.quote}
    </div>
  );
}

export default Quote;
