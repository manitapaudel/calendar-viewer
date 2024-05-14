"use client";

import { useState } from "react";

import NextIcon from "../icons/next-icon";
import PreviousIcon from "../icons/previous-icon";
import "./__styles.scss";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Calendar = () => {
  const date = new Date();
  console.log("Hi date", date.getMonth());
  // const currentMonth = date.getMonth();
  const [currentMonth, setCurrentMonth] = useState(date.getMonth());
  const [currentYear, setCurrentYear] = useState(date.getFullYear());
  console.log(currentYear);

  const handlePrevMonth = () => {
    if (currentMonth > 0) {
      setCurrentMonth(currentMonth - 1);
    } else {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(11);
    }
  };
  const handleNextMonth = () => {
    if (currentMonth < 11) {
      setCurrentMonth(currentMonth + 1);
    } else {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(0);
    }
  };

  return (
    <div className="calendar-container">
      <div className="header">
        <p className="month">
          {monthNames[currentMonth]} {currentYear}
        </p>
        <div className="buttons">
          <button className="prev" onClick={handlePrevMonth}>
            <PreviousIcon className="icon" />
          </button>
          <button className="next" onClick={handleNextMonth}>
            <NextIcon className="icon" />
          </button>
        </div>
      </div>
      <div className="week-days"></div>
      <div className="days"></div>
    </div>
  );
};

export default Calendar;
