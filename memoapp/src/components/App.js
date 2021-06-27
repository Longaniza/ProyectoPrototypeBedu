import React from 'react'
import AppRouter from '../routers/AppRouter';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
//Provedor del tema de nuestra app
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#000000",
        },
    },
});

const App = () => {
    return (
        //Enrutador de la App
        <ThemeProvider theme={theme}>
            <AppRouter />
        </ThemeProvider>
    )
}

export default App;