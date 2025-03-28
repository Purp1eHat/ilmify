'use client'
import { useState } from "react";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link'
import InstagramIcon from '@mui/icons-material/Instagram';
function Header(){
    return <div id="header">
       <div id="message"><a id="mailIcon" href="https://www.instagram.com/ilmify.om/"><InstagramIcon />   تابعنا<p></p></a></div>
       <div id="headerspace"></div>
       <div id="meanHeader"><Link className="link" href={"plans"}>الدفع</Link> <Link href={"experiences"} className="link" > الخبرات </Link> <Link href={"./"} className="link">الرئيسية  </Link> <a id="logo"  className="link"                                                                                             ><div ></div>  </a></div>
    </div>

}
export default Header;