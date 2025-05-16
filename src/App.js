import './App.css';
import Home from './components/Home';
import About from './components/About';
import Director from './components/Director';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Director/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
