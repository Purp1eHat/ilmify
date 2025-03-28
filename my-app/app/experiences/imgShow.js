"use client"
import "./imgShow.css";
import { useInView } from "framer-motion";
 import { useRef } from "react";


export default function ImgShow(){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
return <div id="imgShow1">
    <div id="imgShow_txt1" ><h1 ref={ref} style={{
          transform: isInView ? "none" : "translateX(00px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
        }}>مـــــــــنصة  علـمِفاي</h1><p style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
          }}>مستوى متعدد في أنماط التعلم ،يعتمد على ما هو أبعد من طرق التعلم التقليدية لاستحضار فهم أعمق في وقت أقل للوصول للمعرفه</p></div>
    <div id="imgShow_img1" ><div ref={ref}style={{

          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
        }}></div></div>
</div>
}                                                                                               