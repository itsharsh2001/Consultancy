import classes from '../Change-Registered-Office/FAQs.module.css'
import FAQ from '../Change-Registered-Office/ui/FAQ.js'

export default function FAQs() {

    return (
        <div className={classes.body}>
            <div className={classes.container}>
                <hr />
                <h2 className={classes.containerh2}>Advantages of Term Sheet</h2>
                <hr />
            </div>
            <FAQ heading="Non- binding" para="Mostly, time period sheet settlement is non- binding in nature barring for the confidentiality clause. Through the time period sheet an investee can exhibit their seriousness about the transaction except being legally certain or risking whatever too soon"/>

            <FAQ heading="Reduces the possibilities of dispute
" para="A time period sheet consists of the proposed phrases and stipulations and consequently offers each the events a honest thinking of the future transaction"/>

            <FAQ heading="Inherent Moral Obligation"
            para="Even if the time period sheet does now not include any binding obligations, basically signing a time period sheet can motive each investor and investee to be greater dedicated toward the transaction as the report morally bounds them."/>

            <FAQ heading="Provides clarity" para="A time period sheet works as a concept as it outlines the phrases and stipulations to be laid down in element in the definitive agreements."/>

            <FAQ heading="When should the ROC be informed about the change in registered workplace?" para="ROC need to be notified of the change in registered workplace by submitting the precise files inside 30 days of a change of premises. If the office is shifted outdoor State, prior approval of ROC and RD need to be obtained."/>
        </div>
    )
}
