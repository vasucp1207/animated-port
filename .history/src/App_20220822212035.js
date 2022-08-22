import { useState, createContext } from 'react';
import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Project from './pages/Project';




function App() {

  

  return (
    <ThemeContext.Provider value={setTheme}>
      <div>
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