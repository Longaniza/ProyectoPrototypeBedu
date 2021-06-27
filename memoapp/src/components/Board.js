import React, { useEffect, useState, useRef, useReducer } from 'react';
import Card from '../components/Card';
import Grid from '@material-ui/core/Grid';
import { urls, responsiveRows } from '../data/data';
import Form from './Form';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { boardCardReducer, bigCardsState } from '../helpers/boardCardReducer';

//Componente que representa el tablero
const Board = ({ cardsPerRowColumn, context, totalSeconds }) => {
    const [loading, setLoading] = useState(true);
    const [cardsState, dispatchCardsState] = useReducer(boardCardReducer, bigCardsState);
    const counter = useRef(0);
    const imageLoaded = () => {
        counter.current += 1;
        if (counter.current >= cardsPerRowColumn) {
            setLoading(false);
        }
    }
    useEffect(() => {
        dispatchCardsState({ type: 'setInitialCardsGroup', payload: { urls, cardsPerRowColumn } });
        //Dejamos que se vean las cartas durante 7 segundos y luevo las volteamos de nuevo
        const timeout = setTimeout(() => {
            dispatchCardsState({ type: 'setCardsGroupAfterInitialCardsGroup' });
        }, 10000);
        return () => {
            clearTimeout(timeout);
        }
    }, [cardsPerRowColumn]);
    //Funcion que determina que hacer en caso de que una carta sea clicada
    const clickCard = (id) => {
        //Cuando se le da click a una carta hay solo dos opciones, que sea la primera carta del par
        //o que sea la segunda, se consideran ambos casos con ayuda de la variable selectedCard
        if (!Object.keys(cardsState.selectedCard).length) {
            /*En este caso es la primer carta del par, por lo cual se voltea la carta selecionada con la ayuda
            de la propiedad cardFound en la carta dentro del arreglo de cartas. Con ayuda de la propiedad
            availableToPick hacemos que no se pueda clicar esta carta hasta que se selecciona la siguiente del par */
            dispatchCardsState({ type: 'addCardsClicked' });
            dispatchCardsState({ type: 'changeSelectedCard', payload: { selectedCardId: id } });
            dispatchCardsState({ type: 'setCardsGroup', payload: { cardGroup: cardsState.cards.map(element => element.id === id ? { ...element, cardFound: true, availableToPick: false } : element) } });
        }
        else {
            let winnerCardFound = false;
            dispatchCardsState({ type: 'addCardsClicked' });
            //En este caso es la segunda carta del par. Volteamos la carta y hacemos todas las cartas no clickeables
            dispatchCardsState({ type: 'setCardsGroup', payload: { cardGroup: cardsState.cards.map(element => element.id === id ? { ...element, cardFound: true, availableToPick: false } : { ...element, availableToPick: false }) } });
            //Damos 0.8 segundos para que el usuario vea el par de cartas, antes de determinar si estas coinciden
            setTimeout(() => {
                //Variable utilizada para asegurase que solo se agregue una vez una unidad a la cantidad de pares encontrados
                let pairAdded = false;
                //Recorrido por el arreglo para saber que hacer en cada caso
                dispatchCardsState({
                    type: 'setCardsGroup', payload: {
                        cardGroup: cardsState.cards.map(element => {
                            // Si la carta esta marcada como encontrada y no es miembro del par seleccionado solo
                            //devolvemos su valor original
                            if (element.cardFound && (element.id !== id && element.id !== cardsState.selectedCard.id)) {
                                return element;
                            }
                            //Si la carta es parte del par hacemos validaciones extras
                            else if (element.id === id || element.id === cardsState.selectedCard.id) {
                                //Si ambas cartas coinciden en su valor de par agregamos entonces una unidad
                                //al valor de correctPairs que se encuentra dentro del contexto
                                if (cardsState.selectedCard.pairNumber === cardsState.cards[id].pairNumber) {
                                    //Nos aseguramos de hacerlo una sola vez
                                    if (!pairAdded) {
                                        context.addPair();
                                        winnerCardFound = true;
                                        pairAdded = true;
                                    }
                                    return { ...element, cardFound: true, availableToPick: false, winnerCard: true };
                                }
                                //Si no coinciden las volteamos y la hacemos clickeables de nuevo
                                return { ...element, cardFound: false, availableToPick: true };
                            }
                            //Todas las demas cartas se hacen de nuevo clickeables
                            else {
                                return { ...element, availableToPick: true };
                            }
                        })
                    }
                });

                const selectedCardInfo = cardsState.selectedCard;
                if (winnerCardFound) {
                    dispatchCardsState({ type: 'changeChangedCardInfo', payload: { changedcardInfoStatus: true } });
                    setTimeout(() => {
                        dispatchCardsState({ type: 'changeCardInfo', payload: { cardInfo: selectedCardInfo } });
                        dispatchCardsState({ type: 'changeChangedCardInfo', payload: { changedcardInfoStatus: false } });
                    }, 100);
                }
                dispatchCardsState({ type: 'changeSelectedCard', payload: { selectedCardId: -1 } });
            }, 800);

        }
    }
    return (
        <>
            <div style={{ border: "2px solid rgba(0, 0, 0, 1)", padding: "10px", borderRadius: "5px", minHeight: "40px" }} className={`${cardsState.cardInfo === "" ? 'not-show-card-info' : 'show-card-info'} animate__animated animate__fadeIn`}>
                <div style={{ display: 'flex', alignItems: "flex-start", borderRight: "1px solid rgba(0, 0, 0, 1)", paddingRight: "5px" }} className={`animate__animated ${cardsState.changedCardInfo ? 'animate__fadeOutDownBig' : 'animate__fadeInUpBig'}`} >
                    <h1 style={{ margin: "0" }}>{cardsState.cardInfo.concept}</h1>
                </div>
                <div style={{ display: 'flex', alignItems: "center", marginLeft: "15px" }} className={`animate__animated ${cardsState.changedCardInfo ? 'animate__fadeOutRightBig' : 'animate__fadeInRightBig'}`}>
                    <p style={{ margin: "0" }}>{cardsState.cardInfo.info}</p>
                </div>

            </div>
            <div style={{ marginTop: "65px", width: "90vw", height: "70vh", border: "1px black", display: loading ? "flex" : "none", justifyContent: "center", alignItems: "center" }}>
                <CircularProgress color="primary" />
            </div>
            <div style={{ marginTop: "65px", display: loading ? "none" : "block" }} >
                <Grid container>
                    {
                        cardsState.cards.length ? (cardsState.cards.map(({ id, imageUrl, cardFound, availableToPick, winnerCard }) => {
                            const cardProps = {
                                id,
                                imageUrl,
                                cardFound,
                                availableToPick,
                                cardsPerRowColumn,
                                clickCard,
                                imageLoaded,
                                winnerCard
                            }
                            return <Grid key={id} item {...responsiveRows[cardsPerRowColumn]}> <Card key={id} {...cardProps} /></Grid>
                        })) : []
                    }
                </Grid>
                <Form cardsFlipped={cardsState.cardsClicked} totalSeconds={totalSeconds} cardsPerRowColumn={cardsPerRowColumn} />
            </div>
        </>
    )
}

Board.propTypes = {
    context: PropTypes.object.isRequired,
    totalSeconds: PropTypes.number.isRequired,
    cardsPerRowColumn: PropTypes.number.isRequired,
}
export default Board;
