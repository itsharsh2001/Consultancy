import classes from "./DocumentsRequired.module.css";
import Documents from "./ui/documents.js";

export default function DocumentsRequired() {
  return (
    <div>
      <h2 className={classes.p}>Documents for E-Way Bill</h2>
      <div className={classes.documents}>
        <Documents
          image="Fintaximages/Documents/im1.png"
          text="TAN"
        />
        <Documents
          image="Fintaximages/Documents/im2.png"
          text="Tax Paid Receipt"
        />
        <Documents
          image="Fintaximages/Documents/im3.png"
          text="Details of tax deducted"
        />
        <Documents
          image="Fintaximages/Documents/im4.png"
          text="Details of Supplies"
        />
      </div>
    </div>
  );
}
