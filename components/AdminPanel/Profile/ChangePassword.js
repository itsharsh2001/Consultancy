import classes from "./ChangePassword.module.css";
import React from "react";
import {useRef} from 'react'


async function changePasswordDone( oldpassword, newPassword) {
  const response = await fetch('/api/change-password', {
      method: 'PATCH',
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        oldPassword: oldpassword,
        newPassword: newPassword
      }),
  });

  const data = await response.json();
  if (!response.ok) {
      throw new Error(data.message || 'something went wrong')
  }

  return data;
}

export default function ChangePassword() {
  const oldPassInputRef = useRef();
  const newPassInputRef = useRef();
  const confirmPassInputRef = useRef();

  async function submitHandler(e){

    e.preventDefault();

    const oldPassword = oldPassInputRef.current.value;
    const newPassword = newPassInputRef.current.value;
    const confirmPassword = confirmPassInputRef.current.value;
    try {
      const result = await changePasswordDone(oldPassword, newPassword )
      console.log("done");
  } catch (err) {
      console.log(err)
  }

  }


  
  return (
    <React.Fragment>
        <div className={classes.container1}>

      <h2>Password</h2>
      <form method="post">
        <div>
          <label htmlFor="cpassword">Current Password</label>
          <input ref={oldPassInputRef} type="text" name="cpassword" id="cpassword" />
        </div>
        <div>
          <label htmlFor="npassword">New Password</label>
          <input ref={newPassInputRef} type="text" name="npassword" id="npassword" />
        </div>
        <div>
          <label htmlFor="enteragain">Confirm Password</label>
          <input ref={confirmPassInputRef} type="text" name="enteragain" id="enteragain" />
        </div>
        <span className={classes.buttons}>
          <button onClick={submitHandler} className={classes.orangebutton}>Update</button>
          <button type="reset" className={classes.graybutton}>Reset</button>
        </span>
      </form>
        </div>
    </React.Fragment>
  );
}
