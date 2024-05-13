import Image from "next/image";

import Avatar from "../avatar";
import "./__styles.scss";

const EventCard = ({ event }) => {
  return (
    <div className="event-container">
      <div className="image-container">
        <Image src={event.imgSrc} alt="A marble pattern" fill />
      </div>
      <div className="event-details">
        <p className="title">{event.title}</p>
        <p className="description">{event.description}</p>
        <div className="user-info">
          <Avatar />
          <div className="name-creation">
            <p className="name">{event.user.name}</p>
            <p className="created-at">{event.createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
