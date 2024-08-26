window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-dark');
        navbar.classList.remove('navbar-light');
    } else {
        navbar.classList.add('navbar-light');
        navbar.classList.remove('navbar-dark');
    }
});