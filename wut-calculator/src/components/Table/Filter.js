import React from "react";

import classes from "./Filter.module.css";

import FilterButton from "./FilterButton";
import FilterButtonGroup from "./FilterButtonGroup";

const PASSED = <div className={`${classes.circle} ${classes.passed}`}></div>;

const FAILED = <div className={`${classes.circle} ${classes.failed}`}></div>;

const Filter = (props) => {
  const updateYearHandler = (event) => {
    props.updateYear(event.target.innerText);
  };

  const updateFavHandler = (event) => {
    props.updateFav();
  };

  const updateEngiHandler = (event) => {
    props.updateEngi();
  };

  const updateBachHandler = (event) => {
    props.updateBach();
  };

  const updatePassedHandler = (event) => {
    props.updatePassed();
  };

  const updateFailedHandler = (event) => {
    props.updateFailed();
  };

  const updatePolHandler = (event) => {
    props.updatePol();
  };

  const updateEngHandler = (event) => {
    props.updateEng();
  };

  const updateWarHandler = (event) => {
    props.updateWar();
  };

  const updatePloHandler = (event) => {
    props.updatePlo();
  };

  return (
    <div className="row justify-content-md-center">
      <FilterButtonGroup>
        <FilterButton active={!props.fav} onClick={updateFavHandler}>
          Wszystkie
        </FilterButton>
        <FilterButton active={props.fav} onClick={updateFavHandler}>
          Ulubione
        </FilterButton>
      </FilterButtonGroup>
      <FilterButtonGroup>
        <FilterButton active={props.engi} onClick={updateEngiHandler}>
          Inżynierskie
        </FilterButton>
        <FilterButton active={props.bach} onClick={updateBachHandler}>
          Licencjackie
        </FilterButton>
      </FilterButtonGroup>
      <FilterButtonGroup>
        <FilterButton active={props.passed} onClick={updatePassedHandler}>
          {PASSED}
        </FilterButton>
        <FilterButton active={props.failed} onClick={updateFailedHandler}>
          {FAILED}
        </FilterButton>
      </FilterButtonGroup>
      <FilterButtonGroup>
        <FilterButton active={props.pol} onClick={updatePolHandler}>
          Polski
        </FilterButton>
        <FilterButton active={props.eng} onClick={updateEngHandler}>
          Angielski
        </FilterButton>
      </FilterButtonGroup>
      <FilterButtonGroup>
        <FilterButton active={props.war} onClick={updateWarHandler}>
          Warszawa
        </FilterButton>
        <FilterButton active={props.plo} onClick={updatePloHandler}>
          Płock
        </FilterButton>
      </FilterButtonGroup>
      <FilterButtonGroup>
        <FilterButton
          active={props.year === "2017"}
          onClick={updateYearHandler}
        >
          2017
        </FilterButton>
        <FilterButton
          active={props.year === "2018"}
          onClick={updateYearHandler}
        >
          2018
        </FilterButton>
        <FilterButton
          active={props.year === "2019"}
          onClick={updateYearHandler}
        >
          2019
        </FilterButton>
        <FilterButton
          active={props.year === "2020"}
          onClick={updateYearHandler}
        >
          2020
        </FilterButton>
      </FilterButtonGroup>
    </div>
  );
};

export default Filter;
