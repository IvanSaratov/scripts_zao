function registerUser(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username && email && password) {
        document.getElementById('message').textContent = 'Регистрация прошла успешно!';
    } else {
        document.getElementById('message').textContent = 'Пожалуйста, заполните все поля';
    }
}
