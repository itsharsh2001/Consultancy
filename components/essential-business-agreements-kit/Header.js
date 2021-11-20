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
  // const [planValue, setPlan] = useState('');

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
        <img className={classes.mi} src="/Fintaximages/legal-drafting.png" alt="" />
        {/* <Image className={classes.mi}
          src='/privatecompanyRenewal.jpg'
          alt="" 
          height={325}
          width={1286}
          /> */}
      </div>
      <div className={classes.imagePart}>
        <div className={classes.headerBackground}>
          <span className={classes.formheading}>
            Essential Business Agreements Kit Form
          </span>
          <div className={classes.form}>
            <h2 className={classes.formh2heading}>
              Essential Business Agreements Kit Form
            </h2>
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
                  placeholder="Your Mobile Number"
                  className={classes.input}
                  type="Number"
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
      <h1 className={classes.headingh1}>Essential Business Agreements Kit</h1>

      <p className={classes.headingp}>
      Every commercial enterprise ought to have fundamental felony files and agreements in area earlier than starting up its operations, in order to keep away from pointless felony disputes. The group of specialist legal professionals at Fintaxwiz.com has crafted a package of necessary archives for each business. This package includes of widespread and ready-to-use files for onboarding personnel & unbiased consultants, making sure safety of touchy information, internet site policies, and more. This downloadable package is especially designed preserving in thought frequent prison troubles that small groups face. We additionally guide any customization required at nominal more cost.
      </p>

      <h1 className={classes.headingh1}>Employment Related Agreements</h1>

      <p className={classes.headingp}>
      1.	Employment Agreement<br/>
An Employment Agreement units out the simple phrases and stipulations of the employment such as the obligations of the employee, roles and responsibilities, remuneration, job description, termination of the settlement and different vital terms. It legally defines the relationship between the worker and organization and safeguards the pastime of each the parties.<br/>
2.	Non-Disclosure Agreement for employees<br/>
As a worker is uncovered to touchy statistics associated to the business, it is vital to have a Non-Disclosure Agreement in region to guard the employer’s private or proprietary facts such as alternate secrets, economic information, technical expertise and different necessary information.<br/>
3.	Offer Letter<br/>
An provide letter is given to the worker after the business enterprise in the end selects him/her and is equipped to appoint him/her for a specific position. An provide letter is a formal verbal exchange and affirmation involving an employee’s appointment.<br/>
4.	Experience and Relieving Letter<br/>
An journey and relieving letter is a formal letter given to the worker whilst leaving the corporation denoting that his/her resignation has been ordinary and he/she has been relieved from his/her responsibilities and responsibilities.<br/>
5.	Employee Code of Conduct<br/>
An Employee code of habits is a file consisting of insurance policies associated to the personnel such as go away policy, merchandising policy, and appraisal coverage and such different necessary recommendations and regulations required in an organization.<br/>
      </p>
      <h1 className={classes.headingh1}>Agreements with Third Party</h1>

      <p className={classes.headingp}>
      1.	Service Level Agreement<br/>
Service Level Agreement or Vendor’s Agreement is an settlement between the provider issuer and the business enterprise whereby the carrier vendors grant sure form of offerings to the organization. The clauses in a Service Level Agreement are shipping time scales, obligations of the parties, price terms, confidentiality provisions, termination of the settlement and such different necessary clauses.<br/>
2.	Retainer/ Consultant/Independent Contractor Agreement<br/>
A retainer or guide or impartial contractor is a individual who is employed on constant rate groundwork rather of earnings basis. As a retainer or guide works in a exceptional manner as in contrast to an employee, the settlement governing the relationship between the retainer and business enterprise is additionally a little different. Generally, retainers/ consultants/independent contractors work from their respective workplaces or premises, they work on hourly groundwork and sure different phrases and prerequisites are relevant to them. A retainer/ consultant/independent contractor’s settlement is an settlement which outlines the phrases and prerequisites for enticing a retainer.<br/>
3.	Non-Disclosure Agreement<br/>
A Non-Disclosure Agreement is a contract between two or greater events whereby the events agree now not to reveal the exclusive data included underneath the contract. Every business, mainly a startup, has change secrets, technical statistics and such different touchy records which if disclosed to rivals or any 1/3 celebration may purpose extreme harm to the business. Therefore, it is beneficial to have a properly drafted Non-Disclosure Agreement in place.<br/>
      </p>

      <h1 className={classes.headingh1}>Website Terms and Conditions</h1>
      <p className={classes.headingp}>
      1.	Privacy Policy<br/>
Privacy Policy is a fundamental criminal record to be published on the Website as per the Information Technology (Reasonable protection practices and processes and touchy private information or information) Rules, 2011. A privateer’s coverage wants to point out the technique being observed whilst collecting, storing and retaining the information of Users.<br/>
2.	Terms of Use<br/>
Website Terms of Use is a obligatory prison requirement as per the Information Technology (Intermediaries guidelines) Rules, 2011 and it wishes to be posted on the Website. Terms of Use coverage is a legally binding settlement whereby the User clicks and accepts the stipulations referred to in the Terms of Use earlier than the use of and getting access to the offerings supplied through the Website. <br/>
*The record in the package does now not encompass refunds, cancellation and return insurance policies as they fluctuate mostly case by using case. We are happy to supply personalized drafting offerings for such insurance policies at discounted rates.
<br/>
      </p>

      <div id="headerMobile" className={classes.mobileVersionQuery}>
        <div className={classes.headerBackground}>
          <span className={classes.formheading}>
            Essential Business Agreements Kit Form
          </span>
          <div className={classes.form}>
            <h2 className={classes.formh2heading}>
              Essential Business Agreements Kit Form
            </h2>
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
                  onChange={(e)=>{setPhoneNumber(e.target.value)}}
                  className={classes.input}
                  type="Number"
                  name=""
                  id=""
                />
              </span>

              <span>
                <select name="" id="mobilePlanSelect" onChange={mobileSelectChangeHandler} className={classes.planName}>
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
