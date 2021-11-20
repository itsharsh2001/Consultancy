import classes from "./DocumentsRequired.module.css"
import Documents from "./ui/documents.js"

export default function DocumentsRequired() {
    return (
        <div>
            <h2 className={classes.p}>Documents required for conversion from proprietorship to LLP</h2>
        <div className={classes.documents}>
            <Documents image="Fintaximages/Documents/im1.png" text="Passport Size Photograph"/>
            <Documents image="Fintaximages/Documents/im2.png" text="Copy of PAN Card"/>
            <Documents image="Fintaximages/Documents/im3.png" text="Partners Address Proof"/>
            <Documents image="Fintaximages/Documents/im4.png" text="Business Address Proof"/>
            <Documents image="Fintaximages/Documents/im5.png" text="NOC from owner"/>
            <Documents image="Fintaximages/Documents/im6.png" text="Rent Agreement"/>
            <Documents image="Fintaximages/Documents/im7.png" text="NRI/ Foreign National"/>
        </div>
        </div>
    )
}
