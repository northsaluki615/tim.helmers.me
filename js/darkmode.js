document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('darkModeToggle');
    const currentTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
    if (currentTheme) {
      document.body.classList.toggle('dark-mode', currentTheme === 'dark');
      document.querySelector('header').classList.toggle('dark-mode', currentTheme === 'dark');
      document.querySelector('footer').classList.toggle('dark-mode', currentTheme === 'dark');
      document.querySelectorAll('.tribute').forEach(el => el.classList.toggle('dark-mode', currentTheme === 'dark'));
    } else if (systemPrefersDark) {
      document.body.classList.add('dark-mode');
      document.querySelector('header').classList.add('dark-mode');
      document.querySelector('footer').classList.add('dark-mode');
      document.querySelectorAll('.tribute').forEach(el => el.classList.add('dark-mode'));
    }
  
    toggleButton.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      document.querySelector('header').classList.toggle('dark-mode');
      document.querySelector('footer').classList.toggle('dark-mode');
      document.querySelectorAll('.tribute').forEach(el => el.classList.toggle('dark-mode'));
  
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  });
  