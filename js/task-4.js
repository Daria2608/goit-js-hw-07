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
        form.reset();
        result.email = email;
        result.password = password;
        console.log(result);
}
}
 
   loginForm.addEventListener('submit', formSubmit)
