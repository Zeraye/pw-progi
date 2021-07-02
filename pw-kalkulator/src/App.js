import React, { useState, useEffect } from "react";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Announce from "./components/Announce/Announce";
import Calculator from "./components/Calculator/Calculator";
import Table from "./components/Table/Table";
import Settings from "./components/Settings/Settings";

const App = () => {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("saveScores") === "true") {
      if (JSON.parse(localStorage.getItem("scores")) !== null) {
        setSubs(JSON.parse(localStorage.getItem("scores")));
      }
    } else {
      localStorage.removeItem("scores");
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("saveScores") === "true") {
      localStorage.setItem("scores", JSON.stringify(subs));
    } else {
      localStorage.removeItem("scores");
    }
  }, [subs]);

  const updateSubsHandler = (newValue, newScore) => {
    if (subs.filter((sub) => sub.value === newValue).length === 0) {
      setSubs((prevSubs) => [
        ...prevSubs,
        { value: newValue, score: newScore },
      ]);
    } else {
      setSubs((prevSubs) =>
        prevSubs.map((prevSub) => {
          if (prevSub.value === newValue) {
            prevSub.score = newScore;
            return prevSub;
          }
          return prevSub;
        })
      );
    }
  };

  const deleteSubHandler = (newValue) => {
    setSubs(subs.filter((sub) => sub.value !== newValue));
  };

  return (
    <React.Fragment>
      <Navbar />
      <Announce />
      <Calculator
        subs={subs}
        updateSubs={updateSubsHandler}
        deleteSub={deleteSubHandler}
      />
      <Table subs={subs} />
      <Settings />
    </React.Fragment>
  );
};

export default App;
