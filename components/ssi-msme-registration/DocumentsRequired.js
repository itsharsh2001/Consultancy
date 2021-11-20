import classes from "./DocumentsRequired.module.css";
import Documents from "./ui/documents.js";

export default function DocumentsRequired() {
  return (
    <div>
      <h2 className={classes.p}>Documents for SSI MSME Registration</h2>
      <div className={classes.documents}>
        <Documents
          image="Fintaximages/Documents/im1.png"
          text="Aadhar Card"
        />
        <Documents
          image="Fintaximages/Documents/im2.png"
          text="PAN card"
        />
      </div>
    </div>
  );
}
