import classes from "./DocumentsRequired.module.css"
import Documents from "./ui/documents.js"

export default function DocumentsRequired() {
    return (
        <div>
            <h2 className={classes.p}>Documents for Dissolving a Partnership Firm</h2>
        <div className={classes.documents}>
            <Documents image="Fintaximages/Documents/im1.png" text="Address Proof of firm"/>
            <Documents image="Fintaximages/Documents/im2.png" text="Accounting Information"/>
            <Documents image="Fintaximages/Documents/im3.png" text="PAN Card"/>
            <Documents image="Fintaximages/Documents/im4.png" text="Legal Liabilities"/>
            <Documents image="Fintaximages/Documents/im5.png" text="List of secured creditors"/>
            <Documents image="Fintaximages/Documents/im6.png" text="Original partnership deed and all its modified versions"/>
            <Documents image="Fintaximages/Documents/im7.png" text="Address Proof of firm"/>
        </div>
        </div>
    )
}
