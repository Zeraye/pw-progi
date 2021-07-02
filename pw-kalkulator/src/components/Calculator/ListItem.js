import React, { useState } from "react";

import classes from "./ListItem.module.css";

const EDIT_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-pencil-square"
    viewBox="0 0 16 16"
  >
    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
    <path
      fillRule="evenodd"
      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
    />
  </svg>
);

const DELETE_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-x-lg"
    viewBox="0 0 16 16"
  >
    <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
  </svg>
);

const ListItem = (props) => {
  const [score, setScore] = useState();

  const scoreValidation = (score) => {
    if (score === undefined) return false;
    if (score.trim() === "") return false;
    if (isNaN(+score)) return false;
    if (+score < 0) return false;
    if (+score > 100) return false;
    if (!Number.isInteger(+score)) return false;
    return true;
  };

  const setScoreHandler = (event) => {
    setScore(event.target.value);
  };

  const getName = (value) => {
    if (value.substring(0, 3) === "mth") {
      return "Matematyka";
    }
    if (value.substring(0, 3) === "phy") {
      return "Fizyka";
    }
    if (value.substring(0, 3) === "chm") {
      return "Chemia";
    }
    if (value.substring(0, 2) === "cs") {
      return "Informatyka";
    }
    if (value.substring(0, 3) === "bio") {
      return "Biologia";
    }
    if (value.substring(0, 3) === "pol") {
      return "Język Polski";
    }
    if (value.substring(0, 3) === "geo") {
      return "Geografia";
    }
    if (value.substring(0, 3) === "civ") {
      return "WOS";
    }
    if (value.substring(0, 3) === "his") {
      return "Historia";
    }
    if (value.substring(0, 3) === "eng") {
      return "Język Angielski";
    }
    if (value.substring(0, 3) === "fra") {
      return "Język Francuski";
    }
    if (value.substring(0, 3) === "esp") {
      return "Język Hiszpański";
    }
    if (value.substring(0, 3) === "ger") {
      return "Język Niemiecki";
    }
    if (value.substring(0, 3) === "rus") {
      return "Język Rosyjski";
    }
    if (value.substring(0, 3) === "ita") {
      return "Język Włoski";
    }
    return;
  };

  const getLevel = (value) => {
    if (value.slice(value.length - 3) === "bsc") {
      return "pod.";
    }
    return "roz.";
  };

  const editHandler = () => {
    if (scoreValidation(score)) props.editSub(props.value, score);
  };

  const deleteHandler = () => {
    props.deleteSub(props.value);
  };

  return (
    <li className={`list-group-item ${classes.sub}`}>
      <span className={classes.sub__data}>
        {getName(props.value)} p. {getLevel(props.value)} {"->"} {props.score}%
      </span>
      <div className={`input-group mx-auto ${classes.sub__input__group}`}>
        <input
          type="text"
          className={`form-control text-center btn btn-dark ${classes.sub__input}`}
          placeholder="Wpisz nowy wynik"
          aria-label="Wpisz nowy wynik"
          onChange={setScoreHandler}
        />
        <button className="btn btn-dark" type="button" onClick={editHandler}>
          {EDIT_ICON}
        </button>
        <button className="btn btn-dark" type="button" onClick={deleteHandler}>
          {DELETE_ICON}
        </button>
      </div>
    </li>
  );
};

export default ListItem;
