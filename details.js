const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});


document.addEventListener("DOMContentLoaded", function () {
  const userDetailsForm = document.getElementById("userDetailsForm");
  const fullNameInput = document.getElementById("fullName");
  const emailInput = document.getElementById("email");
  const confirmEmailInput = document.getElementById("confirmEmail");
  const genderInput = document.getElementById("gender");
  const confirmPurchaseBtn = document.getElementById("confirmPurchaseBtn");
  
  // Validate the form fields on form submission
  userDetailsForm.addEventListener("submit", function (event) {
      if (!validateFullName(fullNameInput.value.trim())) {
          event.preventDefault();
          alert("Please enter a valid full name.");
          return;
      }
      
      if (!validateEmail(emailInput.value.trim())) {
          event.preventDefault();
          alert("Please enter a valid email address.");
          return;
      }
      
      if (!validateConfirmEmail(emailInput.value.trim(), confirmEmailInput.value.trim())) {
          event.preventDefault();
          alert("Emails do not match. Please confirm your email address.");
          return;
      }
      
      if (!validateGender(genderInput.value)) {
          event.preventDefault();
          alert("Please select a valid gender.");
          return;
      }
      
      // Additional validation or submission logic can be added here
      
      // Enable the "Confirm Purchase" button after successful validation
      confirmPurchaseBtn.disabled = false;
  });
  
  // Validate full name
  function validateFullName(fullName) {
      return fullName.length > 0;
  }
  
  // Validate email address
  function validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
  }
  
  // Validate confirm email address
  function validateConfirmEmail(email, confirmEmail) {
      return email === confirmEmail;
  }
  
  // Validate gender
  function validateGender(gender) {
      return gender !== "";
  }
});