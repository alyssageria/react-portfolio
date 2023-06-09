import './App.css';
import 'bulma/css/bulma.css';
import Navbar from './components/Navbar'
import About from './components/pages/About'
import Projects from './components/pages/Projects'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Projects />
    </div>
  );
}

export default App;
