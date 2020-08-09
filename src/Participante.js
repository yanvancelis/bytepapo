import React from 'react'
import 'Participante.css'

export default function Participante(props) {
    return (
        <div className="Participante">
            <img src={props.foto}></img>
            <h5>{props.nome}</h5>
        </div>
    )
}
