import classes from "./ChangePassword.module.css";
import MessageIcon from "@material-ui/icons/Message";
import { useState,useRef } from "react";
import router from "next/router";
import {useRouter} from 'next/router'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


async function updatePassword(password) {
  const { token } = router.query;
  const response = await fetch('/api/update-password', {
      method: 'POST',
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
         password:password,
         token:token
      }),
  });

  const data = await response.json();
  if (!response.ok) {
      throw new Error(data.message || 'something went wrong')
  }

  return data;

}

const ChangePassword = () => {
  const router = useRouter();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  const [disabled, setDisabled] = useState(false);

  async function submitHandler(){

    const enteredPassword = passwordInputRef.current.value;
    const enteredConfirmPassword = confirmPasswordInputRef.current.value;

    if(!enteredPassword){
      toast("Your passwords are not matching")
      return 
    }

    if(enteredPassword!=enteredConfirmPassword){
      toast("Your passwords are not matching")
      return 
    }

    try {
      setDisabled(true);
      const result = await updatePassword(enteredPassword);
      toast("updated")
      router.push("/login")
      setDisabled(false);
  } catch (err) {
    setDisabled(false);
      toast(err.message)
  }

  }
  

  return (
    <div>
      <div>
        <div className={classes.container}>
          <h1 className={classes.login}>Change Password</h1>

          <div className={classes.password}>
            <h3 className={classes.emailP}>New Password</h3>
            <div>
              <MessageIcon className={classes.emailicon} />
            </div>
            <input type="password" className={classes.input} ref={passwordInputRef} />
          </div>
          <div className={classes.password}>
            <h3 className={classes.emailP}>Confirm Password</h3>
            <div>
              <MessageIcon className={classes.emailicon} />
            </div>
            <input type="password" className={classes.input} ref={confirmPasswordInputRef} />
          </div>

          <Link href="/login"><p className={classes.forgetPassword}>Login</p></Link>

          <div>
            {disabled?
            <button className={classes.button} disabled onClick={submitHandler}>Please Wait...</button>:<button className={classes.button} onClick={submitHandler}>Update Password</button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};


export default ChangePassword;
