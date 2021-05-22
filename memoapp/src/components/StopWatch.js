import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

//Componente que representa el cronometro que aparece al jugar al memorama
const Stoptwatch = ({ cardsPerRowColumn, context, setTotalSeconds }) => {
  const [seconds, setSeconds] = useState(-7);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    if (context.correctPairs === (cardsPerRowColumn / 2)) {
      clearInterval(interval);
      setTotalSeconds(seconds);
    }
    return () => clearInterval(interval);
  }, [seconds, cardsPerRowColumn, context.correctPairs, setTotalSeconds]);

  return (
    <>
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