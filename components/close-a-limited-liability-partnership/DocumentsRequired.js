import classes from "./DocumentsRequired.module.css"
import Documents from "./ui/documents.js"

export default function DocumentsRequired() {
    return (
        <div>
            <h2 className={classes.p}>Documents required to Close a Limited Liability Partnership</h2>
        <div className={classes.documents}>
            <Documents image="https://www.onlinelegalindia.com/services/private-company-registration/image/Passport_Size_Photo.png" text="LLP Agreement with any of its modifications"/>
            <Documents image="https://www.onlinelegalindia.com/services/private-company-registration/image/Pan_Card.png" text="PAN Card"/>
            <Documents image="https://www.onlinelegalindia.com/services/private-company-registration/image/Electricity_Bill.png" text="Accounting Information"/>
            <Documents image="https://www.onlinelegalindia.com/services/private-company-registration/image/rent_agreement.png" text="Address Proof of firm"/>
            <Documents image="https://www.onlinelegalindia.com/services/private-company-registration/image/Electricity_Bill.png" text="NOC from Creditors"/>
        </div>
        </div>
    )
}
