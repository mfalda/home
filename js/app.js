document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const homeLink = document.getElementById('home-link');
    const aboutLink = document.getElementById('about-link');

    homeLink.addEventListener('click', () => {
        content.innerHTML = '<h1>Home</h1><p>Welcome to the Home page!</p>';
    });

    aboutLink.addEventListener('click', () => {
        content.innerHTML = '<h1>About</h1><p>This is the About page.</p>';
    });

    // Load the home page by default
    content.innerHTML = '<h1>Home</h1><p>Welcome to the Home page!</p>';
});
