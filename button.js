// Add this JavaScript code to enable/disable the button based on form completion
function checkFormCompletion() {
    const selectedDateDisplay = document.getElementById("selectedDateDisplay").textContent;
    const totalTickets = parseInt(document.getElementById("total-tickets").textContent);
    const selectedDurations = document.querySelectorAll('input[name="duration"]:checked');
  
    if (selectedDate && totalTickets > 0 && selectedDurations.length > 0) {
      document.getElementById("continuePurchaseBtn").removeAttribute("disabled");
    } else {
      document.getElementById("continuePurchaseBtn").setAttribute("disabled", "true");
    }
  }
  
  // Call the checkFormCompletion function whenever there is a change in form data
  document.getElementById("book-tickets").addEventListener("click", checkFormCompletion);
  document.getElementById("reset-tickets").addEventListener("click", checkFormCompletion);
  document.getElementById("calculateBtn").addEventListener("click", checkFormCompletion);
  document.getElementById("confirmBtn").addEventListener("click", checkFormCompletion);




  