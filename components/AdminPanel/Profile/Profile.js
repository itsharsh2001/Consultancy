import classes from "./Profile.module.css";
import React, {useState,useEffect,useRef} from "react";
import Payment from "../Profile/Payment";
import ChangePassword from "./ChangePassword";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


export default function Profile() {

  const [name, setName] = useState(' ');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(()=>{
    fetch('/api/auth/sign-up').then((response)=>response.json()).then((data)=>{
      setName(data.name);
      setPhone(data.phone);
      setEmail(data.email);
    })
  })


  const [isProfileActive, setIsProfileActive] = useState(true)
  const [isPaymentActive, setIsPaymentActive] = useState(false)
  const [isPassword, setIsPassword] = useState(false)


  const clickHandler1 = () => {
    setIsProfileActive(true);
    setIsPaymentActive(false);
    setIsPassword(false);
  };
  const clickHandler2 = () => {
    setIsProfileActive(false);
    setIsPaymentActive(true);
    setIsPassword(false);
  };
  const clickHandler3 = () => {
    setIsProfileActive(false);
    setIsPaymentActive(false);
    setIsPassword(true);
  };
  return (
    <React.Fragment>
      <h3>Profile</h3>
      <div className={classes.container}>
        <ul>
          <li>
            <a onClick={clickHandler1}>Personal Info</a>
          </li>
          <li>
            <a onClick={clickHandler2}>Payment History</a>
          </li>
          <li>
            <a onClick={clickHandler3}>Change Password</a>
          </li>
        </ul>

        {isProfileActive && <div className={classes.circle}><AccountCircleIcon style={{ fontSize: 160 ,fill: "#ffb403"}}/></div>}
        {isProfileActive && <form method="post">


          <label htmlFor="name">Name</label>
          <input disabled  type="text" value={name}  name="fname" id="fname"/>

          <label htmlFor="phone">Phone Number</label>
          <input disabled  type="number" value={phone} name="phone" id="phone"/>

          <label htmlFor="email">Email Address</label>
          <input disabled type="email" value={email} name="email" id="email"/>

          <div>
            {/* <button type="submit" className={classes.orangebutton}>Save</button> */}
          </div>
        </form>}

        {isPaymentActive && <Payment />}
        {isPassword && <ChangePassword />}
      </div>
    </React.Fragment>
  );
}

