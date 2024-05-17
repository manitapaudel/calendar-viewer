import CloseIcon from "../components/icons/close-icon";
import "./__styles.scss";

const Modal = ({ setShowModal }) => {
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
          />
          <input placeholder="" className="event-input" />
          <input placeholder="" className="event-input" />
          <input placeholder="" className="event-input" />
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
