import React from 'react';
import logo from './logo.svg';
import './App.css'
import Participante from './Participante'
import Bp from './img/bp.svg'
import Joao from './img/jp.png'

function App() {
  return (
    <div className="main">
        <img src={Bp}></img>
        <h1>Próxima live: Os desafios do ensino de tecnolgia a distância</h1>
        <p>Sexta-feira, 14 de agosto - 19h00</p>
        <div className="convidados">
            <Participante foto={Joao} nome={"João Paulo"} biografia={"Doutor em Educação pela Universidade de Évora"}></Participante>
            <Participante></Participante>
        </div>        
        <div className="Social">
          <button>Assista aqui</button>
        </div>
    </div>    
  );
}

export default App;
