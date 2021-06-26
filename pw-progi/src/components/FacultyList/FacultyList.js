import React, { useState, useEffect } from "react";

import TopBar from "./TopBar";
import Table from "./Table";

const FacultyList = (props) => {
  const [ascending, setAscending] = useState(1);
  const [year, setYear] = useState("2020");
  const [fav, setFav] = useState(false);
  const [majors, setMajors] = useState(props.majors);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("majors")) !== null) {
      setMajors(JSON.parse(localStorage.getItem("majors")));
    }

    if (localStorage.getItem("fav") != null) {
      setFav(localStorage.getItem("fav") === "true");
    }

    if (localStorage.getItem("year") != null) {
      setYear(localStorage.getItem("year"));
    }
  }, []);

  const updateYearHandler = (event) => {
    setYear(event.target.innerText);
    localStorage.setItem("year", event.target.innerText);
  };

  const updateFavHandler = (event) => {
    setFav(event.target.innerText === "Ulubione");
    localStorage.setItem(
      "fav",
      (event.target.innerText === "Ulubione").toString()
    );
  };

  const updateMajorsHandler = (event) => {
    majors.map((major) => {
      if (major.key === event.target.value) {
        major.favMajor = !major.favMajor;
      }
      return major;
    });
    setMajors((majors) => [...majors]);
    localStorage.setItem("majors", JSON.stringify(majors));
  };

  const requestSort = (key) => {
    majors.sort((a, b) => {
      const isNumeric = isNaN(+a[key]) === false && isNaN(+b[key]) === false;

      if (
        (isNumeric === true && +a[key] > +b[key]) ||
        (isNumeric === false && a[key] > b[key])
      ) {
        return ascending;
      }

      if (
        (isNumeric === true && +a[key] < +b[key]) ||
        (isNumeric === false && a[key] < b[key])
      ) {
        return -ascending;
      }

      return 0;
    });

    setAscending(-ascending);

    setMajors((majors) => [...majors]);
  };

  return (
    <React.Fragment>
      <TopBar
        fav={fav}
        updateFav={updateFavHandler}
        year={year}
        updateYear={updateYearHandler}
      />

      <Table
        majors={majors}
        requestSort={requestSort}
        year={year}
        fav={fav}
        updateMajors={updateMajorsHandler}
        pts={props.pts}
      />
    </React.Fragment>
  );
};

export default FacultyList;
