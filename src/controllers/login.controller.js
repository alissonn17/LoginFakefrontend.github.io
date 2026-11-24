import LoginService from '../services/login.service.js';

export default class LoginController {
    async login(username, password) {
        return new LoginService().login(username, password);
    }
}