import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import TimerOffIcon from '@material-ui/icons/TimerOff';
import MuiAlert from '@material-ui/lab/Alert';
import { isresponseJSON } from '../helpers/helpers';
import 'flag-icon-css/css/flag-icon.css';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const regularColumns = [
  { field:'countryCode', headerName:'Pais', width: 150, renderCell: (params) => <>{ params.value === 'N/A' ? <span>N/A</span> : <span className={`flag-icon flag-icon-${params.value.toLowerCase()}`}></span>}</>, sortable: false},
  { field: 'playerName', headerName: 'Nombre', flex: 1, sortable: false },
  { field: 'seconds', headerName: 'Segundos', width: 200 },
  { field: 'cardsFlipped', headerName: 'Cartas Volteadas', width: 200 }];
const smallColumns = [{ field: 'playerName', headerName: 'Nombre', flex: 1, sortable: false }, { field: 'seconds', headerName: 'Segundos', flex: 1 }];

function TopScore({ totalCards }) {
  const matches = useMediaQuery('(max-width:700px)');
  const [highScores, setHighScores] = useState([]);
  const [changedCard, setChangedCard] = useState(true);
  const [promiseError, setPromiseError] = useState(false);
  useEffect(() => {
    //Funcion utilizada para intentar obtener los tiempos de la base de datos
    const getTimes = async () => {
      setChangedCard(true);
      const cardsPromises = await fetch(`/v1/scores?order=seconds&cards=${totalCards}`);
      if (cardsPromises.ok && isresponseJSON(cardsPromises)) {
        const cardsPromisesResults = await cardsPromises.json();
        setHighScores(cardsPromisesResults);
      }
      else {
        setPromiseError(true);
      }
      setChangedCard(false);
    }
    getTimes();
  }, [totalCards]);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <EmojiEventsIcon style={{ fontSize: 60 }} />
        <h1 className="scores"><b>{totalCards} cartas</b></h1>
        <div style={{ height: 370, width: '100%' }}>
          {changedCard ? <CircularProgress color="primary" /> : promiseError ? <Alert severity="error">Hubo en error al relizar la peticion!</Alert> : highScores.length ? <DataGrid disableColumnMenu disableSelectionOnClick rows={highScores} columns={matches ? smallColumns : regularColumns} pageSize={5} /> : <div style={{ boxShadow: "0px 1px 5px #666", padding: "50px 10px" }}><TimerOffIcon style={{ fontSize: 70 }} /><h1>Sin tiempos registrados</h1></div>}
        </div> 
      </div>
    </div>
  );
}

export default TopScore;