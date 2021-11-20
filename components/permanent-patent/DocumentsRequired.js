import classes from "./DocumentsRequired.module.css"
import Documents from "./ui/documents.js"

export default function DocumentsRequired() {
    return (
        <div>
            <h2 className={classes.p}>Documents for Permanent Patent Registration</h2>
        <div className={classes.documents}>
            <Documents image="/Fintaximages/Documents/im1.png" text="Title of the invention"/>
            <Documents image="/Fintaximages/Documents/im2.png" text="Applicants Information"/>
            <Documents image="/Fintaximages/Documents/im3.png" text="Description of the Invention"/>
            <Documents image="/Fintaximages/Documents/im4.png" text="Technical Components"/>
            <Documents image="/Fintaximages/Documents/im5.png" text="DSC of Applicant"/>
            <Documents image="/Fintaximages/Documents/im6.png" text="SME or StartUp India(If any)"/>
        </div>
        </div>
    )
}
