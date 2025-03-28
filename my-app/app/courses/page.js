
'use client'
import Header from '../header.js';
import "../header.css"
import { useState } from 'react'
import Intro from './intro.js';
import Subject from './subject.js';
import "./imgShow.css"
import "./courses.css"
import "./plans_in.css"
import Plans from './plans_in.js';

function App() {


 
  
  return (
    <div className="App" >
       <div id='header_holder' ><Header/></div>
       <div id='intro_holder7' className='t' ><Intro/></div>
      <div id='imgShow_holder7'  ><h1>لنبدأ رحله التعلم</h1><div id='sub_holder'><Subject/></div></div> 
      <div id='plans_holder77'><Plans/></div>
    </div>

  );
  
}

export default App;
