import EventCard from "./components/event-card";

const event = {
  title: "Yoga Class",
  description: "A yoga session with my buddies",
  imgSrc: "/images/pattern-i.jpg",
  createdAt: "4 hours ago",
  tags: ["important"],
  user: {
    image: "",
    name: "Sam Levinson",
  },
};

export default function Home() {
  return (
    <div>
      <EventCard event={event} />
    </div>
  );
}
