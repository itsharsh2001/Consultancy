import classes from './LogIn.module.css'
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import {useRef, useState} from 'react'
import {useRouter} from 'next/router'
import { signIn } from 'next-auth/client';
import Link from 'next/link'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin:auto;
  width:20px;
  height:20px;
  border-color: white;
  speedMultiplier: 1;
`;


async function resendOtp(email) {
    const response = await fetch('/api/auth/resend-otp', {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
           email:email,
        }),
    });
  
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'something went wrong')
    }
  
    return data;
  
  }



const LogIn = () => {
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('')
    let [color, setColor] = useState("#ffffff");

    const router = useRouter();

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    
    async function sendOtp(){
        const email = localStorage.getItem("email");
    
        try {
          setDisabled(true);
          const result = await resendOtp(email);
          router.push('/otp')
      } catch (err) {
        setDisabled(false);
        if(err.message=="Please check Your otp on email"){
          toast('Please check Your otp on email')
        }
      }
      }

    async function logInSuccessfull(){
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if(enteredEmail.length==0 || enteredPassword.length==0){
        toast('* Please Fill All The Details')
        return;
    }

    setDisabled(true);
    const result = await signIn('credentials',{
        redirect:false,
        email: enteredEmail,
        password: enteredPassword
    })

    
    if(result.error=='Please Enter Valid Email'){
        setDisabled(false);
        toast("* Please Enter Valid Email")
    }

    if(result.error=='User Not Found'){
        setDisabled(false);
        toast("* User Not Found")
    }


    if(result.error=='invalid'){
        setDisabled(false);
        toast("* invalid Credentials")
    }

    const errorVerify = <span>
    <p>
        Please Verify Your Email by <span onClick={sendOtp}  className={classes.clickHere}> click here </span>
    </p>
    </span>

    if(result.error=='Please Verify your Email'){
        setDisabled(false);
        localStorage.setItem('email', enteredEmail);
        setError(errorVerify)
    }

    if(!result.error){
        router.replace('/admin-panel')
        setDisabled(true);
    }


    }

    return (
        <div>
        <div>
            <div className={classes.container}>
            <h1 className={classes.login}>Login</h1>

            <div className={classes.email}>
            <h3 className={classes.emailP}>Email Address</h3>
            <div>
            <EmailIcon className={classes.emailicon}/> 
            </div>
            <input ref={emailInputRef} className={classes.input} type="email" name="" id="" />
           
            </div>

            <div className={classes.password}>
            <h3 className={classes.emailP}>Password</h3>
            <div>
            <LockIcon className={classes.emailicon}/> 
            </div>
            <input  ref={passwordInputRef} className={classes.input} type="password" name="" id="" />
            <p className={classes.validationError}>{error}</p>
           
            </div>
            <Link href="/forgotpassword"><p className={classes.forgetPassword} >Forget Password ?</p></Link>

            <div>
            <button disabled={disabled} onClick={logInSuccessfull} className={classes.button}>
               {disabled? <ClipLoader color={color} loading={logInSuccessfull} css={override} size={150} />:"Login"}
                </button>
            </div>
            <Link href="/signup"><p className={classes.signUp}>Sign Up</p></Link> 



            </div>
        </div>
        </div>
    );
}

export default LogIn;
