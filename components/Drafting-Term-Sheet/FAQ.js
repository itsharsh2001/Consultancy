import classes from '../Change-Registered-Office/FAQs.module.css'
import FAQ from '../Change-Registered-Office/ui/FAQ.js'

export default function FAQs() {

    return (
        <div className={classes.body}>
            <div className={classes.container}>
                <hr />
                <h2 className={classes.containerh2}>FAQ</h2>
                <hr />
            </div>
            <FAQ heading="Why are time period sheets important?" para="A time period sheet is an integral record by using the entrepreneurs to appeal to traders as it works a base for the remaining agreement, decreasing the opportunity of misunderstandings and disagreements in the future."/>

            <FAQ heading="What can be protected in a time period sheet?
" para="A time period sheet consists of the phrases and prerequisites for financing a startup. It consists of important points related to the company’s valuation, quantity of investment, the proportion stake sought by means of the investors, the investor’s exit rights, anti-dilution provisions, and different necessary provisions associated to the funding."/>

            <FAQ heading="Is a Term Sheet legally enforceable?"
            para="Term sheets are usually non- binding in nature however can be made binding if it has clear and particular phrases and is accomplished on stamp paper."/>
        </div>
    )
}
