import React, { useState, useEffect } from "react";

import Range from "./Range";

const Calculator = (props) => {
  const [math, setMath] = useState(50);
  const [physics, setPhysics] = useState(50);
  const [english, setEnglish] = useState(50);
  const [score, setScore] = useState(0);
  const [color, setColor] = useState("");

  useEffect(() => {
    const newScore = Math.floor(math + physics + 0.25 * english);
    setScore(newScore);
    props.updateScore(newScore);
    if (newScore <= 150) {
      setColor("00a300");
    } else if (newScore <= 175) {
      setColor("f9a602");
    } else if (newScore <= 200) {
      setColor("cc7722");
    } else if (newScore <= 224) {
      setColor("800000");
    } else {
      setColor("ffd700");
    }
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
        Punkty: <span style={{ color: `#${color}` }}>{score}</span>/225
      </h1>
    </React.Fragment>
  );
};

export default Calculator;
