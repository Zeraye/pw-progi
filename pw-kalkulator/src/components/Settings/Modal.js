import React, { useState, useEffect } from "react";

import Checkbox from "./Checkbox";

import classes from "./Modal.module.css";

const Modal = (props) => {
  const [saveScores, setSaveScores] = useState(props.saveScores);
  const [saveMajors, setSaveMajors] = useState(props.saveMajors);

  useEffect(() => {
    setSaveScores(props.saveScores);
    setSaveMajors(props.saveMajors);
  }, [props.saveScores, props.saveMajors]);

  const saveScoresHandler = () => {
    setSaveScores(!saveScores);
  };

  const saveMajorsHandler = () => {
    setSaveMajors(!saveMajors);
  };

  const saveSettingsHandler = () => {
    props.setSaveScores(saveScores);
    props.setSaveMajors(saveMajors);
  };

  const closeSettingsHandler = () => {
    setSaveScores(props.saveScores);
    setSaveMajors(props.saveMajors);
  };

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
              onClick={closeSettingsHandler}
            ></button>
          </div>
          <div className="modal-body">
            <Checkbox
              checked={saveScores}
              text={"Zapisuj wyniki"}
              onClick={saveScoresHandler}
            />
            <Checkbox
              checked={saveMajors}
              text={"Zapisuj ulubione kierunki"}
              onClick={saveMajorsHandler}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={closeSettingsHandler}
            >
              Zamknij
            </button>
            <button
              type="button"
              className="btn btn-success"
              data-bs-dismiss="modal"
              onClick={saveSettingsHandler}
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
