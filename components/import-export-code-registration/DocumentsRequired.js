import classes from "./DocumentsRequired.module.css";
import Documents from "./ui/documents.js";

export default function DocumentsRequired() {
  return (
    <div>
      <h2 className={classes.p}>Documents for Import Export Code Registration</h2>
      <div className={classes.documents}>
        <Documents
          image="Fintaximages/Documents/im1.png"
          text="Cancelled Cheque"
        />
        <Documents
          image="Fintaximages/Documents/im2.png"
          text="PAN Card"
        />
        <Documents
          image="Fintaximages/Documents/im3.png"
          text="Director/Partner PAN card"
        />
        <Documents
          image="Fintaximages/Documents/im4.png"
          text="Address Proof"
        />
        <Documents
          image="Fintaximages/Documents/im5.png"
          text="Certificate of Registration"
        />
      </div>
    </div>
  );
}
