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
        <img className={classes.mi} src="/Fintaximages/changeinbusiness/LLP-to-private-limited-company.png" alt="" />
        {/* <Image className={classes.mi}
          src='/privatecompanyRenewal.jpg'
          alt="" 
          height={325}
          width={1286}
          /> */}
      </div>
      <div className={classes.imagePart}>
        <div className={classes.headerBackground}>
          <span className={classes.formheading}>LLP to Private Limited Form</span>
          <div className={classes.form}>
            <h2 className={classes.formh2heading}>LLP to Private Limited Form</h2>
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
                  onChange={(e)=>{setPhoneNumber(e.target.value)}}
                  type="Number"
                  placeholder="Your Mobile Number"
                  className={classes.input}
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
      <h1 className={classes.headingh1}>LLP to Private Limited</h1>

      <p className={classes.headingp}>
      In India, private companies are one of the most common forms of enterprise structure. They offer better possibilities of growth, improvement and are great for elevating equity capital which isn't always feasible in case of LLP. LLP shape isn't always appropriate if the proprietors require venture capitalist or private equity investors to spend money on their organization as they could pick out to spend money on a private limited company and not a partnership or LLP. The 2d purpose for conversion is that the FDI in case of a private limited company does not require any approval it could be accomplished directly unlike in an LLP. Especially if the promoters or proprietors of the organization are NRI’s or a foreigner incorporating a private limited company is a foremost desire over an LLP. Hence conversion is obligatory if the above-mentioned requirements need to be fulfilled.
      </p>

      <div id="headerMobile" className={classes.mobileVersionQuery}>
        <div className={classes.headerBackground}>
          <span className={classes.formheading}>LLP to Private Limited Form</span>
          <div className={classes.form}>
            <h2 className={classes.formh2heading}>LLP to Private Limited Form</h2>
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
                <select name=""  id="mobilePlanSelect" onChange={mobileSelectChangeHandler} className={classes.planName}>
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
