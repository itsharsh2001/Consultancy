import classes from "./DocumentsRequired.module.css"
import Documents from "./ui/documents.js"

export default function DocumentsRequired() {
    return (
        <div>
            <h2 className={classes.p}>Documents for required for strike-off of company</h2>
        <div className={classes.documents}>
        <Documents image="Fintaximages/Documents/im1.png" text="Accounting Information"/>
            <Documents image="Fintaximages/Documents/im2.png" text="Incorporation Documents"/>
            <Documents image="Fintaximages/Documents/im3.png" text="Legal Liabilities"/>
            <Documents image="Fintaximages/Documents/im4.png" text="Details of Activity"/>
            <Documents image="Fintaximages/Documents/im5.png" text="NOC from Creditors"/>
            <Documents image="Fintaximages/Documents/im6.png" text="NOC from Regulatory Bodies"/>
        </div>
        </div>
    )
}
