import logo from './logo.svg';
import './App.css';
import TestComp1 from './components/FunctionalComponents/textCopmponent';
import ReiteratorComp from './components/ClassComponents/testClassComponents';
import Login from './components/ClassComponents/LoginComponent';
function App() {
  return (
    <div className="App">
      {/* <ReiteratorComp/> */}
      <header className="App-header">
        <Login/>
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
      </header>
    </div>
  );
}

export default App;
