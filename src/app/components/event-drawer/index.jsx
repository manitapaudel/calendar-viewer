import { CloseIcon } from "@/app/components/icons";
import "./styles.scss";
import EventCard from "../event-card";

const EventDrawer = ({ event, setShowDrawer }) => {
  return (
    <div className="drawer-overlay">
      <div className="drawer-container">
        <EventCard event={event} />
        <button className="close-modal" onClick={() => setShowDrawer(false)}>
          <CloseIcon className="close-icon" />
        </button>
      </div>
    </div>
  );
};

export default EventDrawer;
