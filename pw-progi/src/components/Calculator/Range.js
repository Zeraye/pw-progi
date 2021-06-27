import React, { useState } from "react";

import "./Range.css";

const Range = (props) => {
  const [value, setValue] = useState(props.score);

  const changeValueHandler = (event) => {
    setValue(+event.target.value);
    props.updateMath(+event.target.value);
  };

  return (
    <React.Fragment>
      <div className="p-3">
        <span className="subject">{props.subject}</span>
        <input
          type="range"
          className="form-range"
          min="0"
          max="100"
          step="1"
          onChange={changeValueHandler}
          value={value}
        ></input>
        <span
          style={{ paddingLeft: `calc(${value}% + ${-0.24 * value + 4}px)` }}
        >
          {value}
        </span>
      </div>
    </React.Fragment>
  );
};

export default Range;
