import logo from './logo.svg';
import './App.css';
import Tags from "./tags";
import React from 'react'

function App() {
const[vis,setVis]=React.useState(true)
  const changeVisible =()=>{
  setVis((v)=>!v)
  }
  return (
    <div className="App">

        {/*/////////////////////////////////////////////////////*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*  /////////////////////////////////////////////////////*/}
        {vis&&<Tags/>}
      <button className="item btn" onClick={changeVisible}>CHANGE VISIBLE</button>
    </div>
  );
}

export default App;
