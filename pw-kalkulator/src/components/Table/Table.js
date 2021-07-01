import React from "react";

import Collapse from "../UI/Collapse/Collapse";
import Filter from "./Filter";
import Data from "./Data";

import data from "../../databases/dbMajors.json";

const Table = (props) => {
  const filteredMajors = data["majors"];

  return (
    <Collapse
      buttonName="Tabela"
      collapseId="collapseTable"
      ariaControls="Włącz tabele"
    >
      <Filter />
      <Data majors={filteredMajors} year={"2020"} subs={props.subs} />
    </Collapse>
  );
};

export default Table;
