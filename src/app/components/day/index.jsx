import { useState } from "react";

import Modal from "@/app/modal";
import { getLocalStorage, getReadableDate } from "@/app/utils";
import "./__styles.scss";

const Day = ({ today, day, currentMonth, currentYear }) => {
  const [showModal, setShowModal] = useState(false);

  const readableDate = getReadableDate(day, currentMonth, currentYear);
  const events = getLocalStorage("events", []);

  const eventOfTheDay = events.find(
    (event) => event.createdDate === readableDate
  );

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
            day && eventOfTheDay !== undefined ? eventOfTheDay.eventColor : "",
          color: day && eventOfTheDay !== undefined ? "white" : "",
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
