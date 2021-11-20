import classes from './FAQs.module.css'
import FAQ from './ui/FAQ.js'

export default function FAQs() {

        const faq1 = <div>
            To impact the change in name, the corporation has to acquire following consent or approval:
            <li>Consent from Board </li>
            <li>Consent from the participants of the corporation </li>
            <li>Approval from involved ROC</li>
            <li>Approval from Central Government</li>
        </div>

    return (
        <div className={classes.body}>
            <div className={classes.container}>
                <hr />
                <h2 className={classes.containerh2}>FAQ</h2>
                <hr />
            </div>
            <FAQ heading="How to order new name for organization?
        " para="Ministry has introduced a web form “RUN” (Reserve Unique Name) for reservation of recent call of present companies. The organization can follow with 2 exceptional names with its significance. The names need to be precise and according with the provisions." />

            <FAQ heading="Whether MOA & AOA is needed to be altered?
" para="Yes, MOA and AOA each need to be altered with the brand new name. The replica of the proposed alteration is filed in INC – 24."/>

            <FAQ heading="Which approvals are required for corporation name change?"
                para={faq1}/>

            <FAQ heading="Is there any restrict alternate limited company name?" para="There is no restrict provided for the name alternate of a private limited company, which can be the case for a Public company. The names selected for application need to be in conformity with the regulations prescribed."/>

            <FAQ heading="Whether alternate of object may be processed simultaneously?" para="If the name change is made because of alternate in the fundamental object, both the strategies may be carried on simultaneously. As the approval of the Government is involved, the duration can vary based at the reaction and time taken with the aid of using ROC."/>

            <FAQ heading="Do I need to show the old name with the brand new name of the company?
" para="Yes. For a period of years from change, anywhere the company’s name is displayed, the preceding name should additionally be displayed."/>

            <FAQ heading="When should the application for PAN change be made?" para="Company’s new name may be up to date in PAN or some other registration after fresh Certificate of Incorporation is issued. Application to change PAN is covered in the package."/>

            <FAQ heading="What may be the impact of converting company call? " para="After the change of name, the company has to replace its name with all of the ministries it is registered with. All the stationeries i.e. Business cards, letterheads, show board, etc. ought to be up to date with a brand new name. An essential change is ratification of contracts entered in the preceding name. The parties to settlement ought to ratify said contracts after adopting a brand new name."/>

            <FAQ heading="Whether MOA & AOA is needed to be altered?" para="Yes, MOA and AOA, each ought to be altered with the brand new name. The replica of the proposed alteration is filed in INC – 24."/>
        </div>
    )
}
