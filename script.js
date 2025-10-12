
document.addEventListener('DOMContentLoaded', function() {
    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('is-active'));
    }

    // --- Desktop Dropdown Toggle ---
    const dropdownButton = document.getElementById('departments-dropdown-button');
    const dropdownMenu = document.getElementById('departments-dropdown-menu');
    if (dropdownButton && dropdownMenu) {
        dropdownButton.addEventListener('click', function(event) {
            event.stopPropagation();
            dropdownMenu.classList.toggle('is-active');
        });
    }

    // --- Mobile Departments Dropdown Toggle ---
    const mobileDropdownButton = document.getElementById('mobile-departments-button');
    const mobileDropdownMenu = document.getElementById('mobile-departments-menu');
    if (mobileDropdownButton && mobileDropdownMenu) {
        mobileDropdownButton.addEventListener('click', () => mobileDropdownMenu.classList.toggle('is-active'));
    }

    // --- Close Desktop Dropdown on Outside Click ---
    document.addEventListener('click', function() {
        if (dropdownMenu && dropdownMenu.classList.contains('is-active')) {
            dropdownMenu.classList.remove('is-active');
        }
    });
});