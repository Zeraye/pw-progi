import React from "react";

import Collapse from "../UI/Collapse/Collapse";

const Calculator = () => {
  return (
    <Collapse
      buttonName="Kalkulator"
      collapseId="collapseCalculator"
      ariaControls="Włącz kalkulator"
    >
      Kalkulator...
    </Collapse>
  );
};

export default Calculator;
