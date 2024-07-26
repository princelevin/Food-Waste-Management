// Handling login form submission
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLoginFormSubmit);
    }

    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegisterFormSubmit);
    }

    // Auto-scroll slider images
    let currentImageIndex = 1;
    const totalImages = 4; // Adjust this if you have more or fewer images

    function autoScrollImages() {
        currentImageIndex++;
        if (currentImageIndex > totalImages) {
            currentImageIndex = 1;
        }
        document.getElementById(`image${currentImageIndex}`).checked = true;
    }

    setInterval(autoScrollImages, 3000); // Change image every 5 seconds
});

function handleLoginFormSubmit(event) {
    event.preventDefault();
    const mobileNoInput = document.getElementById('loginusername');
    const emailInput = document.getElementById('loginpass');
    const mobileNo = mobileNoInput.value;
    const email = emailInput.value;
    window.location.href = 'index.html';
}

function handleRegisterFormSubmit(event) {
    event.preventDefault();
    const mobileNoInput = document.getElementById('registerusername');
    const emailInput = document.getElementById('registerpass');
    const mobileNo = mobileNoInput.value;
    const email = emailInput.value;
    window.location.href = 'signup.html';
}
