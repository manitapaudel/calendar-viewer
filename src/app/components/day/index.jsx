import { useState } from "react";

import Modal from "@/app/modal";
import "./__styles.scss";
import { getLocalStorage, getRandomColor, getReadableDate } from "@/app/utils";

const Day = ({ today, day, currentMonth, currentYear }) => {
  const [showModal, setShowModal] = useState(false);

  const readableDate = getReadableDate(day, currentMonth, currentYear);
  const events = getLocalStorage("events", []);

  const eventOfTheDay = events.find(
    (event) => event.createdDate === readableDate
  );

  const randomColor = getRandomColor();

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
        style={{
          backgroundColor:
            day && eventOfTheDay !== undefined ? randomColor : "",
        }}
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
