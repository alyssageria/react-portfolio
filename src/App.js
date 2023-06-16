import './App.css';
import 'bulma/css/bulma.css';
import CurrentPage from './components/CurrentPage';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <div className='current-page render-page'>
        <CurrentPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
