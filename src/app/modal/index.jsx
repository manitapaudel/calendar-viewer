import { useState } from "react";

import CloseIcon from "../components/icons/close-icon";
import { getReadableDate } from "../utils/getReadableDate";
import "./__styles.scss";

const initialState = {
  name: "",
  description: "",
  tag: "",
};

const Modal = ({ setShowModal, day, currentMonth, currentYear }) => {
  const [event, setEvent] = useState(initialState);
  const [errors, setErrors] = useState(initialState);
  const readableDate = getReadableDate(day, currentMonth, currentYear);

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (event.name === "")
      setErrors({ ...errors, name: "Please enter a name*" });
    else if (event.description === "")
      setErrors({ ...errors, description: "Please enter a description*" });
    else if (event.tag === "")
      setErrors({ ...errors, tag: "Please enter a tag*" });
    else {
      console.log({
        ...event,
        createdDate: readableDate,
      });
      setShowModal(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-form-container">
        <h2>Create an Event for {readableDate}</h2>
        <p className="greetings">
          Add an event that you would like to remember.
        </p>
        <form className="event-form">
          <span className="event-input">
            <input
              placeholder="Give your event a name*"
              type="text"
              name="name"
              value={event.name}
              onChange={handleChange}
              required
            />
            {errors.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </span>
          <span className="event-input">
            <input
              placeholder="Describe the event in a few words*"
              name="description"
              value={event.description}
              onChange={handleChange}
              required
            />
            {errors.description && (
              <span className="error-message">{errors.description}</span>
            )}
          </span>
          <span className="event-input">
            <input
              placeholder="Highlight the importance of the event*"
              name="tag"
              value={event.tag}
              onChange={handleChange}
              required
            />
            {errors.tag && <span className="error-message">{errors.tag}</span>}
          </span>
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
