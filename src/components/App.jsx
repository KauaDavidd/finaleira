// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [email, setEmail] = useState('');
//   const [senha, setSenha] = useState('');
//   const [cpf, setCpf] = useState('');
//   const [telefone, setTelefone] = useState('');
//   const [mensagem, setMensagem] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
   
//     setMensagem('Cadastro ou Login realizado com sucesso!');
//   };

//   return (
//     <div className="App">
//       <h1>Sistema de Reservas</h1>
//       <form onSubmit={handleSubmit} className="form-container">
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="senha">Senha:</label>
//           <input
//             type="password"
//             id="senha"
//             value={senha}
//             onChange={(e) => setSenha(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="cpf">CPF:</label>
//           <input
//             type="text"
//             id="cpf"
//             value={cpf}
//             onChange={(e) => setCpf(e.target.value)}
//             required
//             maxLength="14"
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="telefone">Telefone:</label>
//           <input
//             type="text"
//             id="telefone"
//             value={telefone}
//             onChange={(e) => setTelefone(e.target.value)}
//             required
//             maxLength="15"
//           />
//         </div>

//         <button type="submit">Enviar</button>
//       </form>

//       {mensagem && <p>{mensagem}</p>}
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import "./App.css";
import Login from "./login";
import Reserve from "./Reserve";
import Signup from "./Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
