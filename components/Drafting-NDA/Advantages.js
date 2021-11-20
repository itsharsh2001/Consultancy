import classes from '../Change-Registered-Office/FAQs.module.css'
import FAQ from '../Change-Registered-Office/ui/FAQ.js'

export default function FAQs() {

    return (
        <div className={classes.body}>
            <div className={classes.container}>
                <hr />
                <h2 className={classes.containerh2}>Advantages of NDA</h2>
                <hr />
            </div>
            <FAQ heading="Protection of touchy information" para="An NDA protects touchy data of the events executing it. A enterprise dropping its exchange secret to a competitor can reason brilliant injury to the business. "/>

            <FAQ heading="Secures patent rights for new inventions
" para="A well-drafted confidentiality settlement can impenetrable the personal statistics which may also consist of the patentable notion of the invention of the inventor. "/>

            <FAQ heading="Defines Confidential information"
            para="A Non-Disclosure Agreement defines private statistics that helps events to apprehend as to what data shall be regarded confidential.."/>

            <FAQ heading="Dispute resolution" para="A confidentiality and non-disclosure settlement may additionally encompass a clause referring to the decision of disputes."/>
        </div>
    )
}
