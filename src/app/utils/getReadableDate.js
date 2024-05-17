import { monthNames } from "./constants";

export const getReadableDate = (day, month, year) => {
  let suffix;
  if (day % 10 === 1) suffix = "st";
  else if (day % 10 === 2) suffix = "nd";
  else if (day % 10 === 3) suffix = "rd";
  else suffix = "th";

  return `${day}${suffix} ${monthNames[month]}, ${year}`;
};
