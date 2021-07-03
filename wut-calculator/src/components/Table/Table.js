import React, { useState, useEffect } from "react";

import Collapse from "../UI/Collapse/Collapse";
import Filter from "./Filter";
import Data from "./Data";

import data from "../../databases/dbMajors.json";

const MAJORS = data["majors"];

const scoreConverter = (subs, subsRts) => {
  let score = 0;

  let mth = [];
  const mthadv = subs.filter((sub) => sub.value === "mthadv");
  const mthbsc = subs.filter((sub) => sub.value === "mthbsc");

  if (mthadv.length === 1) mth.push(mthadv[0].score * subsRts["mth"] * 1);
  if (mthbsc.length === 1) mth.push(mthbsc[0].score * subsRts["mth"] * 0.5);

  score += Math.max(...mth, 0);

  let sec = [];
  const phyadv = subs.filter((sub) => sub.value === "phyadv");
  const chmadv = subs.filter((sub) => sub.value === "chmadv");
  const csadv = subs.filter((sub) => sub.value === "csadv");
  const bioadv = subs.filter((sub) => sub.value === "bioadv");
  const geoadv = subs.filter((sub) => sub.value === "geoadv");
  const civadv = subs.filter((sub) => sub.value === "civadv");
  const hisadv = subs.filter((sub) => sub.value === "hisadv");
  const poladv = subs.filter((sub) => sub.value === "poladv");
  const polbsc = subs.filter((sub) => sub.value === "polbsc");

  if (phyadv.length === 1) sec.push(phyadv[0].score * subsRts["phy"] * 1);
  if (chmadv.length === 1) sec.push(chmadv[0].score * subsRts["chm"] * 1);
  if (csadv.length === 1) sec.push(csadv[0].score * subsRts["cs"] * 1);
  if (bioadv.length === 1) sec.push(bioadv[0].score * subsRts["bio"] * 1);
  if (geoadv.length === 1) sec.push(geoadv[0].score * subsRts["geo"] * 1);
  if (civadv.length === 1) sec.push(civadv[0].score * subsRts["civ"] * 1);
  if (hisadv.length === 1) sec.push(hisadv[0].score * subsRts["his"] * 1);
  if (poladv.length === 1) sec.push(poladv[0].score * subsRts["pol"] * 1);
  if (polbsc.length === 1) sec.push(polbsc[0].score * subsRts["pol"] * 0.5);

  score += Math.max(...sec, 0);

  let fl = [];

  const engadv = subs.filter((sub) => sub.value === "engadv");
  const fraadv = subs.filter((sub) => sub.value === "fraadv");
  const spaadv = subs.filter((sub) => sub.value === "spaadv");
  const geradv = subs.filter((sub) => sub.value === "geradv");
  const rusadv = subs.filter((sub) => sub.value === "rusadv");
  const itaadv = subs.filter((sub) => sub.value === "itaadv");
  const engbsc = subs.filter((sub) => sub.value === "engbsc");
  const frabsc = subs.filter((sub) => sub.value === "frabsc");
  const spabsc = subs.filter((sub) => sub.value === "spabsc");
  const gerbsc = subs.filter((sub) => sub.value === "gerbsc");
  const rusbsc = subs.filter((sub) => sub.value === "rusbsc");
  const itabsc = subs.filter((sub) => sub.value === "itabsc");

  if (engadv.length === 1) fl.push(engadv[0].score * subsRts["fl"] * 1);
  if (fraadv.length === 1) fl.push(fraadv[0].score * subsRts["fl"] * 1);
  if (spaadv.length === 1) fl.push(spaadv[0].score * subsRts["fl"] * 1);
  if (geradv.length === 1) fl.push(geradv[0].score * subsRts["fl"] * 1);
  if (rusadv.length === 1) fl.push(rusadv[0].score * subsRts["fl"] * 1);
  if (itaadv.length === 1) fl.push(itaadv[0].score * subsRts["fl"] * 1);
  if (engbsc.length === 1) fl.push(engbsc[0].score * subsRts["fl"] * 0.5);
  if (frabsc.length === 1) fl.push(frabsc[0].score * subsRts["fl"] * 0.5);
  if (spabsc.length === 1) fl.push(spabsc[0].score * subsRts["fl"] * 0.5);
  if (gerbsc.length === 1) fl.push(gerbsc[0].score * subsRts["fl"] * 0.5);
  if (rusbsc.length === 1) fl.push(rusbsc[0].score * subsRts["fl"] * 0.5);
  if (itabsc.length === 1) fl.push(itabsc[0].score * subsRts["fl"] * 0.5);

  score += Math.max(...fl, 0);

  return Math.round(score);
};

const Table = (props) => {
  const [majors, setMajors] = useState(MAJORS);
  const [year, setYear] = useState("2020");
  const [fav, setFav] = useState(false);
  const [favMajors, setFavMajors] = useState([]);
  const [engi, setEngi] = useState(true);
  const [bach, setBach] = useState(true);
  const [passed, setPassed] = useState(true);
  const [failed, setFailed] = useState(true);
  const [pol, setPol] = useState(true);
  const [eng, setEng] = useState(true);
  const [war, setWar] = useState(true);
  const [plo, setPlo] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("saveMajors") === "true") {
      if (JSON.parse(localStorage.getItem("majors")) !== null) {
        setFavMajors(JSON.parse(localStorage.getItem("majors")));
      }
    } else {
      localStorage.removeItem("majors");
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("saveMajors") === "true") {
      localStorage.setItem("majors", JSON.stringify(favMajors));
    } else {
      localStorage.removeItem("majors");
    }
  }, [favMajors]);

  const updateYearHandler = (newYear) => {
    setYear(newYear);
  };

  const updateFavHandler = () => {
    setFav(!fav);
  };

  const updateEngiHandler = () => {
    setEngi(!engi);
  };

  const updateBachHandler = () => {
    setBach(!bach);
  };

  const updatePassedHandler = () => {
    setPassed(!passed);
  };

  const updateFailedHandler = () => {
    setFailed(!failed);
  };

  const updatePolHandler = () => {
    setPol(!pol);
  };

  const updateEngHandler = () => {
    setEng(!eng);
  };

  const updateWarHandler = () => {
    setWar(!war);
  };

  const updatePloHandler = () => {
    setPlo(!plo);
  };

  const updateFavMajorsHandler = (newFavMajorId) => {
    setFavMajors((prevFavMajors) => [...prevFavMajors, newFavMajorId]);
  };

  useEffect(() => {
    let tempMajors = MAJORS;

    tempMajors = tempMajors.map((major) => {
      major["score"] = scoreConverter(props.scores, major.subs);
      return major;
    });

    tempMajors = tempMajors.map((major) => {
      major["passed"] = major.score >= major.thold[year];
      return major;
    });

    tempMajors = tempMajors.map((major) => {
      if (favMajors.includes(major.id)) major["fav"] = true;
      return major;
    });

    tempMajors = tempMajors.filter((major) => major.thold[year] !== "");

    if (!engi)
      tempMajors = tempMajors.filter((major) => major.type !== "engineering");

    if (!bach)
      tempMajors = tempMajors.filter((major) => major.type !== "bachelor");

    if (!passed)
      tempMajors = tempMajors.filter((major) => major.passed !== true);

    if (!failed)
      tempMajors = tempMajors.filter((major) => major.passed !== false);

    if (!pol) tempMajors = tempMajors.filter((major) => major.lang !== "pl");

    if (!eng) tempMajors = tempMajors.filter((major) => major.lang !== "eng");

    if (!war) tempMajors = tempMajors.filter((major) => major.loc !== "warsaw");

    if (!plo) tempMajors = tempMajors.filter((major) => major.loc !== "plock");

    if (fav) tempMajors = tempMajors.filter((major) => major.fav === true);

    setMajors(tempMajors);
  }, [
    props.scores,
    year,
    fav,
    favMajors,
    engi,
    bach,
    failed,
    passed,
    pol,
    eng,
    war,
    plo,
  ]);

  return (
    <Collapse
      buttonName="Tabela"
      collapseId="collapseTable"
      ariaControls="Włącz tabele"
    >
      <Filter
        updateYear={updateYearHandler}
        year={year}
        updateFav={updateFavHandler}
        fav={fav}
        updateEngi={updateEngiHandler}
        engi={engi}
        updateBach={updateBachHandler}
        bach={bach}
        updatePassed={updatePassedHandler}
        passed={passed}
        updateFailed={updateFailedHandler}
        failed={failed}
        updatePol={updatePolHandler}
        pol={pol}
        updateEng={updateEngHandler}
        eng={eng}
        updateWar={updateWarHandler}
        war={war}
        updatePlo={updatePloHandler}
        plo={plo}
      />
      <Data
        majors={majors}
        year={year}
        updateFavMajors={updateFavMajorsHandler}
      />
    </Collapse>
  );
};

export default Table;
