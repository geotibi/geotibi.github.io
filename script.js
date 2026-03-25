// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or default to light
const currentTheme = localStorage.getItem('theme') || 'light-theme';
body.classList.add(currentTheme);

// Update button text based on current theme
updateThemeButtonText();

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light-theme');
  } else {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  }
  updateThemeButtonText();
});

// Update button text based on theme
function updateThemeButtonText() {
  if (body.classList.contains('dark-theme')) {
    themeToggle.textContent = 'Light Theme';
  } else {
    themeToggle.textContent = 'Dark Theme';
  }
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Optional: Add animation to skill cards on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all skill cards
document.querySelectorAll('.skill-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.3s, transform 0.3s';
  observer.observe(card);
});