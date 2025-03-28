import "./intro.css"
import Link from 'next/link'
import { useInView } from "framer-motion";
 import { useRef } from "react";
function Intro(){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
var name="ناصر"
    return <div id="intro2">
        <div id="intro_center2">
            <h1 ref={ref } style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>مـــــــــنصة <span> علـمِفاي</span></h1>
                <p style={{
          transform: isInView ? "none" : "translateY(10px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s"
        }}>أهلا وسهلا بك      {name}</p>
          
        </div>
        
    </div>
    }
     export default Intro