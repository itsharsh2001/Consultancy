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
          src='/Fintaximages/accounting/file-dir3-kyc.png'
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
          Registration for File DIR-3 KYC
          </span>
          <div className={classes.form}>
            <h2 className={classes.formh2heading}>
            Registration for File DIR-3 KYC
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
                <input    onChange={(e)=>{setPhoneNumber(e.target.value)}}
                  placeholder="Your Mobile Number"
                  className={classes.input}
                  type="Number"
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
      File DIR-3 KYC
      </h1>

      <p className={classes.headingp2}>
      Filing DIR-3 KYC is a phase of annual KYC performed by using Ministry of Corporate Affairs. MCA has introduced obligatory annual KYC for all DIN holder w.e.f. tenth July 2018 through inserting Rule 12A to Companies (Appointment and Qualifications of Directors) Rules, 2014. This compliance is relevant to each and every man or woman preserving DIN with ‘Approved’ popularity and additionally to these who are disqualified.
      <br />
      This being annual requirement, each and every DIN holder has to fulfill the compliance with recognize to each monetary year. The frequent due date for submitting is thirtieth April of instant subsequent monetary year. The closing date (i.e. fifteenth September, 2018) for submitting the structure for a character preserving DIN on or earlier than thirty first March, 2018 has been passed. Therefore, DIN of the character who has failed to file the structure will be deactivated. To reactivate the DIN, the involved man or woman has to file the KYC with price of INR 5,000 to Government.
      <br />

      However, thinking about the technical difficulties confronted to comply with KYC requirements, the ministry has allowed DIR-3 KYC submitting at a decreased charge of Rs five hundred for 15 days starting from twenty first September. October 6 onwards, charge of Rs 5,000 will observe to reactivate DIN.


      </p>

      <div id="headerMobile" className={classes.mobileVersionQuery}>
        <div className={classes.headerBackground}>
          <span className={classes.formheading}>
          Registration for File DIR-3 KYC
          </span>
          <div className={classes.form}>
            <h2 className={classes.formh2heading}>
            Registration for File DIR-3 KYC
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
                <select name="" id="mobilePlanSelect" onChange={mobileSelectChangeHandler}   className={classes.planName}>
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
