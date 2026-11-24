# LoginFake

Frontend simples de login e cadastro, feito com HTML, CSS e JavaScript nativo. As telas usam `fetch` para enviar os dados à API.

## Funcionalidades

- Login com usuário e senha.
- Cadastro com usuário, e-mail, data de nascimento, celular e senha.
- Confirmação de senha e verificação de que o e-mail contém `@`.
- Redirecionamento para a página de boas-vindas após sucesso.
- Layout responsivo para computadores e celulares.

## Estrutura

```text
src/
├── index.html                 # Tela de login
├── controllers/               # Fluxos de login e cadastro
├── model/                     # Modelo de dados do usuário
├── scripts/                   # Eventos dos formulários
├── services/                  # Requisições HTTP à API
├── styles/style.css           # Estilos compartilhados
└── views/
    ├── cadastrar.html         # Tela de cadastro
    └── welcomepage.html       # Página após autenticação/cadastro
```

## Executar localmente

Não há etapa de build ou dependências npm. Abra `src/index.html` com uma extensão de servidor local, como **Live Server** no VS Code. Evite abrir o arquivo diretamente com `file://`, pois os módulos JavaScript e as requisições à API precisam de uma origem HTTP.

## API

As URLs atuais estão definidas nos serviços:

- Login: `POST https://loginfake.onrender.com/login`
- Cadastro: `POST https://loginfake.onrender.com/cadastro`

O cadastro envia um JSON neste formato:

```json
{
  "username": "usuario",
  "email": "usuario@example.com",
  "birthdate": "2000-01-31",
  "cellphone": "11999999999",
  "password": "senha"
}
```

A confirmação de senha é validada no frontend e não é enviada à API. Os serviços esperam uma resposta JSON; respostas HTTP de erro são exibidas em um alerta.

### CORS

Como o frontend e a API usam origens diferentes, o backend precisa permitir a origem local usada pelo Live Server, por exemplo `http://127.0.0.1:5500`, e a origem de produção do frontend. Como as requisições usam `Content-Type: application/json`, a API também precisa responder ao preflight `OPTIONS` e permitir o método `POST` e o cabeçalho `Content-Type`. Essa configuração deve ser feita no backend, não no frontend.

Se as rotas da API mudarem, atualize as URLs correspondentes em `src/services/login.service.js` e `src/services/cadastrar.service.js`.
