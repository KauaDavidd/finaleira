import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function Reserve() {
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token')); // Armazena o token JWT
 
  useEffect(() => {
    axios.get('http://localhost:8000/reserva/')
      .then((response) => {
        setDates(response.data);
      })
      .catch((error) => {
        alert('Erro ao carregar datas');
      });
  }, []);
 
  const handleReserve = () => {
    axios.post('http://localhost:8000/reserva/verificar/', { date: selectedDate }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {talyssonemail:
        alert('Reserva realizada com sucesso!');
      })
      .catch((error) => {
        alert('Erro ao fazer reserva');
      });
  };
 
  return (
<div>
<h2>Reservar Evento</h2>
<select onChange={(e) => setSelectedDate(e.target.value)}>
        {dates.map((date) => (
<option key={date} value={date}>{date}</option>
        ))}
</select>
<button onClick={handleReserve}>Reservar</button>
</div>
  );
}
 
export default Reserve;