// import React from 'react';
// import { Range } from 'rc-slider';

// const style = { width: 400, margin: 50 };

// class Filter extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       rate: 0,
//       min: 100,
//       max: 1000
//     };

//     this.filterRate = this.filterRate.bind(this);
//     this.onSliderChange = this.onSliderChange.bind(this);
//     this.onAfterChange = this.onAfterChange.bind(this);
//   }

//   // Updates min and max values after slider change
//   onAfterChange(value) {
//     this.setState({ min: value[0], max: value[1] });
//     this.props.onFilter(value[1], value[0], this.state.rate);
//   }

//   // Updates slider values while the user interacts
//   onSliderChange(value) {
//     this.setState({ min: value[0], max: value[1] });
//   }

//   // Filters by rate value
//   filterRate(rateN, event) {
//     this.setState({ rate: rateN });
//     this.props.onFilter(this.state.max, this.state.min, rateN);
//     event.preventDefault();
//   }

//   // Applies CSS class to the star button based on the selected rate
//   cssStar(newRate, rate) {
//     return rate <= newRate ? 'icon-rate--null' : 'icon-rate';
//   }

//   render() {
//     if (!this.props.load) {
//       return null; // Return null if 'load' prop is false
//     }

//     return (
//       <div className="col-1-1">
//         <h3 className="title title--normal left">Filters</h3>

//         {/* Price Range Filter */}
//         <div className="filter filter--hotel">
//           <div className="title filter__title">Price Range</div>
//           <Range
//             defaultValue={[100, 1000]}
//             min={100}
//             max={1000}
//             onChange={this.onSliderChange}
//             onAfterChange={this.onAfterChange}
//           />
//           <div className="col-1-2 mobile-col-1-2">
//             <div className="title filter__title">Min:</div>
//             <div className="count filter__count left">${this.state.min}</div>
//           </div>
//           <div className="col-1-2 mobile-col-1-2">
//             <div className="title filter__title right">Max:</div>
//             <div className="count filter__count right">${this.state.max}</div>
//           </div>
//         </div>

//         {/* Star Rating Filter */}
//         <div className="filter filter--hotel">
//           <div className="line-hr"></div>
//           <div className="title filter__title">Stars</div>
//           {[1, 2, 3, 4, 5].map((rateValue) => (
//             <button
//               key={rateValue}
//               className={this.cssStar(rateValue - 1, this.state.rate)}
//               onClick={(e) => this.filterRate(rateValue, e)}
//             >
//               {rateValue}
//             </button>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default Filter;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EventPage() {
  const [events] = useState([
    { id: 1, nome: 'Evento 1', descricao: 'Descrição do Evento 1', data: '2024-12-20' },
    { id: 2, nome: 'Evento 2', descricao: 'Descrição do Evento 2', data: '2024-12-22' },
    { id: 3, nome: 'Evento 3', descricao: 'Descrição do Evento 3', data: '2024-12-25' },
  ]);

  const navigate = useNavigate();

  const handleReserva = (eventoId) => {
    // Aqui você pode fazer a lógica de reserva (pode incluir uma chamada API ou qualquer outro processo)
    alert(`Reserva para o evento ${eventoId} realizada com sucesso!`);
    navigate('/'); // Redireciona de volta para a página inicial após a reserva
  };

  return (
    <div>
      <h2>Eventos Disponíveis</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <h3>{event.nome}</h3>
            <p>{event.descricao}</p>
            <p>Data: {event.data}</p>
            <button onClick={() => handleReserva(event.id)}>Reservar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventPage;
