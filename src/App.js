import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ "max-width": "70vmin"}}>
          Double Stop Pictures is a full-service motion picture production
          company based in New York City.
        </p>
      </header>

      <footer className="App-footer">
        <a className="email" href="mailto:production@doublestop.pictures">
          production@dblstop.com
        </a>
      </footer>
    </div>
  );
}

export default App;
