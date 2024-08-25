In JavaScript, dates and times are handled using the `Date` object. The `Date` object provides methods to work with dates and times, including creating dates, formatting dates, performing calculations, and extracting parts of a date.

### Creating a Date

There are multiple ways to create a `Date` object:

1. **Current Date and Time:**
   ```javascript
   const now = new Date();
   console.log(now); // e.g., "2024-08-25T12:34:56.789Z"
   ```

2. **Specific Date and Time:**
   ```javascript
   const specificDate = new Date(2024, 7, 25, 14, 30, 0);
   console.log(specificDate); // "Sun Aug 25 2024 14:30:00 GMT+0000 (UTC)"
   ```
   - The months are zero-indexed (0 for January, 11 for December).

3. **Using a Date String:**
   ```javascript
   const dateFromString = new Date("2024-08-25T14:30:00Z");
   console.log(dateFromString); // "Sun Aug 25 2024 14:30:00 GMT+0000 (UTC)"
   ```

4. **Using Timestamps (milliseconds since January 1, 1970):**
   ```javascript
   const timestampDate = new Date(1726080000000);
   console.log(timestampDate); // "Sun Aug 25 2024 00:00:00 GMT+0000 (UTC)"
   ```

### Common Date Methods

1. **Getting Parts of a Date:**
   - **`getFullYear()`**: Gets the four-digit year.
     ```javascript
     const year = now.getFullYear(); // e.g., 2024
     ```
   - **`getMonth()`**: Gets the month (0-11).
     ```javascript
     const month = now.getMonth(); // e.g., 7 for August
     ```
   - **`getDate()`**: Gets the day of the month (1-31).
     ```javascript
     const day = now.getDate(); // e.g., 25
     ```
   - **`getHours()`**: Gets the hour (0-23).
     ```javascript
     const hours = now.getHours(); // e.g., 14 for 2 PM
     ```
   - **`getMinutes()`**: Gets the minutes (0-59).
     ```javascript
     const minutes = now.getMinutes(); // e.g., 30
     ```
   - **`getSeconds()`**: Gets the seconds (0-59).
     ```javascript
     const seconds = now.getSeconds(); // e.g., 0
     ```
   - **`getMilliseconds()`**: Gets the milliseconds (0-999).
     ```javascript
     const milliseconds = now.getMilliseconds(); // e.g., 789
     ```
   - **`getDay()`**: Gets the day of the week (0-6, where 0 is Sunday).
     ```javascript
     const weekday = now.getDay(); // e.g., 0 for Sunday
     ```

2. **Setting Parts of a Date:**
   - **`setFullYear(year)`**: Sets the year.
     ```javascript
     specificDate.setFullYear(2025);
     ```
   - **`setMonth(month)`**: Sets the month (0-11).
     ```javascript
     specificDate.setMonth(0); // January
     ```
   - **`setDate(day)`**: Sets the day of the month.
     ```javascript
     specificDate.setDate(1); // 1st of the month
     ```

3. **Date Calculations:**
   - **Getting the Time (Milliseconds since Epoch):**
     ```javascript
     const millisecondsSinceEpoch = now.getTime();
     ```
   - **Adding/Subtracting Days:**
     ```javascript
     const futureDate = new Date();
     futureDate.setDate(now.getDate() + 10); // Adds 10 days to the current date
     ```

4. **Comparing Dates:**
   - Dates can be compared using the standard comparison operators:
     ```javascript
     const date1 = new Date(2024, 7, 25);
     const date2 = new Date(2024, 7, 26);
     
     console.log(date1 < date2); // true
     ```

### Formatting Dates
JavaScript’s `Date` object doesn't have advanced formatting features built-in, but you can use its methods or libraries like `Intl.DateTimeFormat` or `moment.js` to format dates.

- **Basic Custom Formatting:**
  ```javascript
  const formattedDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  console.log(formattedDate); // "2024-8-25"
  ```

- **Using `toLocaleDateString()`:**
  ```javascript
  const localeDate = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  console.log(localeDate); // "Sunday, August 25, 2024"
  ```

### Example Usage
```javascript
const now = new Date();
console.log(now.toString());          // Full date and time string
console.log(now.toDateString());      // Date only string
console.log(now.toTimeString());      // Time only string
console.log(now.toISOString());       // ISO format string
console.log(now.toLocaleDateString()); // Localized date string
console.log(now.toLocaleTimeString()); // Localized time string
```

### Summary
The `Date` object is a powerful tool for managing dates and times in JavaScript, offering a wide range of methods to create, manipulate, and format dates.