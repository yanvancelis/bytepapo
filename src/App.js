import React from 'react';
import logo from './logo.svg';
import './App.css'
import Participante from './Participante'
import Bp from './img/bp.svg'
import Maria from './img/victoria.PNG'
import Lara from './img/lara.PNG'


function App() {
  return (
    <div className="main">
        <img src={Bp}></img>
        <h1>Próxima live: Atividades extrecurriculares e sua importância na carreira profissional</h1>
        <p>Dia e horário: Sexta-feira, 21 de agosto - 19h00</p>
        <div className="convidados">
            <Participante foto={Maria} nome={"Maria Victoria"} biografia={"Estudante da UFC e integrante do projeto Meninas Digitais do Vale"}></Participante>
            <Participante foto={Lara} nome={"Ana Lara"} biografia={"Estudante da UFC e integrante do projeto Meninas Digitais do Vale"}></Participante>
        </div>        
        <div className="Social">
          <button href="https://www.youtube.com/watch?v=tjWLJNepiQc&feature=emb_title">Assista aqui</button>
        </div>
    </div>    
  );
}

export default App;
