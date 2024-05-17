import { useState } from "react";

import CloseIcon from "../components/icons/close-icon";
import { getReadableDate } from "../utils/getReadableDate";
import "./__styles.scss";

const Modal = ({ setShowModal, day, currentMonth, currentYear }) => {
  const [event, setEvent] = useState({
    name: "",
    description: "",
    tag: "",
  });
  const readableDate = getReadableDate(day, currentMonth, currentYear);

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      ...event,
      createdDate: readableDate,
    });
    setShowModal(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-form-container">
        <h2>Create an Event for {readableDate}</h2>
        <p className="greetings">
          Add an event that you would like to remember.
        </p>
        <form className="event-form">
          <input
            placeholder="Give your event a name"
            type="text"
            className="event-input"
            name="name"
            value={event.name}
            onChange={handleChange}
          />
          <input
            placeholder="Describe the event in a few words"
            className="event-input"
            name="description"
            value={event.description}
            onChange={handleChange}
          />
          <input
            placeholder="Highlight the importance of the event"
            className="event-input"
            name="tag"
            value={event.tag}
            onChange={handleChange}
          />
          <button className="submit-btn" onClick={handleSubmit}>
            Add event
          </button>
        </form>
        <button className="close-modal" onClick={() => setShowModal(false)}>
          <CloseIcon className="close-icon" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
