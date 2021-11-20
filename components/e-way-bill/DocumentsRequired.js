import classes from "./DocumentsRequired.module.css";
import Documents from "./ui/documents.js";

export default function DocumentsRequired() {
  return (
    <div>
      <h2 className={classes.p}>Documents for E-Way Bill</h2>
      <div className={classes.documents}>
        <Documents
          image="Fintaximages/Documents/im1.png"
          text="Invoice"
        />
        <Documents
          image="Fintaximages/Documents/im2.png"
          text="Transport with the aid of road"
        />
        <Documents
          image="Fintaximages/Documents/im3.png"
          text="Transport via rail, air, or ship"
        />
      </div>
    </div>
  );
}
