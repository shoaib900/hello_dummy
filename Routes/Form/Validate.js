  // Function to validate CNIC (13 digits numeric)
  function validateCNIC(cnic) {
    return /^\d{13}$/.test(cnic);
  }

  // Function to validate phone number (11 digits numeric)
  function validatePhone(phone) {
    return /^\d{11}$/.test(phone);
  }

  // Function to validate date of birth (hide future dates)
  function validateDOB(dob) {
    const today = new Date();
    const selectedDate = new Date(dob);
    return selectedDate <= today;
  }

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    const cnicInput = document.getElementById("cnic");
    const phoneInput = document.getElementById("phone");
    const dobInput = document.getElementById("dob");

    const cnic = cnicInput.value;
    const phone = phoneInput.value;
    const dob = dobInput.value;

    if (!validateCNIC(cnic)) {
      alert("Invalid CNIC. Please enter a 13-digit numeric value.");
      return;
    }

    if (!validatePhone(phone)) {
      alert("Invalid phone number. Please enter an 11-digit numeric value.");
      return;
    }

    if (!validateDOB(dob)) {
      alert("Invalid date of birth. Please select a date in the past.");
      return;
    }

    // If all validations pass, you can submit the form
    document.getElementById("myForm").submit();
  }

  // Attach the form submission event listener
  document.getElementById("myForm").addEventListener("submit", handleSubmit);
