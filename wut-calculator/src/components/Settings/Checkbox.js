import React from "react";

const Checkbox = (props) => {
  return (
    <div className="mb-2">
      <button className="btn btn-dark" onClick={props.onClick}>
        {props.checked ? "✔️" : "❌"}
      </button>{" "}
      {props.text}
    </div>
  );
};

export default Checkbox;
