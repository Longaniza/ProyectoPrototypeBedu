import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import TopScore from '../components/TopScore';


//Componente que representa la pagina de puntajes ordenados de menor a mayor segun el tiempo 
const ScoresPage = () => {
    const [value, setValue] = useState("12");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Paper square>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    textColor="primary"
                    indicatorColor="primary"
                    aria-label="icon label tabs example"
                >
                    <Tab value="12" icon={<ViewColumnIcon />} label="12 CARTAS" />
                    <Tab value="24" icon={<ViewModuleIcon />} label="24 CARTAS" />
                    <Tab value="48" icon={<ViewComfyIcon />} label="48 CARTAS" />
                </Tabs>
            </Paper>
            <h1 className="titulo"><strong>Mejores tiempos</strong></h1>
            <br></br>
            <div className="container">
                <TopScore totalCards={value} />
            </div>
        </div>
    )
}

export default ScoresPage;