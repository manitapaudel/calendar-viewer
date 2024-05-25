"use client";

import { useEffect, useState } from "react";

import { daysNames, monthNames } from "@/app/utils/constants";
import {
  getCalendarFormatDays,
  getDaysInMonth,
  getLocalStorage,
  getToday,
} from "@/app/utils";
import { NextIcon, PreviousIcon } from "@/app/components/icons";
import Day from "@/app/components/day";
import "./styles.scss";

const Calendar = () => {
  const date = new Date();
  const [currentMonth, setCurrentMonth] = useState(date.getMonth());
  const [currentYear, setCurrentYear] = useState(date.getFullYear());
  const [daysInaMonth, setDaysInaMonth] = useState(
    getDaysInMonth(currentYear, currentMonth)
  );
  const userInfo = getLocalStorage("userInfo");

  // To update the number of days, whenever the month or/and the year changes
  useEffect(() => {
    setDaysInaMonth(getDaysInMonth(currentYear, currentMonth));
  }, [currentYear, currentMonth]);

  const today = getToday(date, currentYear, currentMonth);
  const firstDayOfTheMonth = new Date(currentYear, currentMonth, 1).getDay();
  const calendarFormatDays = getCalendarFormatDays(
    firstDayOfTheMonth,
    daysInaMonth
  );

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
        <h1>{userInfo.name}&apos;s Calendar</h1>
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
          <span
            className={`week-name ${
              day === "Sat" || day === "Sun" ? "weekends" : ""
            }`}
            key={day}
          >
            {day}
          </span>
        ))}
      </div>
      <div className="days">
        {calendarFormatDays.map((day, index) => (
          <Day
            today={today}
            day={day}
            currentMonth={currentMonth}
            currentYear={currentYear}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
