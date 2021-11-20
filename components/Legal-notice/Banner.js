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
      What Is Legal Notice?
      </h1>

      <p className={classes.headingp2}>
      A legal notice is a document is dispatched to the individual to whom you are about file legal lawsuits in the things with whom you are no longer legally blissful with that person. For the all the felony litigations and things such legal observes have to be dispatched as the first step to the felony proceedings. Such word can be drafted on the simple paper.
      </p>

      <h1 className={classes.headingh1}>
        How to use it?
      </h1>

      <p className={classes.headingp2}>
      We supply the legal be aware layout which can be used with the aid of a individual to begin legal lawsuits in opposition to the man or woman with whom he has grievances. It is cautioned to get it drafted by using our expert legal professionals at Fintaxwiz.com. Legal notices commonly suggested to be dispatched via a expert legal professional as the language is very vital for such legal notice.
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
