import Image from "next/image";

import Avatar from "@/app/components/avatar";
import "./styles.scss";

const EventCard = ({ event }) => {
  return (
    <div className="event-container">
      <div className="image-container">
        <Image src="/images/pattern-i.jpg" alt="A marble pattern" fill />
      </div>
      <div className="event-details">
        <p className="title">{event.title}</p>
        <p className="description">{event.description}</p>
        <div className="user-info">
          <Avatar />
          <div className="name-creation">
            <p className="name">Jane Doe</p>
            <p className="created-at">{event.createdDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
