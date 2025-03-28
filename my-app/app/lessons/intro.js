"use client"
import "./intro.css"
import Link from 'next/link'
import { useInView } from "framer-motion";
import { useRef } from "react";
function Intro(){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return <div id="intro_Lesson">
        <div id="intro_center_Lesson4">
            <h1  ref={ref } style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}> Introduction To Chemistry   </h1>
            <p style={{
          transform: isInView ? "none" : "translateY(10px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s"
        }}>يستهدف الكتاب طلبة الكيمياء والهندسة الكيميائية وهندسة اوعلم المواد في مرحلتي البكالوريوس    </p>
            <div id="bnutons1" style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
        }}><Link id="login1" href="courses">  صفحة المواد </Link><a id="call1" href="#imgShow_holder1">  الاقسام</a></div>
            
        </div>
    <div id="backphoto" style={{
          transform: isInView ? "none" : "translateY(10px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
        }}></div>
    </div>
    }
     export default Intro