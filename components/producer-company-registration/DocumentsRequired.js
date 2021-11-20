import classes from "./DocumentsRequired.module.css"
import Documents from "./ui/documents.js"

export default function DocumentsRequired() {
    return (
        <div>
            <h2 className={classes.p}>Documents for Producer Company Registration</h2>
        <div className={classes.documents}>
            <Documents image="/Fintaximages/Documents/im1.png" text="Passport Size Photograph"/>
            <Documents image="/Fintaximages/Documents/im2.png" text="Copy of PAN Card"/>
            <Documents image="/Fintaximages/Documents/im3.png" text="Identity Proof"/>
            
            <Documents image="/Fintaximages/Documents/im4.png" text="Director's Address Proof"/>
            <Documents image="/Fintaximages/Documents/im5.png" text="Business Address Proof"/>
            <Documents image="/Fintaximages/Documents/im6.png" text="Copy of Rent Agreement"/>
            <Documents image="/Fintaximages/Documents/im7.png" text="No Objection Certificate"/>

        </div>
        </div>
    )
}
