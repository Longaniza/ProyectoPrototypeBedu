import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { difficulties } from '../data/data';

function StartPage({ history }) {
    const [selected, setSelected] = useState(12);
    return (<div className="difficulties">
        {
            difficulties.map((elem, index) => {
                return (<div key={index} className={`${selected === elem.cardsPerRowColumn ? 'selected' : ''} animate__animated animate__slideInLeft change-cursor difficulty`} onClick={(e) => { setSelected(elem.cardsPerRowColumn) }}>

                    <div>
                        <img style={{ height: "20vh", width: "20vh" }} src={elem.imgUrl} alt="cardimg"></img>
                    </div>
                    <div>
                        <h1>{elem.name}</h1>
                        <h1 className="size" >{elem.size}</h1>

                        <div className="text-align-right tooltip">
                            <i style={{ color: "#48466d" }} className="fas fa-question-circle"></i>
                            <span className="tooltiptext">{elem.message}</span>
                        </div>
                    </div>
                </div>);
            })
        }
        <div className="text-align-right tooltip">
                <img className="change-cursor" alt="Imagen de boton de inicio" src="https://drive.google.com/uc?export=view&id=1GwHFCSTCkMytpyy6j7l20ARjnN7yjiue" onClick={() => {
                    history.replace("/memo/memorama",{cardsPerRowColumn:selected});
                }}></img>
                <div className="tooltiptext bottom">
                <span>Presiona para iniciar el juego</span>
            </div>
        </div>
        <div id="scores-initial-menu" className="tooltip">
            <Link
                to="/memo/scores"
            >
                <i style={{ fontSize: "2rem" }} className="fas fa-stopwatch"></i>
            </Link>

            <div className="tooltiptext bottom">
                <span>Mejores tiempos</span>
            </div>
        </div>
    </div>);
}

StartPage.propTypes = {
    history: PropTypes.object.isRequired
}


export default StartPage;