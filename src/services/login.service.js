export default class LoginService {
    async login(email, senha) {
        const response = await fetch(`https://loginfake.onrender.com/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, senha })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Falha ao fazer login');
        }

        return data; // resposta enviada pela API
    }
}