import React from "react";

const Button = (props) => {
  return (
    <button
      className={`btn btn-${props.check ? "" : "outline-"}secondary`}
      type="button"
      onClick={props.updateHandler}
    >
      {props.text}
    </button>
  );
};

export default Button;
