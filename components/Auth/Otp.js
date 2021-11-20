import classes from "./Otp.module.css";
import MessageIcon from '@material-ui/icons/Message';
import { useState , useRef} from "react";
import {useRouter} from 'next/router'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


async function createOtp(otp,email) {
  const response = await fetch('/api/auth/check-otp', {
      method: 'POST',
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
         email:email,
         otp:otp
      }),
  });

  const data = await response.json();
  if (!response.ok) {
      throw new Error(data.message || 'something went wrong')
  }

  return data;

}

async function resendOtp(email,phone) {
  const response = await fetch('/api/auth/resend-otp', {
      method: 'POST',
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
         email:email,
         phone:phone,
      }),
  });

  const data = await response.json();
  if (!response.ok) {
      throw new Error(data.message || 'something went wrong')
  }

  return data;

}




const OtpComponent = () => {
  const Router = useRouter();
  const [disabled,setDisabled] = useState(false);

  const otpInputRef = useRef();

  async function resendOtpHandler(){
    const enteredOtp = otpInputRef.current.value;
    const email = localStorage.getItem("email");
    const phone = localStorage.getItem("phone");

    try {
      setDisabled(false);
      const result = await resendOtp(email,phone);
      toast('Please Check Your Mail for new Otp');
  } catch (err) {
    if(err.message=="Please check Your otp on email"){
      toast('Please check Your otp on email')
    }
  }
  }


   async function submitHandler(){

    const enteredOtp = otpInputRef.current.value;
    const email = localStorage.getItem("email");

    try {
      setDisabled(true);
      const result = await createOtp(enteredOtp, email);
      localStorage.removeItem('email')
      localStorage.removeItem('phone')
      Router.push('/login');
  } catch (err) {
    setDisabled(false);
    if(err.message=="otp Expired"){
      toast(err.message);
    }
    else if(err.message="Wrong Otp"){
      setDisabled(false);
      toast(err.message)
    }
    }
  }

  
  return (
    <div>
      <div>
        <div className={classes.container}>
          <h1 className={classes.login}>OTP Verification</h1>

          <div className={classes.password}>
            <h3 className={classes.emailP}>Please Enter the OTP sent to you</h3>
            <div>
              <MessageIcon className={classes.emailicon} />
            </div>
            <input
              className={classes.input} ref={otpInputRef}
            />
          </div>

          
          <p className={classes.forgetPassword} onClick={resendOtpHandler}>Resend Otp</p>
          

          <div>
            <button
              className={classes.button} onClick={submitHandler}
            >
                
{
  disabled?"Please Wait...":"Enter otp" 
}

            </button>

            

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default OtpComponent
