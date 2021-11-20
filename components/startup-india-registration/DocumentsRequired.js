import classes from "./DocumentsRequired.module.css";
import Documents from "./ui/documents.js";

export default function DocumentsRequired() {
  return (
    <div>
      <h2 className={classes.p}>Documents for Startup India Registration</h2>
      <div className={classes.documents}>
        <Documents
          image="Fintaximages/Documents/im1.png"
          text="COI"
        />
        <Documents
          image="Fintaximages/Documents/im2.png"
          text="PAN Card"
        />
        <Documents
          image="Fintaximages/Documents/im3.png"
          text="Constitutional documents"
        />
        <Documents
          image="Fintaximages/Documents/im4.png"
          text="Directors, DP's, Members"
        />
        <Documents
          image="Fintaximages/Documents/im5.png"
          text="Social link"
        />
        <Documents
          image="Fintaximages/Documents/im6.png"
          text="Fund related"
        />
        <Documents
          image="Fintaximages/Documents/im7.png"
          text="IPR Registration"
        />
        <Documents
          image="Fintaximages/Documents/im8.png"
          text="Awards/Certificate"
        />
        <Documents
          image="Fintaximages/Documents/im3.png"
          text="Annual Statements/ITR"
        />
      </div>
    </div>
  );
}
