import classes from "./DocumentsRequired.module.css"
import Documents from "./ui/documents.js"

export default function DocumentsRequired() {
    return (
        <div>
            <h2 className={classes.p}>Documents for Private Limited Company Registration</h2>
        <div className={classes.documents}>
            <Documents image="Fintaximages/Documents/im1.png" text="Incorporation Documents"/>
            <Documents image="Fintaximages/Documents/im2.png" text="Pan Card"/>
            <Documents image="Fintaximages/Documents/im3.png" text="Bank Statement"/>
            <Documents image="Fintaximages/Documents/im4.png" text="Bank Statement of Partners"/>
            <Documents image="Fintaximages/Documents/im5.png" text="	Preliminary expense"/>
            <Documents image="Fintaximages/Documents/im6.png" text="Registration Certificates"/>
            <Documents image="Fintaximages/Documents/im7.png" text="Invoices and Bills"/>
            <Documents image="Fintaximages/Documents/im8.png" text="Details of Assets"/>
            <Documents image="Fintaximages/Documents/im3.png" text="Details of Cash transactions"/>
        </div>
        </div>
    )
}
