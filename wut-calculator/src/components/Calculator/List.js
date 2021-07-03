import React from "react";

import ListItem from "./ListItem";

const List = (props) => {
  const updateScoresHandler = (subjectName, subjectScore) => {
    props.updateScores(subjectName, subjectScore);
  };

  const deleteScoreHandler = (subjectName) => {
    props.deleteScore(subjectName);
  };

  let itemList = props.scores.map((subject) => {
    return (
      <ListItem
        name={subject.name}
        score={subject.score}
        key={subject.name}
        updateScores={updateScoresHandler}
        deleteScore={deleteScoreHandler}
      />
    );
  });

  if (props.scores.length === 0) {
    itemList = <p className="text-center">Brak dodanych przedmiotów.</p>;
  }

  return <ul className="list-group mb-2">{itemList}</ul>;
};

export default List;
