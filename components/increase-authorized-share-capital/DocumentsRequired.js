import classes from "./DocumentsRequired.module.css";
import Documents from "./ui/documents.js";

export default function DocumentsRequired() {
  return (
    <div>
      <h2 className={classes.p}>Documents for Changing Partnership Deed</h2>
      <div className={classes.documents}>
        <Documents
          image="Fintaximages/Documents/im1.png"
          text="MOA & AOA"
        />
        <Documents
          image="Fintaximages/Documents/im2.png"
          text="Digital Signature Certificate"
        />
        <Documents
          image="Fintaximages/Documents/im3.png"
          text="COI"
        />
        <Documents
          image="Fintaximages/Documents/im4.png"
          text="PAN Card"
        />
      </div>
    </div>
  );
}
