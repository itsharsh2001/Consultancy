import classes from "./FeedBack.module.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

async function createFeedback(message) {
  const response = await fetch('/api/admin-panel/feedback', {
    method: 'POST',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({
      message: message
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'something went wrong')
  }

  return data;

}

export default function FeedBack() {

  const [order, setOrder] = useState(false);
  const messageInputRef = useRef();
  const [send, setSend] = useState(false);


  useEffect(() => {
    fetch('/api/admin-panel/orders').then((response) => response.json()).then((data) => {
      setOrder(data.message);
    })
  }, order)

  async function handlerButton() {

    const enteredmessage = messageInputRef.current.value;

    if(enteredmessage.length==0){
      setSend(false)
      toast("Please enter feedback message")
      return
    }

    try {
      setSend(true)
      const result = await createFeedback(enteredmessage)
      toast("Thanks for your feedback")
      setSend(false)
    } catch (err) {
      setSend(false)
      toast("please Try again later")
    }
  }

  return (
    <>
      <h3>Your Feedback</h3>

      {
        !order ?
          <span className={classes.bigcard}>
            <div className={classes.left}>
              Place an order, get fulfilled service experience and share your
              valuable feedback to us
            </div>
          </span>
          : null
      }



      {
          order ?
          <div className={classes.container}>
            {/* <h1 className={classes.login}>Feedback</h1> */}

            <div className={classes.name}>
              {/* <h3 className={classes.emailP}>Your Feedback</h3> */}
              <div>
                <AccountCircleIcon fontSize="large" className={classes.emailicon} />
              </div>
              {/* <input className={classes.input} type="text" /> */}
              <textarea ref={messageInputRef} className={classes.input} cols="30" rows="10"></textarea>
            </div>

            <p className={classes.forgetPassword}><Link href="/contact-us">any query ?</Link></p>

            <div>
              {send?
              <button disabled onClick={handlerButton} className={classes.button}>
                Please wait..
              </button>:<button onClick={handlerButton} className={classes.button}>
                Send FeedBack
              </button>
            }
            </div>
          </div> 
          : null
      }
    </>
  );
}
