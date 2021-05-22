import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import MemoPage from "../pages/MemoPage";
import StartRoutes from "./StartRoutes";

export default function AppRouter() {
    /* Enrutador principal de la App. Responde a la ruta para renderear el memorama si este viene de un
    replace lo cual se obtiene al darle click al boton del menu principal. Si este no es el caso se hace 
    un redirect al menu principal */
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/memo/memorama" component={({ history }) => history.action !== 'REPLACE' ?
                        <Redirect to='/memo' /> : <MemoPage {...{ history }} />} />
                    <Route path="/" component={StartRoutes} />
                </Switch>
            </div>
        </BrowserRouter>

    )
}
