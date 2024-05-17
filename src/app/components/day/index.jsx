import { useState } from "react";

import "./__styles.scss";
import Modal from "@/app/modal";

const Day = ({ today, day }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    if (day !== "") {
      setShowModal(true);
    }
  };

  return (
    <>
      <span
        className={`day ${today && today === day ? "today" : ""} ${
          day !== "" ? "border" : ""
        }`}
        onClick={handleShowModal}
      >
        <span className="text">{day}</span>
      </span>
      {showModal ? <Modal setShowModal={setShowModal} /> : ""}
    </>
  );
};

export default Day;
