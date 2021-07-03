import React, { useState, useEffect } from "react";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Announce from "./components/Announce/Announce";
import Calculator from "./components/Calculator/Calculator";
import Table from "./components/Table/Table";
import Settings from "./components/Settings/Settings";

const App = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("saveScores") === "true") {
      if (JSON.parse(localStorage.getItem("scores")) !== null) {
        setScores(JSON.parse(localStorage.getItem("scores")));
      }
    } else {
      localStorage.removeItem("scores");
    }

    if (localStorage.getItem("saveScores") === null)
      localStorage.setItem("saveScores", "true");

    if (localStorage.getItem("saveMajors") === null)
      localStorage.setItem("saveMajors", "true");
  }, []);

  useEffect(() => {
    if (localStorage.getItem("saveScores") === "true") {
      localStorage.setItem("scores", JSON.stringify(scores));
    } else {
      localStorage.removeItem("scores");
    }
  }, [scores]);

  const updateScoresHandler = (subjectName, subjectScore) => {
    if (scores.filter((subject) => subject.name === subjectName).length === 0) {
      setScores((prevScores) => [
        ...prevScores,
        { name: subjectName, score: subjectScore },
      ]);
    } else {
      setScores((prevScores) =>
        prevScores.map((prevSubject) => {
          if (prevSubject.name === subjectName) {
            prevSubject.score = subjectScore;
            return prevSubject;
          }
          return prevSubject;
        })
      );
    }
  };

  const deleteScoreHandler = (subjectName) => {
    setScores(scores.filter((subject) => subject.name !== subjectName));
  };

  const resetScoresHandler = () => {
    setScores([]);
  };

  return (
    <React.Fragment>
      <Navbar />
      <Announce />
      <Calculator
        scores={scores}
        updateScores={updateScoresHandler}
        resetScores={resetScoresHandler}
        deleteScore={deleteScoreHandler}
      />
      <Table scores={scores} />
      <Settings />
    </React.Fragment>
  );
};

export default App;
