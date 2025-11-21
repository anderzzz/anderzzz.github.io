// Dark mode toggle
(function() {
  const html = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');

  // Check for saved theme preference or default to system preference
  const currentTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (currentTheme === 'dark' || (!currentTheme && systemPrefersDark)) {
    html.classList.add('dark-mode');
  } else if (currentTheme === 'light') {
    html.classList.add('light-mode');
  }

  // Update toggle button text
  function updateToggleText() {
    if (html.classList.contains('dark-mode')) {
      toggle.textContent = '☀';
      toggle.setAttribute('aria-label', 'Switch to light mode');
    } else {
      toggle.textContent = '🌙';
      toggle.setAttribute('aria-label', 'Switch to dark mode');
    }
  }

  if (toggle) {
    updateToggleText();

    toggle.addEventListener('click', function() {
      if (html.classList.contains('dark-mode')) {
        html.classList.remove('dark-mode');
        html.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
      } else {
        html.classList.remove('light-mode');
        html.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      }
      updateToggleText();
    });
  }
})();
