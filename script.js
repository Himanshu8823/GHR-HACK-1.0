const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme in localStorage and apply it
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
  themeToggleButton.textContent = 'Light';
}

// Add click event listener to toggle the theme
themeToggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme');

  // Update button text and save the preference in localStorage
  if (body.classList.contains('dark-theme')) {
    themeToggleButton.textContent = 'Light';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggleButton.textContent = 'Dark';
    localStorage.setItem('theme', 'light');
  }
});
