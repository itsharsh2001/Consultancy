import classes from "./DocumentsRequired.module.css";
import Documents from "./ui/documents.js";

export default function DocumentsRequired() {
  return (
    <div>
      <h2 className={classes.p}>Documents for PAN Application</h2>
      <div className={classes.documents}>
        <Documents
          image="Fintaximages/Documents/im1.png"
          text="Passport Size Photograph"
        />
        <Documents
          image="Fintaximages/Documents/im2.png"
          text="Address Proof"
        />
        <Documents
          image="Fintaximages/Documents/im3.png"
          text="Proof from Parents"
        />
        <Documents
          image="Fintaximages/Documents/im4.png"
          text="Birth Certificate"
        />
        <Documents
          image="Fintaximages/Documents/im5.png"
          text="Agreement"
        />
        <Documents
          image="Fintaximages/Documents/im6.png"
          text="Certificate of Incorporation"
        />
      </div>
    </div>
  );
}
