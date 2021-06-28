import React, { useState, useEffect } from "react";

import Range from "./Range";

const componentToHex = (c) => {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};

const rgbToHex = (r, g, b) => {
  return componentToHex(r) + componentToHex(g) + componentToHex(b);
};

const createColor = (score) => {
  const red = Math.floor(255 - score * (17 / 15));
  const green = Math.floor(score * (17 / 15));
  const blue = 0;
  return rgbToHex(red, green, blue);
};

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
        Punkty: <span style={{ color: `#${color}` }}>{score}</span>/225
      </h1>
    </React.Fragment>
  );
};

export default Calculator;
