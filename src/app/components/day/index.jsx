import { useEffect, useState } from "react";

import { getLocalStorage, getReadableDate, setLocalStorage } from "@/app/utils";
import Modal from "@/app/components/modal";
import EventDrawer from "@/app/components/event-drawer";
import "./styles.scss";

const Day = ({ today, day, currentMonth, currentYear }) => {
  const [showModalOrEvent, setShowModalOrEvent] = useState(false);
  const [eventStyle, setEventStyle] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from local storage when the component mounts
    setEvents(getLocalStorage("events", []));
  }, []);

  const readableDate = getReadableDate(day, currentMonth, currentYear);
  const eventOfTheDay = events?.find(
    (event) => event.createdDate === readableDate
  );
  const hasEventInTheDay = eventOfTheDay !== undefined ? true : false;

  useEffect(() => {
    if (day && hasEventInTheDay) {
      setEventStyle({
        backgroundColor: eventOfTheDay.eventColor,
        color: "white",
      });
    } else {
      setEventStyle({});
    }
  }, [day, hasEventInTheDay]);

  const handleShowModal = () => {
    if (day !== "") {
      setShowModalOrEvent(true);
    }
  };

  const addEvent = (newEvent) => {
    const updatedEvents = [...events, newEvent];
    setLocalStorage("events", updatedEvents);
    setEvents(updatedEvents);
  };

  const deleteEvent = (date) => {
    const filteredEvents = events.filter((item) => item.createdDate !== date);
    setLocalStorage("events", filteredEvents);
    setEvents(filteredEvents);
    setShowModalOrEvent(false);
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
        (hasEventInTheDay ? (
          <EventDrawer
            event={eventOfTheDay}
            setShowDrawer={setShowModalOrEvent}
            deleteEvent={deleteEvent}
          />
        ) : (
          <Modal
            setShowModal={setShowModalOrEvent}
            day={day}
            currentMonth={currentMonth}
            currentYear={currentYear}
            addEvent={addEvent}
          />
        ))}
    </>
  );
};

export default Day;
