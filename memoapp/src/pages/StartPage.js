import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { difficulties } from '../data/data';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import HelpIcon from '@material-ui/icons/Help';
import TimerIcon from '@material-ui/icons/Timer';



function StartPage({ history }) {
    const [selected, setSelected] = useState(12);
    return (<div className="difficulties">
        {
            difficulties.map((elem, index) => {
                return (<div key={index} className={`${selected === elem.cardsPerRowColumn ? 'selected' : ''} animate__animated animate__slideInLeft change-cursor difficulty`} onClick={(e) => { setSelected(elem.cardsPerRowColumn) }}>

                    <div>
                        {elem.icon}
                    </div>
                    <div>
                        <h1>{elem.name}</h1>
                        <h1 className="size" >{elem.size}</h1>
                        <div className="text-align-right tooltip">
                            <HelpIcon />
                            <span className="tooltiptext">{elem.message}</span>
                        </div>
                    </div>
                </div>);
            })
        }
        <div className="text-align-right">
            <IconButton aria-label="add to shopping cart"
                onClick={() => {
                    history.replace("/memo/memorama", { cardsPerRowColumn: selected });
                }}
            >
                <PlayArrowIcon color="primary" style={{ fontSize: 60 }} />
            </IconButton>
        </div>
        <div id="scores-initial-menu" className="tooltip">
            <Link
                to="/memo/scores"
            >
                <TimerIcon color="primary" style={{ fontSize: 30 }}></TimerIcon>
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