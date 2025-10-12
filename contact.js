document.addEventListener('DOMContentLoaded', function() {
    // --- Navigation Scripts ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    }
    const dropdownButton = document.getElementById('departments-dropdown-button');
    const dropdownMenu = document.getElementById('departments-dropdown-menu');
    if (dropdownButton && dropdownMenu) {
        dropdownButton.addEventListener('click', function(event) {
            event.stopPropagation();
            dropdownMenu.classList.toggle('hidden');
        });
    }
    const mobileDropdownButton = document.getElementById('mobile-departments-button');
    const mobileDropdownMenu = document.getElementById('mobile-departments-menu');
    if (mobileDropdownButton && mobileDropdownMenu) {
        mobileDropdownButton.addEventListener('click', () => mobileDropdownMenu.classList.toggle('hidden'));
    }
    document.addEventListener('click', function() {
        if (dropdownMenu && !dropdownMenu.classList.contains('hidden')) {
            dropdownMenu.classList.add('hidden');
        }
    });

    // --- Contact Form Scripts ---
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitButton = document.getElementById('submit-button');
    const successNotification = document.getElementById('success-notification');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            let isValid = true;
            nameError.classList.add('hidden');
            emailError.classList.add('hidden');
            messageError.classList.add('hidden');
            nameInput.classList.remove('border-red-500');
            emailInput.classList.remove('border-red-500');
            messageInput.classList.remove('border-red-500');

            if (nameInput.value.trim() === '') {
                nameError.classList.remove('hidden');
                nameInput.classList.add('border-red-500');
                isValid = false;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                emailError.classList.remove('hidden');
                emailInput.classList.add('border-red-500');
                isValid = false;
            }

            if (messageInput.value.trim() === '') {
                messageError.classList.remove('hidden');
                messageInput.classList.add('border-red-500');
                isValid = false;
            }

            if (isValid) {
                submitButton.disabled = true;
                submitButton.textContent = 'Submitting...';
                submitButton.classList.add('bg-gray-400', 'cursor-not-allowed');
                submitButton.classList.remove('bg-red-600', 'hover:bg-red-500');

                setTimeout(() => {
                    successNotification.classList.remove('opacity-0', 'scale-95');
                    successNotification.classList.add('opacity-100', 'scale-100');

                    submitButton.disabled = false;
                    submitButton.textContent = 'Submit';
                    submitButton.classList.remove('bg-gray-400', 'cursor-not-allowed');
                    submitButton.classList.add('bg-red-600', 'hover:bg-red-500');

                    contactForm.reset();

                    setTimeout(() => {
                        successNotification.classList.remove('opacity-100', 'scale-100');
                        successNotification.classList.add('opacity-0', 'scale-95');
                    }, 4000);

                }, 1500);
            }
        });
    }
});