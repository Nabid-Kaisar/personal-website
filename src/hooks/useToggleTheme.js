import {useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext";

export default function useToggleTheme() {
    const {currentTheme, setCurrentTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        if (currentTheme === 'light') {
            setCurrentTheme('dark')
        } else {
            setCurrentTheme('light');
        }

    }

    return [currentTheme, toggleTheme];
}