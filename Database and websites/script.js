function validateForm() {
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirm-email').value;
    const date = document.getElementById('date').value;
  
    if (!checkEmails(email, confirmEmail)) {
      return false;
    }
  
    if (!checkDate(date)) {
      return false;
    }
  
    alert('Form submitted successfully!');
    return true;
  }
  
  function checkEmails(email, confirmEmail) {
    if (email !== confirmEmail) {
      alert('Emails do not match!');
      return false;
    }
  
    if (!email.endsWith('@aston.ac.uk')) {
      alert('Please use a valid Aston University email.');
      return false;
    }
  
    return true;
  }
  
  function checkDate(date) {
    const selectedDate = new Date(date);
    const today = new Date();
  
    if (selectedDate <= today) {
      alert('Please select a future date.');
      return false;
    }
  
    return true;
  }