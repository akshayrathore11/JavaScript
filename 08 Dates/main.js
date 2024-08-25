let myDate = new Date();
// Creates a new Date object with the current date and time

console.log(myDate);
// Logs the full Date object, showing the current date and time

console.log(myDate.toString());
// Converts the Date object to a string in a human-readable format (e.g., "Sun Aug 25 2024 12:34:56 GMT+0000 (UTC)")

console.log(myDate.toDateString());
// Converts the date portion of the Date object to a string (e.g., "Sun Aug 25 2024")

console.log(myDate.toTimeString());
// Converts the time portion of the Date object to a string (e.g., "12:34:56 GMT+0000 (UTC)")

console.log(myDate.toLocaleDateString());
// Converts the date to a string based on the local format (e.g., "8/25/2024" for the US)

console.log(myDate.toJSON());
// Converts the Date object to a JSON string in ISO format (e.g., "2024-08-25T12:34:56.789Z")

console.log(myDate.toISOString());
// Converts the Date object to a string in ISO 8601 format (e.g., "2024-08-25T12:34:56.789Z")

console.log(typeof myDate);
//  Logs the type of the myDate variable, which is "object"

let myCreateDate = new Date(2005, 1, 23);
// Creates a Date object representing February 23, 2005 (months are zero-indexed)

console.log(myCreateDate.toDateString());
// Converts the date to a string (e.g., "Wed Feb 23 2005")

console.log(myCreateDate.toLocaleString());
// Converts the date and time to a localized string (e.g., "2/23/2005, 12:00:00 AM")

let newDate = new Date("2005-1-23");
// Creates a Date object from a string (represents January 23, 2005)

console.log(newDate);
// Logs the new Date object

let myTime = Date.now();
// Gets the current timestamp in milliseconds since January 1, 1970 (Unix Epoch)

console.log(myTime);
// Logs the current timestamp in milliseconds

console.log(myCreateDate.getTime());
// Logs the timestamp for the date "2005-02-23" in milliseconds

console.log(Date.now() / 1000);
// Logs the current timestamp in seconds (instead of milliseconds)

console.log(Math.floor(Date.now() / 1000));
// Logs the current timestamp in seconds, rounded down to the nearest whole number

let helo = myCreateDate.toLocaleString("default", {
  weekday: "long",
  year: "numeric",
}); 
// Converts the date to a localized string, including the day of the week and year (e.g., "Wednesday, 2005")

console.log(helo); 
