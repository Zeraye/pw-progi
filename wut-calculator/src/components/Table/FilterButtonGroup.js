import React from "react";

const FilterButtonGroup = (props) => {
  return (
    <div className="col-md-auto mb-3 d-flex justify-content-center">
      <div className="btn-group" role="group">
        {props.children}
      </div>
    </div>
  );
};

export default FilterButtonGroup;
