"use client";

import { CheckIcon, CloseIcon } from "../icons";
import "./styles.scss";

const Toast = ({ message, type, extraClass, setShowToast }) => {
  const handleClose = () => {
    setShowToast(false);
  };

  return (
    <div
      className={`toast-container toast-container--${type} toast-container--${extraClass}`}
    >
      <div className="message">
        <CheckIcon className="check-icon" />
        {message}
      </div>
      <button className="close-toast" onClick={handleClose}>
        <CloseIcon className="close-icon" />
      </button>
    </div>
  );
};

export default Toast;
