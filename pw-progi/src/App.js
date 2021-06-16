import Calculator from "./components/Calculator/Calculator";
// import MajorsList from "./components/Majors/MajorsList";

import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles["container"]}>
      <Calculator />
      {/* <MajorsList /> */}
    </div>
  );
};

export default App;
