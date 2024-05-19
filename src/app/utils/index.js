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
  return Array(firstDayOfTheMonth)
    .fill("")
    .concat(Array.from({ length: daysInaMonth }, (_, i) => i + 1));
};

export const getLocalStorage = (key, initialValue) => {
  const value = JSON.parse(localStorage.getItem(key)) || initialValue;
  return value;
};

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
