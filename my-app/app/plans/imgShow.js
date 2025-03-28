import "./imgShow.css";
import { useInView } from "framer-motion";
 import { useRef } from "react";


export default function ImgShow(){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
return <div id="imgShow55">
    <div id="imgShow_txt55">
    <span id="pp1" className="span1" style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
          }}>"</span>
     <p style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
          }}> وإن الاهتمام بقطاع التعليم بمختلف أنواعه ومستوياته وتوفير البيئة الداعمة والمحفزة للبحث العلمي والابتكار سوف يكون في سلم أولوياتنا الوطنية، وسنمده بكافة أسباب التمكين باعتباره الأساس الذي من خلاله سيتمكن أبناؤنا من الإسهام في بناء متطلبات المرحلة المقبلة </p>
          <span className="span1" id="pp2" style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
          }}>"</span>
           <h1 ref={ref} style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
        }}>  من خطاب السلطان هيثم بن طارق حفظه الله ورعاه</h1>
         <p>٢٣ فبراير ٢٠٢٠م</p></div>
    <div id="imgShow_img55" ref={ref}style={{
    
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
        }}><div></div></div>
</div>
}