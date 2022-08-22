import { useState, createContext } from 'react';
import { ThemeContext } from 'styled-components';
import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Project from './pages/Project';

function App() {

  const [theme, setTheme] = useState("light")
  const ThemeContext = createContext(null);

  return (
    <ThemeContext.Provider value={theme}>
      <div className={theme}>
        <Navbar />
        <Home />
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;