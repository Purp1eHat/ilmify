"use client"
import Header from '../header';
import "../header.css"
import "./login.css"
import Login from './login';
import Inputs from './inputs';
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function(){
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
    return (
        <div className="Applogin"  >
          <div id='container'>
          <div id="bk_img" ref={ref } style={{
          
          transform: isInView ? "none" : "",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.01s"
        }}><div id='minasahold' ref={ref } style={{
          
          transform: isInView ? "none" : "translateX(40px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
        }}  ><h1 style={{color:"white"}} ><span style={{color:"rgb(100, 68, 0)"}} >الدخول</span> للمنصه</h1></div> <div id='minasahold1' ref={ref } style={{
          
          transform: isInView ? "none" : "translateX(-20px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
        }} ><h4  style={{color:"white"}}>لا تعقد ها جرب علمي فاي وار تاح </h4></div></div>
          <div id='login_holder' ><Inputs/></div>
          </div>


    
        </div>
    
      );
}