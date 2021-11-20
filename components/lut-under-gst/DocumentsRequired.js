import classes from "./DocumentsRequired.module.css";
import Documents from "./ui/documents.js";

export default function DocumentsRequired() {
  return (
    <div>
      <h2 className={classes.p}>Documents for LUT under GST Registration</h2>
      <div className={classes.documents}>
        <Documents
          image="Fintaximages/Documents/im1.png"
          text="Entity’s PAN Card"
        />
        <Documents
          image="Fintaximages/Documents/im2.png"
          text="KYC of Authorized Signatory"
        />
        <Documents
          image="Fintaximages/Documents/im3.png"
          text="Witnesses"
        />
        <Documents
          image="Fintaximages/Documents/im4.png"
          text="GST Registration"
        />
        <Documents
          image="Fintaximages/Documents/im5.png"
          text="IEC Certificate"
        />
        <Documents
          image="Fintaximages/Documents/im6.png"
          text="Cancelled cheque"
        />
      </div>
    </div>
  );
}
