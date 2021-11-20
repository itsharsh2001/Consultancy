import classes from "./LegalForms.module.css";
import {useState, useEffect} from 'react';

export default function LegalForms() {

  const [update,setUpdate] = useState('');
  const [legalForms,setLegalForms] = useState(false);


  
  useEffect(()=>{
      fetch('/api/admin-panel/legal-forms').then((response)=>response.json()).then((data)=>{
        setUpdate(data.update)
        setLegalForms(data.message)
      })
    })


  return (
      <>
    <h3>Legal Forms</h3>
    <span className={classes.bigcard}>
      <div className={classes.left}>
        {
          legalForms?update:"You have no legal forms now"
        }
      </div>
    </span>
    </>
  );
}
