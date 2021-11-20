import classes from "./DocumentsRequired.module.css"
import Documents from "./ui/documents.js"

export default function DocumentsRequired() {
    return (
        <div>
            <h2 className={classes.p}>Documents for Private Limited to LLP Conversion</h2>
        <div className={classes.documents}>
            <Documents image="Fintaximages/Documents/im1.png" text="Creditor’s approval "/>
            <Documents image="Fintaximages/Documents/im2.png" text="Clearance from tax authorities "/>
            <Documents image="Fintaximages/Documents/im3.png" text="Financial Statements "/>
            <Documents image="Fintaximages/Documents/im4.png" text="Pvt. Ltd. Enterprise Docs"/>
            <Documents image="Fintaximages/Documents/im5.png" text="Digital signature "/>
            <Documents image="Fintaximages/Documents/im6.png" text="No Objection Certificate"/>
    
        </div>
        </div>
    )
}
