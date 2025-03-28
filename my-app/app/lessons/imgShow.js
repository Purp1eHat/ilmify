
"use client"
import "./imgShow.css";
import Plans from "./plans";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { useInView } from "framer-motion";
import { useRef } from "react";
export default function ImgShow(){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
return <div id="imgShow1">
    <div id="imgShow_txt1"><Plans/></div>
    <div id="imgShow_Lesson" >
    <div id="TcNameLesson"><div id="superfiser"  ref={ref } style={{
          transform: isInView ? "none" : "translateX(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}><h1> د.  ناصر الشقصي</h1>< SupervisorAccountIcon id="spIcon"/></div>
    <div id="expLesson">
        <ul id="cerifi1"  ref={ref } style={{
          transform: isInView ? "none" : "translateY(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}><span>الخبرات</span> <li>Web dev </li>
    <li>10 years ..</li></ul>

    <ul id="cerifi2"  ref={ref } style={{
          transform: isInView ? "none" : "translateY(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}><span>الشهادات</span> <li>phd inMath</li>
    <li>Master in Cs</li></ul></div></div>
    <h1 id="w">يقودنا فريق لايتوقف عن التفكير والابداع. ويحرص دوما على دفعنا الى الامام</h1>
    <div id="icLesson"></div></div>
</div>
}                                                                                               