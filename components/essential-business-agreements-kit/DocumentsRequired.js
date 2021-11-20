import classes from "./DocumentsRequired.module.css";
import Documents from "./ui/documents.js";

export default function DocumentsRequired() {
  return (
    <div>
      <h2 className={classes.p}>Documents for E-Way Bill</h2>
      <div className={classes.documents}>
        <Documents
          image="https://www.onlinelegalindia.com/services/private-company-registration/image/Passport_Size_Photo.png"
          text="TAN"
        />
        <Documents
          image="https://www.onlinelegalindia.com/services/private-company-registration/image/Pan_Card.png"
          text="Tax Paid Receipt"
        />
        <Documents
          image="https://www.onlinelegalindia.com/services/private-company-registration/image/Electricity_Bill.png"
          text="Details of tax deducted"
        />
        <Documents
          image="https://www.onlinelegalindia.com/services/private-company-registration/image/address_proof.png"
          text="Details of Supplies"
        />
      </div>
    </div>
  );
}
