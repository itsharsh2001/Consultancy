import classes from "./DocumentsRequired.module.css"
import Documents from "./ui/documents.js"

export default function DocumentsRequired() {
    return (
        <div>
            <h2 className={classes.p}>Documents for LLP Registration</h2>
        <div className={classes.documents}>
            <Documents image="https://www.onlinelegalindia.com/services/private-company-registration/image/Passport_Size_Photo.png" text="Passport Size Photograph"/>
            <Documents image="https://www.onlinelegalindia.com/services/private-company-registration/image/Pan_Card.png" text="Copy of PAN Card"/>
            <Documents image="https://www.onlinelegalindia.com/services/private-company-registration/image/Electricity_Bill.png" text="Partner’s  Address Proof"/>
            <Documents image="https://www.onlinelegalindia.com/services/private-company-registration/image/rent_agreement.png" text="Nationality Proof(If Foreign)"/>
            <Documents image="https://www.onlinelegalindia.com/services/private-company-registration/image/adhar_card.png" text="Business Address Proof"/>
            <Documents image="https://www.onlinelegalindia.com/services/private-company-registration/image/address_proof.png" text="Your Address Proof"/>
            <Documents image="https://www.onlinelegalindia.com/services/private-company-registration/image/rent_agreement.png" text="Copy of Rent Agreement"/>
            <Documents image="https://www.onlinelegalindia.com/services/private-company-registration/image/Landlord_NOC.png" text="No Objection Certificate"/>
        </div>
        </div>
    )
}
