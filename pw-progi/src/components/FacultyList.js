import { useState } from "react";

let sortUp = 1;

const FacultyList = (props) => {
  const [year, setYear] = useState("2019");
  const [fav, setFav] = useState(false);
  const [faculties, setFaculties] = useState(props.faculties);

  const updateYearHandler = (event) => {
    setYear(event.target.innerText);
  };

  const updateFavHandler = (event) => {
    if (event.target.innerText === "Wszystkie") {
      setFav(false);
    }
    if (event.target.innerText === "Ulubione") {
      setFav(true);
    }
  };

  const updateFacultiesHandler = (event) => {
    faculties.map((faculty) => {
      if (faculty.key === event.target.value) {
        faculty.favFac = !faculty.favFac;
      }
      return faculty;
    });
    setFaculties((faculties) => [...faculties]);
  };

  const requestSort = (key) => {
    console.log("sorting...");
    if (key === "threshold") {
      console.log("próg");
      if (year === "2017") {
        key = "pts2017";
      }
      if (year === "2018") {
        key = "pts2018";
      }
      if (year === "2019") {
        key = "pts2019";
      }
      if (year === "2020") {
        key = "pts2020";
      }
      faculties.sort((a, b) => {
        if (+a[key] > +b[key]) {
          return 1 * sortUp;
        }
        if (+a[key] < +b[key]) {
          return -1 * sortUp;
        }
        return 0;
      });
    } else {
      faculties.sort((a, b) => {
        if (a[key] > b[key]) {
          return 1 * sortUp;
        }
        if (a[key] < b[key]) {
          return -1 * sortUp;
        }
        return 0;
      });
    }

    sortUp *= -1;

    setFaculties((faculties) => [...faculties]);
    console.log("sorting ended");
  };

  if (
    fav === true &&
    faculties.filter((faculty) => faculty.favFac === true).length === 0
  ) {
    return (
      <>
        <div className="btn-group float-start p-3" role="group">
          <button
            className={`btn ${
              fav === false ? "btn-secondary" : "btn-outline-secondary"
            }`}
            type="button"
            onClick={updateFavHandler}
          >
            Wszystkie
          </button>
          <button
            className={`btn ${
              fav === true ? "btn-secondary" : "btn-outline-secondary"
            }`}
            type="button"
            onClick={updateFavHandler}
          >
            Ulubione
          </button>
        </div>

        <div className="btn-group float-end p-3" role="group">
          <button
            className={`btn ${
              year === "2017" ? "btn-secondary" : "btn-outline-secondary"
            }`}
            type="button"
            onClick={updateYearHandler}
          >
            2017
          </button>
          <button
            className={`btn ${
              year === "2018" ? "btn-secondary" : "btn-outline-secondary"
            }`}
            type="button"
            onClick={updateYearHandler}
          >
            2018
          </button>
          <button
            className={`btn ${
              year === "2019" ? "btn-secondary" : "btn-outline-secondary"
            }`}
            type="button"
            onClick={updateYearHandler}
          >
            2019
          </button>
          <button
            className={`btn ${
              year === "2020" ? "btn-secondary" : "btn-outline-secondary"
            }`}
            type="button"
            onClick={updateYearHandler}
          >
            2020
          </button>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Kierunek</th>
              <th>Wydział</th>
              <th>Próg</th>
              <th></th>
            </tr>
          </thead>
        </table>
        <p className="text-center">Brak ulubionych kierunków.</p>
      </>
    );
  }

  return (
    <>
      <div className="btn-group float-start p-3" role="group">
        <button
          className={`btn ${
            fav === false ? "btn-secondary" : "btn-outline-secondary"
          }`}
          type="button"
          onClick={updateFavHandler}
        >
          Wszystkie
        </button>
        <button
          className={`btn ${
            fav === true ? "btn-secondary" : "btn-outline-secondary"
          }`}
          type="button"
          onClick={updateFavHandler}
        >
          Ulubione
        </button>
      </div>

      <div className="btn-group float-end p-3" role="group">
        <button
          className={`btn ${
            year === "2017" ? "btn-secondary" : "btn-outline-secondary"
          }`}
          type="button"
          onClick={updateYearHandler}
        >
          2017
        </button>
        <button
          className={`btn ${
            year === "2018" ? "btn-secondary" : "btn-outline-secondary"
          }`}
          type="button"
          onClick={updateYearHandler}
        >
          2018
        </button>
        <button
          className={`btn ${
            year === "2019" ? "btn-secondary" : "btn-outline-secondary"
          }`}
          type="button"
          onClick={updateYearHandler}
        >
          2019
        </button>
        <button
          className={`btn ${
            year === "2020" ? "btn-secondary" : "btn-outline-secondary"
          }`}
          type="button"
          onClick={updateYearHandler}
        >
          2020
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th className="header" onClick={() => requestSort("major")}>
              Kierunek
            </th>
            <th className="header" onClick={() => requestSort("faculty")}>
              Wydział
            </th>
            <th className="header" onClick={() => requestSort("threshold")}>
              Próg
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {faculties.map((faculty) => {
            if (fav === false) {
              let threshold = 0;
              if (year === "2017") {
                threshold = faculty.pts2017;
              } else if (year === "2018") {
                threshold = faculty.pts2018;
              } else if (year === "2019") {
                threshold = faculty.pts2019;
              } else if (year === "2020") {
                threshold = faculty.pts2020;
              }
              if (threshold === "") {
                return undefined;
              }
              return (
                <tr
                  key={faculty.key}
                  className={`${
                    +props.pts >= +threshold ? "table-success" : "table-danger"
                  }`}
                >
                  <th>{faculty.major}</th>
                  <td>{faculty.faculty}</td>
                  <td>{threshold}</td>
                  <td>
                    <button
                      className={`btn ${
                        faculty.favFac === true
                          ? "btn-secondary"
                          : "btn-outline-secondary"
                      }`}
                      type="button"
                      value={faculty.key}
                      onClick={updateFacultiesHandler}
                    >
                      ★
                    </button>
                  </td>
                </tr>
              );
            }
            if (fav === true) {
              if (faculty.favFac === true) {
                let threshold = 0;
                if (year === "2017") {
                  threshold = faculty.pts2017;
                } else if (year === "2018") {
                  threshold = faculty.pts2018;
                } else if (year === "2019") {
                  threshold = faculty.pts2019;
                } else if (year === "2020") {
                  threshold = faculty.pts2020;
                }
                if (threshold === "") {
                  return undefined;
                }
                return (
                  <tr
                    key={faculty.key}
                    className={`${
                      +props.pts >= +threshold
                        ? "table-success"
                        : "table-danger"
                    }`}
                  >
                    <th>{faculty.major}</th>
                    <td>{faculty.faculty}</td>
                    <td>{threshold}</td>
                    <td>
                      <button
                        className={`btn ${
                          faculty.favFac === true
                            ? "btn-secondary"
                            : "btn-outline-secondary"
                        }`}
                        type="button"
                        value={faculty.key}
                        onClick={updateFacultiesHandler}
                      >
                        ★
                      </button>
                    </td>
                  </tr>
                );
              }
            }
            return undefined;
          })}
        </tbody>
      </table>
    </>
  );
};

export default FacultyList;
