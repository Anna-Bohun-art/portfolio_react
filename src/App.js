import { useContext } from 'react';
import { ThemeContext } from "./context/ThemeContext";
import Navigation from "./components/Navigation";
import Greetings from "./components/Greetings";
import ContactForm from "./components/ContactForm";
import MyExpertise from "./components/MyExperiences";
import MyWork from "./components/MyWork";
import 'bootstrap/dist/css/bootstrap.css';
import { ReactComponent as Sun } from "./components/svgFolder/Sun.svg";
import { ReactComponent as Moon } from "./components/svgFolder//Moon.svg";
import "./components/svgFolder//DarkMode.css";
import {
  Routes,
  Route
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import './App.css';

function App() {
  const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);
  return (
    <Container className="App" style={{backgroundColor: theme.backgroundColor, color: theme.color}}>
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Moon />
                <Sun />
            </label>
        </div>
        <Routes>
          <Route
            exact path="/" element={ <><Navigation/><Greetings /></>}>
          </Route>
          <Route exact path='/my-projects' element={ <><Navigation/><MyWork /></>}>   
          </Route>
          <Route exact path="/contact-form" element={ <><Navigation/><ContactForm /></>}>
          </Route>
          <Route
            exact path="my-expertises" element={<><Navigation/><MyExpertise /></>}>
          </Route>
        </Routes>
    </Container>
  );
}

export default App;
