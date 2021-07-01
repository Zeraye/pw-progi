import React from "react";

import classes from "./Select.module.css";

const Select = () => {
  return (
    <div className="input-group mb-2">
      <select
        className={`form-select btn-dark ${classes.select}`}
        aria-label="Wybierz przedmiot"
      >
        <option style={{ display: "none" }}>Wybierz przedmiot</option>
        <option value="mthadv">Matematyka p. podstawowy</option>
        <option value="engadv">Angielski p. Rozszerzony</option>
        <option value="phyadv">Fizyka p. Rozszerzony</option>
      </select>
      <div className="input-group-append">
        <button className="btn btn-dark" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-lg"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Select;
