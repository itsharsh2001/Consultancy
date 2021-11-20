import classes from "./DocumentsRequired.module.css"
import Documents from "./ui/documents.js"

export default function DocumentsRequired() {
    return (
        <div>
            <h2 className={classes.p}>Documents for Trademark Assignment</h2>
        <div className={classes.documents}>
            <Documents image="/Fintaximages/Documents/im1.png" text="TM Certificate"/>
            <Documents image="/Fintaximages/Documents/im2.png" text="Details of the Party"/>
            <Documents image="/Fintaximages/Documents/im3.png" text="NOC"/>
        </div>
        </div>
    )
}
