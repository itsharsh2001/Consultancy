import classes from '../Change-Registered-Office/FAQs.module.css'
import FAQ from '../Change-Registered-Office/ui/FAQ.js'

export default function FAQs() {

    const faq = <div>
        Confidential records might also consist of any facts which an enterprise does now not prefer to go public. It may additionally encompass tangible as nicely as intangible information.
        <br /><br />
        A non-disclosure settlement may additionally encompass however is no longer constrained to any records saved in the structure of files or mails or in any different way associated to the business’s structure, working procedures, mental property, change secrets, purchaser lists, merchandise and offerings and any other essential information.</div>

    return (
        <div className={classes.body}>
            <div className={classes.container}>
                <hr />
                <h2 className={classes.containerh2}>FAQ</h2>
                <hr />
            </div>
            <FAQ heading="Why NDA Are’s important?" para="NDA helps in defending touchy data of one’s business, dissemination of which to the rivals may also purpose injury to the business. Apart from that NDA helps in defending the new invention which can also be patentable."/>

            <FAQ heading="Is it obligatory to notarize the NDA?
" para="An NDA wishes now not to be mandatorily notarized by using a public notary; however stamp responsibility has to be paid on the same. Stamp responsibility fees can be checked in the Schedule of the relevant Stamp Act as it differs from nation to state."/>

            <FAQ heading="What can be covered in personal information?"
            para={faq}/>
             <FAQ heading="What can you do if the different birthday celebration breaches the phrases of NDA?"
            para="In case the celebration to the NDA breaches the confidentiality obligations, then the aggrieved celebration can take felony motion and ask for compensation as prescribed underneath the NDA."/>
        </div>
    )
}
