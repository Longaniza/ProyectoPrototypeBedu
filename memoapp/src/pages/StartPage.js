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
                <img className="change-cursor" alt="Imagen de boton de inicio" src="https://lh3.googleusercontent.com/cU9CleitBrI8Wi9JGqDIz78If73bOIO9LYVhuJKWQ3UJSZe3hj6VeqlVoMUgfVFrg5OHr9eLPzpXNC3N33IHg-CZmW2Iq1Id2sFOEKjhkyElPgps0JYuXEH7Zs46X4ho8X_UDY-mW0U_YxMRvi3BU4YtakkJVmbjUuZJ3BFdL9sal8Rt-fm-7sGnQwq7xPSrGWqP0S2U-F-g79JXbfDkgLgagTB4s0cGJ360OjQQBeuer1FH9ga5naZ-B6qSTfYBAI69jQ0TQVTkslIj8sfL2pulkK6DhkNxqu_yR9PhW503menUyelAnWb2qBMCUAxh76V9PD8BgCyGMVsKciOG8ih96nizYu5bkut-24y4PCw5PO2r7DIAZ1MH2rlgbIkdVHy7Hiqzv_be5Ik2bHSxcesC_77lwpjApc7JlpRf4D2VYL3ZADBbelnbD6ILVoCFJtoSgAAmFrJNDpVPV6toTJFl1GxaRGIC1ux0NulCq5OR274LnTy0GgyxnfXVRxOYUhhBbwsTc8A2Cz-ykwZXdSTWtEBbyCgvpso5fZa4cdvWfjS7CiZqM70ZIliyksmtCVPDSsQYT7ibrC2iEsiU6tPhOiQTlPNZlThRwhursegzfd_J4C9AMcLNH1Vv4Ayhish434dNDmrZl7VeiQ5o16tpls2tDuP0Ent9sRc0-pCKOoZziRO890w_5vcPkUkODwZKkQHqFmzyE6J4_xcd_95g3A=w122-h56-no?authuser=0" onClick={() => {
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