document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for previously selected theme
    const currentTheme = localStorage.getItem('theme') || 'light-mode';
    body.classList.add(currentTheme);
    if (currentTheme === 'dark-mode') {
        themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', function () {
        if (themeToggle.checked) {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
        } else {
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
        }

        // Save the selected theme to local storage
        const newTheme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
        localStorage.setItem('theme', newTheme);
    });
});
