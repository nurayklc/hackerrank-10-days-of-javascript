function getDayName(dateString) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let d = new Date(dateString);
  let dayName = days[d.getDay()];
  return dayName;
}
