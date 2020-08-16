import React from 'react';
import logo from './logo.svg';
import './App.css'
import Participante from './Participante'
import Bp from './img/bp.svg'
import Joao from './img/jp.png'
import Jezmael from './img/jez.png'


function App() {
  return (
    <div className="main">
        <img src={Bp}></img>
        <h1>Próxima live: Os desafios do ensino de tecnolgia a distância</h1>
        <p>Sexta-feira, 14 de agosto - 19h00</p>
        <div className="convidados">
            <Participante foto={Joao} nome={"João Oliveira"} biografia={"Pesquisador em Ciências da Educação e Servidor do IFRN - Campus Mossoró"}></Participante>
            <Participante foto={Jezmael} nome={"Jezmael Basílio"} biografia={"Professor especialista em docência EPCT e coordenador de curso na EEEP Dr. José Iran Costa"}></Participante>
        </div>        
        <div className="Social">
          <button href="https://www.youtube.com/channel/UChkJ1BrJnnPGcRcpegVkgsA">Assista aqui</button>
        </div>
    </div>    
  );
}

export default App;
