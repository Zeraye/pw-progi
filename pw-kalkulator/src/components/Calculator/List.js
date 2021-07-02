import React from "react";

import ListItem from "./ListItem";

const List = (props) => {
  const editSubHandler = (sub, score) => {
    props.editSub(sub, score);
  };

  const deleteSubHandler = (sub) => {
    props.deleteSub(sub);
  };

  let item_list = props.subs.map((sub) => {
    return (
      <ListItem
        value={sub.value}
        score={sub.score}
        key={sub.value}
        editSub={editSubHandler}
        deleteSub={deleteSubHandler}
      />
    );
  });

  if (props.subs.length === 0) {
    item_list = <p className="text-center">Brak dodanych przedmiotów.</p>;
  }

  return <ul className="list-group">{item_list}</ul>;
};

export default List;
