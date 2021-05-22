import { React, useEffect, useState } from 'react';
import './App.css';
import { AppBar, Button, TextField } from 'react95';
import Menu from './components/Menu';
import MenuBar from './components/MenuBar';
import mail from './images/mail.ico';
import Draggable from 'react-draggable';
import Login from './components/Login';


function App() {
  const [login, setLogin] = useState(false);
  function toggleLogin() {
    setLogin(!login);
  }
 


  return (
    <>
      <MenuBar className="AppBar" toggleLogin={toggleLogin}></MenuBar>
      <Draggable>
        <button>
          <img src={mail}></img>
        </button>
      </Draggable>
      
      {login ? <Login toggleLogin={toggleLogin} />: null }

      {/* <ul>
      <Button>yes</Button>
      </ul> */}
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
