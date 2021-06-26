import React from "react";

import Button from "./Button";

const TopBar = (props) => {
  return (
    <React.Fragment>
      <div className="btn-group float-start" role="group">
        <Button
          text="Wszystkie"
          check={props.fav === false}
          updateHandler={props.updateFav}
        />
        <Button
          text="Ulubione"
          check={props.fav === true}
          updateHandler={props.updateFav}
        />
      </div>
      <div className="btn-group float-end" role="group">
        {["2017", "2018", "2019", "2020"].map((yr) => {
          return (
            <Button
              text={yr}
              check={props.year === yr}
              updateHandler={props.updateYear}
              key={yr}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default TopBar;
