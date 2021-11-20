import classes from "./DocumentsRequired.module.css"
import Documents from "./ui/documents.js"

export default function DocumentsRequired() {
    return (
        <div>
            <h2 className={classes.p}>Documents for Trademark Renewal</h2>
        <div className={classes.documents}>
            <Documents image="/Fintaximages/Documents/im1.png" text="PAN Card"/>
            <Documents image="/Fintaximages/Documents/im2.png" text="TM Certificate"/>
            <Documents image="/Fintaximages/Documents/im3.png" text="Power of Attorney"/>
            <Documents image="/Fintaximages/Documents/im4.png" text="Copy of TM-A"/>
        </div>
        </div>
    )
}
