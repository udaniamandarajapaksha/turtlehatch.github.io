// Define an object to store the peak and non-peak hours
const peakNonPeakHours = {
    duration1: "Normal",
    duration2: "Normal",
    duration3: "Peak",
    duration4: "Peak",
    duration5: "Peak",
    duration6: "Normal",
    duration7: "Normal",
    duration8: "Peak",
    duration9: "Peak",
    duration10: "Peak"
  };
  
  // Function to handle checkbox changes
  function handleCheckboxChange() {
    const checkboxes = document.querySelectorAll('input[name="duration"]');
    const selectedHours = [];
  
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        selectedHours.push(checkbox.id);
      }
    });
  
    // Check if there are any selected checkboxes
    if (selectedHours.length > 0) {
      // Loop through selected hours and display their type (Normal or Peak)
      const selectedHoursType = selectedHours.map(hour => peakNonPeakHours[hour]);
      console.log("Selected Hours Type: ", selectedHoursType);
    } else {
      console.log("No hours selected.");
    }
  }
  
  // Add event listeners to checkboxes
  const checkboxes = document.querySelectorAll('input[name="duration"]');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", handleCheckboxChange);
  });
  
  