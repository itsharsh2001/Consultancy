import classes from "./DocumentsRequired.module.css"
import Documents from "./ui/documents.js"

export default function DocumentsRequired() {
    return (
        <div>
            <h2 className={classes.p}>Documents for Proprietorship to OPC Conversion</h2>
        <div className={classes.documents}>
            <Documents image="Fintaximages/Documents/im1.png" text="Passport Size Photograph"/>
            <Documents image="Fintaximages/Documents/im2.png" text="Address Proof"/>
            <Documents image="Fintaximages/Documents/im3.png" text="Identity Proof"/>
            <Documents image="Fintaximages/Documents/im4.png" text="Registered Office Proof"/>
            <Documents image="Fintaximages/Documents/im5.png" text="Consent of Nominee"/>
        
        </div>
        </div>
    )
}
