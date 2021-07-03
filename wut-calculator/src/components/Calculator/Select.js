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

const SUBJECTS_LIST = [
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

const scoreValidation = (score) => {
  if (score === undefined) return false;
  if (score.trim() === "") return false;
  if (isNaN(+score)) return false;
  if (!Number.isInteger(+score)) return false;
  if (+score < 0) return false;
  if (+score > 100) return false;
  return true;
};

const Select = (props) => {
  const [subject, setSubject] = useState();
  const [score, setScore] = useState();
  const [dangerSubjectName, setDangerSubjectName] = useState(false);
  const [dangerScore, setDangerScore] = useState(false);

  const updateSubjectHandler = (event) => {
    const subjectName = event.target.value;

    setSubject(subjectName);

    if (subjectName === undefined) setDangerSubjectName(true);
    else setDangerSubjectName(false);
  };

  const updateScoreHandler = (event) => {
    const score = event.target.value;

    setScore(score);

    if (!scoreValidation(score) && score !== "") setDangerScore(true);
    else setDangerScore(false);
  };

  const keyPressHandler = (event) => {
    if (event.key === "Enter") {
      updateScoresHandler();
    }
  };

  const updateScoresHandler = () => {
    if (subject !== undefined) {
      if (scoreValidation(score)) {
        props.updateScores(subject, score);
        return;
      }
    }

    if (subject === undefined) setDangerSubjectName(true);

    if (!scoreValidation(score)) setDangerScore(true);
  };

  return (
    <div className={`input-group mx-auto mb-3 ${classes.select}`}>
      <select
        className={`form-select btn-dark ${classes.select__select} ${
          dangerSubjectName ? "bg-danger" : ""
        }`}
        aria-label="Wybierz przedmiot"
        onChange={updateSubjectHandler}
      >
        <option style={{ display: "none" }}>Wybierz przedmiot</option>
        {SUBJECTS_LIST.map((subject) => {
          return (
            <option value={subject.value} key={subject.value}>
              {subject.name} p. {subject.level}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        className={`form-control btn-dark text-center ${
          classes.select__input
        } ${dangerScore ? "bg-danger" : ""}
          `}
        aria-label="Wpisz wynik z matury"
        placeholder="Wynik"
        onChange={updateScoreHandler}
        onKeyPress={keyPressHandler}
      />
      <span className={`input-group-text btn-dark ${classes.select__percent}`}>
        %
      </span>
      <button
        className="btn btn-dark"
        type="button"
        onClick={updateScoresHandler}
      >
        {ADD_ICON}
      </button>
    </div>
  );
};

export default Select;
