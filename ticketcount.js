 // Function to store selected ticket quantities in local storage
 function storeTicketsSelection() {
    const slAdult = parseInt(document.getElementById('sl-adult').value) || 0;
    const slChild = parseInt(document.getElementById('sl-child').value) || 0;
    const foreignerAdult = parseInt(document.getElementById('foreigner-adult').value) || 0;
    const foreignerChild = parseInt(document.getElementById('foreigner-child').value) || 0;
    const infant = parseInt(document.getElementById('infant').value) || 0;

    const ticketSelection = {
      'SL Adult': slAdult,
      'SL Child': slChild,
      'Foreigner Adult': foreignerAdult,
      'Foreigner Child': foreignerChild,
      'Infant': infant
    };

    // Store the ticket selection in local storage as a JSON string
    localStorage.setItem('ticketSelection', JSON.stringify(ticketSelection));

    // Calculate and display the total ticket count
    const totalTickets = slAdult + slChild + foreignerAdult + foreignerChild + infant;
    document.getElementById('total-tickets').textContent = totalTickets;

      // Update the summary table
      updateSummary();
  }

  // Function to load stored ticket quantities from local storage
  function loadTicketsSelection() {
    const ticketSelection = JSON.parse(localStorage.getItem('ticketSelection'));

    if (ticketSelection) {
      document.getElementById('sl-adult').value = ticketSelection['SL Adult'];
      document.getElementById('sl-child').value = ticketSelection['SL Child'];
      document.getElementById('foreigner-adult').value = ticketSelection['Foreigner Adult'];
      document.getElementById('foreigner-child').value = ticketSelection['Foreigner Child'];
      document.getElementById('infant').value = ticketSelection['Infant'];

      // Calculate and display the total ticket count
      const totalTickets = ticketSelection['SL Adult'] + ticketSelection['SL Child'] +
        ticketSelection['Foreigner Adult'] + ticketSelection['Foreigner Child'] +
        ticketSelection['Infant'];
      document.getElementById('total-tickets').textContent = totalTickets;
   
      // Update the summary table
      updateSummary();
   
    }
  }

  // Event listener for the "Book Tickets" button
  document.getElementById('book-tickets').addEventListener('click', () => {
    storeTicketsSelection();
    alert('Ticket selection saved in local storage!');
  });

  // Load stored ticket quantities when the page loads
  loadTicketsSelection();
  


  // Function to reset the ticket counts and clear local storage
  function resetTicketCounts() {
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
      input.value = 0;
    });

    // Clear the local storage
    localStorage.removeItem('ticketSelection');

    // Update the total ticket count display to 0
    document.getElementById('total-tickets').textContent = 0;

    
    // Update the summary table
    updateSummary();
  }

  // Event listener for the "Reset Counts" button
  document.getElementById('reset-tickets').addEventListener('click', () => {
    resetTicketCounts();
    alert('Ticket counts reset and local storage cleared!');
  });


  function updateSummary() {
    const summaryDate = document.getElementById("summaryDate");
    const summaryTime = document.getElementById("summaryTime");
    const summaryDuration = document.getElementById("summaryDuration");
    const summaryTickets = document.getElementById("summaryTickets");
    const summaryTotal = document.getElementById("summaryTotal");

    //const selectedDate = new Date().toDateString(); // Replace with your date logic
    const selectedDurations = getSelectedDurations(); // Implement this function
    const totalHours = calculateTotalHours(selectedDurations); // Implement this function
    const totalTickets = calculateTotalTickets(); // Implement this function
    const totalAmount = calculateTotalAmount(); // Implement this function


    const selectedDate = document.getElementById("selectedDateDisplay").textContent;

    // Retrieve selected durations from checkboxes (assuming you have a list of selectedDurations)
    // const selectedDurations = getSelectedDurations(); // You need to implement this function
  
    // Calculate total hours based on selected durations
    // const totalHours = calculateTotalHours(selectedDurations); // You need to implement this function
  
    // Retrieve total tickets from your ticket selection
    // const totalTickets = calculateTotalTickets(); // You need to implement this function
  
    // Calculate and display total amount based on your calculation logic
   //  const totalAmount = calculateTotalAmount(); // You need to implement this function
  
    // Update summary table with selected data
   summaryDate.textContent = selectedDate ? selectedDate.toDateString() : "Not selected";
    summaryTime.textContent = selectedDurations.length > 0 ? selectedDurations.join(", ") : "Not selected";
    summaryDuration.textContent = totalHours + " hours";
    summaryTickets.textContent = totalTickets;
    summaryTotal.textContent = calculateTotalAmount() + " USD"; // Replace with your total calculation logic
  }
// Call this function after updating totalHours and selectedDate
updateSummary();
  