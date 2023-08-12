const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const inputMail = loginForm.elements.email;
    const inputPassword = loginForm.elements.password;

    if (!inputMail.value || !inputPassword.value) {
        alert('Всі поля повинні бути заповнені');
    } else {
        const data = {
            email: inputMail.value,
            password: inputPassword.value
        };
        console.log(data);
        loginForm.reset();
    }

});