// Preloader
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('preloader').style.display = 'none';
    }, 1500); // Adjust timeout as needed
});

// Mobile Menu Toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    this.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation and Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || message === "") {
        alert('Please fill in all fields.');
        return;
    }

    // Here you would usually send the form data to a server
    // For demo purposes, we'll just log the data
    console.log({
        name: name,
        email: email,
        message: message
    });

    alert('Thank you for your message!');

    // Clear form fields
    document.getElementById('contact-form').reset();
});
