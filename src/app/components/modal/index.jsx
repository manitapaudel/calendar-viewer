"use client";

import { useRef, useState } from "react";

import useOutsideClickHandler from "@/app/hooks/useOutsideClickHandler";
import { formInputs, initialState } from "@/app/utils/constants";
import { getRandomColor } from "@/app/utils";
import { CloseIcon } from "@/app/components/icons";
import "./styles.scss";

const Modal = ({
  setShowModal,
  readableDate,
  addEvent,
  editEvent,
  initialFormState,
  editForm = false,
}) => {
  const [event, setEvent] = useState(initialFormState);
  const [errors, setErrors] = useState(initialState);
  const modalRef = useRef(null);

  useOutsideClickHandler(modalRef, () => setShowModal(false));

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
      const randomColor = getRandomColor();
      if (editForm) {
        editEvent(readableDate, {
          ...event,
          createdDate: readableDate,
          eventColor: randomColor,
        });
      } else {
        addEvent({
          ...event,
          createdDate: readableDate,
          eventColor: randomColor,
        });
      }

      setShowModal(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-form-container" ref={modalRef}>
        <h2>Create an Event for {readableDate}</h2>
        <p className="greetings">
          Add an event that you would like to remember.
        </p>
        <form className="event-form">
          {formInputs.map(({ name, placeholder, type, required }) => (
            <span className="event-input" key={name}>
              <input
                placeholder={placeholder}
                type={type}
                name={name}
                value={event[name]}
                onChange={handleChange}
                required={required}
              />
              {errors[name] && (
                <span className="error-message">{errors[name]}</span>
              )}
            </span>
          ))}
          <button className="submit-btn" onClick={handleSubmit}>
            {editForm ? "Save Changes" : "Add Event"}
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
