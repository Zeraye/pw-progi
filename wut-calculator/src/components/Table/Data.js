import React, { useState, useEffect } from "react";

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

const FAV = (
  <button className={`btn btn-dark ${classes.fav__button}`}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-star-fill"
      viewBox="0 0 16 16"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  </button>
);

const NOTFAV = (
  <button className={`btn btn-dark ${classes.fav__button}`}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-star"
      viewBox="0 0 16 16"
    >
      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
    </svg>
  </button>
);

const Data = (props) => {
  const [majors, setMajors] = useState(props.majors);
  const [ascending, setAscending] = useState(-1);

  useEffect(() => {
    setMajors(props.majors);
  }, [props.majors]);

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
        <td>{major.passed ? PASSED : FAILED}</td>
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
              {major.score}/{major.thold[props.year]}
            </div>
            <p className={`mb-0 ${classes.major__type}`}>{props.year}</p>
          </div>
        </td>
        <td>{major.spots}</td>
        <td>{major.lang === "pl" ? PL : ENG}</td>
        <td>{major.loc === "warsaw" ? WARSAW : PLOCK}</td>
        <td onClick={() => props.updateFavMajors(major.id)}>
          {major.fav ? FAV : NOTFAV}
        </td>
      </tr>
    );
  });

  if (majors.length === 0) {
    majors_list = (
      <tr>
        <td colSpan="8">Brak pasujących kierunków.</td>
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
            <th></th>
          </tr>
        </thead>
        <tbody>{majors_list}</tbody>
      </table>
    </div>
  );
};

export default Data;
