"use client"
import "./intro.css"
import Link from 'next/link'
import { useInView } from "framer-motion";
 import { useRef } from "react";
function Intro(){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return <div id="intro1" ref={ref } style={{
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)  0.5s"
    }}>
        <div id="intro_center1">
            <h1 ref={ref } style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>الفرصة لمشاركة الخبرات </h1>
            <p style={{
          transform: isInView ? "none" : "translateY(10px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s"
        }}>عائد اتثمار مرئي ونتائج مستمرة</p>
            <div id="bnutons1" style={{
        
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
        }}><Link id="login1" href="login"> تواصل معنا </Link><a id="call1" href="#plans_holder4"> ابدا الان</a></div>
        </div>
    
    </div>
    }
     export default Intro