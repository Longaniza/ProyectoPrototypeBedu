
export const bigCardsState = { cards: [], cardsClicked: 0, selectedCard: {}, changedCardInfo: false, cardInfo: "" }
export function boardCardReducer(state, action) {
    switch (action.type) {
        case 'setInitialCardsGroup':
            const selectedurls = [];
            const cardsPrev = Array.from({ length: action.payload.cardsPerRowColumn });
            //Necesitamos seleccionar primero los urls necesarios dependiendo la cantidad de cartas
            //dividimos entre dos porque necesitamos pares
            for (let i = 0; i < (action.payload.cardsPerRowColumn / 2); i++) {
                selectedurls.push(action.payload.urls[i]);
            }
            //Colocamos todas las cartas de forma aleatoria y lo insertamos con el uso de la funcion que devuelve 
            //useState
            selectedurls.forEach((url, index) => {
                let pair = 0;
                while (pair < 2) {
                    const randomNumber = Math.floor(Math.random() * action.payload.cardsPerRowColumn);
                    if (!cardsPrev[randomNumber]) {
                        cardsPrev[randomNumber] = { id: randomNumber, imageUrl: url.url, cardFound: true, availableToPick: false, pairNumber: index, winnerCard: false, concept: url.concept, info: url.info };
                        pair++;
                    }
                }
            });
            return { ...state, cards: cardsPrev };
        case 'setCardsGroupAfterInitialCardsGroup':
            return { ...state, cards: state.cards.map(element => ({ ...element, cardFound: false, availableToPick: true })) }
        case 'setCardsGroup':
            return { ...state, cards: [...action.payload.cardGroup] }
        case 'addCardsClicked':
            return { ...state, cardsClicked: state.cardsClicked + 1 }
        case 'changeSelectedCard':
            if (action.payload.selectedCardId === -1) {
                return { ...state, selectedCard: {} }
            }
            return { ...state, selectedCard: { ...state.cards[action.payload.selectedCardId] } };
        case 'changeChangedCardInfo':
            return { ...state, changedCardInfo: action.payload.changedcardInfoStatus };
        case 'changeCardInfo':
            return { ...state, cardInfo: { ...action.payload.cardInfo } };
        default:
            throw new Error();
    }
}