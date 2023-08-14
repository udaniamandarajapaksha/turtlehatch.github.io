const daysContainer = document.querySelector(".days");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const month = document.querySelector(".month");
const todayBtn = document.querySelector(".today-btn");


const months = [
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

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Variable to store the selected date
let selectedDate = null;

// get current date
const date = new Date();

// get current month
let currentMonth = date.getMonth();

// get current year
let currentYear = date.getFullYear();

// function to render days
function renderCalendar() {
  // get prev month current month and next month days
  date.setDate(1);
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const lastDayIndex = lastDay.getDay();
  const lastDayDate = lastDay.getDate();
  const prevLastDay = new Date(currentYear, currentMonth, 0);
  const prevLastDayDate = prevLastDay.getDate();
  const nextDays = 7 - lastDayIndex - 1;

  // update current year and month in header
  month.innerHTML = `${months[currentMonth]} ${currentYear}`;

  // update days html
  let days = "";

  // prev days html
  for (let x = firstDay.getDay(); x > 0; x--) {
    days += `<div class="day prev">${prevLastDayDate - x + 1}</div>`;
  }

  // current month days
  for (let i = 1; i <= lastDayDate; i++) {
    // check if its today then add today class
    
    if (
      i === new Date().getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
    ) {
      // if date month year matches add today
      days += `<div class="day today">${i}</div>`;
    } else {
      //else dont add today
      days += `<div class="day ">${i}</div>`;
    }
  }

  // next MOnth days
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="day next">${j}</div>`;
  }

  // run this function with every calendar render
  hideTodayBtn();
  daysContainer.innerHTML = days;
  disablePastDays();
}

renderCalendar();





// Function to disable past days in the calendar
function disablePastDays() {
  const dayElements = document.querySelectorAll('.day');
  const today = new Date();
 

  dayElements.forEach(dayElement => {
      const day = parseInt(dayElement.textContent);
      const currentDate = new Date(currentYear, currentMonth, day);
      const isPastDay = currentDate < today;

     

      if (isPastDay) {
          dayElement.classList.add('disabled');
      } else {
          dayElement.classList.remove('disabled');
      }
  });
}
// Get the confirm button element
const confirmBtn = document.querySelector(".confirm-btn");

// Add event listener to the confirm button
confirmBtn.addEventListener("click", () => {
  if (selectedDate) {
    // Perform any action you want with the selected date here
    // For example, you can store it in a variable, send it to a server, etc.
    console.log("Confirmed Date:", selectedDate);
    alert(`You have confirmed the date: ${selectedDate.toDateString()}`);
  } else {
    alert("Please select a date before confirming.");
  }
});

// Add event listeners to the day elements
daysContainer.addEventListener("click", (event) => {
  const selectedDayElement = event.target;
  if (selectedDayElement.classList.contains("day")) {
    if (!selectedDayElement.classList.contains("disabled")) {
      // Remove the previous selection
      const prevSelectedDay = document.querySelector(".selected");
      if (prevSelectedDay) {
        prevSelectedDay.classList.remove("selected");
      }

      // Set the new selected date
      selectedDate = new Date(currentYear, currentMonth, parseInt(selectedDayElement.textContent));
      selectedDayElement.classList.add("selected");
      // Call updateSummary after selecting a date
updateSummary();
// Update the selected date display
const selectedDateDisplay = document.getElementById("selectedDateDisplay");
selectedDateDisplay.textContent = `Selected Date: ${selectedDate.toDateString()}`;

      // Perform any other necessary operations with the selected date
      // For example, you can store it in a variable, send it to a server, etc.
      console.log("Selected Date:", selectedDate);
    }
  }
});



nextBtn.addEventListener("click", () => {
  // increase current month by one
  currentMonth++;
  if (currentMonth > 11) {
    // if month gets greater that 11 make it 0 and increase year by one
    currentMonth = 0;
    currentYear++;
  }
  // rerender calendar
  renderCalendar();
});

// prev monyh btn
prevBtn.addEventListener("click", () => {
  // increase by one
  currentMonth--;
  // check if let than 0 then make it 11 and deacrease year
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
});

// go to today
todayBtn.addEventListener("click", () => {
  // set month and year to current
  currentMonth = date.getMonth();
  currentYear = date.getFullYear();
  // rerender calendar
  renderCalendar();
});

// lets hide today btn if its already current month and vice versa

function hideTodayBtn() {
  if (
    currentMonth === new Date().getMonth() &&
    currentYear === new Date().getFullYear()
  ) {
    todayBtn.style.display = "none";
  } else {
    todayBtn.style.display = "flex";
  }
}

function updateSummary() {
  const summaryDate = document.getElementById("summaryDate");
  const summaryTime = document.getElementById("summaryTime");
  const summaryDuration = document.getElementById("summaryDuration");
  const summaryTickets = document.getElementById("summaryTickets");
  const summaryTotal = document.getElementById("summaryTotal");

  // Update summary table with selected data
  summaryDate.textContent = selectedDate ? selectedDate.toDateString() : "Not selected";
  summaryTime.textContent = selectedDurations.length > 0 ? selectedDurations.join(", ") : "Not selected";
  summaryDuration.textContent = totalHours + " hours";
  summaryTickets.textContent = totalTickets;
  summaryTotal.textContent = calculateTotalAmount() + " USD"; // Replace with your total calculation logic
}




