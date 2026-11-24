export default class LoginService {
    async login(username, password) {
        const response = await fetch(`https://loginfake.onrender.com/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Falha ao fazer login');
        }

        return data; // resposta enviada pela API
    }
}