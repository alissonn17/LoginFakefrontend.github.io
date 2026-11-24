import CadastrarController from '../controller/cadastrar.controller.js';

const cadastrarButton = document.getElementById('cadastrar-button');

cadastrarButton.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform registration logic here
    console.log(`Registering with username: ${username} and password: ${password}`);

    // You can add your registration logic here, such as sending a request to a server
    CadastrarController.cadastrar(username, password);
});