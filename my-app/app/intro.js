import "./intro.css"
import Link from 'next/link'
import { useInView } from "framer-motion";
 import { useRef } from "react";
function Intro(){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return <div id="intro">
        <div id="intro_center9">
            <h1 ref={ref } style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>مـــــــــنصة <span> علـمِفاي</span></h1>
            <p style={{
          transform: isInView ? "none" : "translateY(10px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s"
        }}>رفيقك الذكي في رحله التعلم يصمم لك خطة خاصة يختار أفضل المصادر.و يختبر تقدمك بأسلوب ممتع .معك خطوة بخطوة لتحقيق أهدافك بثقة وحماس</p>
            <div id="bnutons" style={{
          transform: isInView ? "none" : "translateY(00px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.1s"
        }}><Link id="login" href="signUp">تسجيل الدخول </Link><button id="call">اتصل بنا</button></div>
        </div>
    
    </div>
    }
     export default Intro