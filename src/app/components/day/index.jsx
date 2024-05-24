import { useEffect, useMemo, useState } from "react";

import { initialState } from "@/app/utils/constants";
import { getLocalStorage, getReadableDate, setLocalStorage } from "@/app/utils";
import Modal from "@/app/components/modal";
import EventDrawer from "@/app/components/event-drawer";
import "./styles.scss";

const Day = ({ today, day, currentMonth, currentYear }) => {
  const [showModalOrEvent, setShowModalOrEvent] = useState(false);
  const [eventStyle, setEventStyle] = useState(null);
  const [eventTextColor, setEventTextColor] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from local storage when the component mounts
    setEvents(getLocalStorage("events", []));
  }, []);

  const readableDate = getReadableDate(day, currentMonth, currentYear);
  const eventOfTheDay = useMemo(
    () => events?.find((event) => event.createdDate === readableDate),
    [events, readableDate]
  );

  const hasEventInTheDay = eventOfTheDay !== undefined ? true : false;

  useEffect(() => {
    if (day && hasEventInTheDay) {
      setEventStyle({
        borderLeft: `10px solid ${eventOfTheDay.eventColor}`,
        // color: "white",
      });
      setEventTextColor({
        color: eventOfTheDay.eventColor,
      });
    } else {
      setEventStyle({});
      setEventTextColor({});
    }
  }, [day, eventOfTheDay?.eventColor, hasEventInTheDay]);

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

  const editEvent = (date, newlyUpdatedEvent) => {
    const filteredEvents = events.filter((item) => item.createdDate !== date);
    const updatedEvents = [...filteredEvents, newlyUpdatedEvent];
    setEvents(updatedEvents);
    setLocalStorage("events", updatedEvents);
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
        <span className="event-name" style={eventTextColor}>
          {eventOfTheDay?.name}
        </span>
      </span>
      {showModalOrEvent &&
        (hasEventInTheDay ? (
          <EventDrawer
            event={eventOfTheDay}
            setShowDrawer={setShowModalOrEvent}
            deleteEvent={deleteEvent}
            editEvent={editEvent}
          />
        ) : (
          <Modal
            setShowModal={setShowModalOrEvent}
            readableDate={readableDate}
            addEvent={addEvent}
            initialFormState={initialState}
          />
        ))}
    </>
  );
};

export default Day;
