import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import TimerOffIcon from '@material-ui/icons/TimerOff';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const regularColumns = [
  { field: 'playerName', headerName: 'Nombre', flex: 1, sortable: false },
  { field: 'seconds', headerName: 'Segundos', width: 150 },
  { field: 'cardsFlipped', headerName: 'Cartas Volteadas', width: 200 }];
const smallColumns = [{ field: 'playerName', headerName: 'Nombre', flex: 1, sortable: false }, { field: 'seconds', headerName: 'Segundos', flex: 1 }];

function TopScore({ totalCards }) {
  const matches = useMediaQuery('(max-width:650px)');
  const [highScores, setHighScores] = useState([]);
  const [changedCard, setChangedCard] = useState(true);
  const [promiseError, setPromiseError] = useState(false);
  useEffect(() => {
    //Funcion utilizada para intentar obtener los tiempos de la base de datos
    const getTimes = async () => {
      setChangedCard(true);
      try {
        const cardsPromises = await fetch(`/v1/scores?order=seconds&cards=${totalCards}`);
        if (cardsPromises.ok) {
          const cardsPromisesResults = await cardsPromises.json();
          setHighScores(cardsPromisesResults);
        }
        else {
          throw new Error('No se pudo realizar la peticion');
        }
      }
      catch {
        setPromiseError(true);
      }
      finally {
        setChangedCard(false);
      }
    }
    getTimes();
  }, [totalCards]);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <EmojiEventsIcon style={{ fontSize: 60 }} />
        <h1 className="scores"><b>{totalCards} cartas</b></h1>
        <div style={{ height: 370, width: '100%' }}>
          {changedCard ? <CircularProgress color="primary" /> : promiseError ? <Alert severity="error">Hubo en error al relizar la peticion!</Alert> : highScores.length ? <DataGrid disableColumnMenu disableSelectionOnClick rows={highScores.map((element, index) => ({ ...element, id: index + 1 }))} columns={matches ? smallColumns : regularColumns} pageSize={5} /> : <div style={{ boxShadow: "0px 1px 5px #666", padding: "50px 10px" }}><TimerOffIcon style={{ fontSize: 70 }} /><h1>Sin tiempos registrados</h1></div>}
        </div>
      </div>
    </div>
  );
}

export default TopScore;