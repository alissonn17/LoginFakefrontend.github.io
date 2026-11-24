import LoginService from '../services/login.service.js';

export default class LoginController {
    async login(email, senha) {
        return new LoginService().login(email, senha);
    }
}