import classes from "./AdminPanel.module.css";
import React from "react";
import { useState, useEffect } from "react";
import Orders from "./Orders";
import Documents from "./Documents";
import LegalForms from "./LegalForms";
import FeedBack from "./FeedBack";
import Profile from "./Profile/Profile";

export default function AdminPanel() {


  const [Count,setCount] = useState(0);
  const [documents,setDocument] = useState(0);
  const [message, setMessage] = useState(0);


  useEffect(()=>{
    fetch('/api/admin-panel/open-order').then((response)=>response.json()).then((data)=>{
      setCount(data.openOrder);
    })
  },[Count,documents,message])


  const [isHomePageOfAdminPanel, setIsHomePageOfAdminPanel] = useState(false);
  const [isOrdersOfAdminPanel, setIsOrdersOfAdminPanel] = useState(false);
  const [isDocumentsOfAdminPanel, setIsDocumentsOfAdminPanel] = useState(false);
  const [isLegalFormsOfAdminPanel, setIsLegalFormsOfAdminPanel] =
    useState(false);
  const [isProfileOfAdminPanel, setIsProfileOfAdminPanel] = useState(true);
  const [isFeedBackOfAdminPanel, setIsFeedBackOfAdminPanel] = useState(false);

  const clickHandler1 = () => {
    setIsHomePageOfAdminPanel(true);
    setIsOrdersOfAdminPanel(false);
    setIsDocumentsOfAdminPanel(false);
    setIsLegalFormsOfAdminPanel(false);
    setIsProfileOfAdminPanel(false);
    setIsFeedBackOfAdminPanel(false);
  };

  const clickHandler2 = () => {
    setIsHomePageOfAdminPanel(false);
    setIsOrdersOfAdminPanel(true);
    setIsDocumentsOfAdminPanel(false);
    setIsLegalFormsOfAdminPanel(false);
    setIsProfileOfAdminPanel(false);
    setIsFeedBackOfAdminPanel(false);
  };
  const clickHandler3 = () => {
    setIsHomePageOfAdminPanel(false);
    setIsOrdersOfAdminPanel(false);
    setIsDocumentsOfAdminPanel(true);
    setIsLegalFormsOfAdminPanel(false);
    setIsProfileOfAdminPanel(false);
    setIsFeedBackOfAdminPanel(false);
  };
  const clickHandler4 = () => {
    setIsHomePageOfAdminPanel(false);
    setIsOrdersOfAdminPanel(false);
    setIsDocumentsOfAdminPanel(false);
    setIsLegalFormsOfAdminPanel(true);
    setIsProfileOfAdminPanel(false);
    setIsFeedBackOfAdminPanel(false);
  };
  const clickHandler5 = () => {
    setIsHomePageOfAdminPanel(false);
    setIsOrdersOfAdminPanel(false);
    setIsDocumentsOfAdminPanel(false);
    setIsLegalFormsOfAdminPanel(false);
    setIsProfileOfAdminPanel(true);
    setIsFeedBackOfAdminPanel(false);
  };
  const clickHandler6 = () => {
    setIsHomePageOfAdminPanel(false);
    setIsOrdersOfAdminPanel(false);
    setIsDocumentsOfAdminPanel(false);
    setIsLegalFormsOfAdminPanel(false);
    setIsProfileOfAdminPanel(false);
    setIsFeedBackOfAdminPanel(true);
  };

  return (
    <React.Fragment>
      <div className={classes.container}>
        <ul>
          <span>
          <li className={classes.leftmostli}>
            <a onClick={clickHandler1}>Overview</a>
          </li>
          <li>
            <a onClick={clickHandler2}>Orders</a>
          </li>
          <li>
            <a onClick={clickHandler3}>Documents</a>
          </li>
          </span>
          <span>
          <li>
            <a onClick={clickHandler4}>Forms</a>
          </li>
          <li>
            <a onClick={clickHandler5}>Profile</a>
          </li>
          <li className={classes.rightmostli}>
            <a onClick={clickHandler6}>Feedback</a>
          </li>
          </span>
        </ul>

        {isHomePageOfAdminPanel && <h3>Account Overview</h3>}

        {isHomePageOfAdminPanel && (
          <span className={classes.bigcard}>
            <div className={classes.left}>
              Open Order - {Count}
              <br /> You have {Count} open orders.
            </div>
            <div className={classes.right}>View</div>
          </span>
        )}

        {/* {isHomePageOfAdminPanel && (
          <span className={classes.bigcard}>
            <div className={classes.left}>
              Messages - {message} <br />
              There are {message} new Messages for your Documents.
            </div>
            <div className={classes.right}>View</div>
          </span>
        )} */}
{/* 
        {isHomePageOfAdminPanel && (
          <span className={classes.bigcard}>
            <div className={classes.left}>
              Legal Forms - {documents} <br />
              There are {documents} Legal Forms messeges.
            </div>
            <div className={classes.right}>View</div>
          </span>
        )} */}

        {/* {isHomePageOfAdminPanel && (
          <div className={classes.yellowcontainer}>
            <span>
              <p>My Credit:-</p>
              <p>INR 0</p>
            </span>
            <span>
              <p>My Subscription:-</p>
              <p>View More Subscription</p>
            </span>
          </div>
        )} */}

        {isOrdersOfAdminPanel && <Orders />}
        {isDocumentsOfAdminPanel && <Documents />}
        {isLegalFormsOfAdminPanel && <LegalForms />}
        {isProfileOfAdminPanel && <Profile />}
        {isFeedBackOfAdminPanel && <FeedBack />}
      </div>
    </React.Fragment>
  );
}
