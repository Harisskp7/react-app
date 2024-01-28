import logo from './logo.svg';
import './App.css';
// import PropsComponent from './components/FunctionalComponents/propsComponent';
// import StateComponent from './components/ClassComponents/stateComponent';
//import Virat from './components/ClassComponents/stateComponent';
import Navbar from './components/FunctionalComponents/NavBar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/FunctionalComponents/home';
import About from './components/FunctionalComponents/about';
import Exp from './components/FunctionalComponents/Exp';
import Login from './components/FunctionalComponents/Login';
import Register from './components/FunctionalComponents/Register';
//import Register from './components/FunctionalComponents/Register';

import Footer from './components/FunctionalComponents/footer';


 
function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/experience" element={<Exp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      {/* <Register/> */}

      </BrowserRouter>
      <Footer/>
      {/* <header className="App-header"> */}
        {/* <PropsComponent name="Haris" course="REACT"/> */}
        {/* <StateComponent/> */}
        {/* <Virat/>
           */}

        {/* <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}
      
    </div>
  );
}

export default App;
