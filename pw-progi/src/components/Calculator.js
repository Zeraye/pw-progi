import React, { useState, useEffect } from "react";

const Calculator = (props) => {
  const [math, setMath] = useState("");
  const [physics, setPhysics] = useState("");
  const [english, setEnglish] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("math") != null) {
      setMath(localStorage.getItem("math"));
    }

    if (localStorage.getItem("physics") != null) {
      setPhysics(localStorage.getItem("physics"));
    }

    if (localStorage.getItem("english") != null) {
      setEnglish(localStorage.getItem("english"));
    }

    if (localStorage.getItem("scoreCalculator") != null) {
      setEnglish(localStorage.getItem("scoreCalculator"));
    }
  }, []);

  const updateMath = (event) => {
    let filteredSubjectScore = event.target.value;

    if (+event.target.value < 0 || isNaN(+event.target.value) === true) {
      filteredSubjectScore = 0;
    }

    if (+event.target.value > 100) {
      filteredSubjectScore = 100;
    }

    setMath(filteredSubjectScore);
    updateScore([filteredSubjectScore, physics, english]);
    localStorage.setItem("math", filteredSubjectScore.toString());
  };

  const updatePhysics = (event) => {
    let filteredSubjectScore = event.target.value;

    if (+event.target.value < 0 || isNaN(+event.target.value) === true) {
      filteredSubjectScore = 0;
    }

    if (+event.target.value > 100) {
      filteredSubjectScore = 100;
    }

    setPhysics(filteredSubjectScore);
    updateScore([math, filteredSubjectScore, english]);
    localStorage.setItem("physics", filteredSubjectScore.toString());
  };

  const updateEnglish = (event) => {
    let filteredSubjectScore = event.target.value;

    if (+event.target.value < 0 || isNaN(+event.target.value) === true) {
      filteredSubjectScore = 0;
    }

    if (+event.target.value > 100) {
      filteredSubjectScore = 100;
    }

    setEnglish(filteredSubjectScore);
    updateScore([math, physics, filteredSubjectScore]);
    localStorage.setItem("english", filteredSubjectScore.toString());
  };

  const updateScore = ([mathScore, physicsScore, englishScore]) => {
    let math = 0;
    let physics = 0;
    let english = 0;

    const isNumeric = (value) => {
      return /^-?\d+$/.test(value);
    };

    if (isNumeric(mathScore)) {
      math = parseInt(mathScore, 10);
    }

    if (isNumeric(physicsScore)) {
      physics = parseInt(physicsScore, 10);
    }

    if (isNumeric(englishScore)) {
      english = parseInt(englishScore, 10);
    }

    const newScore = math + physics + english * 0.25;

    setScore(newScore);
    props.updateScore(newScore);
    localStorage.setItem("scoreCalculator", newScore.toString());
  };

  return (
    <form>
      <div className="input-group mb-3">
        <span className="input-group-text">Matematyka p. rozszerzony</span>
        <input
          type="text"
          className="form-control"
          aria-label="Wynik maturalny z matematyki rozszerzonej"
          onChange={updateMath}
          value={math}
        />
        <span className="input-group-text">%</span>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Fizyka p. rozszerzony</span>
        <input
          type="text"
          className="form-control"
          aria-label="Wynik maturalny z fizyki rozszerzonej"
          onChange={updatePhysics}
          value={physics}
        />
        <span className="input-group-text">%</span>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Angielski p. rozszerzony</span>
        <input
          type="text"
          className="form-control"
          aria-label="Wynik maturalny z angielskiego rozszerzonego"
          onChange={updateEnglish}
          value={english}
        />
        <span className="input-group-text">%</span>
      </div>
      <h1 className="text-center">Punkty: {score}/225</h1>
    </form>
  );
};

export default Calculator;
