import classes from "./DocumentsRequired.module.css";
import Documents from "./ui/documents.js";

export default function DocumentsRequired() {
  return (
    <div>
      <h2 className={classes.p}>Documents for ITR Return Filing</h2>
      <div className={classes.documents}>
        <Documents
          image="Fintaximages/Documents/im1.png"
          text="PAN Card"
        />
        <Documents
          image="Fintaximages/Documents/im2.png"
          text="Entities PAN Card"
        />
        <Documents
          image="Fintaximages/Documents/im3.png"
          text="AADHAR Card"
        />
        <Documents
          image="Fintaximages/Documents/im4.png"
          text="Cancelled Cheque"
        />
        <Documents
          image="Fintaximages/Documents/im5.png"
          text="Bank Account Statement"
        />
        <Documents
          image="Fintaximages/Documents/im6.png"
          text="Financial Statements"
        />
        <Documents
          image="Fintaximages/Documents/im7.png"
          text="Investment/ costs u/s 80"
        />
        <Documents
          image="Fintaximages/Documents/im8.png"
          text="Form 16"
        />
      </div>
    </div>
  );
}
