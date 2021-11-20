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
        <img className={classes.mi} src="/fintaximages/intellectualproperty/trademark-objection-reply.png" alt="" />
        {/* <Image className={classes.mi}
          src='/privatecompanyObjection.jpg'
          alt="" 
          height={325}
          width={1286}
          /> */}
      </div>
      <div className={classes.imagePart}>
        <div className={classes.headerBackground}>
          <span className={classes.formheading}>Trademarks Objection Form</span>
          <div className={classes.form}>
            <h2 className={classes.formh2heading}>Trademarks Objection Form</h2>
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
      <h1 className={classes.headingh1}>Trademarks Objection</h1>

      <p className={classes.headingp}>
        Trademark Objection is the 2nd stage of Trademark Registration Process.
        All the Trademark purposes will be examined by using the Registrar of
        Trademarks.
      </p>
      <h1 className={classes.headingh1}>
          What Is Trademark Examination Report?
      </h1>
      <p className={classes.headingp2}>
        After examination of the application, the registry makes an examination
        file of utility and will figure out whether or not the software can be
        standard or not. If accepted, the registry moved ahead to promote the
        trademark. In case if the examination record incorporates any
        observations, the identical will be communicated to the
        applicant/trademark agent for submitting a reply to the examination
        report.
        <br />
        Trademark examination record shall incorporate the cause for objection.
        The applicant is required to file his reply in 30 days from the
        examination report. Generally, this examination record will be
        communicated to the trademark agent for action.
        <br />
        Thereafter, the applicant will be directed to file a reply to the
        objection inside 30 days of the examination report. If the reply to the
        examination record located satisfactory, the Registrar shall proceed to
        take delivery of the software and will promote the identical on
        Trademark Journal.
      </p>
      <h1 className={classes.headingh1}>
        Trademark Objection Reply - Requirements
      </h1>
      <p className={classes.headingp2}>
      1.	Reply within 30 Days<br/>
Applicant has to file reply to the equal inside 30 days of the objection. In case the reply is no longer filed inside 30 days of report, the utility will be declared as abandoned.<br/>
2.	 Extension of Time for Reply past 30 days<br/>
Applicant can file utility for extension of time for submitting reply in Form TM-M with requisite (₹900.00).
      </p>


      <h1 className={classes.headingh1}>
        How To File Reply To Trademark Objection
      </h1>
      <p className={classes.headingp2}>
      1.	Trademark Objection Response<br/>
When the registrar is of the opinion that the utility is dependable for objection, the reputation of the utility is modified to OBJECTED. A replica of examination record will be communicated to the trademark agent bringing up the purpose for the objection and the applicant has to file reply to the equal inside 30 days of the objection.<br/>
2.	Analyze the examination report<br/>
First step is to analyses the examination file and to decide the purpose for the objection rose.<br/>
3.	Draft reply to Objection<br/>
Next step is to put together an objection reply bringing up acceptable reply to the objection raised with helping rule of regulation and judgments helping the case, alongside with different assisting files and proof that validates the response.<br/>
4.	Timelines for reply<br/>
The reply to objection has to file inside 30 days of the examination document with aiding documents.<br/>
5.	If the Reply is accepted:<br/>
If the response is accepted, the software will be processed in addition for registration and commercial in the Trademark Journal.<br/>
6.	If it is now not accepted,<br/>
If it is no longer accepted, the registry will mark the remember for listening to and date / time will be notified to the Trademark Agent.

      </p>

      <div id="headerMobile" className={classes.mobileVersionQuery}>
        <div className={classes.headerBackground}>
          <span className={classes.formheading}>Trademarks Objection Form</span>
          <div className={classes.form}>
            <h2 className={classes.formh2heading}>Trademarks Objection Form</h2>
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
