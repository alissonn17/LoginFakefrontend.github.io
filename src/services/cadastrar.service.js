export default class CadastrarService {
    async cadastrar(dados) {
        const response = await fetch(`https://loginfake.onrender.com/cadastro`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Falha ao cadastrar');
        }

        return data;
    }
}