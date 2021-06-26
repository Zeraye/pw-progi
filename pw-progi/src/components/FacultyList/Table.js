import React from "react";

const Table = (props) => {
  return (
    <table className="table table-responsive">
      <thead>
        <tr>
          <th className="header" onClick={() => props.requestSort("major")}>
            Kierunek
          </th>
          <th className="header" onClick={() => props.requestSort("faculty")}>
            Wydział
          </th>
          <th
            className="header"
            onClick={() => props.requestSort("pts" + props.year)}
          >
            Próg
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.majors.map((major) => {
          const threshold = major["pts" + props.year];

          if (
            threshold === "" ||
            (props.fav === true && major.favMajor !== true)
          ) {
            return undefined;
          }

          return (
            <tr
              key={major.key}
              className={`table-${
                +props.pts >= +threshold ? "success" : "danger"
              }`}
            >
              <th>{major.major}</th>
              <td>{major.faculty}</td>
              <td>{threshold}</td>
              <td>
                <button
                  className={`btn btn-${
                    major.favMajor === true ? "" : "outline-"
                  }secondary`}
                  type="button"
                  value={major.key}
                  onClick={props.updateMajors}
                >
                  ★
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
