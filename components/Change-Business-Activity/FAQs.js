import classes from './FAQs.module.css'
import FAQ from './ui/FAQ.js'

export default function FAQs() {

    return (
        <div className={classes.body}>
            <div className={classes.container}>
                <hr />
                <h2 className={classes.containerh2}>FAQ</h2>
                <hr />
            </div>
            <FAQ heading="When is the application to MCA made?
        " para="An application to replace commercial enterprise activity is filed inside 30 days of acquiring the consent of shareholders (i.e. General Meeting). It needs to be stated that the approval is received earlier than indulging in activities." />

            <FAQ heading="Whether alternate of enterprise activity calls for alteration in MOA?
" para="Yes, the object clause is a part of the Memorandum which has to be altered to offer the impact of the change of enterprise objective. The stated altered MOA shall additionally be filed with ROC at the same time as making an application. Where the Registrar deems appropriate, he may also ask for the adoption of latest set of Memorandum and Articles consistent with Companies Act, 2013."/>

            <FAQ heading="Whether the method of the change of item and change of name may be carried on simultaneously?"

                para="If the change of name of the business enterprise is made because of a change in the main object of the business enterprise, both the methods may be carried on simultaneously. However, because the approval of the authorities is involved, the period can vary primarily based totally at the reaction and time taken by ROC."/>

            <FAQ heading="Whether the change the name of the organization is needed while change of Object?" para="The alternate in name of the organization isn't always important in each case. However, wherein the present name of the organization fails to reflect the new activities or any relations thereto, the registrar might also additionally direct to alternate the name of the organization accordingly."/>

            <FAQ heading="When should be kept in mind at the same time as converting item?" para="One needs to ensure that the brand new object additionally covers all of the ancillary activities to the principle object. Also, the name need to represent the object effectively even after the alternate of the object, else the ROC can also additionally direct name alternate."/>

            <FAQ heading="When will the alternate of object be in effect? 
" para="It may be effective only after receipt of approval by the ROC for the application made. Only after approval, the organization can also additionally keep on up to date activities."/>
        </div>
    )
}
