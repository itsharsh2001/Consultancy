import classes from "./DocumentsRequired.module.css"
import Documents from "./ui/documents.js"

export default function DocumentsRequired() {
    return (
        <div>
            <h2 className={classes.p}>Documents required for formation of a Partnership Firm</h2>
        <div className={classes.documents}>
            <Documents image="/Fintaximages/Documents/im1.png" text="Copy of PAN Card"/>
            <Documents image="/Fintaximages/Documents/im2.png" text="Partner's Address Proof"/>
            <Documents image="/Fintaximages/Documents/im3.png" text="Business Address Proof"/>
            <Documents image="/Fintaximages/Documents/im4.png" text="Copy of Rent Agreement"/>
        </div>
        </div>
    )
}
