import React from "react";

function NewQuote(props) {
  return (
    <div
      id="new-quote"
      className="col-3 offset-8 text-center p-2 btn btn-dark"
      onClick={props.colorHandler}
    >
      New Quote
    </div>
  );
}

export default NewQuote;
