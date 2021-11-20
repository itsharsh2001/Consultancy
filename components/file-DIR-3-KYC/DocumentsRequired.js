import classes from "./DocumentsRequired.module.css"
import Documents from "./ui/documents.js"

export default function DocumentsRequired() {
    return (
        <div>
            <h2 className={classes.p}>Documents for Private Limited Company Registration</h2>
        <div className={classes.documents}>
            <Documents image="https://www.onlinelegalindia.com/services/private-company-registration/image/Passport_Size_Photo.png" text="Passport Size Photograph"/>
            <Documents image="https://www.onlinelegalindia.com/services/private-company-registration/image/Pan_Card.png" text="Copy of PAN Card"/>
            <Documents image="https://www.onlinelegalindia.com/services/private-company-registration/image/Electricity_Bill.png" text="MobileNo. and Email Id"/>
            <Documents image="https://www.onlinelegalindia.com/services/private-company-registration/image/rent_agreement.png" text="Nationality Proof(If Foreign)"/>
            <Documents image="https://www.onlinelegalindia.com/services/private-company-registration/image/adhar_card.png" text="	Digital Signature Certificate"/>
            <Documents image="https://www.onlinelegalindia.com/services/private-company-registration/image/address_proof.png" text="Address Proof"/>
            <Documents image="https://www.onlinelegalindia.com/services/private-company-registration/image/address_proof.png" text="Details of Citizenship"/>
            <Documents image="https://www.onlinelegalindia.com/services/private-company-registration/image/address_proof.png" text="Residential Status"/>
        </div>
        </div>
    )
}
