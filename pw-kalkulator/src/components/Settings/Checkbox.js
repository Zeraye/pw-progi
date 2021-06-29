import React from "react";
const Checkbox = (props) => {
  return (
    <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" />
      <label class="form-check-label">{props.text}</label>
    </div>
  );
};

export default Checkbox;
