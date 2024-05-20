import Image from "next/image";

import Avatar from "@/app/components/avatar";
import { EditIcon, DeleteIcon } from "@/app/components/icons";
import { deleteEvent } from "@/app/utils";
import "./styles.scss";

const EventCard = ({ event }) => {
  return (
    <div className="event-container">
      <div className="image-container">
        <Image src="/images/pattern-i.jpg" alt="A marble pattern" fill />
      </div>
      <div className="event-details">
        <p className="title">{event.name}</p>
        <p className="description">{event.description}</p>
        <div className="user-info">
          <Avatar />
          <div className="name-creation">
            <p className="name">Jane Doe</p>
            <p className="created-at">{event.createdDate}</p>
          </div>
          <div className="actions">
            <button className="edit-btn" title="Edit event">
              <EditIcon className="edit-icon" />
            </button>
            <button
              className="delete-btn"
              onClick={() => deleteEvent(event.createdDate)}
              title="Delete event"
            >
              <DeleteIcon className="delete-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
