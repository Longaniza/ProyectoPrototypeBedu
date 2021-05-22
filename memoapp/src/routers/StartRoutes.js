import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ScoresPage from '../pages/ScoresPage';
import StartPage from '../pages/StartPage';


const StartRoutes = () => {
    /* Se hace la busqueda de las paginas disponibles. Si no coincide con ninguna se redireccion al menu
    principal */
    return (
        <>
            <div>
                <Switch>
                    <Route exact path="/memo" component={StartPage} />
                    <Route exact path="/memo/scores" component={ScoresPage} />
                    <Redirect to="/memo" />
                </Switch>
            </div>
        </>
    )
}
export default StartRoutes;