import React from "react";

import classes from "./FilterButton.module.css";

const FilterButton = (props) => {
  return (
    <button
      type="button"
      className={`btn ${
        props.active
          ? "btn-dark"
          : `btn-outline-dark ${classes.filter__inactive}`
      } ${classes.filter__button}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default FilterButton;
