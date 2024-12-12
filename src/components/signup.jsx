import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Dados a serem enviados
    const userData = { nome, email, senha };

    // Realizando a requisição POST para cadastrar o usuário
    axios
      .post("http://127.0.0.1:8000/", userData)
      .then((response) => {
        setMensagem("Usuário cadastrado com sucesso!");
        // Aqui você pode redirecionar ou fazer outras ações após o cadastro
      })
      .catch((error) => {
        setMensagem("Erro ao cadastrar o usuário. Tente novamente.");
      });
  };

  return (
    <div>
      <h1>Cadastro de Usuário</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>

      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default Signup;
