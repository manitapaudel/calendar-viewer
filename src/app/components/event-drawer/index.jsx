import { CloseIcon } from "@/app/components/icons";
import EventCard from "@/app/components/event-card";
import "./styles.scss";

const EventDrawer = ({ event, setShowDrawer, deleteEvent, editEvent }) => {
  return (
    <div className="drawer-overlay">
      <div className="drawer-container">
        <EventCard
          event={event}
          deleteEvent={deleteEvent}
          editEvent={editEvent}
        />
        <button className="close-modal" onClick={() => setShowDrawer(false)}>
          <CloseIcon className="close-icon" />
        </button>
      </div>
    </div>
  );
};

export default EventDrawer;
