function validateForm() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (fullName.length < 5) {
        alert('Name must be at least 5 characters long');
    } else if (!email.includes('@')) {
        alert('Enter a valid email address');
    } else if (phoneNumber === '123456789' || phoneNumber.length !== 10) {
        alert('Enter a valid 10-digit phone number');
    } else if (password === 'password' || password.length < 8) {
        alert('Password must be at least 8 characters long and not "password"');
    } else if (password !== confirmPassword) {
        alert('Passwords do not match');
    } else {
        alert('Form submitted successfully!');
    }
}
