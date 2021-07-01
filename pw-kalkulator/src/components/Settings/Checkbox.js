import React from "react";
const Checkbox = (props) => {
  return (
    <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox" />
      <label className="form-check-label">{props.text}</label>
    </div>
  );
};

export default Checkbox;
