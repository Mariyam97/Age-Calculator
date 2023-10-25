const userInput = document.getElementById("date");
const result = document.getElementById("result");

userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
  const selectedDate = new Date(userInput.value);
  const currentDate = new Date();

  if (selectedDate > currentDate) {
    result.innerHTML = "Please select a valid date of birth.";
    return;
  }

  const birthYear = selectedDate.getFullYear();
  const currentYear = currentDate.getFullYear();
  const birthMonth = selectedDate.getMonth();
  const currentMonth = currentDate.getMonth();
  const birthDay = selectedDate.getDate();
  const currentDay = currentDate.getDate();

  let years = currentYear - birthYear;
  let months = currentMonth - birthMonth;
  let days = currentDay - birthDay;

  if (days < 0) {
    const lastDayOfLastMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
    days += lastDayOfLastMonth;
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  if (birthMonth === 1 && birthDay === 29 && !isLeapYear(birthYear)) {
    // If the birthdate is February 29 and it's not a leap year, consider it as February 28
    days = 28;
  }

  result.innerHTML = ` ${years} years, ${months} months, and ${days} days`;
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
