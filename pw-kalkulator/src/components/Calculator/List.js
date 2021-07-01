import React from "react";

import ListItem from "./ListItem";

import classes from "./List.module.css";

const List = () => {
  return (
    <ul className={`list-group ${classes.customList}`}>
      <ListItem name="Matematyka" difficulty="roz." score="96" />
      <ListItem name="Fizyka" difficulty="roz." score="88" />
    </ul>
  );
};

export default List;
