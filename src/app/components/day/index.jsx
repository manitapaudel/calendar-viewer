import { useEffect, useState } from "react";

import Modal from "@/app/modal";
import { getLocalStorage, getReadableDate } from "@/app/utils";
import "./__styles.scss";

const Day = ({ today, day, currentMonth, currentYear }) => {
  const [showModal, setShowModal] = useState(false);
  const [eventStyle, setEventStyle] = useState(null);

  const readableDate = getReadableDate(day, currentMonth, currentYear);
  const events = getLocalStorage("events", []);

  const eventOfTheDay = events?.find(
    (event) => event.createdDate === readableDate
  );

  useEffect(() => {
    // Set the style after the component has mounted on the client
    setEventStyle(
      day && eventOfTheDay !== undefined
        ? { backgroundColor: "rgb(207, 74, 185)", color: "white" }
        : {}
    );
  }, [day, eventOfTheDay]);

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
        style={eventStyle}
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
