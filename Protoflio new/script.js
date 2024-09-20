// script.js

function toggleMenu() {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('active');
}
document.addEventListener('DOMContentLoaded', function() {
    const titles = document.querySelectorAll('.title');
    
    titles.forEach(title => {
        title.addEventListener('click', function() {
            const description = this.nextElementSibling.querySelector('.skills-description');
            
            // Toggle the display of the description
            if (description.style.display === 'none' || description.style.display === '') {
                description.style.display = 'block';
            } else {
                description.style.display = 'none';
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Message sent!');
      form.reset();
  });
});
