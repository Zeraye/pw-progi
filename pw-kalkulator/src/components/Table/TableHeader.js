import React, { useState } from "react";

import classes from "./TableHeader.module.css";

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

const TableHeader = (props) => {
  const [arrow, setArrow] = useState(ARROW_DOWN);

  const changeArrowHandler = () => {
    if (arrow === ARROW_DOWN) {
      setArrow(ARROW_UP);
      return;
    }
    setArrow(ARROW_DOWN);
  };
  return (
    <th
      className={classes.table__header}
      onClick={() => {
        props.sortFunc(props.sortType);
        changeArrowHandler();
      }}
    >
      {props.name} {arrow}
    </th>
  );
};

export default TableHeader;
