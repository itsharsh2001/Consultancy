import classes from "./Banner.module.css";
import {useRef} from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

async function createInquiry(name, email, phone, inquiry) {
  const response = await fetch('/api/legal-drafting', {
      method: 'POST',
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          inquiry: inquiry,
      }),
  });

  const data = await response.json();
  if (!response.ok) {
      throw new Error(data.message || 'something went wrong')
  }

  return data;

}

export default function Banner() {


  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const inquiryInputRef = useRef();


  async function handlerButton(){

    const enteredName =  nameInputRef.current.value;
    const enteredEmail =  emailInputRef .current.value;
    const enteredPhone =  phoneInputRef.current.value;
    const enteredInquiry =  inquiryInputRef.current.value;


    try {
      
        const result = await createInquiry(enteredName, enteredEmail, enteredPhone, enteredInquiry)

        toast("Your Inquiry is submitted")
        
    } catch (err) {
        if(err.message=="Please Fill all the Fields"){
          toast(err.message);
        }

        if(err.message=="Please Enter Valid Name"){
          toast(err.message);
        }

        if(err.message=="Please Enter Valid Email"){
          toast(err.message);
        }

        if(err.message=="Please Enter Valid Phone Number"){
          toast(err.message);
        }

        }
        }



  return (
    <div className={classes.container}>
      <div className={classes.imgMobile}>
        <img
          className={classes.mi}
          src="/Fintaximages/legal-drafting.png"
          alt=""
        />
      </div>
      <div className={classes.imagePart}>
        <div className={classes.headerBackground}>
          <span className={classes.formheading}>
            Any Inquiry??
          </span>
          <div className={classes.form}>
            <h2 className={classes.formh2heading}>
              FINTAX
            </h2>
            <span className={classes.formInputs}>
              <span>
                <span
                  className={`${classes.inputLable} ${classes.inputLable1}`}
                >
                  Name*{" "}
                </span>
                <input
                  placeholder="Your Name"
                  ref={nameInputRef}
                  className={classes.input}
                  type="text"
                  name=""
                  id=""
                />
              </span>

              <span>
                <span
                  className={`${classes.inputLable} ${classes.inputLable2}`}
                >
                  Email*{" "}
                </span>
                <input
                  placeholder="Your Email-address"
                  ref={emailInputRef}
                  className={classes.input}
                  type="text"
                  name=""
                  id=""
                />
              </span>

              <span>
                <span
                  className={`${classes.inputLable} ${classes.inputLable3}`}
                >
                  Mobile*
                </span>
                <input
                  placeholder="Your Mobile Number"
                  ref={phoneInputRef}
                  className={classes.input}
                  type="Number"
                  name=""
                  id=""
                />
               
              </span>
              
              <span>
                <span
                  className={`${classes.inputLable} ${classes.inputLable3}`}
                >
                  Inquiry*
                </span>
                <input
                  placeholder="Your Inquiry"
                  className={classes.input}
                  ref={inquiryInputRef}
                  type="text"
                  name=""
                  id=""
                />
               
              </span>
              <span>
                <button onClick={handlerButton} className={classes.buttonForm} type="submit">
                  Send Inquiry
                </button>
              </span>
            </span>
          </div>
        </div>
      </div>



      <h1 className={classes.headingh1}>
      What Is Notice to Vacate Tenant?
      </h1>

      <p className={classes.headingp2}>
      A note to vacate tenant is a record, which offers felony observe to the tenant of a rented/leased property to vacate the premises in a stipulated time. A landlord can additionally vacate a tenant to vacate some property at a sure charge citing his/her motives for the action, as per the rent agreement.
      </p>

      <h1 className={classes.headingh1}>
        How to use it?
      </h1>

      <p className={classes.headingp2}>
      It is vital to supply the word to vacate in writing to the landlord or the tenant to make certain criminal validity, in case of dispute. Notice to vacate can be printed on a undeniable white paper and signed by way of the tenant or landlord. It can be delivered to the supposed birthday celebration in-person or via email. However, it is properly to supply the word to vacate thru registered submit to make sure the word has reached its supposed recipient.
      </p>

      <h1 className={classes.headingh1}>
        Our Services
      </h1>

      <p className={classes.headingp2}>
      You can choose which document you want us to draft by our experienced lawyers with a free consultation call to understand the significance and get the document customized as per your business requirement. Let us draft an Appointment Letter for you from scratch, personalized and customized as per your needs!
      </p>

      <div className={classes.mobileVersionQuery}>
        <div className={classes.headerBackground}>
          <span className={classes.formheading}>
          Any Inquiry??
          </span>
          <div className={classes.form}>
            <h2 className={classes.formh2heading}>
              FINTAX
            </h2>
            <span className={classes.formInputs}>
              <span>
                <span
                  className={`${classes.inputLable} ${classes.inputLable1}`}
                >
                  Name*{" "}
                </span>
                <input
                  placeholder="Your Name"
                  className={classes.input}
                  ref={nameInputRef}
                  type="text"
                  name=""
                  id=""
                />
              </span>

              <span>
                <span
                  className={`${classes.inputLable} ${classes.inputLable2}`}
                >
                  Email*{" "}
                </span>
                <input
                  placeholder="Your Email-address"
                  ref={emailInputRef}
                  className={classes.input}
                  type="text"
                  name=""
                  id=""
                />
              </span>

              <span>
                <span
                  className={`${classes.inputLable} ${classes.inputLable3}`}
                >
                  Mobile*
                </span>
                <input
                  placeholder="Your Mobile Number"
                  ref={phoneInputRef}
                  className={classes.input}
                  type="Number"
                  name=""
                  id=""
                />
              </span>

              <span>
                <span
                  className={`${classes.inputLable} ${classes.inputLable3}`}
                >
                  Inquiry*
                </span>
                <input
                  placeholder="Your Inquiry"
                  ref={inquiryInputRef}
                  className={classes.input}
                  type="text"
                  name=""
                  id=""
                />
              </span>

              <span>
                <button onClick={handlerButton} className={classes.buttonForm} type="submit">
                  Send Inquiry
                </button>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
