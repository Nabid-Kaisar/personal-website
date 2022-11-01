import AppContainer from "./components/containers/AppContainer";
import AppRoutes from "./components/navigation/AppRoutes";
import "./App.css";
import {ThemeContext} from "./contexts/ThemeContext"
import {useState} from "react";

function App() {
    const [currentTheme, setCurrentTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{currentTheme, setCurrentTheme}}>
            <AppContainer>
                <AppRoutes/>
            </AppContainer>
        </ThemeContext.Provider>

    );
}

export default App;
