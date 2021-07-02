import React, { useState, useEffect } from "react";

import Modal from "./Modal";

import classes from "./Settings.module.css";

const Settings = () => {
  const [saveScores, setSaveScores] = useState(false);
  const [saveMajors, setSaveMajors] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("saveScores") != null) {
      setSaveScores(localStorage.getItem("saveScores") === "true");
    }
    if (localStorage.getItem("saveMajors") != null) {
      setSaveMajors(localStorage.getItem("saveMajors") === "true");
    }
  }, []);

  const setSaveScoresHandler = (newValue) => {
    setSaveScores(newValue);
    localStorage.setItem("saveScores", (newValue === true).toString());
  };

  const setSaveMajorsHandler = (newValue) => {
    setSaveMajors(newValue);
    localStorage.setItem("saveMajors", (newValue === true).toString());
  };

  return (
    <React.Fragment>
      <button
        type="button"
        className={classes.float}
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          className={`bi bi-gear-fill ${classes["my-float"]}`}
          viewBox="0 0 16 16"
        >
          <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
        </svg>
      </button>
      <Modal
        setSaveScores={setSaveScoresHandler}
        setSaveMajors={setSaveMajorsHandler}
        saveScores={saveScores}
        saveMajors={saveMajors}
      />
    </React.Fragment>
  );
};

export default Settings;
