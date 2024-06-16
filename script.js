function toggleForms() {
    document.getElementById('sign-in-container').classList.toggle('d-none');
    document.getElementById('sign-up-container').classList.toggle('d-none');
}

document.getElementById('signInForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Signed In');
});

document.getElementById('signUpForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Signed Up');
});