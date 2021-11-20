import classes from "./DocumentsRequired.module.css"
import Documents from "./ui/documents.js"

export default function DocumentsRequired() {
    return (
        <div>
            <h2 className={classes.p}>Documents for Indian Subsidiary Registration</h2>
        <div className={classes.documents}>
            <Documents image="/Fintaximages/Documents/im1.png" text="Passport Size Photograph"/>
            <Documents image="/Fintaximages/Documents/im2.png" text="Copy of PAN Card"/>
            <Documents image="/Fintaximages/Documents/im3.png" text="Identity Proof"/>
            <Documents image="/Fintaximages/Documents/im4.png" text="Nationality Proof(If Foreign)"/>
            <Documents image="/Fintaximages/Documents/im5.png" text="Director's Address Proof"/>
            <Documents image="/Fintaximages/Documents/im6.png" text="Business Address Proof"/>
            <Documents image="/Fintaximages/Documents/im7.png" text="Copy of Rent Agreement"/>
            <Documents image="/Fintaximages/Documents/im8.png" text="No Objection Certificate"/>


            <Documents image="/Fintaximages/Documents/im1.png" text="Place Of Busines"/>
            <Documents image="/Fintaximages/Documents/im2.png" text="Prior Registrations"/>
            <Documents image="/Fintaximages/Documents/im3.png" text="Authorized Representatives"/>
            <Documents image="/Fintaximages/Documents/im4.png" text="Constitutional Documents"/>
            <Documents image="/Fintaximages/Documents/im5.png" text="List Of Directors & Secretaries"/>
        </div>
        </div>
    )
}
