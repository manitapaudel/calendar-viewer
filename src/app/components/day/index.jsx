import { useState } from "react";

import "./__styles.scss";
import Modal from "@/app/modal";

const Day = ({ today, day, currentMonth, currentYear }) => {
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
      {showModal ? (
        <Modal
          setShowModal={setShowModal}
          day={day}
          currentMonth={currentMonth}
          currentYear={currentYear}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Day;
