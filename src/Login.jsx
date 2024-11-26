import React, {useState} from "react";
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');
    const [token, setToken] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginData = {username, password: senha};
        try {
            const response = await axios.post('https//localhost:8000/login/', loginData);
            setToken(reponse.data.access_token);
            alert('Login realizado com sucesso!');
        } catch (error) {
            alert('Erro ao fazer login');
        }
    };

    return(
        <div>
        <h2>Login</h2>
        <from onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Nome de Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            />
        <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            />
        <button type= "submit">Entrar</button>
        </from>    
        </div>
    );
}

export default Login;