import Header from './header';
import "./header.css"
import Plans from './plans';
import Intro from './intro';
import ImgShow from './imgShow';

export default function Exp() {
  
    return (
      <div className="App" >
      <div id='header_holder1' ><Header/></div>
      <div id='intro_holder1' className='t' ><Intro/></div>
     <div id='imgShow_holder1'><ImgShow /></div> 
          <div id='plans_holder4'><Plans/></div>
   </div>
  
    );
    
  }
  