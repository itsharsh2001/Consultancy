import classes from "./DocumentsRequired.module.css"
import Documents from "./ui/documents.js"

export default function DocumentsRequired() {
    return (
        <div>
            <h2 className={classes.p}>Documents for Professional Tax Registration</h2>
        <div className={classes.documents}>
            <Documents image="Fintaximages/Documents/im1.png" text="Passport Size Photograph"/>
            <Documents image="Fintaximages/Documents/im2.png" text="Identity Proof"/>
            <Documents image="Fintaximages/Documents/im3.png" text="Address Proof"/>
            <Documents image="Fintaximages/Documents/im4.png" text="Incorporation Documents"/>
        </div>
        </div>
    )
}
