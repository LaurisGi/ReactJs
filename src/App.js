import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Codeacademy.lt React paskaita!
        </p>
        <form>
          <input type='text'></input>
          <button type='send'></button>
        </form>
        <a
          className="App-link"
          href="https://codeacademy.online"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
