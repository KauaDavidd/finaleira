import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = { username: nome, email, password: senha};
        try {
            await axios.post('http://localhost:8000/register/', userData);
            alert('Usuário registrado com sucesso!');
        }   catch (error){
            alert('Erro ao registrar usuário');
        }
    };


    return(
        <div>
            <h2>Cadastro de Usuário</h2>
            <from onSubmit={handleSubmit}>
                <imput
                type="text"
                placegolder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
            />
            <input type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            <input type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            requimed
            />
            <button type="submit">Cadastrar</button>
            </from>
        </div>
    );
};

export default Signup;