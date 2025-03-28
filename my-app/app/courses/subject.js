import React from "react";
import { useState } from "react"
import "./plans_in.css"
import "./courses.css"
import LaunchIcon from '@mui/icons-material/Launch';
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
export default function Plans (){
    var [plans,setplans]=useState([{name:"Machine learing",src: "https://img.freepik.com/free-photo/website-html-code-browser-view-printed-white-paper-closeup-view_211682-166.jpg?t=st=1738169428~exp=1738173028~hmac=01882b2ba49a93e8de7622a5a436943cbab8ba499e28ef470d6d9ee727c81c96&w=1380",
position:400,opacity:"1"},{name:"Database systems ",src:"https://img.freepik.com/free-photo/website-html-code-browser-view-printed-white-paper-closeup-view_211682-166.jpg?t=st=1738169428~exp=1738173028~hmac=01882b2ba49a93e8de7622a5a436943cbab8ba499e28ef470d6d9ee727c81c96&w=1380",position:700,opacity:"1"},{name:"Introduction of Chemistry ",src:"https://img.freepik.com/free-vector/science-scribbles_23-2147501583.jpg?t=st=1738169201~exp=1738172801~hmac=c800bce5f3c75575d684d50c414b4750cf6e6c917972dbe5c60c8fa93e50a7e6&w=826",position:1000,opacity:"1"},{name:"calculas 2",src:"https://img.freepik.com/free-vector/realistic-math-chalkboard-background_23-2148156737.jpg?t=st=1738168911~exp=1738172511~hmac=8a861b5a88a6d7a16419916496bc548a4c0e19dd335e9c47e463a3d04c06dbba&w=826",position:1300,opacity:"1"}]);
                                                                                                                        
    
        var isreff=[  useRef(null),useRef(null),  useRef(null), useRef(null)]
        var isInveArry=[useInView(isreff[0], { once: true , root: "container"}),useInView(isreff[1], { once: true , root: "container"}),useInView(isreff[2], { once: true , root: "container"}),useInView(isreff[3], { once: true , root: "container"})]
    // [{name:"التخصصات",icons:<ArticleIcon/>,position:400,opacity:false},{name:"خطتك الدراسيه",icons:<EditCalendarIcon/>,position:700,opacity:false},{name:"الاختبارات واللخصات",icons:<QuizIcon/>,position:1000,opacity:false},{name:"تقارير وتوصيات",icons:<RateReviewIcon/>,position:1300,opacity:false},{name:"الأعلانات",icons:<NotificationsNoneIcon/>,position:1500,opacity:false}]

   
 return  plans.map(function(ele,index){
    
      
    return <div key={index} id="course_box"   ref={isreff[index]} style={{
        transform: isInveArry[index]? "none" : "translateX(-300px)",
        opacity: isInveArry[index] ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) "+`0.2${index*index}s`
      }}>
        
        <div id="plans_type1" ><img src={ele.src} /></div>

       <div id="txtCourse"><div id="enterName">{ele.name}</div><Link id="enterHolder" href={"lessons"}><LaunchIcon/></Link></div>
       </div>
    })
    
        
   

}