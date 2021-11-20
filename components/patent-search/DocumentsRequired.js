import classes from "./DocumentsRequired.module.css"
import Documents from "./ui/documents.js"

export default function DocumentsRequired() {
    return (
        <div>
            <h2 className={classes.p}>Documents for Patent Search Registration</h2>
        <div className={classes.documents}>
            <Documents image="/Fintaximages/Documents/im1.png" text="Personal Details"/>
            <Documents image="/Fintaximages/Documents/im2.png" text="Details Of The Invention"/>
            <Documents image="/Fintaximages/Documents/im3.png" text="Drawings For Higher Clarity"/>
        </div>
        </div>
    )
}
