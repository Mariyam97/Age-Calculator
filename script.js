let userInput = document.getElementById("date");
let result = document.getElementById("result");

userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
  let selectedDate = new Date(userInput.value);
  let currentDate = new Date();

  if (selectedDate > currentDate) {
    result.innerHTML = "Please select a valid date of birth.";
    return;
  }

  let years = currentDate.getFullYear() - selectedDate.getFullYear();
  let months = currentDate.getMonth() - selectedDate.getMonth();
  let days = currentDate.getDate() - selectedDate.getDate();

  if (days < 0) {
    let lastDayOfLastMonth = new Date(
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

  result.innerHTML = `You are ${years} years, ${months} months, and ${days} days old`;
}
