import CadastrarController from '../controllers/cadastrar.controller.js';

const controller = new CadastrarController();
const form = document.getElementById('cadastrar-form');
const messageElement = document.getElementById('cadastro-message');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    messageElement.textContent = '';

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;
    const email = document.getElementById('email').value;
    const birthdate = document.getElementById('birthdate').value;
    const cellphone = document.getElementById('cellphone').value;

    if (!email.includes('@')) {
        alert('O e-mail deve conter @.');
        return;
    }

    if (!form.reportValidity()) {
        return;
    }

    try {
        const resposta = await controller.cadastrar(
            username,
            password,
            password2,
            email,
            birthdate,
            cellphone
        );
        messageElement.textContent = resposta.message || 'Cadastro realizado com sucesso.';
        window.location.assign('./welcomepage.html');
    } catch (error) {
        alert(error.message || 'Não foi possível efetuar o cadastro.');
    }
});