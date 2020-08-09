import React from 'react'
import './Participante.css'
import Yan from './img/yan.jpg'

export default function Participante(props) {
    return (
        <div className="Participante">
            <img src={props.foto}></img>
            <div className="bio">
                <h3>{props.nome}</h3>
                <p>{props.biografia}
                </p>
            </div>
            
        </div>
    )
}
