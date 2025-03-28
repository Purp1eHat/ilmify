import Header from './header';
import "./header.css"
import Plans from './plans';
import Intro from './intro';
import ImgShow from './imgShow';

export default function Exp() {
  
    return (
      <div className="App" >
      <div id='header_holderLesson' ><Header/></div>
      <div id='intro_holderLesson'  ><Intro/></div>
     <div id='imgShow_holder1'><ImgShow /></div> 
  
   </div>
  
    );
    
  }
  