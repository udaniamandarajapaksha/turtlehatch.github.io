// Load ticket selection from local storage
const ticketSelection = JSON.parse(localStorage.getItem("ticketSelection"));

// Function to display the summary table
/*function displaySummaryTable() {
  const summaryTable = document.getElementById("summaryTable");
  summaryTable.innerHTML = `
    <tr>
      <td>SL Adult</td>
      <td>${ticketSelection["SL Adult"]}</td>
      <td>${ticketSelection["SL Adult"] * 4} USD</td>
    </tr>
    <tr>
      <td>SL Child</td>
      <td>${ticketSelection["SL Child"]}</td>
      <td>${ticketSelection["SL Child"] * 2} USD</td>
    </tr>
    <tr>
      <td>Foreigner Adult</td>
      <td>${ticketSelection["Foreigner Adult"]}</td>
      <td>${ticketSelection["Foreigner Adult"] * 10} USD</td>
    </tr>
    <tr>
      <td>Foreigner Child</td>
      <td>${ticketSelection["Foreigner Child"]}</td>
      <td>${ticketSelection["Foreigner Child"] * 13} USD</td>
    </tr>
    <tr>
      <td>Infant</td>
      <td>${ticketSelection["Infant"]}</td>
      <td>Free</td>
    </tr>
  `;
}*/

// Function to check if the form is completed to enable the "Confirm Purchase" button
function checkFormCompletion() {
  const fullName = document.getElementById("fullName").value;
  const mobileNumber = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const confirmEmail = document.getElementById("confirmEmail").value;

  const isFormCompleted = fullName.trim() !== "" && mobileNumber.trim() !== "" &&
    email.trim() !== "" && confirmEmail.trim() !== "" && email === confirmEmail;

  const confirmPurchaseBtn = document.getElementById("confirmPurchaseBtn");
  if (isFormCompleted) {
    confirmPurchaseBtn.removeAttribute("disabled");
  } else {
    confirmPurchaseBtn.setAttribute("disabled", "true");
  }
}

// Function to store user details and ticket selection in local storage
function storeConfirmationData() {
    const fullName = document.getElementById("fullName").value;
    const mobileNumber = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const gender = document.getElementById("gender").value;
    const btn = document.getElementById('confirmPurchaseBtn');
  
    const confirmationData = {
      fullName,
      mobileNumber,
      email,
      gender,
      ticketSelection
    };
  
    // Store the confirmation data in local storage as a JSON string
    localStorage.setItem("confirmationData", JSON.stringify(confirmationData));
  }
// Add event listeners to form fields and "Confirm Purchase" button
document.getElementById("fullName").addEventListener("input", checkFormCompletion);
document.getElementById("phone").addEventListener("input", checkFormCompletion);
document.getElementById("email").addEventListener("input", checkFormCompletion);
document.getElementById("confirmEmail").addEventListener("input", checkFormCompletion);

document.getElementById("userDetailsForm").addEventListener("submit", function (event) {
  event.preventDefault();
  // Handle form submission here if needed
 // alert("Purchase confirmed! Thank you for buying tickets.");


// Call the functions to display the summary table and check the form completion initially
//displaySummaryTable();
checkFormCompletion();
//window.alert("Working");


 // Redirect to the confirmation receipt page after storing data
 window.location.href = "purchase_card_details.html";
});