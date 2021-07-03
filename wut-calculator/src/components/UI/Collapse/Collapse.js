import React, { useState } from "react";

import classes from "./Collapse.module.css";

const ARROW_UP = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-caret-up-fill"
    viewBox="0 0 16 16"
  >
    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
  </svg>
);

const ARROW_DOWN = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-caret-down-fill"
    viewBox="0 0 16 16"
  >
    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
  </svg>
);

const Collapse = (props) => {
  const [arrow, setArrow] = useState(ARROW_DOWN);

  const changeArrowHandler = () => {
    if (arrow === ARROW_DOWN) {
      setArrow(ARROW_UP);
      return;
    }
    setArrow(ARROW_DOWN);
  };

  return (
    <div className="container-fluid mb-2">
      <div className={`col-10 mx-auto p-1 ${classes.collapse}`}>
        <p className="d-grid mb-0">
          <button
            className={`btn btn-dark ${classes.collapse__button}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${props.collapseId}`}
            aria-expanded="true"
            aria-controls={props.ariaControls}
            onClick={changeArrowHandler}
          >
            {props.buttonName} {arrow}
          </button>
        </p>
        <div className="collapse show" id={props.collapseId}>
          <div className={`card card-body ${classes.collapse__content}`}>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
