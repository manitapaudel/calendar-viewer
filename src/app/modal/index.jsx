import { useState } from "react";

import CloseIcon from "../components/icons/close-icon";
import "./__styles.scss";

const Modal = ({ setShowModal }) => {
  const [event, setEvent] = useState({
    name: "",
    description: "",
    tag: "",
  });

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-form-container">
        <h2>Create an Event</h2>
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
          <button className="submit-btn">Add event</button>
        </form>
        <button className="close-modal" onClick={() => setShowModal(false)}>
          <CloseIcon className="close-icon" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
