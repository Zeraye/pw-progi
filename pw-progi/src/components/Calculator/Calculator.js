import React, { useState, useEffect } from "react";

import Range from "./Range";

const createColor = (score) => {
  const MAX_SCORE = 225;
  const MAX_RGB_VALUE = 255;

  const RED = Math.floor(MAX_RGB_VALUE - score * (MAX_RGB_VALUE / MAX_SCORE));
  const GREEN = Math.floor(score * (MAX_RGB_VALUE / MAX_SCORE));
  const BLUE = 0;

  return [RED, GREEN, BLUE];
};

const Calculator = (props) => {
  const [math, setMath] = useState(50);
  const [physics, setPhysics] = useState(50);
  const [english, setEnglish] = useState(50);
  const [score, setScore] = useState(0);
  const [color, setColor] = useState([0, 0, 0]);

  useEffect(() => {
    const newScore = Math.floor(math + physics + english / 4);
    setScore(newScore);
    props.updateScore(newScore);
    setColor(createColor(newScore));
  }, [math, physics, english, props]);

  const updateMathHandler = (newValue) => {
    setMath(newValue);
  };

  const updatePhysicsHandler = (newValue) => {
    setPhysics(newValue);
  };

  const updateEnglishHandler = (newValue) => {
    setEnglish(newValue);
  };

  return (
    <React.Fragment>
      <Range
        subject="Matematyka p. rozszerzony"
        score={math}
        updateMath={updateMathHandler}
      />
      <Range
        subject="Fizyka p. rozszerzony"
        score={physics}
        updateMath={updatePhysicsHandler}
      />
      <Range
        subject="Angielski p. rozszerzony"
        score={english}
        updateMath={updateEnglishHandler}
      />
      <h1 className="text-center">
        Punkty: <span style={{ color: `rgb(${color})` }}>{score}</span>
        /225
      </h1>
    </React.Fragment>
  );
};

export default Calculator;
