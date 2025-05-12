document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const formResponse = document.getElementById('form-response');

    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');
        errorMessage.textContent = message;
    }

    function clearError(input) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');
        errorMessage.textContent = '';
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        let isValid = true;

        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Name is required');
            isValid = false;
        } else {
            clearError(nameInput);
        }

        if (emailInput.value.trim() === '') {
            showError(emailInput, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, 'Invalid email format');
            isValid = false;
        } else {
            clearError(emailInput);
        }

        if (messageInput.value.trim() === '') {
            showError(messageInput, 'Message is required');
            isValid = false;
        } else {
            clearError(messageInput);
        }

        if (isValid) {
            // Simulate form submission and display a success message
            formResponse.textContent = 'Message sent successfully!';
            formResponse.className = 'success';
            formResponse.classList.remove('hidden');
            contactForm.reset();

            // You would typically send the form data to a server here
            // using fetch or XMLHttpRequest.
            console.log('Form submitted successfully!');
        } else {
            formResponse.textContent = 'Please fix the errors in the form.';
            formResponse.className = 'error';
            formResponse.classList.remove('hidden');
        }
    });

    // Clear error messages on input focus
    nameInput.addEventListener('focus', () => clearError(nameInput));
    emailInput.addEventListener('focus', () => clearError(emailInput));
    messageInput.addEventListener('focus', () => clearError(messageInput));
});