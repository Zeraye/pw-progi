import React, { useState } from "react";

import classes from "./Select.module.css";

const ADD_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-plus-lg"
    viewBox="0 0 16 16"
  >
    <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
  </svg>
);

const SUBS = [
  {
    value: "mthadv",
    name: "Matematyka",
    level: "rozszerzony",
  },
  {
    value: "mthbsc",
    name: "Matematyka",
    level: "podstawowy",
  },
  {
    value: "phyadv",
    name: "Fizyka",
    level: "rozszerzony",
  },
  {
    value: "chmadv",
    name: "Chemia",
    level: "rozszerzony",
  },
  {
    value: "csadv",
    name: "Informatyka",
    level: "rozszerzony",
  },
  {
    value: "bioadv",
    name: "Biologia",
    level: "rozszerzony",
  },
  {
    value: "geoadv",
    name: "Geografia",
    level: "rozszerzony",
  },
  {
    value: "civadv",
    name: "WOS",
    level: "rozszerzony",
  },
  {
    value: "hisadv",
    name: "Historia",
    level: "rozszerzony",
  },
  {
    value: "poladv",
    name: "Polski",
    level: "rozszerzony",
  },
  {
    value: "polbsc",
    name: "Polski",
    level: "podstawowy",
  },
  {
    value: "engadv",
    name: "Angielski",
    level: "rozszerzony",
  },
  {
    value: "engbsc",
    name: "Angielski",
    level: "podstawowy",
  },
  {
    value: "fraadv",
    name: "Francuski",
    level: "rozszerzony",
  },
  {
    value: "frabsc",
    name: "Francuski",
    level: "podstawowy",
  },
  {
    value: "spaadv",
    name: "Hiszpański",
    level: "rozszerzony",
  },
  {
    value: "spabsc",
    name: "Hiszpański",
    level: "podstawowy",
  },
  {
    value: "geradv",
    name: "Niemiecki",
    level: "rozszerzony",
  },
  {
    value: "gerbsc",
    name: "Niemiecki",
    level: "podstawowy",
  },
  {
    value: "rusadv",
    name: "Rosyjski",
    level: "rozszerzony",
  },
  {
    value: "rusbsc",
    name: "Rosyjski",
    level: "podstawowy",
  },
  {
    value: "itaadv",
    name: "Włoski",
    level: "rozszerzony",
  },
  {
    value: "itabsc",
    name: "Włoski",
    level: "podstawowy",
  },
];

const Select = (props) => {
  const [sub, setSub] = useState();
  const [score, setScore] = useState();

  const updateSubHandler = (event) => {
    setSub(event.target.value);
  };

  const updateScoreHandler = (event) => {
    setScore(event.target.value);
  };

  const keyPressHandler = (event) => {
    if (event.key === "Enter") {
      addSubHandler();
    }
  };

  const scoreValidation = (score) => {
    if (score === undefined) return false;
    if (score.trim() === "") return false;
    if (isNaN(+score)) return false;
    if (+score < 0) return false;
    if (+score > 100) return false;
    if (!Number.isInteger(+score)) return false;
    return true;
  };

  const addSubHandler = () => {
    if (sub !== undefined && score !== undefined && score !== "") {
      if (scoreValidation(score)) {
        props.updateSubs(sub, score);
      }
    }
  };

  return (
    <React.Fragment>
      <div className="input-group w-50 mx-auto mb-3">
        <select
          className={`form-select btn-dark ${classes.select__select}`}
          aria-label="Wybierz przedmiot"
          onChange={updateSubHandler}
        >
          <option style={{ display: "none" }}>Wybierz przedmiot</option>
          {SUBS.map((sub) => {
            return (
              <option value={sub.value} key={sub.value}>
                {sub.name} p. {sub.level}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          className={`form-control btn-dark text-center ${classes.select__input}`}
          aria-label="Wpisz wynik z matury"
          placeholder="Wynik"
          onChange={updateScoreHandler}
          onKeyPress={keyPressHandler}
        />
        <span className="input-group-text btn-dark">%</span>
        <button className="btn btn-dark" type="button" onClick={addSubHandler}>
          {ADD_ICON}
        </button>
      </div>
    </React.Fragment>
  );
};

export default Select;
