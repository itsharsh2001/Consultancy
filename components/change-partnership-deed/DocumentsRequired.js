import classes from "./DocumentsRequired.module.css";
import Documents from "./ui/documents.js";

export default function DocumentsRequired() {
  return (
    <div>
      <h2 className={classes.p}>Documents for Changing Partnership Deed</h2>
      <div className={classes.documents}>
        <Documents
          image="Fintaximages/Documents/im1.png"
          text="PAN Card"
        />
        <Documents
          image="Fintaximages/Documents/im2.png"
          text="Partnership Deed "
        />
        <Documents
          image="Fintaximages/Documents/im3.png"
          text="Proof from new partner"
        />
      </div>
    </div>
  );
}
