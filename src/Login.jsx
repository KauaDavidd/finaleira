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
        }
    }
}