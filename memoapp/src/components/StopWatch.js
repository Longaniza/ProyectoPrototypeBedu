import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

//Componente que representa el cronometro que aparece al jugar al memorama
const Stoptwatch = ({ cardsPerRowColumn, context, setTotalSeconds }) => {
  const [seconds, setSeconds] = useState(7);
  const cuentaRegresiva = useRef(true);
  const [showCuentaRegresiva, setShowCuentaRegresiva] = useState(true);
  useEffect(() => {
    const interval = setTimeout(() => {
      if (seconds === 0 && cuentaRegresiva.current) {
        cuentaRegresiva.current = false;
      }
      if (seconds === 1 && cuentaRegresiva.current) {
        setShowCuentaRegresiva(false);
      }
      if (cuentaRegresiva.current) {
        setSeconds(seconds => seconds - 1);
      }
      else {
        setSeconds(seconds => seconds + 1);
      }
    }, 1000);
    if (context.correctPairs === (cardsPerRowColumn / 2)) {
      clearTimeout(interval);
      setTotalSeconds(seconds);
    }
    return () => clearInterval(interval);
  }, [seconds, cardsPerRowColumn, context.correctPairs, setTotalSeconds]);

  return (
    <>
      <h1 style={{ display: showCuentaRegresiva ? 'block' : 'none' }}>Memoriza todas las cartas que puedas!</h1>
      <h1 style={{ display: showCuentaRegresiva ? 'none' : 'block' }}>Corre tiempo!</h1>
      <h1>{seconds}</h1>
    </>
  )
}

Stoptwatch.propTypes = {
  cardsPerRowColumn: PropTypes.number.isRequired,
  context: PropTypes.object.isRequired,
  setTotalSeconds: PropTypes.func.isRequired
}

export default Stoptwatch;