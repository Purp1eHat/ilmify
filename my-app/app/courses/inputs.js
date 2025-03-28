import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import PersonIcon from '@mui/icons-material/Person';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LockIcon from '@mui/icons-material/Lock';
import "./login.css";
export default function Inputs(){
    return (<div id="inputs">

        
        <div id="inp_holder">
            <div id='lginfo'><div id='icon'></div></div>


            
       
        <form id="infro">
        <div  className='inp-cont'><p id='newlog'>تسجيل جديد</p></div>
            <div  className='inp-cont'><p className='tt'>الاسم</p> <div  className='ic-inp'><input placeholder=""   /><div className='icon_input' ><PersonIcon id="ic"/></div></div>   </div>
         <div  className='inp-cont'><p className='tt'>البريد الالكتروني</p> <div className='ic-inp'><input   />          <div className='icon_input' ><MailOutlineIcon id="ic"/></div>  </div>  </div>
        <div  className='inp-cont'><p className='tt'>كلمه المرور</p> <div className='ic-inp'><input placeholder=""   />                <div className='icon_input' ><LockIcon id="ic"/> </div>   </div></div> 
        <div  className='inp-cont'><p className='tt'>تاكيد كلمه المرور </p> <div className='ic-inp'><input  />          <div className='icon_input' ><LockIcon id="ic"/> </div>   </div></div> 
        <div  className='inp-cont'><p className='tt'>الهاتف</p> <div className='ic-inp'><input   />                      <div className='icon_input' ><PhoneIcon id="ic"/></div>   </div></div> 
        <div  className='inp-cont1'><p className='tt'  id='txt_acc' style={{fontSize:"8px"}}>بالتسجيل أقر بأني قرأت شروط الاستخدام و سياسية الخصوصية وأوافق عليها</p><input id='submit' type="submit" value='ارسال'/><p id='txt_acc' style={{fontSize:"8px"}}>لديك حساب؟ تسجيل دخول</p><div></div></div>

        </form>
 </div>
        
        
        </div>)
}