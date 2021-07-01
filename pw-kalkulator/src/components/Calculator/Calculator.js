import React from "react";

import Collapse from "../UI/Collapse/Collapse";
import Select from "./Select";
import List from "./List";

const Calculator = (props) => {
  const updateSubs = (sub, score) => {
    props.updateSubs(sub, score);
  };

  return (
    <Collapse
      buttonName="Kalkulator"
      collapseId="collapseCalculator"
      ariaControls="Włącz kalkulator"
    >
      <Select updateSubs={updateSubs} />
      <List subs={props.subs} />
    </Collapse>
  );
};

export default Calculator;
