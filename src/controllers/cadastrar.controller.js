import CadastrarService from '../services/cadastrar.service.js';

export default class CadastrarController {
    async cadastrar(name, senha, password2, email, birthDate, cellphone) {
        if (senha !== password2) {
            throw new Error('As senhas não coincidem.');
        }

        return new CadastrarService().cadastrar({
            name,
            email,
            birthDate,
            cellphone,
            senha
        });
    }
};