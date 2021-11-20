import classes from "./DocumentsRequired.module.css"
import Documents from "./ui/documents.js"

export default function DocumentsRequired() {
    return (
        <div>
            <h2 className={classes.p}>Documents required changing company address</h2>
        <div className={classes.documents}>
            <Documents image="Fintaximages/Documents/im1.png" text="Business Address Proof"/>
            <Documents image="Fintaximages/Documents/im2.png" text="Digital Signature Certificate"/>
            <Documents image="Fintaximages/Documents/im3.png" text="NOC from owner"/>

            <Documents image="Fintaximages/Documents/im4.png" text="Rent Agreement"/>
        </div>
        </div>
    )
}
