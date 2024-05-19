import { useState } from "react";

import Modal from "@/app/modal";
import "./__styles.scss";
import { getRandomColor, getReadableDate } from "@/app/utils";

const Day = ({ today, day, currentMonth, currentYear }) => {
  const [showModal, setShowModal] = useState(false);

  const readableDate = getReadableDate(day, currentMonth, currentYear);

  const hasEventOnThisDay = true;
  const randomColor = getRandomColor();

  const handleShowModal = () => {
    if (day !== "") {
      setShowModal(true);
    }
  };

  return (
    <>
      <span
        className={`day ${today && today === day ? "today" : ""}`}
        style={{ backgroundColor: day && hasEventOnThisDay ? randomColor : "" }}
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
