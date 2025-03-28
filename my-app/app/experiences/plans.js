"use client"
import React from "react";
import "./plans.css"
import { useState } from "react"
import { Style } from '@mui/icons-material';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import { useInView } from "framer-motion";
import { useRef } from "react";
export default function Plans(){
      var isreff=[  useRef(null),useRef(null)]
        var isInveArry=[useInView(isreff[0], { once: true , root: "container"}),useInView(isreff[1], { once: true , root: "container"})]
    var [plans,setplans]=useState([{index:0,name:"بداية",price:"مجانا",dicription:["تجربه مجانيه 14 يوم على كل يوم","تجربه جميع خدماتنا الرائده","دعم فني على مدار الساعة","دليل استخدام شامل "],active:false,icons:<MoneyOffIcon/>},{active:false,index:1,name:"شخصي ",price:" 	 ٥ ريال عماني ",dicription:["خدمات مخصصة تناسب احتياجاتك","مساحة تخزين سحابية شخصية","تحديثات دورية للميزات"],icons:<PersonIcon/>}]);
    var [count,setcoount]=useState(0)
    return <div  style={{ display:"flex"}} id="plan1">
        {plans.map(function(ele,index){
    
        return  <div ref={isreff[index]} key={ele.index ||index} className={index} style={{height:"100%",transform: isInveArry[index]? "none" : "translateY(100px)",
            opacity: isInveArry[index] ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) "+`0.${index}s`}}  id="plan1"  >

        <div   className={index} onClick={function(elem){
                        console.log(index)
                         

            }}>
        
            <div  style={{width:"100%",height:"57px"}}>  <div style={{textAlign:"right",position: "relative",right:"30px",top:"5px",display: "flex",justifyContent:"right",alignItems:"center"}}   > <div id="iconPlans1" style={{position:"absolute",left:"80px",display:"flex",justifyContent:"center",alignItems:"center",top:"10px"}}>{ele.icons}</div><h4 style={{width:"200px",position: "relative",top:"-20px",fontSize:"28px"}}>{ele.name}</h4> </div></div>
            <div ><h3 style={{textAlign:"right",position: "relative",right:"30px",top:"30px",color:"rgb(100, 68, 0)",fontSize:"19px",height:"50px"}} >{ele.price}</h3> </div>
            <hr/>
           
            <div style={{width:"100%",height:"190px"}}><ol style={{listStyleType: "none",textAlign:"right",position: "relative",right:"30px",top:"20px",height:"170px"}}><h3 >سوف تحصل على</h3>{ele.dicription.map(function(el,ind){
                return <li key={ind} style={{color:"gray",height:"30px",width: "100%",fontSize:"13px"}}>{el} &#x2714;</li>
            })}</ol></div>
            <div style={{textAlign:"right",position: "relative",right:"30px"}}><button style={{width: "100px",height:"50px",borderRadius:"12px",cursor: "pointer"}} id="readMore" >اقرا المزيد</button></div>

        </div>

    </div>

    })
}
    </div>
    
}