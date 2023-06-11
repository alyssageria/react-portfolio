import './App.css';
import 'bulma/css/bulma.css';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import CurrentPage from './components/CurrentPage';

function App() {
  return (
    <div className="App">
      <CurrentPage />
    </div>
  );
}

export default App;
