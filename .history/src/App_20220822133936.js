import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Project from './pages/Project';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Project />
      
      <Footer />
    </div>
  );
}

export default App;