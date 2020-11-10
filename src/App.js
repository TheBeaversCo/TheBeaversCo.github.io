import React, {useState} from 'react';

// Dark Mode Enabled
import {Switch, Paper} from '@material-ui/core';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';

import './assets/sass/styles.scss';

import Home from './components/ui/Home';

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const theme = createMuiTheme({
        palette: {
            type: darkMode ? "dark" : "light",
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Paper>
                <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} style={{paddingLeft: "auto"}} />
                <div className="App">
                    <header className="App-header">
                        <Home darkMode={darkMode} />
                    </header>
                </div>
            </Paper>
        </ThemeProvider>
    );
}

export default App;
