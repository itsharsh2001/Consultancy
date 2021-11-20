import classes from "./Orders.module.css";
import { useState, useEffect } from 'react'

export default function Orders() {

  const [order, setOrder] = useState(false);
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch('/api/admin-panel/orders').then((response) => response.json()).then((data) => {
      setOrder(data.message);
      setData(data.orderData);
    })
  }, data)
  

  return (
    <>


      {
        !order ?
          <div>
            <h3>Orders</h3>
            <span className={classes.bigcard}>
              <div className={classes.left}>
                There are no order subscriptions
              </div>
            </span>
          </div> : null
      }

      {
        order ?
          <div>
            {
              data.map((i) => (
                <div className={classes.yellowcontainer}>
                  <span>
                    <p>Plane Name:- </p>
                    <p>{i.planName} -- {i.paid}</p>
                  </span>
                  <span>
                    <p>Service:- </p>
                    <p>{i.topic}</p>
                  </span>
                  <span>
                    <p>Order Id:- </p>
                    <p>{i.orderIdNumber}</p>
                  </span>
                </div>

              ))

            }
          </div>
          : null
      }
    </>
  );
}
