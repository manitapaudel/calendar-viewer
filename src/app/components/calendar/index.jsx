import "./__styles.scss";

const Calendar = () => {
  return (
    <div className="calendar-container">
      <div className="header">
        <p className="month">July 2024</p>
        <div className="buttons">
          <button className="prev">Prev</button>
          <button className="next">Next</button>
        </div>
      </div>
      <div className="week-days"></div>
      <div className="days"></div>
    </div>
  );
};

export default Calendar;
