import logo from './logo.svg';
import './App.css';
import i18n from './i18n'
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  const handleClick = () => {
    i18n.changeLanguage("es");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleClick}>ClickMe</button>
      </header>
    </div>
  );
}

export default App;
