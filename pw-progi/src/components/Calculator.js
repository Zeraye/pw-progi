import { useState } from "react";

const Calculator = (props) => {
  const [math, setMath] = useState("");
  const [physics, setPhysics] = useState("");
  const [english, setEnglish] = useState("");
  const [score, setScore] = useState(0);

  const updateMath = (event) => {
    let filteredSubjectScore = event.target.value;

    if (+event.target.value < 0) {
      filteredSubjectScore = 0;
    }

    if (+event.target.value > 100) {
      filteredSubjectScore = 100;
    }

    setMath(filteredSubjectScore);
    updateScore([filteredSubjectScore, physics, english]);
  };

  const updatePhysics = (event) => {
    let filteredSubjectScore = event.target.value;

    if (+event.target.value < 0) {
      filteredSubjectScore = 0;
    }

    if (+event.target.value > 100) {
      filteredSubjectScore = 100;
    }

    setPhysics(filteredSubjectScore);
    updateScore([math, filteredSubjectScore, english]);
  };

  const updateEnglish = (event) => {
    let filteredSubjectScore = event.target.value;

    if (+event.target.value < 0) {
      filteredSubjectScore = 0;
    }

    if (+event.target.value > 100) {
      filteredSubjectScore = 100;
    }

    setEnglish(filteredSubjectScore);
    updateScore([math, physics, filteredSubjectScore]);
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
  };

  return (
    <>
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
    </>
  );
};

export default Calculator;
