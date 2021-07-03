import React from "react";

import classes from "./Reset.module.css";

const Reset = (props) => {
  return (
    <div
      className={`btn btn-dark mx-auto text-nowrap ${classes.reset__button}`}
      onClick={props.resetScores}
    >
      Resetuj wyniki
    </div>
  );
};

export default Reset;
