import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import "./login.css";
import { UserIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { AtSymbolIcon } from "@heroicons/react/24/outline";
import { LockClosedIcon } from "@heroicons/react/24/outline";
export default function Inputs(){
    return (<div id="inputs">

        <div id="inp_holder">
            <div id='lginfo'><div id='icon'></div></div>
            <form id="infro" action={"courses"}>
      <div className='inp-cont'>
        <p id='newlog'>تسجيل جديد</p>
      </div>
      <div className='inp-cont'>
        <p className='tt'>الاسم</p>
        <div className='ic-inp'>
          <input  />
       
      <UserIcon id='iic'/>
      
        

        </div>
      </div>
      <div className='inp-cont'>
        <p className='tt'>البريد الالكتروني</p>
        <div className='ic-inp'>
          <input />
          < AtSymbolIcon id='iic'/>
        </div>
      </div>
      <div className='inp-cont'>
        <p className='tt'>كلمه المرور</p>
        <div className='ic-inp'>
          <input placeholder="" />
          <LockClosedIcon id='iic'/>
        </div>
      </div>
      <div className='inp-cont'>
        <p className='tt'>تاكيد كلمه المرور</p>
        <div className='ic-inp'>
          <input />
          <LockClosedIcon id='iic'/>
        </div>
      </div>
      <div className='inp-cont'>
        <p className='tt'>الهاتف</p>
        <div className='ic-inp'>
          <input />
          <PhoneIcon id='iic'/>
        </div>
      </div>
      <div className='inp-cont2'>
        <p className='tt' id='txt_acc' style={{ fontSize: "8px" }}>
          بالتسجيل أقر بأني قرأت شروط الاستخدام و سياسية الخصوصية وأوافق عليها
        </p>
        <input id='submit' type="submit" value='ارسال' />
        <p id='txt_acc' style={{ fontSize: "8px" }}>
          لديك حساب؟ تسجيل دخول
        </p>
      </div>
    </form>
 </div>
        
        
        </div>)
}