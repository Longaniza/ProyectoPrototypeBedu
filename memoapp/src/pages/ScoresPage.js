import React from 'react';

//Componente que representa la pagina de puntajes ordenados de menor a mayor segun el tiempo 
const ScoresPage = () => {
    //Obtencion de los tiempos y ordenamiento de estos por categoria
    const highScores = JSON.parse(localStorage.getItem("highScores")) || { 12: [], 24: [], 48: [] };
    for (const cards in highScores) {
        highScores[cards].sort(function (a, b) { return a.seconds - b.seconds });
    }
    return (
        <div>
            <h1 className="titulo"><strong>Mejores tiempos</strong></h1>
            <br></br>
            <div className="container"><div>
            {
                Object.entries(highScores).map(([totalCards, registries], index) => {
                    return <div style={{textAlign:"center"}}  key={index}>
                        <img
                    src="https://bit.ly/3vCDa4K"
                    alt="Score winner" width="140" height="140"></img>
                        <h1 className="scores"><b>{totalCards} cartas</b></h1>
                        {registries.length ? registries.map(({ name, seconds }, index) => {
                            return <h1 className="scores" key={index}>{`${name}   ${seconds}s`}</h1>
                        }) : <h1>N/A</h1>}
                    </div>;
                })
            }
            </div></div>
        </div>
    )
}

export default ScoresPage;