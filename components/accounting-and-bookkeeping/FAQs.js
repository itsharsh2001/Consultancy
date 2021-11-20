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
            <FAQ heading="Why does your enterprise want a bookkeeper?" para="Availing a straightforward bookkeeping carrier (offline or online) for any enterprise ensures a well-run accounting gadget which helps you to manipulate your business."/>

            <FAQ heading="Why your enterprises need to outsource the choice of bookkeeping?" para="Many commercial enterprise proprietors do no longer have the knowledge, time or capability to precisely operate their bookkeeping duties. Online accounting offerings will grant you the time required to focal point on your corporations operations
            "/>
            
            <FAQ heading="Whether small commercial enterprise accounting be accomplished in-house?" para="Keeping in-house accounting and bookkeeping offerings would demand each from the proprietors – time and efforts. Hence, as an alternative than focusing on such administrative task, it is really useful to center of attention on the boom of the business. Also, the in-house accountant would fee appreciably greater as in contrast to the rate of getting accounting programs for bookkeeping"/>

            <FAQ heading="What will you get if you choose for Fintax.com on line bookkeeping services?" para="Fintax.com offers quarterly offerings the place the accounting is executed via the professionals in the field. You get trial balance, income and loss statements, stability sheet and debts tender reproduction as a deliverable after opting for our bookkeeping services.."/>

            <FAQ heading="What different associated offerings can I avail alongside with the bookkeeping?" para="You can additionally decide for GST Return Filing, TDS Return Filing, Annual Compliance Services for Companies and LLPs, Income Tax Return (ITR) Filing alongside with accounting and bookkeeping services."/>

        </div>
    )
}
