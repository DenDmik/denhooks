// import logo from './logo.svg';
import './App.css';
import Tags from "./tags";
import React from 'react'

function App() {
const[vis,setVis]=React.useState(true)
  const changeVisible =()=>{
  setVis((v)=>!v)
  }
  //////////////////////////////////////
  // const hendlScroll=()=>{
  // console.log('SCROLL')
  // }
  /////////////////////////////////////
  const divRef = React.useRef()
  React.useEffect(()=>{console.log(`divRef= ${divRef.current}`)},[])


  ////////////////////////////////////

  // React.useEffect(()=>{
  // let elem = document.getElementById('container')
  // elem.addEventListener('scroll',hendlScroll)
  //   const atrib = elem.getAttribute('scroll')
  //   console.log(atrib +"ytryt")
  //   console.log( `ELEM= ${elem}`)
  // },[])
  ////////////////////////////////////////////

  return (
    <div className="App" id='App' ref={divRef} >

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

export default App
