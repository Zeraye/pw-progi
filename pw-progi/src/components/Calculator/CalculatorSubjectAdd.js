import { PlusSquare } from "react-bootstrap-icons";

import styles from "./CalculatorSubjectAdd.module.css";

const CalculatorSubjectAdd = (props) => {
  return (
    <div className={styles["subject-add"]}>
      <select>
        <option value="matematyka-pr">Matematyka p. rozszerzony</option>
        <option value="fizyka-pr">Fizyka p. rozszerzony</option>
        <option value="angielski-pr">Angielski p. rozszerzony</option>
      </select>
      <div className={styles["subject-add__icon"]}>
        <PlusSquare />
      </div>
      <input type="number" autocomplete="off" autocorrect="off" />
    </div>
  );
};

export default CalculatorSubjectAdd;
