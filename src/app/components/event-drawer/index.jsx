import { CloseIcon } from "@/app/components/icons";
import "./styles.scss";

const EventDrawer = ({ setShowDrawer }) => {
  return (
    <div className="drawer-overlay">
      <div className="drawer-container">
        Hi, I am the event drawer that you are supposed to see roll out of the
        side of the screen.
        <button className="close-modal" onClick={() => setShowDrawer(false)}>
          <CloseIcon className="close-icon" />
        </button>
      </div>
    </div>
  );
};

export default EventDrawer;
