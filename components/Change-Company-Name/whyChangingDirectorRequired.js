import classes from './FAQs.module.css'
import FAQ from './ui/FAQ.js'

export default function FAQs() {

    return (
        <div className={classes.body}>
            <div className={classes.container}>
                <hr />
                <h2 className={classes.containerh2}>Why change company name?</h2>
                <hr />
            </div>
            <FAQ heading="Change in Business Objective
        " para="Change in the name can be required because of change of enterprise objective. The company should follow for a change if the Registrar has directed to do so in such case."/>

            <FAQ heading="Enhance Brand Value (Rebranding) 
" para="Name assumes the brand value of the corporation and aim to enhance the brand value is usually a purpose to alternate the name."/>
            <FAQ heading="Discard limitations assumed by name"
            para="By use of phrases representing geographical place or offerings, the name defines the boundary of operations."/>

            <FAQ heading="Voluntary Change " para="The administrators or the shareholders may voluntarily determine to alternate the commercial enterprise name jointly for any justified reason."/>
        </div>
    )
}
