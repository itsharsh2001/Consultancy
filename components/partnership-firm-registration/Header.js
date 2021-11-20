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
          src='/Fintaximages/startingabusiness/parnership-firm.png'
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
          Partnership Firm Registration Form
          </span>
          <div className={classes.form}>
            <h2 className={classes.formh2heading}>
            Partnership Firm Registration Form
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
      Partnership Firm Registration
      </h1>

      <p className={classes.headingp}>
      We provide best and speedy services. Our services come with the benefits of expert advice, documents Guidance, certification, post service follow up etc.
      </p>

      <p className={classes.headingp2}>
      A Partnership is one of the most essential forms of a business organization. A partnership firm is in which two or more than two persons come collectively to form a enterprise and divide the earnings in an agreed ratio. The partnership enterprise consists of any form of trade, occupation and profession. A partnership corporation is simple to shape with less compliance compared to companies. The Indian Partnership Act, 1932 governs and regulates partnership corporations in India. The folks who come collectively to shape the partnership corporation are known as companions. The partnership firm is constituted under a agreement among the partners. The agreement among the partners is referred to as a partnership deed which regulates the relationship among the partners and additionally among the partners and the partnership firm.
      </p>

      <div id="headerMobile" className={classes.mobileVersionQuery}>
        <div className={classes.headerBackground}>
          <span className={classes.formheading}>
          Partnership Firm Registration Form
          </span>
          <div className={classes.form}>
            <h2 className={classes.formh2heading}>
            Partnership Firm Registration Form
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
                <select name="" id="planSelect" onChange={selectChangeHandler} className={classes.planName}>
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
