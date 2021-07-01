import React from "react";

import Checkbox from "./Checkbox";

import classes from "./Modal.module.css";

const Modal = () => {
  return (
    <div
      className={`modal fade`}
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className={`modal-content ${classes.customModal}`}>
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Ustawienia
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Zamknij"
            ></button>
          </div>
          <div className="modal-body">
            <Checkbox value={0} text={"Zapisuj procenty"} />
            <Checkbox value={1} text={"Zapisuj ulubione kierunki"} />
            <Checkbox value={2} text={"Zapisuj rok progów"} />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Zamknij
            </button>
            <button
              type="button"
              className="btn btn-success"
              data-bs-dismiss="modal"
            >
              Zapisz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
