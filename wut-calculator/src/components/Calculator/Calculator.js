import React from "react";

import Collapse from "../UI/Collapse/Collapse";
import Select from "./Select";
import List from "./List";
import Reset from "./Reset";

const Calculator = (props) => {
  const updateScoresHandler = (subjectName, subjectScore) => {
    props.updateScores(subjectName, subjectScore);
  };

  const resetScoresHandler = () => {
    props.resetScores();
  };

  const deleteScoreHandler = (subjectName) => {
    props.deleteScore(subjectName);
  };

  return (
    <Collapse
      buttonName="Kalkulator"
      collapseId="collapseCalculator"
      ariaControls="Włącz kalkulator"
    >
      <Select updateScores={updateScoresHandler} />
      <List
        scores={props.scores}
        updateScores={updateScoresHandler}
        deleteScore={deleteScoreHandler}
      />
      <Reset resetScores={resetScoresHandler} />
    </Collapse>
  );
};

export default Calculator;
