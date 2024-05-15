const Day = ({ today, day }) => {
  return (
    <span className={`day ${today && today === day ? "today" : ""}`}>
      <span className="text">{day}</span>
    </span>
  );
};

export default Day;
