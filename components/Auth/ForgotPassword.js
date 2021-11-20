import classes from "./ForgotPassword.module.css";
import MessageIcon from '@material-ui/icons/Message';
import { useState, useRef } from "react";
import Link from 'next/Link';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

async function makePasswordLink(email) {
  const response = await fetch('/api/forget-password', {
      method: 'POST',
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
          email: email
      }),
  });

  const data = await response.json();
  if (!response.ok) {
      throw new Error(data.message || 'something went wrong')
  }

  return data;

}

const ForgotPassword = () => {
  const emailInputRef = useRef();
  const [disabled, setDisabled] = useState('');

  async function submitHandler(){

    const enteredEmail = emailInputRef.current.value;
    try {
      setDisabled(true);
      const result = await makePasswordLink(enteredEmail)

      toast('Please Check Your Email For Change Password');
      setDisabled(false);
  } catch (err) {
    setDisabled(false);
     if(err.message=="User does not exist"){
       toast(err.message)
     }
  }
  
  }

  
  return (
    <div>
      <div>
        <div className={classes.container}>
          <h1 className={classes.login}>Forgot Password</h1>

          <div className={classes.password}>
            <h3 className={classes.emailP}>Please enter your registred email</h3>
            <div>
              <MessageIcon className={classes.emailicon} />
            </div>
            <input
              className={classes.input} ref={emailInputRef}
            />
          </div>

          <Link href="/login"><p className={classes.forgetPassword}>Login</p></Link>

          <div>
            {disabled?
            <button
              className={classes.button} disabled onClick={submitHandler}
            >Please wait...</button>:<button
            className={classes.button} onClick={submitHandler}
          >Enter Email</button>

              }

            

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
