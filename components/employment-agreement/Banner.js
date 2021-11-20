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


import FAQ from '../privateCompanyRegistration/ui/FAQ.js'

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



      <h1 className={classes.headingh1}>
      What Is Employment Agreement?
      </h1>

      <p className={classes.headingp2}>
      An Employment Agreement is the sole prison record between the Employer and Employee, which lays out the rights, duties, and duties of each event throughout the employment period. An Employment Agreement is a integral record in managing personnel as it lays down the rights and tasks of each the Employer and the Employee. From junior-most stage to the CEO, all people are an Employee, and to control the personnel efficiently, one wants to have an Employment Agreement.
      </p>

      <h1 className={classes.headingh1}>
      Elements Of Employment Agreement
      </h1>

      <p className={classes.headingp2}>
      An Employment Agreement must genuinely outline the phrases and stipulations of employment. The most frequent factors mentioned in the Employment Agreement are:
      <br />
      <br />
      <span className={classes.steps}>

      <li>Job Description of the Employee</li>
      <li>Term of the Employment</li>
      <li>Employee benefits</li>
      <li>Remuneration/compensation to the Employee</li>
      <li>Leave Policy</li>
      <li>Grounds for termination</li>
      <li>Protection of Confidential information</li>
      <li>Ownership of Intellectual Property</li>
      <li>Dispute Resolution</li>
      <li>Governing legal guidelines and jurisdiction</li>
      <li>Any different provisions deemed to be applicable to the Employer.</li>
      </span>

      <br />
      <br />
      In the case of humans employed on contractual foundation for a restrained length of time such as candidates employed for particular tasks Service Agreement is drafted alternatively of Employment Agreement.
      </p>

      <h1 className={classes.headingh1}>
      What Is The Significance Of Employment Agreement? 
      </h1>

      <FAQ heading="Clarity upon phrases of employment" para="An Employment Agreement gives clear and specific data about the provisions like remuneration, working hours, job description, duties, and duties of the Employee. An Employee would desire to be clear about his compensation/remuneration, which is solely viable if you have a well-drafted Employment Agreement."/>
      <FAQ heading="Dispute Resolution" para="An Employment Agreement might also consist of a clause concerning to the resolution of disputes. Disputes can be resolved in various ways, and events are free to select any method. One of the famous strategies is Arbitration, which is preferable over prolonged litigation. If the events are clear about their dispute resolution, then there would be no conflicts upon the identical later on."/>
      <FAQ heading="Protection of exchange secrets" para="Employment Agreements comprise clause referring to the safety of personal data from disclosure to a 0.33 party. This clause states that Employee shall now not expose the exclusive data of the enterprise which he is uncovered to at some point of the time period of employment to any 1/3 party. As the Employer has the proper to very own the Intellectual Property organized and developed by using the Employee at some stage in the time period of the Agreement a clause associated to possession of Intellectual Property is additionally frequent in the Agreements."/>
      <FAQ heading="Restrictive Covenants" para="The settlement may also encompass restrictive covenants such as non-compete and non-solicitation clauses. It ensures that an Employee shall now not be part of a competitor or begin a commercial enterprise primarily based on the identical thinking and solicit the organization’s different employees, clients, distributors or provider carriers to go away the enterprise and be a part of him after terminating his employment with the Employer."/>

      <h1 className={classes.headingh1}>
        FAQ
      </h1>

      <FAQ heading="Is Employment Agreement legally legitimate in India?" para="Employment Agreement is legally legitimate and binding if it has life like restrictions upon the Employee. Unreasonable clauses and restrictive covenants render that element of the Agreement invalid."/>
      <FAQ heading="Is it obligatory to notaries the Employment Agreement?" para="An Employment Agreement desires no longer to be mandatorily notarized with the aid of a public notary, however stamp responsibility has to be paid on the same. Stamp responsibility quotes can be checked in Schedule of the relevant Stamp Act as it differs from nation to state."/>
      <FAQ heading="What is the distinction between a contractor and an employee, and why is this important?" para="A contractor is employed for fixed-term projects, and the Agreement governing the relationship is Service Agreement. In contrast, an worker is employed for full time, and the Agreement governing the relationship is Employment Agreement. A contractor is paid charges for which he desires to increase invoices, whereas the worker is paid a constant salary."/>
      <FAQ heading="Can I give up my worker from working for any person else?" para="Yes, an Employer has the proper to the offerings of the Employee on an special basis. It can be certainly mentioned in the Agreement that the Employee can't furnish his offerings to anyone else all through the continuation of Agreement.
"/>


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
