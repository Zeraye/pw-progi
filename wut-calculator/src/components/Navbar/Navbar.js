import React from "react";

import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-2">
      <div className="container-fluid justify-content-center">
        <span className={`navbar-brand mb-0 h1 ${classes.navbar__header}`}>
          <span>PW</span>Kalkulator
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
