import classes from "./DocumentsRequired.module.css"
import Documents from "./ui/documents.js"

export default function DocumentsRequired() {
    return (
        <div>
            <h2 className={classes.p}>Documents for Private Limited Company Registration</h2>
        <div className={classes.documents}>
            <Documents image="https://www.onlinelegalindia.com/services/private-company-registration/image/Passport_Size_Photo.png" text="Photograph of the registered office"/>
            <Documents image="https://www.onlinelegalindia.com/services/private-company-registration/image/Pan_Card.png" text="Photograph of internal the office"/>
            <Documents image="https://www.onlinelegalindia.com/services/private-company-registration/image/Electricity_Bill.png" text="verified Email Id"/>
            <Documents image="https://www.onlinelegalindia.com/services/private-company-registration/image/rent_agreement.png" text="Latitude and longitude of the registered office"/>
            <Documents image="https://www.onlinelegalindia.com/services/private-company-registration/image/adhar_card.png" text="	Statutory Auditor"/>
            <Documents image="https://www.onlinelegalindia.com/services/private-company-registration/image/address_proof.png" text="Annual compliance forms"/>
            <Documents image="https://www.onlinelegalindia.com/services/private-company-registration/image/address_proof.png" text="DSC & Other details"/>
            <Documents image="https://www.onlinelegalindia.com/services/private-company-registration/image/address_proof.png" text="Residential Status"/>
        </div>
        </div>
    )
}
