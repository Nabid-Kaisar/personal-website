import logo from './logo.svg';
import './App.css';
import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
import AppContainer from "./components/containers/AppContainer";

function App() {
    return (
        <AppContainer>
            <Intro/>
            <Contact/>
        </AppContainer>
    );
}

export default App;
