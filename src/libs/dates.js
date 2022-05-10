/**
 * It takes a timestamp, converts it to milliseconds, creates a new Date object, converts it to a
 * string, splits it into an array, and returns the 5th element of the array.
 * @param timestamp - The timestamp you want to convert to time.
 * @returns The time in the format of HH:MM
 */
export const getTime = (timestamp) => {
  const milliseconds = timestamp * 1000;
  const dateObject = new Date(milliseconds);
  const time = dateObject.toString().split(' ');
  return time[4]?.split('').slice(0, 5);
};

/**
 * It takes a timestamp, converts it to milliseconds, creates a new Date object, converts it to a
 * string, splits it into an array, and returns the first and third elements of the array
 * @param timestamp - The timestamp you want to convert to a date.
 * @returns The day of the week and the date.
 */
export const getWeekDay = (timestamp) => {
  const milliseconds = timestamp * 1000;
  const dateObject = new Date(milliseconds);
  const time = dateObject.toString().split(' ');
  return `${time.slice(0, 1)} ${time.slice(2, 3)}`;
};
