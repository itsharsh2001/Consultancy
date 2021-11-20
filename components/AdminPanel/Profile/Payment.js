import classes from "./Payment.module.css";
import {useState,useEffect} from 'react'

export default function Payment() {

  

  const [data, setData] = useState([]);
  
  const [order,setOrder] = useState(false);

  useEffect(()=>{
    fetch('/api/admin-panel/payment-history').then((response)=>response.json()).then((data)=>{
      setOrder(data.message);
      setData(data.orderData);
    })
  },data)

  return (
    <>
    { !order?
      <span className={classes.bigcard}>
        <div className={classes.left}>There are no payment history.</div>
      </span>
       :null 
     } 

     {order?
      <span className={`${classes.bigcard} ${classes.responsiveBigCard}`}>
        {/* <div className={classes.left}>There are no payment history.</div> */}
        <ul>
          <section className={classes.section}>
            <li className={classes.heading}>Plane Name</li>
            {
            data.map((i) => (
            <li>{i.topic} --> {i.planName}</li>
            ))
            }
          </section>
          <section  className={classes.section}>
            <li className={classes.heading}>Price</li>
            {
                data.map((i) => (
            <li>{i.paid}</li>
                ))
            }
          </section>
          <section  className={classes.section}>
            <li className={classes.heading}>Status</li>
            {
                data.map((i) => (
            <li>{i.status}</li>
                ))
              }
          </section>
        </ul>
      </span>:null
}

      {/* <div className={classes.yellowcontainer}>
        <span>
          <p>Plane Name:-</p>
          <p></p>
        </span>
        <span>
          <p>Plan Price:-</p>
          <p></p>
        </span>
        <span>
          <p>Topic:-</p>
          <p></p>
        </span>
      </div> */}
    </>
  );
}
