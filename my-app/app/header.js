'use client'
import { useState } from "react";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link'
function Header(props){
    var [side,setside]=useState(false);
    var ck=function (){
        setside(true)
        props.sl(side)
       }
    return <div id="header">
               <div id="message"><a id="mailIcon" href="https://www.instagram.com/ilmify.om/"><InstagramIcon /> <p id='items' onClick={ck} style={{opacity:props.flag==true?"0":"1"}}><DensityMediumIcon/></p>  تابعنا<p></p></a></div>
       <div id="headerspace"></div>
       <div id="meanHeader"><Link className="link linkhide"  href={"plans"}>الدفع</Link> <Link href={"experiences"} className="link linkhide" > الخبرات </Link> <Link href={"./"} className="link linkhide">الرئيسية  </Link> <a id="logo"  className="link"><div ></div>  </a></div>
    </div>

}
export default Header;