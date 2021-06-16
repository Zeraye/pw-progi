import CalculatorSubjectAdd from "./CalculatorSubjectAdd";
import CalculatorSubjectList from "./CalculatorSubjectList";

import styles from "./Calculator.module.css";

const Calculator = () => {
  const subjects = [
    {
      name: "Matematyka",
      level: "p. rozszerzony",
      score: 100,
      id: 0,
    },
    {
      name: "Fizyka",
      level: "p. rozszerzony",
      score: 90,
      id: 1,
    },
    {
      name: "Angielski",
      level: "p. rozszerzony",
      score: 80,
      id: 2,
    },
  ];

  return (
    <div className={styles.calculator}>
      <CalculatorSubjectAdd />
      <CalculatorSubjectList subjects={subjects} />
    </div>
  );
};

export default Calculator;
