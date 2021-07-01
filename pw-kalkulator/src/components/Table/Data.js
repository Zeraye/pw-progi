import React, { useState } from "react";

import TableHeader from "./TableHeader";

import classes from "./Data.module.css";

const ENGINEERING = "inżynierskie";

const BACHELOR = "licencjackie";

const PL = "Polski";

const ENG = "Angielski";

const WARSAW = "Warszawa";

const PLOCK = "Płock";

const PASSED = <div className={`${classes.circle} ${classes.passed}`}></div>;

const FAILED = <div className={`${classes.circle} ${classes.failed}`}></div>;

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

  return score;
};

const Data = (props) => {
  const tempMajors = props.majors.map((major) => {
    major["passed"] =
      scoreConverter(props.subs, major.subs) >= major.thold[props.year];
    return major;
  });

  const [majors, setMajors] = useState(tempMajors);
  const [ascending, setAscending] = useState(-1);

  const requestSortString = (key) => {
    majors.sort((a, b) => {
      if (a[key] > b[key]) return ascending;

      if (a[key] < b[key]) return -ascending;

      return 0;
    });

    setAscending(-ascending);

    setMajors((majors) => [...majors]);
  };

  const requestSortNumber = (key) => {
    majors.sort((a, b) => {
      if (+a[key][props.year] > +b[key][props.year]) return ascending;

      if (+a[key][props.year] < +b[key][props.year]) return -ascending;

      return 0;
    });

    setAscending(-ascending);

    setMajors((majors) => [...majors]);
  };

  let majors_list = majors.map((major) => {
    return (
      <tr key={major.id}>
        <td>
          {scoreConverter(props.subs, major.subs) >= major.thold[props.year]
            ? PASSED
            : FAILED}
        </td>
        <td>
          <div>
            <div>{major.major}</div>
            <p className={`mb-0 ${classes.major__type}`}>
              {major.type === "engineering" ? ENGINEERING : BACHELOR}
            </p>
          </div>
        </td>
        <td>{major.faculty}</td>
        <td>
          <div>
            <div>
              {scoreConverter(props.subs, major.subs)}/{major.thold[props.year]}
            </div>
            <p className={`mb-0 ${classes.major__type}`}>{props.year}</p>
          </div>
        </td>
        <td>{major.spots}</td>
        <td>{major.lang === "pl" ? PL : ENG}</td>
        <td>{major.loc === "warsaw" ? WARSAW : PLOCK}</td>
      </tr>
    );
  });

  if (majors.length === 0) {
    majors_list = (
      <tr>
        <td colSpan="7">Brak pasujących kierunków.</td>
      </tr>
    );
  }

  return (
    <div className="table-responsive">
      <table className="table table-dark table-hover table-striped align-middle text-center">
        <thead>
          <tr className="text-center align-middle">
            <th></th>
            <TableHeader
              name="Kierunki"
              sortFunc={requestSortString}
              sortType="major"
            />
            <TableHeader
              name="Wydziały"
              sortFunc={requestSortString}
              sortType="faculty"
            />
            <TableHeader
              name="Wynik/próg"
              sortFunc={requestSortNumber}
              sortType="thold"
            />
            <TableHeader
              name="Miejsca"
              sortFunc={requestSortString}
              sortType="spots"
            />
            <TableHeader
              name="Język"
              sortFunc={requestSortString}
              sortType="lang"
            />
            <TableHeader
              name="Miasto"
              sortFunc={requestSortString}
              sortType="loc"
            />
          </tr>
        </thead>
        <tbody>{majors_list}</tbody>
      </table>
    </div>
  );
};

export default Data;
