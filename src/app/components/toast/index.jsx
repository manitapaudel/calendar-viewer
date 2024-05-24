"use client";

import { CheckIcon, CloseIcon } from "../icons";
import "./styles.scss";

const Toast = ({ message, type }) => {
  const handleClose = () => {};
  return (
    <div className={`toast-container toast-container--${type}`}>
      <div className="message">
        <CheckIcon className="check-icon" />
        {message}
      </div>
      <button className="close-toast" onclick={handleClose}>
        <CloseIcon className="close-icon" />
      </button>
    </div>
  );
};

export default Toast;
