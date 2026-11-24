import LoginController from '../controller/login.controller.js';

const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform login logic here
    console.log(`Logging in with username: ${username} and password: ${password}`);

    // You can add your authentication logic here, such as sending a request to a server
    LoginController.login(username, password);
});

