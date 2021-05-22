import React, { useState } from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';

//Componente que representa la forma que aprece al ganar el juego
const Form = ({ totalSeconds, cardsPerRowColumn }) => {
    const history = useHistory();
    const [text, setText] = useState('');
    //Funcion utilizada para guardar el tiempo obtenido en cache
    const saveTime = ({ name, seconds }) => {
        const highScores = JSON.parse(localStorage.getItem("highScores")) || { 12: [], 24: [], 48: [] };
        highScores[cardsPerRowColumn].push({ name, seconds });
        localStorage.setItem("highScores", JSON.stringify(highScores));
        history.replace("/memo");
    }
    const comebackStart = (e) => {
        e.preventDefault();
        history.replace("/memo");
    }
    const handleTextChange = (e) => {
        setText(e.target.value);
    }
    return (
        <div style={{textAlign:"center"}} className={`${totalSeconds ? 'wingame animate__animated animate__backInDown' : 'normalgame'} modal modal-content container`}>
            <h1 className="titulo">Has encontrado todas las cartas!!!</h1>
            <h1 className="titulo">Terminaste en {totalSeconds}s</h1>
            <h1 className="titulo" >Quieres guardar tu tiempo en los mejores tiempos?</h1>
            <br></br>
            <input onChange={handleTextChange} value={text} placeholder="Ingresa tu nombre"></input>
            <br></br>
            <button className="button" onClick={() => { saveTime({ name: text, seconds: totalSeconds }) }}>Guadar tiempo y regresar al menu principal</button>
            <br></br>
            <button className="button" onClick={comebackStart}>Regresar al menu principal</button>
        </div>
    )
}

Form.propTypes = {
    totalSeconds: PropTypes.number.isRequired,
    cardsPerRowColumn: PropTypes.number.isRequired
}
export default Form;