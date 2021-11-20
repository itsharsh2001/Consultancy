import classes from "./DocumentsRequired.module.css"
import Documents from "./ui/documents.js"

export default function DocumentsRequired() {
    return (
        <div>
            <h2 className={classes.p}>Documents for Trademark Registration</h2>
        <div className={classes.documents}>
            <Documents image="/Fintaximages/Documents/im1.png" text="Proof of Applicant"/>
            <Documents image="/Fintaximages/Documents/im2.png" text="Brand Name & Logo"/>
            <Documents image="/Fintaximages/Documents/im3.png" text="User Affidavit"/>
            <Documents image="/Fintaximages/Documents/im4.png" text="Proof of TM Use"/>
            <Documents image="/Fintaximages/Documents/im5.png" text="MSME / Start-up Recognition"/>
            <Documents image="/Fintaximages/Documents/im6.png" text="Signed Form TM - 48"/>
        </div>
        </div>
    )
}
