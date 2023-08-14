document.addEventListener("DOMContentLoaded", function () {
    let selectedDurations = [];
  
    document.getElementById("calculateBtn").addEventListener("click", calculateTotal);
    document.getElementById("confirmBtn").addEventListener("click", confirmSelection);
  
    function calculateTotal() {
      const durations = document.querySelectorAll('input[name="duration"]:checked');
      let totalHours = 0;
      let peakHours = 0;
      let normalHours = 0;
  
      selectedDurations = []; // Reset the array before calculating again
  
      for (const duration of durations) {
        const timeValue = parseInt(duration.id.substr(8), 10); // Extract the time value from the ID
  
        // Calculate total hours
        totalHours += 1;
  
        // Categorize peak and non-peak hours
        if (timeValue >= 10 && timeValue < 16) {
          peakHours += 1;
        } else {
          normalHours += 1;
        }
  
        // Store the selected duration in the array
        selectedDurations.push(duration.nextElementSibling.textContent.trim());
        
          // Call updateSummary after calculating the total
          updateSummary();
        
      }
  
      // Update the result container with the calculated values
      document.getElementById("totalHours").innerText = totalHours;
      document.getElementById("peakHours").innerText = peakHours;
      document.getElementById("normalHours").innerText = normalHours;
    }
  
    function confirmSelection() {
      // Display the confirmation message in an alert
      alert("Selection confirmed.");
    }
  });



// Function to reset the form
function resetForm() {
  const checkboxes = document.querySelectorAll('input[name="duration"]');
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  });

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";
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



  