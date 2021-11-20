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
            <FAQ heading="Whether change in workplace requires alteration of MOA?
        " para="Changing your enterprise address does not require the alteration of MOA, as far as the proposed registered workplace is located in the same State. If the workplace is shifted to different State, situation clause that refers to State ought to be altered."/>

            <FAQ heading="Can a registered workplace be outside India? 
" para="A registered workplace can't be located outside India."/>

            <FAQ heading="What information needs to be maintained on the registered office?"
            para="All books of accounts need to be kept on the registered office of the enterprise. But if they may be kept at another location in India as determined by the Board of Directors, the enterprise need to send a notice in writing to the Registrar of that location, bringing up the full address of the location wherein the books of accounts are kept."/>

            <FAQ heading="Can a registered workplace be a residential property?" para="Yes, there is no compulsion for a registered workplace to be a industrial property. A residential or industrial address may be provided."/>

            <FAQ heading="When should the ROC be informed about the change in registered workplace?" para="ROC need to be notified of the change in registered workplace by submitting the precise files inside 30 days of a change of premises. If the office is shifted outdoor State, prior approval of ROC and RD need to be obtained."/>
        </div>
    )
}
