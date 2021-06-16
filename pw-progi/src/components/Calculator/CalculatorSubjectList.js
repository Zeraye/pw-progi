import CalculatorSubjectItem from "./CalculatorSubjectItem";

import styles from "./CalculatorSubjectList.module.css";

const CalculatorSubjectList = (props) => {
  return (
    <div className={styles["subject-list"]}>
      {props.subjects.map((subject) => (
        <CalculatorSubjectItem
          name={subject.name}
          level={subject.level}
          score={subject.score}
        />
      ))}
    </div>
  );
};

export default CalculatorSubjectList;
