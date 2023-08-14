document.addEventListener("DOMContentLoaded", function () {
  // Function to calculate the total payable based on user inputs
  function calculateTotalPayable() {
    // Your existing pricing and calculation logic here
    const slAdultTickets = parseInt(document.getElementById("slAdult").value) || 0;
    const slChildTickets = parseInt(document.getElementById("slChild").value) || 0;
    const foreignerAdultTickets = parseInt(document.getElementById("foreignerAdult").value) || 0;
    const foreignerChildTickets = parseInt(document.getElementById("foreignerChild").value) || 0;
    const infantTickets = parseInt(document.getElementById("infant").value) || 0;


      // Retrieve the selected time slot
      const selectedTimeSlot = document.getElementById("timeSlot").value;
      const isPeakHour = selectedTimeSlot >= "10-11" && selectedTimeSlot <= "17-18" || selectedTimeSlot === "05-06";
  
      // Retrieve the pricing details for each ticket type
      const slAdultNormalCharge = 4;
      const slAdultPeakCharge = 6;
      const slChildNormalCharge = 2;
      const slChildPeakCharge = 3;
      const foreignerAdultNormalCharge = 10;
      const foreignerAdultPeakCharge = 13;
      const foreignerChildNormalCharge = 5;
      const foreignerChildPeakCharge = 8;
  
      // Calculate the total payable amount
      const totalPayable =
        slAdultTickets * (isPeakHour ? slAdultPeakCharge : slAdultNormalCharge) +
        slChildTickets * (isPeakHour ? slChildPeakCharge : slChildNormalCharge) +
        foreignerAdultTickets * (isPeakHour ? foreignerAdultPeakCharge : foreignerAdultNormalCharge) +
        foreignerChildTickets * (isPeakHour ? foreignerChildPeakCharge : foreignerChildNormalCharge);
  
    return totalPayable;
  }

  // Function to update the summary table based on user inputs
  function updateSummary() {
    const visitDate = document.getElementById("visitDate").value;
    const selectedTimeSlot = document.getElementById("timeSlot").value;
    const isPeakHour = selectedTimeSlot >= "10-11" && selectedTimeSlot <= "17-18" || selectedTimeSlot === "05-06";

    const summaryDateCell = document.getElementById("summaryDate");
    const summaryTimeCell = document.getElementById("summaryTime");
    const summaryDurationCell = document.getElementById("summaryDuration");
    const summaryTicketsCell = document.getElementById("summaryTickets");
    const summaryTotalCell = document.getElementById("summaryTotal");

    summaryDateCell.textContent = visitDate;
    summaryTimeCell.textContent = selectedTimeSlot;
    summaryDurationCell.textContent = `1 hrs (${isPeakHour ? "0 Peak" : "01 Normal"})`;

    const slAdultTickets = parseInt(document.getElementById("slAdult").value) || 0;
    const slChildTickets = parseInt(document.getElementById("slChild").value) || 0;
    const foreignerAdultTickets = parseInt(document.getElementById("foreignerAdult").value) || 0;
    const foreignerChildTickets = parseInt(document.getElementById("foreignerChild").value) || 0;
    const infantTickets = parseInt(document.getElementById("infant").value) || 0;

    summaryTicketsCell.innerHTML = `
      ${slAdultTickets} SL Adult $${slAdultTickets * (isPeakHour ? 6 : 4)}<br>
      ${slChildTickets} SL Child $${slChildTickets * (isPeakHour ? 3 : 2)}<br>
      ${foreignerAdultTickets} Foreigner Adult $${foreignerAdultTickets * (isPeakHour ? 13 : 10)}<br>
      ${foreignerChildTickets} Foreigner Child $${foreignerChildTickets * (isPeakHour ? 8 : 5)}<br>
      ${infantTickets} Infant Free
    `;

    const totalPayable = calculateTotalPayable();
    summaryTotalCell.textContent = `$${totalPayable}`;

    // Store the summary table values in the browser's local storage
    localStorage.setItem("summaryDate", visitDate);
    localStorage.setItem("summaryTime", selectedTimeSlot);
    localStorage.setItem("summaryDuration", `1 hrs (${isPeakHour ? "0 Peak" : "01 Normal"})`);
    localStorage.setItem("summaryTickets", summaryTicketsCell.innerHTML);
    localStorage.setItem("summaryTotal", `$${totalPayable}`);

    // Enable or disable the "Continue with purchase" button based on user inputs
    const continueButton = document.getElementById("continueButton");
    continueButton.disabled = totalPayable <= 0;
  }

  // Retrieve data from local storage and update the summary table
  const storedSummaryDate = localStorage.getItem("summaryDate");
  const storedSummaryTime = localStorage.getItem("summaryTime");
  const storedSummaryDuration = localStorage.getItem("summaryDuration");
  const storedSummaryTickets = localStorage.getItem("summaryTickets");
  const storedSummaryTotal = localStorage.getItem("summaryTotal");

  if (storedSummaryDate && storedSummaryTime && storedSummaryDuration && storedSummaryTickets && storedSummaryTotal) {
    document.getElementById("summaryDate").textContent = storedSummaryDate;
    document.getElementById("summaryTime").textContent = storedSummaryTime;
    document.getElementById("summaryDuration").textContent = storedSummaryDuration;
    document.getElementById("summaryTickets").innerHTML = storedSummaryTickets;
    document.getElementById("summaryTotal").textContent = storedSummaryTotal;
  }

  // Add event listeners to the input elements
  document.getElementById("visitDate").addEventListener("change", updateSummary);
  document.getElementById("timeSlot").addEventListener("change", updateSummary);
  document.getElementById("slAdult").addEventListener("input", updateSummary);
  document.getElementById("slChild").addEventListener("input", updateSummary);
  document.getElementById("foreignerAdult").addEventListener("input", updateSummary);
  document.getElementById("foreignerChild").addEventListener("input", updateSummary);
  document.getElementById("infant").addEventListener("input", updateSummary);

  // Add event listeners to increment and decrement buttons
  const incrementButtons = document.querySelectorAll(".increment");
  const decrementButtons = document.querySelectorAll(".decrement");

  function handleIncrement(event) {
    const inputElement = event.target.parentElement.querySelector("input");
    inputElement.value = parseInt(inputElement.value) + 1;
    updateSummary();
  }

  function handleDecrement(event) {
    const inputElement = event.target.parentElement.querySelector("input");
    const currentValue = parseInt(inputElement.value);
    inputElement.value = currentValue > 0 ? currentValue - 1 : 0;
    updateSummary();
  }

  incrementButtons.forEach((button) => {
    button.addEventListener("click", handleIncrement);
  });

  decrementButtons.forEach((button) => {
    button.addEventListener("click", handleDecrement);
  });

  // Initial update of the summary table on page load
  updateSummary();
});
