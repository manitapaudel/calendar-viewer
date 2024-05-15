import { useState } from "react";

import "./__styles.scss";

const Day = ({ today, day }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    if (day !== "") {
      setShowModal(true);
    }
  };

  return (
    <span
      className={`day ${today && today === day ? "today" : ""} ${
        day !== "" ? "border" : ""
      }`}
      onClick={handleShowModal}
    >
      <span className="text">{day}</span>
    </span>
  );
};

export default Day;
