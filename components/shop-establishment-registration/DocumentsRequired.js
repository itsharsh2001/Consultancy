import classes from "./DocumentsRequired.module.css";
import Documents from "./ui/documents.js";

export default function DocumentsRequired() {
  return (
    <div>
      <h2 className={classes.p}>
        Documents for Shop & Establishment Registration
      </h2>
      <div className={classes.documents}>
        <Documents
          image="Fintaximages/Documents/im1.png"
          text="PAN CARD"
        />
        <Documents
          image="Fintaximages/Documents/im2.png"
          text="Address Proof"
        />
        <Documents
          image="Fintaximages/Documents/im3.png"
          text="Proof of Establishment"
        />
        <Documents
          image="Fintaximages/Documents/im4.png"
          text="Incorporation Documents"
        />
        <Documents
          image="Fintaximages/Documents/im5.png"
          text="Passport Size Photograph"
        />
      </div>
    </div>
  );
}
