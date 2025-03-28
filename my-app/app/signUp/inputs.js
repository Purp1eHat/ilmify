import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import "./login.css";
import { UserIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { AtSymbolIcon } from "@heroicons/react/24/outline";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';
export default function Inputs(){
    return (<div id="inputs1">

        <div id="inp_holder1">
            <div id='lginfo1'><div id='icon1'></div></div>
            <form id="infro1" action={"courses"} >
      <div className='inp-cont1'>
        <p id='newlog1'>تسجيل الدخول</p>
      </div>
      
 
      <div className='inp-cont1'>
        <p className='tt1'>البريد الالكتروني</p>
        <div className='ic-inp1'>
          <input />
          < AtSymbolIcon style={{  position: "relative",
  right: "5px",
  height: "20px",
  color: "rgb(100, 68, 0)",
  zIndex: "1"}} />
        </div>
      </div>
      <div className='inp-cont1'>
        <p className='tt1'>كلمه المرور</p>
        <div className='ic-inp1'>
          <input placeholder="" />
          <LockClosedIcon style={{  position: "relative",
  right: "5px",
  height: "20px",
  color: "rgb(100, 68, 0)",
  zIndex: "1"}} />
        </div>
      </div>


      <div className='inp-cont11'>
        <p className='tt1' id='txt_acc1' style={{ fontSize: "8px" }}>
          بالتسجيل أقر بأني قرأت شروط الاستخدام و سياسية الخصوصية وأوافق عليها
        </p>
        <input id='submit1' type="submit" value='ارسال'  />
        <p id='txt_acc1' style={{ fontSize: "8px" }}>
           <Link href="login">تسجيل جديد</Link>ليس لديك حساب؟ 
        </p>
      </div>
    </form>
 </div>
        
        
        </div>)
}