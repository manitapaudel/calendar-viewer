import { useState } from "react";

import "./__styles.scss";

const Day = ({ today, day }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <span
      className={`day ${today && today === day ? "today" : ""}`}
      onClick={handleShowModal}
    >
      <span className="text">{day}</span>
    </span>
  );
};

export default Day;
