import classes from "./DocumentsRequired.module.css"
import Documents from "./ui/documents.js"

export default function DocumentsRequired() {
    return (
        <div>
            <h2 className={classes.p}>Documents for Section 8 Company Registration</h2>
        <div className={classes.documents}>
            <Documents image="/Fintaximages/Documents/im1.png" text="Copy of PAN Card"/>
            <Documents image="/Fintaximages/Documents/im2.png" text="Copy of Aadhar Card"/>
            <Documents image="/Fintaximages/Documents/im3.png" text="Bank Details"/>
        </div>
        </div>
    )
}
