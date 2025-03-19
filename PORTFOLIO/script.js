document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting immediately
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (!name || !email || !message) {
      alert('Please fill out all fields!');
    } else {
      alert('Thank you for your message, ' + name + '!');
      // Here, you could also submit the form to a backend server (e.g., using fetch() to send the data)
    }
  });
  