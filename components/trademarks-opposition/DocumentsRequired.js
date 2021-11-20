import classes from "./DocumentsRequired.module.css"
import Documents from "./ui/documents.js"

export default function DocumentsRequired() {
    return (
        <div>
            <h2 className={classes.p}>Documents for Trademark Opposition</h2>
        <div className={classes.documents}>
            <Documents image="/Fintaximages/Documents/im1.png" text="Power of Attorney"/>
            <Documents image="/Fintaximages/Documents/im2.png" text="Affidevit"/>
            <Documents image="/Fintaximages/Documents/im3.png" text="Details of Applicant"/>
            <Documents image="/Fintaximages/Documents/im4.png" text="Details of Adversarial Mark"/>
        </div>
        </div>
    )
}
