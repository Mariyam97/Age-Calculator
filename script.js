let userInput = document.getElementById("date");
let result = document.getElementById("result");

// Set the maximum date to today
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
    months += 12;
  }

  if (days < 0) {
    const lastDayOfLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    days += lastDayOfLastMonth;
    months--;
  }

  result.innerHTML = `You are ${years} years, ${months} months, and ${days} days old`;
}
