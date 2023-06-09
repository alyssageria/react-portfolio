import './App.css';
import 'bulma/css/bulma.css';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Resume />
    </div>
  );
}

export default App;
