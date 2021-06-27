import React, { useEffect, useRef, useReducer } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { stopWatchReducer, bigStopWatchState } from '../helpers/stopWatchReducer';


//Componente que representa el cronometro que aparece al jugar al memorama
const Stoptwatch = ({ cardsPerRowColumn, context, setTotalSeconds }) => {
  const cuentaRegresiva = useRef(true);
  const [stopWatchState, dispatchStopWatchState] = useReducer(stopWatchReducer, bigStopWatchState);
  useEffect(() => {
    const interval = setTimeout(() => {
      if (stopWatchState.seconds === 0 && cuentaRegresiva.current) {
        cuentaRegresiva.current = false;
      }
      if (stopWatchState.seconds === 1 && cuentaRegresiva.current) {
        dispatchStopWatchState({ type: 'changeshowCountdown', payload: { showCountdown: false } });
        setTimeout(() => {
          dispatchStopWatchState({ type: 'changeShowMessage', payload: { showMessage: false } });
        }, 1000)
      }
      if (cuentaRegresiva.current) {
        dispatchStopWatchState({ type: 'minusSeconds' });
        dispatchStopWatchState({ type: 'addPercentageCountDown' });
      }
      else {
        dispatchStopWatchState({ type: 'addSeconds' });
      }
    }, 1000);
    if (context.correctPairs === (cardsPerRowColumn / 2)) {
      clearTimeout(interval);
      setTotalSeconds(stopWatchState.seconds);
    }
    return () => clearInterval(interval);
  }, [stopWatchState.seconds, cardsPerRowColumn, context.correctPairs, setTotalSeconds]);

  return (
    <>
      <div style={{ display: 'flex', marginBottom: "10px" }}>
        <div style={{ position: 'relative', marginRight: "50px" }}>
          <div className="titulo" style={{ position: 'absolute', top: '32px', left: '18px', fontSize: "24px", fontWeight: "bold", display: "inline", textAlign: "center", width: "60px" }}>{stopWatchState.seconds}</div>
          <CircularProgress size={95} variant="determinate" value={stopWatchState.percentageCountDown} />
        </div>
        {stopWatchState.showCountdown ? <h1 className="animate__animated animate__fadeIn animate__infinite titulo">Memoriza todas las cartas que puedas!</h1> : stopWatchState.showMessage ? <h1 className="titulo">Corre tiempo!</h1> : null}
      </div>
    </>
  )
}

Stoptwatch.propTypes = {
  cardsPerRowColumn: PropTypes.number.isRequired,
  context: PropTypes.object.isRequired,
  setTotalSeconds: PropTypes.func.isRequired
}

export default Stoptwatch;