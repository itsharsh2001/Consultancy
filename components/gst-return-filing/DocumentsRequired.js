import classes from "./DocumentsRequired.module.css";
import Documents from "./ui/documents.js";

export default function DocumentsRequired() {
  return (
    <div>
      <h2 className={classes.p}>Documents for GST Return Filing</h2>
      <div className={classes.documents}>
        <Documents
          image="Fintaximages/Documents/im1.png"
          text="Digital Signature"
        />
        <Documents
          image="Fintaximages/Documents/im2.png"
          text="Certificate"
        />
        <Documents
          image="Fintaximages/Documents/im3.png"
          text="Log-in credentials"
        />
        <Documents
          image="Fintaximages/Documents/im4.png"
          text="Details of Supplies"
        />
      </div>
    </div>
  );
}
