const form = document.getElementById('userDetailsForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  const userDetails = {
    username: username,
    email: email,
    phone: phone
  };

  // Store user details in local storage
  localStorage.setItem('userDetails', JSON.stringify(userDetails));

  alert('User details have been stored in local storage.');
  
  // Optional: Reset the form after submission
  form.reset();
});