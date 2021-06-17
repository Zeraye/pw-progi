import Calculator from "./components/Calculator/Calculator";
// import MajorsList from "./components/Majors/MajorsList";

import styles from "./App.module.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className={styles["container"]}>
      <Calculator />
      {/* <MajorsList /> */}
    </div>
  );
};

export default App;
