import React from "react";

import ListItem from "./ListItem";

const List = (props) => {
  const getName = (value) => {
    if (value.substring(0, 3) === "mth") {
      return "Matematyka";
    }
    if (value.substring(0, 3) === "phy") {
      return "Fizyka";
    }
    if (value.substring(0, 3) === "chm") {
      return "Chemia";
    }
    if (value.substring(0, 2) === "cs") {
      return "Informatyka";
    }
    if (value.substring(0, 3) === "bio") {
      return "Biologia";
    }
    if (value.substring(0, 3) === "pol") {
      return "Język Polski";
    }
    if (value.substring(0, 3) === "geo") {
      return "Geografia";
    }
    if (value.substring(0, 3) === "civ") {
      return "WOS";
    }
    if (value.substring(0, 3) === "his") {
      return "Historia";
    }
    if (value.substring(0, 3) === "eng") {
      return "Język Angielski";
    }
    if (value.substring(0, 3) === "fra") {
      return "Język Francuski";
    }
    if (value.substring(0, 3) === "esp") {
      return "Język Hiszpański";
    }
    if (value.substring(0, 3) === "ger") {
      return "Język Niemiecki";
    }
    if (value.substring(0, 3) === "rus") {
      return "Język Rosyjski";
    }
    if (value.substring(0, 3) === "ita") {
      return "Język Włoski";
    }
    return;
  };

  const getLevel = (value) => {
    if (value.slice(value.length - 3) === "bsc") {
      return "pod.";
    }
    return "roz.";
  };

  let item_list = props.subs.map((sub) => {
    return (
      <ListItem
        name={getName(sub.value)}
        level={getLevel(sub.value)}
        score={sub.score}
        key={sub.value}
      />
    );
  });

  if (props.subs.length === 0) {
    item_list = <p className="text-center">Brak dodanych przedmiotów.</p>;
  }

  return <ul className="list-group">{item_list}</ul>;
};

export default List;
