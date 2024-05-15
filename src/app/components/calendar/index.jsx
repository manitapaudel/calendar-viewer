"use client";

import { useEffect, useState } from "react";

import NextIcon from "../icons/next-icon";
import PreviousIcon from "../icons/previous-icon";
import "./__styles.scss";
import Day from "../day";

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

const daysNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const Calendar = () => {
  const date = new Date();
  const [currentMonth, setCurrentMonth] = useState(date.getMonth());
  const [currentYear, setCurrentYear] = useState(date.getFullYear());
  const firstDayOfTheMonth = new Date(currentYear, currentMonth, 1).getDay();
  console.log(currentYear, currentMonth, date.getDate());

  const today =
    currentYear === date.getFullYear() && currentMonth === date.getMonth()
      ? date.getDate()
      : null;

  function getDaysInMonth(year, month) {
    // month is 0-indexed: 0 for January, 1 for February, etc.
    return new Date(year, month + 1, 0).getDate();
  }
  //  To list down the days in numbers in the calendar
  const [daysInaMonth, setDaysInaMonth] = useState(
    getDaysInMonth(currentYear, currentMonth)
  );

  // To update the number of days, whenever the month or/and the year changes
  useEffect(() => {
    setDaysInaMonth(getDaysInMonth(currentYear, currentMonth));
  }, [currentYear, currentMonth]);

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

  // Let's create an array, so that the first day of the month starts from the correct day of the week
  const daysArray = Array(firstDayOfTheMonth)
    .fill("")
    .concat(Array.from({ length: daysInaMonth }, (_, i) => i + 1));
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
      <div className="week-days">
        {daysNames.map((day) => (
          <span className="week-name" key={day}>
            {day}
          </span>
        ))}
      </div>
      <div className="days">
        {daysArray.map((day, index) => (
          <Day today={today} day={day} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
