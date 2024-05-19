export const monthNames = [
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

export const daysNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const initialState = {
  name: "",
  description: "",
  tag: "",
};

export const formInputs = [
  {
    name: "name",
    type: "text",
    placeholder: "Give your event a name*",
    required: true,
  },
  {
    name: "description",
    type: "text",
    placeholder: "Describe the event in a few words*",
    required: true,
  },
  {
    name: "tag",
    type: "text",
    placeholder: "Highlight the importance of the event*",
    required: true,
  },
];
