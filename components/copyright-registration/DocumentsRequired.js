import classes from "./DocumentsRequired.module.css"
import Documents from "./ui/documents.js"

export default function DocumentsRequired() {
    return (
        <div>
            <h2 className={classes.p}>Documents for Copyright Registration</h2>
        <div className={classes.documents}>
            <Documents image="/Fintaximages/Documents/im1.png" text="Nature of Interest"/>
            <Documents image="/Fintaximages/Documents/im2.png" text="Applicants Information"/>
            <Documents image="/Fintaximages/Documents/im3.png" text="Details about the Work"/>
            <Documents image="/Fintaximages/Documents/im4.png" text="Date of Publication"/>
        </div>
        </div>
    )
}
