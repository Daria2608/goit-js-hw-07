const loginForm = document.querySelector('.login-form');
function formSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const result = {};
    if (email === "" || password === "") {
        alert('All form fields must be filled in')
    }
    else {
        console.log(`login: ${email}, password: ${password}`)
    }
    form.reset();
}
loginForm.addEventListener('submit', formSubmit)