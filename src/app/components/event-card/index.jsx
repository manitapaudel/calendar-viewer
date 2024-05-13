import Image from "next/image";
import "./__styles.scss";
import Avatar from "../avatar";

const EventCard = ({ event }) => {
  return (
    <div className="event-container">
      <div className="image-container">
        <Image src={event.imgSrc} alt="A marble pattern" fill />
      </div>
      <div className="event-details">
        <p className="title">{event.title}</p>
        <p className="description">{event.description}</p>
        <Avatar />
      </div>
    </div>
  );
};

export default EventCard;
