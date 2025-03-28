"use client"
import React from "react";
import "./plans.css"
import { useState } from "react"
import { Style } from '@mui/icons-material';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import TimelineIcon from '@mui/icons-material/Timeline';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
import Timer3SelectIcon from '@mui/icons-material/Timer3Select';
import Timer2SelectIcon from '@mui/icons-material/Timer3Select';
export default function Plans(){
    var [plans,setplans]=useState([{index:0,name:"Lesson#3",dicription:[" المنتجات الذكيه","الختبارات","   تحليل الأداء الشخصي"],active:false,icons:<TimelineIcon/>},{active:false,index:1,name:"Lesson#2 ",dicription:[" المنتجات الذكيه","الختبارات","   تحليل الأداء الشخصي"],icons:<TimelineIcon/>},{active:false,index:3,name:"Lesson#1 ",dicription:[" المنتجات الذكيه","الختبارات","   تحليل الأداء الشخصي"],icons:<TimelineIcon/>}]);
    var [count,setcoount]=useState(0)
    return <div  style={{ display:"flex"}} id="plan_lesson">
        {plans.map(function(ele,index){
    
        return  <div key={ele.index ||index} className={index} style={{height:"100%"}}  id="plan1"  >

        <div   className={index} onClick={function(elem){
                        console.log(index)
                         

            }}>
        
                    <div  style={{width:"100%",height:"57px"}}>  <div style={{textAlign:"right",position: "relative",right:"30px",top:"5px",display: "flex",justifyContent:"right",alignItems:"center"}}   > <div id="iconPlans1" style={{position:"absolute",left:"80px",display:"flex",justifyContent:"center",alignItems:"center",top:"10px"}}>{ele.icons}</div><h4 id="lessonName" style={{width:"200px",position: "relative",top:"-20px",fontSize:"28px"}}>{ele.name}</h4> </div></div>
                    <div ><h3 style={{textAlign:"right",position: "relative",right:"30px",top:"30px",color:"rgb(100, 68, 0)",fontSize:"19px",height:"50px"}} >{ele.price}</h3> </div>
            <hr/>
           
            <div id="txtShow" style={{width:"100%",height:"190px"}}><ol style={{listStyleType: "none",textAlign:"right",position: "relative",right:"30px",top:"20px",height:"170px"}}><h3 >اسلوب التعلم</h3>{ele.dicription.map(function(el,ind){
                return <li key={ind} style={{color:"gray",height:"30px",width: "100%",fontSize:"13px"}}>{el} &#x2714;</li>
            })}</ol></div>

        </div>

    </div>

    })
}
    </div>
    
}