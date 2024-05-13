import Image from "next/image";
import "./__styles.scss";

const EventCard = ({ event }) => {
  return (
    <div className="event-container">
      <div className="image-container">
        <Image src={event.imgSrc} alt="A confetti of photographs" fill />
      </div>
      <div className="event-details">
        <p className="title">{event.title}</p>
        <p className="description">{event.description}</p>
      </div>
    </div>
  );
};

export default EventCard;
