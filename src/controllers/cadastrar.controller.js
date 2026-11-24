import CadastrarService from '../services/cadastrar.service.js';

export default class CadastrarController {
    async cadastrar(username, password, password2, email, birthdate, cellphone) {
        if (password !== password2) {
            throw new Error('As senhas não coincidem.');
        }

        return new CadastrarService().cadastrar({
            username,
            email,
            birthdate,
            cellphone,
            password
        });
    }
};