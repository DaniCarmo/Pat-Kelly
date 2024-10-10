window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const togglerIcon = document.querySelector('.navbar-toggler-icon');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-dark');
        navbar.classList.remove('navbar-light');
        togglerIcon.style.backgroundImage = "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 30 30\" xmlns=\"http://www.w3.org/2000/svg\"><path stroke=\"rgba(0, 0, 0, 1)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M4 7h22M4 15h22M4 23h22\"/></svg>')";
    } else {
        navbar.classList.add('navbar-light');
        navbar.classList.remove('navbar-dark');
        togglerIcon.style.backgroundImage = "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 30 30\" xmlns=\"http://www.w3.org/2000/svg\"><path stroke=\"rgba(0, 0, 0, 1)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M4 7h22M4 15h22M4 23h22\"/></svg>')";
    }
});

 // Event listener for clicks outside the navbar
 document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');

    document.addEventListener('click', function (event) {
        // Check if the click is outside the navbar-toggler and navbar-collapse
        if (!navbarToggler.contains(event.target) && !navbarCollapse.contains(event.target)) {
            // Use Bootstrap's Collapse API to hide the navbar if it's shown
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            if (bsCollapse && bsCollapse._isShown()) {
                bsCollapse.hide();
            }
        }
    });
});