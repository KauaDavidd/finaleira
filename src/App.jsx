import React, { useState } from "react";
import "./App.css";

function App() {
  // Estado para o cadastro do usuário
  const [nomeCadastro, setNomeCadastro] = useState("");
  const [emailCadastro, setEmailCadastro] = useState("");
  const [senhaCadastro, setSenhaCadastro] = useState("");

  // Estado para o login do usuário
  const [nomeLogin, setNomeLogin] = useState("");
  const [emailLogin, setEmailLogin] = useState("");
  const [senhaLogin, setSenhaLogin] = useState("");

  // Estado para controle de cadastro e login
  const [usuarioCadastrado, setUsuarioCadastrado] = useState(null); // null -> não cadastrado, {} -> usuário logado

  // Estado para armazenar as reservas
  const [reservas, setReservas] = useState([]);
  
  // Estados dos campos do formulário de reserva
  const [nomeReserva, setNomeReserva] = useState("");
  const [dataReserva, setDataReserva] = useState("");
  const [horaReserva, setHoraReserva] = useState("");

  // Função para cadastrar o usuário
  const cadastrarUsuario = (e) => {
    e.preventDefault();
    if (nomeCadastro && emailCadastro && senhaCadastro) {
      // Simulando o cadastro (sem backend por enquanto)
      setUsuarioCadastrado({ nome: nomeCadastro, email: emailCadastro });
      // Limpa os campos do formulário
      setNomeCadastro("");
      setEmailCadastro("");
      setSenhaCadastro("");
      alert("Cadastro realizado com sucesso!");
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  // Função para logar o usuário
  const logarUsuario = (e) => {
    e.preventDefault();
    // Verificando se o e-mail e senha batem com o usuário cadastrado
    if (
      emailLogin === usuarioCadastrado?.email &&
      senhaLogin === usuarioCadastrado?.senha
    ) {
      alert("Login realizado com sucesso!");
      // Limpa os campos de login
      setEmailLogin("");
      setSenhaLogin("");
    } else {
      alert("Credenciais incorretas.");
    }
  };

  // Função para adicionar uma nova reserva
  const adicionarReserva = (e) => {
    e.preventDefault();
    if (nomeReserva && dataReserva && horaReserva) {
      const novaReserva = { nome: nomeReserva, data: dataReserva, hora: horaReserva };
      setReservas([...reservas, novaReserva]);
      setNomeReserva("");
      setDataReserva("");
      setHoraReserva("");
    } else {
      alert("Por favor, preencha todos os campos da reserva.");
    }
  };

  // Função para deletar uma reserva
  const deletarReserva = (index) => {
    const novasReservas = reservas.filter((_, i) => i !== index);
    setReservas(novasReservas);
  };

  return (
    <div className="App">
      <h1>Gerenciador de Reservas</h1>

      {/* Se o usuário não estiver cadastrado, exibe o formulário de cadastro */}
      {usuarioCadastrado === null ? (
        <div>
          <h2>Cadastro</h2>
          <form onSubmit={cadastrarUsuario}>
            <div>
              <label>Nome:</label>
              <input
                type="text"
                value={nomeCadastro}
                onChange={(e) => setNomeCadastro(e.target.value)}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={emailCadastro}
                onChange={(e) => setEmailCadastro(e.target.value)}
              />
            </div>
            <div>
              <label>Senha:</label>
              <input
                type="password"
                value={senhaCadastro}
                onChange={(e) => setSenhaCadastro(e.target.value)}
              />
            </div>
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      ) : usuarioCadastrado?.nome && !emailLogin ? (
        // Se o usuário estiver cadastrado mas não logado, exibe o formulário de login
        <div>
          <h2>Login</h2>
          <form onSubmit={logarUsuario}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={emailLogin}
                onChange={(e) => setEmailLogin(e.target.value)}
              />
            </div>
            <div>
              <label>Senha:</label>
              <input
                type="password"
                value={senhaLogin}
                onChange={(e) => setSenhaLogin(e.target.value)}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        // Se o usuário estiver logado, exibe o gerenciador de reservas
        <div>
          <h2>Bem-vindo, {usuarioCadastrado?.nome}!</h2>

          {/* Formulário para adicionar novas reservas */}
          <form onSubmit={adicionarReserva}>
            <div>
              <label>Nome da Reserva:</label>
              <input
                type="text"
                value={nomeReserva}
                onChange={(e) => setNomeReserva(e.target.value)}
              />
            </div>
            <div>
              <label>Data:</label>
              <input
                type="date"
                value={dataReserva}
                onChange={(e) => setDataReserva(e.target.value)}
              />
            </div>
            <div>
              <label>Hora:</label>
              <input
                type="time"
                value={horaReserva}
                onChange={(e) => setHoraReserva(e.target.value)}
              />
            </div>
            <button type="submit">Adicionar Reserva</button>
          </form>

          {/* Lista de reservas */}
          <h3>Lista de Reservas</h3>
          {reservas.length === 0 ? (
            <p>Nenhuma reserva feita ainda.</p>
          ) : (
            <ul>
              {reservas.map((reserva, index) => (
                <li key={index}>
                  <strong>{reserva.nome}</strong> - {reserva.data} às {reserva.hora}
                  <button onClick={() => deletarReserva(index)} className="deletar-btn">
                    Deletar
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default App;