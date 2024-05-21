import { monthNames } from "./constants";

// Returns the date in a readable format e.g. 12th March, 2024
export const getReadableDate = (day, month, year) => {
  let suffix;
  if (day % 10 === 1 && day !== 11) suffix = "st";
  else if (day % 10 === 2 && day !== 12) suffix = "nd";
  else if (day % 10 === 3 && day !== 13) suffix = "rd";
  else suffix = "th";

  return `${day}${suffix} ${monthNames[month]}, ${year}`;
};

// Returns the number of days in a month
export const getDaysInMonth = (year, month) => {
  // month is 0-indexed: 0 for January, 1 for February, etc.
  return new Date(year, month + 1, 0).getDate();
};

// Returns today, so that it can be marked on the calendar
export const getToday = (date, currentYear, currentMonth) => {
  if (currentYear === date.getFullYear() && currentMonth === date.getMonth())
    return date.getDate();
  else return null;
};

// Creates an array, so that the first day of the month starts from the correct day of the week
export const getCalendarFormatDays = (firstDayOfTheMonth, daysInaMonth) => {
  return Array(firstDayOfTheMonth - 1)
    .fill("")
    .concat(Array.from({ length: daysInaMonth }, (_, i) => i + 1));
};

export const getLocalStorage = (key, initialValue) => {
  if (typeof window !== "undefined") {
    const value = JSON.parse(localStorage.getItem(key)) || initialValue;
    return value;
  } else return initialValue;
};

export const setLocalStorage = (key, value) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256); // Red value between 0 and 255
  const g = Math.floor(Math.random() * 256); // Green value between 0 and 255
  const b = Math.floor(Math.random() * 256); // Blue value between 0 and 255
  return `rgb(${r}, ${g}, ${b})`;
};
