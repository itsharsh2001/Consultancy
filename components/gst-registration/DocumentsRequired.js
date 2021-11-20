import classes from "./DocumentsRequired.module.css";
import Documents from "./ui/documents.js";

export default function DocumentsRequired() {
  return (
    <div>
      <h2 className={classes.p}>Documents for GST Registration</h2>
      <div className={classes.documents}>
        <Documents
          image="Fintaximages/Documents/im1.png"
          text="Passport Size Photograph"
        />
        <Documents
          image="Fintaximages/Documents/im2.png"
          text="Entity’s PAN Card"
        />
        <Documents
          image="Fintaximages/Documents/im3.png"
          text="PAN & Aadhar Card"
        />
        <Documents
          image="Fintaximages/Documents/im4.png"
          text="Digital Signature"
        />
        <Documents
          image="Fintaximages/Documents/im5.png"
          text="Bank details"
        />
        <Documents
          image="Fintaximages/Documents/im6.png"
          text="Business Address Proof"
        />
        <Documents
          image="Fintaximages/Documents/im7.png"
          text="Certification of Registration"
        />
      </div>
    </div>
  );
}
