'use client'
import Header from './header.js';
import './App.css';
import "./header.css"
import { useState } from 'react'
import Intro from './intro.js';
import ImgShow from './imgShow.js';
import Plans from './plans_in.js';
import "./plans_in.css";


function App() {


  var[runslide,setrunslid]=useState(function st(){
    return(false)

  })
 var hi= function run(elm){
  setrunslid(false) 
    
  }
  
  var slide= function run(elm){
    console.log("pp")
  
    setrunslid(true)      
    
    
  }
  var filtter;
  filtter={ transition:"0.2s",opacity:runslide==true?"0.5":"1",position:"relative",left:runslide==true?"53%":"0%"}
  
 
  
  return (
    <div className="App" >
    
        <div id='header_holder' className='t' style={filtter}><Header sl={slide} flag={runslide}/></div>
       <div id='intro_holder' className='t' style={filtter} ><Intro/></div>
      <div id='imgShow_holder'><ImgShow/></div> 
           <div id='plans_holder3'><Plans/></div>
    </div>

  );
  
}

export default App;
