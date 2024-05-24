import { useRef } from "react";

import useOutsideClickHandler from "@/app/hooks/useOutsideClickHandler";
import { CloseIcon } from "@/app/components/icons";
import EventCard from "@/app/components/event-card";
import "./styles.scss";

const EventDrawer = ({ event, setShowDrawer, deleteEvent, editEvent }) => {
  const drawerRef = useRef();

  useOutsideClickHandler(drawerRef, () => {
    setShowDrawer(false);
  });

  return (
    <div className="drawer-overlay">
      <div className="drawer-container" ref={drawerRef}>
        <h2>Your event for {event.createdDate}</h2>
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
