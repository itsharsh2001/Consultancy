import classes from './FAQs.module.css'
import FAQ from './ui/FAQ.js'

export default function FAQs() {

    //     const faq1 = <div>
    //         The fundamental process for registering a Private Limited Company 
    //         in India is as per the following:
    //         <li>Get Digital Signature Certificate (DSC)</li>
    //         <li>Self-Attest the Documents for Private Limited Company Registration 
    // including AoA, MoA and service bills. </li>
    //         <li>Record with structure INC-32, this structure has illustrated for 
    // smoothing out many cycles including getting DIN, Name Reservation, 
    // Incorporation, PAN application, TAN number.</li>
    //     </div>

    // const faq2 = <div>
    // After the registration of the company, the following should be 
    // fulfilled:
    // <li>Current account be opened inside 30 days of PAN enrollment.</li>
    // <li>Appoint a Statutory Auditor</li>
    // <li>The settled up capital should be deposited which was referenced 
    // while registration</li>
    // <li>Issue and assign shares</li>
    // </div>

    return (
        <div className={classes.body}>
            <div className={classes.container}>
                <hr />
                <h2 className={classes.containerh2}>FAQ</h2>
                <hr />
            </div>
            <FAQ heading="Can I resign myself from the corporation?
        " para="Yes, a director can voluntarily resign. The notice of resignation need to be served to corporation declaring motive of resignation . Also, the resigning director desires to file a form for intimation to MCA about his resignation from corporation." />

            <FAQ heading="Do I need to use for some other DIN, if I actually have already procured one?
" para="No, you aren't required to acquire some other DIN. It is completely allocated and may be used for a person’s next appointment in any company/LLP."/>

            <FAQ heading="What should I recognize earlier than converting administrators in Private Limited Company?"
                para="While carrying change in the board of administrators, the agency has to attain consent from its Board and members, as required by passing a resolution. Further, the care has to be taken that the variety of administrators does now no longer fall below the statutory limit after elimination or resignation."/>

            <FAQ heading="What ought to I do if range of director(s) in my company is much less than 2/3?" para="If the full number of administrators is much less than the range prescribed, the company shall hire a director(s) in the agency to satisfy the requirement inside 6 months from removal/resignation/dying of the involved director."/>

            <FAQ heading="What are the pre-standards to feature a director in company?" para=" An person to be delivered as a director have to be principal and certified under the Companies Act, 2013. For the appointment, the consent of the contributors is likewise required."/>

            <FAQ heading="What need to I do to take away a Director from a company?
" para="In order to take away a director from a Company, the administrators shall conduct a assembly of participants for his or her consent after serving special observe on this regard. The exiting director ought to accept an possibility to symbolize his grounds."/>

            <FAQ heading="Whether director wishes to subscribe stocks for his appointment?" para="There is no requirement to subscribe the stocks with the aid of using the director. However, if the Articles (AOA) of the corporation prescribes for the sort of subscription, it ought to be fulfilled as a circumstance for his appointment."/>
        </div>
    )
}
