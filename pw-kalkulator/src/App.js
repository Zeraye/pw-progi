import React from "react";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Calculator from "./components/Calculator/Calculator";
import Table from "./components/Table/Table";
import Settings from "./components/Settings/Settings";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Calculator />
      <Table />
      <Settings />
    </React.Fragment>
  );
};

export default App;
