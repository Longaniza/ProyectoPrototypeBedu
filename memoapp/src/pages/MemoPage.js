import React, { useState } from 'react'
import Board from '../components/Board';
import MyContext from '../components/MyContext';
import MyProvider from '../components/MyProvider';
import Stoptwatch from '../components/StopWatch';
//Componente que representa la pagina del memorama
const MemoPage = ({ history }) => {
    const { cardsPerRowColumn } = history.location.state;
    const [totalSeconds, setTotalSeconds] = useState(0);

    return (
        <MyProvider>
            <MyContext.Consumer>
                {
                    context => (
                        <>
                            {!totalSeconds ? <Stoptwatch cardsPerRowColumn={cardsPerRowColumn} context={context} setTotalSeconds={setTotalSeconds} /> : []}
                            <Board cardsPerRowColumn={cardsPerRowColumn} context={context} totalSeconds={totalSeconds} />
                        </>)
                }
            </MyContext.Consumer>
        </MyProvider>
    )
}

export default MemoPage;
