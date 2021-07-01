import React from "react";

import Collapse from "../UI/Collapse/Collapse";
import Select from "./Select";
import List from "./List";

const Calculator = () => {
  return (
    <Collapse
      buttonName="Kalkulator"
      collapseId="collapseCalculator"
      ariaControls="Włącz kalkulator"
    >
      <Select />
      <List />
    </Collapse>
  );
};

export default Calculator;
