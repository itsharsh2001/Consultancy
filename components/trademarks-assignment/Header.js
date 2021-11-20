import classes from "./Header.module.css";
import FAQ from "./ui/FAQ.js";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

async function makePayment(phone,planName,topic) {
  const response = await fetch('/api/paymentGateway', {
      method: 'POST',
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        phone:phone,
        planName:planName,
        topic:topic
      })
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "something went wrong");
  }

  return data;
}

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export default function Header() {
  const router = useRouter();
  const [phoneNumber , setPhoneNumber] = useState(0);

  const [planName, setPlanName] = useState("Basic Plan");
  const [processing, setProcessing] = useState(false);

  const selectChangeHandler = () => {
    let e = document.getElementById("planSelect");
    let strUser = e.options[e.selectedIndex].text;
    setPlanName(strUser);
  };
  
  const mobileSelectChangeHandler = () => {
    let e = document.getElementById("mobilePlanSelect");
    let strUser = e.options[e.selectedIndex].text;
    setPlanName(strUser);
  }

  async function displayRazorpay(){

    if(phoneNumber.length!=10){
      toast("Please Enter Valid Phone Number");
      return;
    }
    
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
  
  
    if(!res){
      alert('razorpay is not working')
      return
    }

    try{
      setProcessing(true)
      const pathname = router.pathname;
      const topic = pathname.substring(1,)
      
    const data = await makePayment(phoneNumber,planName,topic);

    var options = {
      key: "", 
      currency: data.ordercurrency,
      amount: data.orderamount,
      name: data.ordername,
      description: data.orderreceipt,
      image: "/logo.png",
      order_id: data.orderid,

      handler: function (response){
        router.push('/admin-panel')
      },
      prefill: {
          "name": data.ordername,
          "email": data.orderemail,
          "contact": data.orderphone
      },
  };
  var paymentObject = new window.Razorpay(options);
  paymentObject.open();
  setProcessing(false);

    }catch(err){
      setProcessing(false)
      if(err.message=="failed"){
        router.push('/login')
      }
    }
  
    }
  return (
    <div id="header">
      <div className={classes.imgMobile}>
        <img className={classes.mi} src="/fintaximages/intellectualproperty/trademark-assignment.png" alt="" />
        {/* <Image className={classes.mi}
          src='/privatecompanyAssignment.jpg'
          alt="" 
          height={325}
          width={1286}
          /> */}
      </div>
      <div className={classes.imagePart}>
        <div className={classes.headerBackground}>
          <span className={classes.formheading}>Trademarks Assignment Form</span>
          <div className={classes.form}>
            <h2 className={classes.formh2heading}>Trademarks Assignment Form</h2>
            <p className={classes.forminsidep}>
              Consult with CA | Quick Process | 100% Data Privacy
            </p>
            <span className={classes.formInputs}>
              <span>
                <span
                  className={`${classes.inputLable} ${classes.inputLable3}`}
                >
                  Mobile*
                </span>
                <input
                  
                  placeholder="Your Mobile Number"
                  className={classes.input}
                  type="Number"
                  onChange={(e)=>{setPhoneNumber(e.target.value)}}
                  name=""
                  id=""
                />
              </span>

              <span>
                <select
                  id="planSelect"
                  onChange={selectChangeHandler}
                  className={classes.planName}
                >
                  {/* <option  value="SelectPlan">
                  Select Your Plan
                  </option> */}
                  <option value="BasicPlan">Basic Plan</option>
                  <option value="SmartPlan">Smart Plan</option>
                  <option value="MegaPlan">Mega Plan</option>
                </select>
              </span>

              <span>
              {processing?
                <button disabled className={classes.buttonForm} onClick={displayRazorpay} type="submit">
                  processing..
                </button>:<button className={classes.buttonForm} onClick={displayRazorpay} type="submit">
                  Pay 
                </button>
                }
              </span>
            </span>
          </div>
        </div>
      </div>
      <h1 className={classes.headingh1}>Trademarks Assignment</h1>

      <p className={`${classes.headingp} ${classes.headingp2}`}>
      Trademark is a mental property and like any different asset, the proprietor of a trademark has the proper to sell, license or switch the owned mental property. Such a switch can be made via Trademark Assignment Agreement or via Licensing.
      </p>
      <p className={classes.headingp}>When a trademark is assigned, there is an exchange in the possession of the registered brand. But when it’s licensed, the rights in the trademark proceed to vest with the unique proprietor however solely a few confined rights are given to the third party. This venture can be made with or besides transferring the commercial enterprise goodwill. In case of a registered Trademark, such challenge is required to be recorded in the Register of trademarks.
    </p>

    <h1 className={classes.headingh1}>TYPES OF TRADEMARK ASSIGNMENT IN INDIA</h1>

      <p className={`${classes.headingp}`}>
      1.	Complete Assignment<br/>
All the rights vested in the trademark are assigned to the 1/3 party, consisting of the rights to similarly transfer, to earn royalties, to license, etc.<br/>
2.	Assignment constrained to solely some goods/ services<br/>
In this assignment, the switch of possession is confined solely to positive products/services as determined in the Trademark Assignment Agreement.<br/>
3.	Assignment with Goodwill<br/>
In this case, the fee and the rights connected to the trademark are additionally transferred. This makes new proprietor of the trademark eligible to use the assigned manufacturer title with recognize to the merchandise and offerings already offered below the company name. Also, it promises permission to use the received trademark for any new undertaking or product the new proprietor creates or manufactures.<br/>
4.	Assignment except Goodwill<br/>
Also recognized as Gross Assignment, right here the manufacturer proprietor restricts the rights of the assignee, limiting consumer rights of the new assignee and prohibiting him/her from the use of the manufacturer identify for the merchandise already in use with the aid of the assignor. Thus, the goodwill connected to such manufacturer with recognizes to the product already being bought underneath such company is no longer transferred to the buyer.<br/>

      </p>

      <div id="headerMobile" className={classes.mobileVersionQuery}>
        <div className={classes.headerBackground}>
          <span className={classes.formheading}>Trademarks Assignment Form</span>
          <div className={classes.form}>
            <h2 className={classes.formh2heading}>Trademarks Assignment Form</h2>
            <p className={classes.forminsidep}>
              Consult with CA | Quick Process | 100% Data Privacy
            </p>
            <span className={classes.formInputs}>
              <span>
                <span
                  className={`${classes.inputLable} ${classes.inputLable3}`}
                >
                  Mobile*
                </span>
                <input
                  placeholder="Your Mobile Number"
                  className={classes.input}
                  onChange={(e)=>{setPhoneNumber(e.target.value)}}
                  type="Number"
                  name=""
                  id=""
                />
              </span>

              <span>
                <select name="" id="mobilePlanSelect" onChange={mobileSelectChangeHandler}   className={classes.planName}>
                  <option value="BasicPlan">Basic Plan</option>
                  <option value="SmartPlan">Smart Plan</option>
                  <option value="MegaPlan">Mega Plan</option>
                </select>
              </span>

              <span>
              {processing?
                <button disabled className={classes.buttonForm} onClick={displayRazorpay} type="submit">
                  processing..
                </button>:<button className={classes.buttonForm} onClick={displayRazorpay} type="submit">
                  Pay 
                </button>
                }
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
