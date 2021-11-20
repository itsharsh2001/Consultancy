import classes from "./ContactForm.module.css";
import {useRef, useState} from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import { Fragment } from "react";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()



async function createQuery(name, email, phone, subject, message) {
  const response = await fetch('/api/contact-us', {
      method: 'POST',
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
          name: name,
          email: email,
          subject: subject,
          phone: phone,
          message:message
      }),
  });

  const data = await response.json();
  if (!response.ok) {
      throw new Error(data.message || 'something went wrong')
  }

  return data;

}


export default function ContactForm() {

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const subjectInputRef = useRef();
  const messageInputRef = useRef();
  const [disabled, setDisabled] = useState(false)


  async function handlerButton(){

      const enteredName = nameInputRef.current.value;
      const enteredemail = emailInputRef.current.value;
      const enteredphone = phoneInputRef.current.value;
      const enteredsubject = subjectInputRef.current.value;
      const enteredmessage = messageInputRef.current.value;

      var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if(enteredName.length==0 || enteredemail.length==0 || enteredphone.length==0 || enteredsubject.length==0 || enteredmessage.length==0){
        toast('Please Enter all the Fields');
        return;
      }


      if(enteredName.length<3){
        toast('Please Entered Valid Name');
        return;
      }

      if(!emailRegex.test(enteredemail)){
        toast('Please Entered Valid Email');
        return;
      }

      if(enteredphone.length!=10){
        toast('Please Entered Valid Phone Number');
        return;
      }


      try {
        setDisabled(true);
          const result = await createQuery(enteredName, enteredemail, enteredphone, enteredsubject, enteredmessage)

          toast("Your message is submitted")
          setDisabled(false);
          
      } catch (err) {
        setDisabled(false);
          if(err.message=="error"){
            toast("Please Try Again Later");
          }

          }
          }

  return (
    <Fragment>
      <div className={classes.container}>
        <h2>Contact Us</h2>
        <form onSubmit={(e)=>e.preventDefault()} action="" method="post">
          <p>
            Your Name*
            <input ref={nameInputRef} type="text" />
          </p>
          <p>
            Email*
            <input ref={emailInputRef} type="email" />
          </p>
          <p>
            Phone
            <input ref={phoneInputRef} className={classes.numebr} type="tel" />
          </p>
          <p>
            Subject
            <input ref={subjectInputRef} type="text" />
          </p>
          <p className={classes.submitbutton}>
            Your Message
            <span>
              <textarea ref={messageInputRef} cols="31" rows="10"></textarea>
              {disabled?
              <button disabled  onClick={handlerButton} >Please Wait..</button>:<button onClick={handlerButton} >SEND</button>
              }
            </span>
          </p>
          {/* <button type="submit">SEND</button> */}
        </form>
      </div>
      <div className={classes.contactInfo}>
        <h3>Operating Office</h3>
        <span>
          <LocationOnIcon fontSize="large" />
          <p>
            302 Olive Arcade, Opp. Samudra Annexe, Off. C. G. Road, Ahmedabad,
            Gujarat 380009
          </p>
        </span>
        <h3>Call</h3>

        <span>
          <CallIcon fontSize="large" />
          <p>Toll Free: 1800 313 4151 Customer Care: 89806 85509</p>
        </span>

        <h3>Email</h3>
        <span>
          <EmailIcon fontSize="large" />
          <p>support@legalwiz.in</p>
        </span>
      </div>
    </Fragment>
  );
}
