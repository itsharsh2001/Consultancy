import classes from './FAQs.module.css'
import FAQ from './ui/FAQ.js'

export default function FAQs() {

    const faq1 = <div>
        The fundamental process for registering a Private Limited Company
        in India is as per the following:
        <li>Get Digital Signature Certificate (DSC)</li>
        <li>Self-Attest the Documents for Private Limited Company Registration
            including AoA, MoA and service bills. </li>
        <li>Record with structure INC-32, this structure has illustrated for
            smoothing out many cycles including getting DIN, Name Reservation,
            Incorporation, PAN application, TAN number.</li>
    </div>

    const faq2 = <div>
        After the registration of the company, the following should be
        fulfilled:
        <li>Current account be opened inside 30 days of PAN enrollment.</li>
        <li>Appoint a Statutory Auditor</li>
        <li>The settled up capital should be deposited which was referenced
            while registration</li>
        <li>Issue and assign shares</li>
    </div>

    return (
        <div className={classes.body}>
            <div className={classes.container}>
                <hr />
                <h2 className={classes.containerh2}>FAQ</h2>
                <hr />
            </div>
            <FAQ heading="Whether the Annual Filing is critical for all companies?
        " para="Yes, RoC compliance for Private Limited Companies are vital for each registered company. Irrespective of the whole turnover or the capital amount, the enterprise have to comply with the annual compliance requirement. The annual compliance is due after the AGM of the employer in view that its first economic year." />
            <FAQ heading="What is the penalty for non-compliance of annual submitting of Private Limited Company?
" para="Since July 2018, agencies failing to observe the statutory compliance for Private Limited will be charged ₹100 for every day of a extend until the proper date of filing. There is no ceiling restrict to an extra fee. For non-stop failure, penalty aside from the extra Government rate can be levied on each – employer and directors, which includes the imprisonment."/>
            <FAQ heading="Whether the audited monetary announcement is obligatory annual submitting for Private Companies?"
                para="Audited economic statements are fundamental for each corporation considering its incorporation. The organisation should file the audited statements only. Also, non-audit of monetary declaration is now not an excuse to extend the annual filing."/>
            <FAQ heading="Is appointment of statutory auditor falls underneath annual compliance ?" para="A organisation can choose to appoint a statutory auditor both for a duration of 5 consecutive years or until the conclusion of subsequent AGM. Therefore, an appointment of the statutory auditor can't be viewed as a phase of annual compliance."/>
            <FAQ heading="In case of no operations in the employer , do administrators require to signal administrators document ?" para="As per Companies Act, 2013 it is obligatory to publish the signed Director Report for each and every economic yr with MCA with the aid of submitting an Annual return of the company. The Director Report is viewed as an attachment for the shape MGT-7."/>
        </div>
    )
}
