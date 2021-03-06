import React from 'react'
import "../styles/card.css";
import PropTypes from "prop-types";
//Componente que representa cada una de las cartas
const Card = ({ imageUrl, id, cardFound, clickCard, availableToPick, imageLoaded, winnerCard }) => {
    return (
        <div className="scene">
            <div style={{ backgroundColor: "transparent" }} onClick={() => { clickCard(id) }} className={`card ${cardFound ? '' : 'is-flipped'} ${winnerCard ? 'animate__animated animate__heartBeat' : ''} ${availableToPick ? '' : 'notavailabletopick'} change-cursor`}>
                <div className="card__face card__face--front animate__animated animate__fadeInLeft">
                    <img style={{ width: "90px", height: "135px", borderRadius: "5px" }} src={imageUrl} alt="Card" onLoad={imageLoaded} />
                </div>
                <div className="card__face card__face--back"></div>
            </div>
        </div>
    );
}

Card.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    cardFound: PropTypes.bool.isRequired,
    clickCard: PropTypes.func.isRequired,
    availableToPick: PropTypes.bool.isRequired
}

export default Card;
