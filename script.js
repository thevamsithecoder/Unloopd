document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  var form = this;
  var submitButton = form.querySelector('button[type="submit"]');
  
  submitButton.disabled = true;
  submitButton.textContent = 'Sending...';

  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: {
      'Accept': 'application/json'
    },
  })
  .then(response => {
    if (response.ok) {
      alert("Thank you for your message. We will get back to you soon!");
      form.reset();
    } else {
      throw new Error('Form submission failed');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert("Oops! There was a problem submitting your form. Please try again.");
  })
  .finally(() => {
    submitButton.disabled = false;
    submitButton.textContent = 'Send';
  });
});



document.querySelector('.contact-button').addEventListener('click', function() {
  const contactForm = document.getElementById('contactForm');
  contactForm.scrollIntoView({ behavior: 'smooth' });
});


document.querySelector('.download-btn').addEventListener('click', function() {
  const footer= document.getElementById('popup-footer');
  footer.scrollIntoView({ behavior: 'smooth' });
});


document.querySelector('.join-btn').addEventListener('click', function() {
  const navbar= document.getElementById('contactForm');
  navbar.scrollIntoView({ behavior: 'smooth' });
});