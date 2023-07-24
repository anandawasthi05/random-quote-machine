import React from "react";

function Author(props) {
  return (
    <div id="author" className="col-sm-3  offset-sm-9 text-center">
      - {props.newAuthor}
    </div>
  );
}

export default Author;
