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

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    if (currentDate.getDate() < selectedDate.getDate()) {
      let lastDayOfLastMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      ).getDate();
      days += lastDayOfLastMonth;
      months--;
    }
  }

  result.innerHTML = `You are ${years} years, ${months} months, and ${days} days old`;
}
