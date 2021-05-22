import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import Grid from '@material-ui/core/Grid';
import { urls, responsiveRows } from '../data/data';
import Form from './Form';
import PropTypes from 'prop-types';

//Componente que representa el tablero
const Board = ({ cardsPerRowColumn, context, totalSeconds }) => {
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState({});
    useEffect(() => {
        const cardsPrev = Array.from({ length: cardsPerRowColumn });
        const selectedurls = [];
        //Necesitamos seleccionar primero los urls necesarios dependiendo la cantidad de cartas
        //dividimos entre dos porque necesitamos pares
        for (let i = 0; i < (cardsPerRowColumn / 2); i++) {
            selectedurls.push(urls[i]);
        }
        //Colocamos todas las cartas de forma aleatoria y lo insertamos con el uso de la funcion que devuelve 
        //useState
        selectedurls.forEach((url, index) => {
            let pair = 0;
            while (pair < 2) {
                const randomNumber = Math.floor(Math.random() * cardsPerRowColumn);
                if (!cardsPrev[randomNumber]) {
                    cardsPrev[randomNumber] = { id: randomNumber, imageUrl: url, cardFound: true, availableToPick: false, pairNumber: index };
                    pair++;
                }
            }
        });
        setCards([...cardsPrev]);
        //Dejamos que se vean las cartas durante 7 segundos y luevo las volteamos de nuevo
        const timeout = setTimeout(() => {
            setCards(state => state.map(element => ({ ...element, cardFound: false, availableToPick: true })));
        }, 7000);
        return () => {
            clearTimeout(timeout);
        }
    }, [cardsPerRowColumn]);
    //Funcion que determina que hacer en caso de que una carta sea clicada
    const clickCard = (id) => {
        //Cuando se le da click a una carta hay solo dos opciones, que sea la primera carta del par
        //o que sea la segunda, se consideran ambos casos con ayuda de la variable selectedCard
        if (!Object.keys(selectedCard).length) {
            /*En este caso es la primer carta del par, por lo cual se voltea la carta selecionada con la ayuda
            de la propiedad cardFound en la carta dentro del arreglo de cartas. Con ayuda de la propiedad
            availableToPick hacemos que no se pueda clicar esta carta hasta que se selecciona la siguiente del par */
            setSelectedCard(cards[id]);
            setCards(cards.map(element => element.id === id ? { ...element, cardFound: true, availableToPick: false } : element));
        }
        else {
            //En este caso es la segunda carta del par. Volteamos la carta y hacemos todas las cartas no clickeables
            setCards(cards.map(element => element.id === id ? { ...element, cardFound: true, availableToPick: false } : { ...element, availableToPick: false }));
            //Damos 0.8 segundos para que el usuario vea el par de cartas, antes de determinar si estas coinciden
            setTimeout(() => {
                //Variable utilizada para asegurase que solo se agregue una vez una unidad a la cantidad de pares encontrados
                let pairAdded = false;
                //Recorrido por el arreglo para saber que hacer en cada caso
                setCards(state => state.map(element => {
                    // Si la carta esta marcada como encontrada y no es miembro del par seleccionado solo
                    //devolvemos su valor original
                    if (element.cardFound && (element.id !== id && element.id !== selectedCard.id)) {
                        return element;
                    }
                    //Si la carta es parte del par hacemos validaciones extras
                    else if (element.id === id || element.id === selectedCard.id) {
                        //Si ambas cartas coinciden en su valor de par agregamos entonces una unidad
                        //al valor de correctPairs que se encuentra dentro del contexto
                        if (selectedCard.pairNumber === cards[id].pairNumber) {
                            //Nos aseguramos de hacerlo una sola vez
                            if (!pairAdded) {
                                context.addPair();
                                pairAdded = true;
                            }
                            return { ...element, cardFound: true, availableToPick: false }
                        }
                        //Si no coinciden las volteamos y la hacemos clickeables de nuevo
                        return { ...element, cardFound: false, availableToPick: true };
                    }
                    //Todas las demas cartas se hacen de nuevo clickeables
                    else {
                        return { ...element, availableToPick: true };
                    }
                }));
                setSelectedCard({});
            }, 800);
        }
    }
    return (
        <div style={{ marginTop: "65px" }} >
            <Grid container>
                {
                    cards.length ? (cards.map(({ id, imageUrl, cardFound, availableToPick }) => {
                        const cardProps = {
                            id,
                            imageUrl,
                            cardFound,
                            availableToPick,
                            cardsPerRowColumn,
                            clickCard
                        }
                        return <Grid key={id} item {...responsiveRows[cardsPerRowColumn]}> <Card key={id} {...cardProps} /></Grid>
                    })) : []
                }
            </Grid>
            <Form totalSeconds={totalSeconds} cardsPerRowColumn={cardsPerRowColumn} />
        </div>
    )
}

Board.propTypes = {
    context: PropTypes.object.isRequired,
    totalSeconds: PropTypes.number.isRequired,
    cardsPerRowColumn: PropTypes.number.isRequired,
}
export default Board;
