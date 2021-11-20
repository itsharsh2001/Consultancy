import classes from './FAQs.module.css'
import FAQ from './ui/FAQ.js'

export default function FAQs() {
    const faq1 = (<div>
       <li> 1) the applicant has to file on-line LLP form 24 with MCA, with the specified documents.</li>
       <li>2)  NOC needs to be acquired from the regulatory authority governing the LLP e.g. SEBI or RBI. </li>
<li>3) The registrar shall post the content of the application filed via way of means of the LLP on its website for duration of One Month for facts to the general public and obtain the representation at the same. </li>
<li>4) Upon expiry of the duration detailed above, wherein no respond or representation is received, the Registrar on satisfying himself for enough reason for the closure of the LLP can also additionally pass an order to strike-off the name of the LLP from the Register of the Limited Liability Partnership.</li>

    </div>)

const faq2 = (
    <div>
        The enterprise carried under Limited Liability Partnership business enterprise may be closed at the will of Partners via way of means of any of the subsequent ways:
<li>	Declare LLP as defunct; or</li>
<li>	Voluntary winding-up of the LLP; or </li>
<li>	Compulsory winding-up of the LLP (initiated via way of means of Tribunal)</li>

    </div>
)
    return (
        <div className={classes.body}>
            <div className={classes.container}>
                <hr />
                <h2 className={classes.containerh2}>FAQ</h2>
                <hr />
            </div>
            <FAQ heading="What is the technique for closure of LLP in India through mode of striking off?" para="The technique of striking off calls for the submitting of the prescribed form in conjunction with the documents as indexed in the subsequent FAQ. The Registrar shall further file publish the application of putting off on the website of MCA for a duration of 1 month for receiving any representation from the general public. The application as soon as permitted will have an effect on the change of status of LLP as “Stuck off (defunct)” with inside the register and master information of LLP." />

            <FAQ heading="What is the easiest manner of closure of LLP in India?" para="The name of Limited Liability Partnership may be carried out for strike off via way of means of manner of declaring it as defunct for duration of 12 months or more. This is the very best manner to shut the LLP as there's no involvement or requirement of the Liquidator or Tribunal. To pick this mode, few conditions are required to be fulfilled (prescribed below)."/>

            <FAQ heading="Whether or not a Liquidator is needed to be appointed for this procedure?"

                para="No, the appointment of a liquidator or an application earlier than Tribunal isn't always required to be made. The appointment of a liquidator is relevant in case of Dissolution of the LLP via voluntary or obligatory winding up only."/>

            <FAQ heading="What have to I do if we're running below the LLP until date?" para="If the Limited Liability Partnership is yet operative, the Partners shall watch for duration of one year to be finished since the final transaction in the name of LLP to choose this approach of closure of LLP. However, if Partners do not desire to continue LLP for an extended duration, they could as an alternative opt the winding-up procedure with the assist of Liquidator."/>

            <FAQ heading="What is the process of LLP Strike-off? The process to dissolve LLP is:" para={faq1}/>

            <FAQ heading="How can I continue for closure of the enterprise under the name of LLP?" para={faq2}/>

            <FAQ heading="Which LLP could make an application to strike off its name from Register of Companies (LLP)?" para="The LLP which has now no longer started any commercial enterprise under its name since its incorporation or the LLP which has ceased to function can make an application under this route. In each cases, a period of one year will be surpassed because the incorporation."/>
            <FAQ heading="Can I continue for strike off LLP in India if the LLP has assets and liabilities in its books of accounts?" para="The Limited Liability Partnership calls for to first close its books of accounts after distribution of property and payment of the liabilities. The assertion will be duly licensed with the aid of using the chartered accountant in practice. The care has to be taken that the application of striking off of the LLP will be made inside 30 days from the date of the assertion prepared."/>
        </div>
    )
}
