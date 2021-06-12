import React, { useState } from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import TextField from '@material-ui/core/TextField';
import { isresponseJSON } from '../helpers/helpers';
import publicIp from 'public-ip';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

//Componente que representa la forma que aprece al ganar el juego
const Form = ({ totalSeconds, cardsPerRowColumn, cardsFlipped }) => {
    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const [status, setStatus] = React.useState({ status: "success", message: "El tiempo fue registrado con exito" });
    const [text, setText] = useState('');
    const [errorNameInput, setErrorNameInput] = useState(false);

    const handleAlert = (severity) => {
        severity === "succes" || setStatus({ status: "error", message: "El tiempo no pudo ser registrado" });
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        setOpen(false);
    };

    //Funcion utilizada para guardar el tiempo obtenido en la base de datos
    const saveTime = async ({ name, seconds }) => {
        if (name.trim() === '') {
            setErrorNameInput(true);
        }
        else {
            const data = {
                playerName: name,
                totalCards: cardsPerRowColumn,
                seconds,
                cardsFlipped
            }
            const ipAddress = await publicIp.v4() || 'N/A';
            const response = await fetch('/v1/scores', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'ipAddress': ipAddress
                },
                body: JSON.stringify(data)
            });
            if (response.ok && isresponseJSON(response)) {
                handleAlert("succes");
            }
            else {
                handleAlert("error");
            }
            const timeToSee = setTimeout(() => {
                clearTimeout(timeToSee);
                history.replace("/memo");
            }, 500);
        }
    }
    const comebackStart = (e) => {
        e.preventDefault();
        history.replace("/memo");
    }
    const handleTextChange = (e) => {
        if (e.target.value.trim() !== '') {
            setErrorNameInput(false);
        }
        setText(e.target.value);
    }
    return (
        <>
            <div style={{ textAlign: "center" }} className={`${totalSeconds ? 'wingame animate__animated animate__backInDown' : 'normalgame'} modal modal-content container`}>
                <h1 className="titulo">Has encontrado todas las cartas!!!</h1>
                <h1 className="titulo">Terminaste en {totalSeconds - 1} segundos</h1>
                <h1 className="titulo" >Quieres guardar tu tiempo en los mejores tiempos?</h1>
                <div className="formComp">
                    <TextField id="standard-basic" error={errorNameInput} helperText={errorNameInput ? "El nombre es requerido" : ""} onChange={handleTextChange} value={text} label={errorNameInput ? "Error " : "Ingresa tu nombre"} />
                </div>
                <div className="formComp">
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={() => { saveTime({ name: text, seconds: totalSeconds - 1 }) }}
                        startIcon={<SaveIcon />}
                    >
                        Guardar tiempo y regresar al menu principal
                </Button>
                </div>
                <div className="formComp">
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={comebackStart}
                        startIcon={<ExitToAppIcon />}
                    >
                        Regresar al menu principal
                </Button>
                </div>
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert severity={status.status}>
                    {status.message}
                </Alert>
            </Snackbar>
        </>
    )
}

Form.propTypes = {
    totalSeconds: PropTypes.number.isRequired,
    cardsPerRowColumn: PropTypes.number.isRequired
}
export default Form;