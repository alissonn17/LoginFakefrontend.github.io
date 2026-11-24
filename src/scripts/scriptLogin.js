import LoginController from '../controllers/login.controller.js';

const controller = new LoginController();
const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;

    try {
        await controller.login(email, senha);
        window.location.assign('./src/views/welcomepage.html');
    } catch (error) {
        alert(error.message || 'Não foi possível efetuar o login.');
    }
});

