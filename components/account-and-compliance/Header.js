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


  console.log(planName);

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

    const eligibility = <div> <li>Number of Directors- Minimum 2 and Maximum 15.</li>
    <li>Number of shareholders- Minimum 2 and maximum no limit. However, one person can act as both director and shareholder.</li>
    <li>Citizenship- At least one director should hold Indian Citizenship.</li></div>

  return (
    <div id="header">
      <div className={classes.imgMobile}>
        <img
          className={classes.mi}
          src='Fintaximages/accounting/annual-complaince-for-privated-limited-company.png'
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
          Registration for Annual Compliance & Filing
          </span>
          <div className={classes.form}>
            <h2 className={classes.formh2heading}>
            Registration for Annual Compliance & Filing
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
      Annual Compliances for Private Limited Company
      </h1>

      <p className={classes.headingp2}>
      A Private Company is an entity playing a separate identification which requires preserving its energetic fame thru the everyday submitting with MCA. For each company, it is obligatory to file an annual return and audited economic statements with MCA for each and every monetary year. The RoC submitting is obligatory irrespective of the turnover, whether or not it is zero or in crore. Whether a single transaction is undertaken or none, annual compliances for personal restricted are obligatory for each and every registered company.
      <br />
        Both the varieties are filed to file the things to do and economic date for involved Financial Year. The due dates for annual submitting of a employer are primarily based on the date of the Annual General Meeting. The non-stop failure might also lead to the elimination of the company’s title from RoC’s register, together with disqualification of directors. Also, it has been determined that MCA has actively taken daring steps for dealing with any such failures.

      </p>

      <div id="headerMobile" className={classes.mobileVersionQuery}>
        <div className={classes.headerBackground}>
          <span className={classes.formheading}>
          Registration for Annual Compliance & Filing
          </span>
          <div className={classes.form}>
            <h2 className={classes.formh2heading}>
            Registration for Annual Compliance & Filing
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
                <select name=""  id="mobilePlanSelect" onChange={mobileSelectChangeHandler}  className={classes.planName}>
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
