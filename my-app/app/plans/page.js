'use client'
import Header from '../header.js';
import "./plans.css"
import { useState } from 'react'
import Plans from './plans.js';
import "./imgShow.css"
import ImgShow from './imgShow.js';
function App() {


 
 
  
  return (
    <div className="App" >
       <div id='header_holder_plans' ><Header/>
       
       </div>
    
       <div id='bakaPrice' ><h1>اختر الباقه المناسبه لك</h1></div>

       <div style={{width: "100%",height:"800px"}} id='plansHolder'><Plans/></div>
       <div style={{width:"100%",height:"300px"}}></div>
       <div  style={{width:"100%",height:"200px",display:"none",justifyContent:"center"}}id='subscribe'><div style={{right:"40px",position:"relative"}}><h5 style={{color:"gray"}}>Basic</h5><h2 style={{color:"gray"}}>1000</h2><h5 style={{color:"gray"}}>شهريا</h5></div><div style={{width:"440px"}}><button style={{width: "100%",position: "relative",top:"10px",height:"50px",borderRadius:"25px"}} id='subButton'>اشترك و ادفع</button> <div><p style={{textAlign:"right",border:"solid 1px gray",borderRadius:"4px",position: "relative",paddingRight:"10px"}}>بالاشتراك، فإنك توافق على شروط الخدمة الخاصة بالمشترين. يتم تجديد الاشتراكات تلقائيًا ما لم يتم الإلغاء. يمكنك الإلغاء في أي وقت، بشرط أن يكون قبل 24 ساعة على الأقل من تاريخ التجديد لتجنب أي رسوم إضافية. يمكنك إدارة اشتراكك من خلال المنصة التي اشتركت عبرها.</p></div></div></div>
      <div id='imgShow_holder55'><ImgShow/></div>
    </div>


    

  );
  
}

export default App;