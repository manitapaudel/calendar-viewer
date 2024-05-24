import Calendar from "./components/calendar";
import Toast from "./components/toast";

export default function Home() {
  return (
    <div>
      <Toast message="Event Created Successfully" type="success" />
      <Calendar />
    </div>
  );
}
