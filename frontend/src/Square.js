import React from "react";

function Square(props) {
  return (
    <button className="square" onClick={props.onClick} disabled={props.disable} >
      {props.value}
    </button>
  );
}

export default Square;