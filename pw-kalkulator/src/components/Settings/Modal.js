import React from "react";

import Checkbox from "./Checkbox";

import classes from "./Modal.module.css";

const Modal = () => {
  return (
    <div
      class={`modal fade`}
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class={`modal-content ${classes.customModal}`}>
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Ustawienia
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Zamknij"
            ></button>
          </div>
          <div class="modal-body">
            <Checkbox value={0} text={"Zapisuj procenty"} />
            <Checkbox value={1} text={"Zapisuj ulubione kierunki"} />
            <Checkbox value={2} text={"Zapisuj rok progów"} />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Zamknij
            </button>
            <button
              type="button"
              class="btn btn-success"
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
