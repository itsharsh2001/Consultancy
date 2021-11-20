import classes from "./Header.module.css";
import FAQ from "./ui/FAQ.js";
import {useState, useRef} from 'react';
import {useRouter} from 'next/router';
import Image from 'next/image';
import React from 'react';
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
      throw new Error(data.message || 'something went wrong')
  }

  return data;
}


function loadScript(src){
  return new Promise((resolve) => {
  const script = document.createElement('script');
  script.src = src;
  script.onload = () =>{
    resolve(true);
  }
  script.onerror = () =>{
    resolve(false);
  }
  document.body.appendChild(script);
  })
}

export default function Header() {

  const router = useRouter();
  const [phoneNumber , setPhoneNumber] = useState(0);
  // const [planValue, setPlan] = useState('');

  const [planName, setPlanName] = useState('Basic Plan');
  const [processing, setProcessing] = useState(false);

  const selectChangeHandler = () => {
    let e = document.getElementById("planSelect");
    let strUser = e.options[e.selectedIndex].text;
    setPlanName(strUser);
  }
  
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
        <img
          className={classes.mi}
          src='/Fintaximages/registrationandfilling/fssai-registration.png'
          alt=""
        />
        {/* <Image className={classes.mi}
          src='/privatecompanyregistration.jpg'
          alt="" 
          height={325}
          width={1286}
          /> */}
      </div>
      <div className={classes.imagePart}>
        <div className={classes.headerBackground}>
          <span className={classes.formheading}>
          FSSAI Registration Form
          </span>
          <div className={classes.form}>
            <h2 className={classes.formh2heading}>
            FSSAI Registration Form
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
                <select id="planSelect" onChange={selectChangeHandler} className={classes.planName}>
                  {/* <option  value="SelectPlan">
                  Select Your Plan
                  </option> */}
                  <option value="BasicPlan">
                    Basic Plan
                  </option>
                  <option   value="SmartPlan">
                    Smart Plan
                  </option>
                  <option   value="MegaPlan">
                    Mega Plan
                  </option>
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
      <h1 className={classes.headingh1}>
      FSSAI Registration
      </h1>

      <p className={classes.headingp}>
      FSSAI is an abbreviation for the Food Safety and Standards Authority of India. FSSAI is an unbiased physique identified beneath the Ministry of Health & Family Welfare, Government of India that manages the meals license registration. This employer works for securing the Laws and Standards for Food Business in India. The primary purpose of FSSAI is to adjust and test for secure meals manufacturing, storage, and dealing with practices with the aid of Food Business Operators (FBOs). A FSSAI registration certificates comes with a 14 digit License variety to FBOs which is required to be printed on all the meals merchandise with FSSAI logo. The license can be utilized for a minimal 1 yr to most 5 years; it can once more be renewed or re-applied for as per guidelines cited beneath Food Safety & Standards Act, 2006.
      </p>

      <h1 className={classes.headingh1}>
      Who requires FSSAI Registration and License?
      </h1>

      <p className={classes.headingp2}>
      Every individual who desires to begin Food Business which includes cloud kitchen for Swiggy and Zomato has to mandatorily attain FSSAI Registration or FSSAI License online. However, it once in a while will become challenging for a meals commercial enterprise operator to determine – which license to decide for: State or Central. Let us assist you to apprehend the eligibility standards so that you can shortly precede for on line FSSAI registration and collect requisite meals license.
      </p>

      <h1 className={classes.headingh1}>
      Here are few examples of enterprise that require FSSAI Registration and License:
      </h1>
      <p style={{textAlign: 'center'}} className={classes.headingp2}>
      Club,
      Caterers,
      Restaurant,
      Wholesaler, 
      Food Retailer, 
      Food Storage Unit ,
      Online Food Business Operators,
      
      Exporter and Importer of Food Products
      And different commercial enterprise associated to Food  <br/>
      </p>

      <h1 className={classes.headingh1}>
      What is relevant to you: FSSAI Registration or FSSAI License?
      </h1>

      <p style={{textAlign: 'left'}} className={classes.headingp2}>
      FSSAI Registration:<br/>
      Simply known as FSSAI Basic Registration. This registration is terrific for all meals companies and allied things to do like Storage, sales, distribution, trading, re-packaging and labelling. Food Businesses having a turnover of much less than 12 lacs are eligible to reap FSSAI Basic Registration. Mostly hawkers, petty retailers, brief stall holders come underneath this category. This meals license registration on line registration is very beneficial for eCommerce meals traders.<br/>
      FSSAI License:<br/>
      There are two sorts of FSSAI licences.<br/>
      1.	State License<br/>
      Eligibility: Food Businesses having turnover above Rs.12 lacs and up to Rs. 20 crores can choose for State License.<br/>
      2.	Entral License<br/>
      Eligibility: Those in the meals enterprise and has a turnover of Rs.20 crores and above are required to gain Central FSSAI License.
      </p>

      <div id="headerMobile" className={classes.mobileVersionQuery}>
        <div className={classes.headerBackground}>
          <span className={classes.formheading}>
          FSSAI Registration Form
          </span>
          <div className={classes.form}>
            <h2 className={classes.formh2heading}>
            FSSAI Registration Form
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
                  <option value="BasicPlan">
                    Basic Plan
                  </option>
                  <option value="SmartPlan">
                    Smart Plan
                  </option>
                  <option value="MegaPlan">
                    Mega Plan
                  </option>
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
