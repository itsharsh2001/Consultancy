import classes from "./DocumentsRequired.module.css"
import Documents from "./ui/documents.js"

export default function DocumentsRequired() {
    return (
        <div>
            <h2 className={classes.p}>Documents required changing LLP Agreement</h2>
        <div className={classes.documents}>
            <Documents image="Fintaximages/Documents/im1.png" text="LLP Agreement"/>
            <Documents image="Fintaximages/Documents/im2.png" text="Copy of PAN Card"/>
            <Documents image="Fintaximages/Documents/im3.png" text="Certificate of Incorporation"/>
            <Documents image="Fintaximages/Documents/im4.png" text="Digital Signature Certificate"/>
        </div>
        </div>
    )
}
