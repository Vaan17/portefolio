import logo from './logo.svg';
import { PageContainer } from './styledComponent/styledComponent';
import Navbar from './navigations/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <PageContainer>
        <Navbar />
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
          It's time to make the best portefolio with à working react-app
        </a>
      </header>
    </PageContainer>
    </div>
  );
}

export default App;
