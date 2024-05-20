import { useEffect, useState } from "react";

import { getLocalStorage, getReadableDate } from "@/app/utils";
import Modal from "@/app/components/modal";
import EventDrawer from "@/app/components/event-drawer";
import EventCard from "../event-card";
import "./styles.scss";

const Day = ({ today, day, currentMonth, currentYear }) => {
  const [showModalOrEvent, setShowModalOrEvent] = useState(false);
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
        ? { backgroundColor: eventOfTheDay.eventColor, color: "white" }
        : {}
    );
  }, [day]);

  const handleShowModal = () => {
    if (day !== "") {
      setShowModalOrEvent(true);
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
      {showModalOrEvent &&
        (eventOfTheDay !== undefined ? (
          <EventDrawer
            event={eventOfTheDay}
            setShowDrawer={setShowModalOrEvent}
          />
        ) : (
          <Modal
            setShowModal={setShowModalOrEvent}
            day={day}
            currentMonth={currentMonth}
            currentYear={currentYear}
          />
        ))}
    </>
  );
};

export default Day;
