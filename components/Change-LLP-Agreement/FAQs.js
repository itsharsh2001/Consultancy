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
            <FAQ heading="What is the amount of stamp duty payable?
        " para="The amount of stamp duty will be payable primarily based totally at the capital contribution involved in the change of LLP Agreement. The rates of stamp duty range from state to state. Where the change of Agreement does now no longer contain capital contribution, the Supplementary Deed to LLP Agreement will be finished on charge of Rs 100/- towards stamp responsibility (included in package deal cost). The stamp duty further to Rs 100/- is payable separately." />

            <FAQ heading="Whether notary is needed on supplementary deed? 
" para="A requirement of a notary is led via way of means of the involved State of LLP. Although it isn't always required for all States, for States along with UP or Delhi notarization is mandatory."/>

            <FAQ heading="Do I see the amended LLP settlement on portal?"
                para="No, LLP Agreement isn't a public document and consequently it isn't accessible through portal. However, change of capital and name is contemplated on portal."/>

            <FAQ heading="How can I alternate the name of Limited Liability Partnership ?" para="The Name Change of LLP may be effective with the aid of using executing a supplementary agreement. First, an application for reservation of name will be filed, which will be accompanied with the aid of using a process to alternate Limited Liability Partnership agreement."/>

            <FAQ heading="How is the supplementary settlement executed? " para="Once the deed is prepared via way of means of the specialists and showed by the companions, suitable stamp duty ought to be paid at the settlement. Further, all of the companions and designated companions ought to put their signature reflecting their acclaim for the change. A deed need to be notarized if required."/>

            <FAQ heading="When is the supplementary deed required to be filed?
" para="Once the deed is finished via way of means of the partners, it needs to be filed with MCA for its approval. It is filed inside 30 days of execution or the effective date, whichever comes earlier."/>

            <FAQ heading="When will the modifications in LLP Agreement be effective?" para="The modifications in LLP Agreement will be effective since the date of execution or effective date, but only after receipt of approval from Registrar for the application made in concerned form."/>

            <FAQ heading="How can I alternate my Business Activities through LLP Agreement?" para="Where the alternate of enterprise activity arises, consent of Partners through passing resolutions could be required which will be accompanied via way of means of moving into Supplementary Agreement to Limited Liability Partnership Agreement of the LLP."/>
        </div>
    )
}
