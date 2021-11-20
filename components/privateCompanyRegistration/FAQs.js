import classes from './FAQs.module.css'
import FAQ from './ui/FAQ.js'

export default function FAQs() {

    const faq1 = <div>
        The fundamental process for registering a Private Limited Company 
        in India is as per the following:
        <li>Get Digital Signature Certificate (DSC)</li>
        <li>Self-Attest the Documents for Private Limited Company Registration 
including AoA, MoA and service bills. </li>
        <li>Record with structure INC-32, this structure has illustrated for 
smoothing out many cycles including getting DIN, Name Reservation, 
Incorporation, PAN application, TAN number.</li>
    </div>

const faq2 = <div>
After the registration of the company, the following should be 
fulfilled:
<li>Current account be opened inside 30 days of PAN enrollment.</li>
<li>Appoint a Statutory Auditor</li>
<li>The settled up capital should be deposited which was referenced 
while registration</li>
<li>Issue and assign shares</li>
</div>

    return (
        <div className={classes.body}>
            <div className={classes.container}>
                <hr />
                <h2 className={classes.containerh2}>FAQ</h2>
                <hr />
            </div>
            <FAQ heading="What is the process to register a private limited company?
        " para={faq1}/>
            <FAQ heading="How much of it costs to get the private company registered?
" para="The starting cost for private limited company registration is 
Rs.5,999/-."/>
            <FAQ heading="What is limited liability protection?"
            para="Limited liability is the situation with being lawfully responsible just to 
            a restricted sum for obligations of an organization. In contrast to
            proprietership and partnerships, in a private restricted organization the 
            risk of the investors in regard of the organization's liabilities is 
            restricted. All in all, the risk of the investors of an organization is 
            restricted distinctly to the worth of offers taken up by them."/>
            <FAQ heading="Can NRIs and foreign nationals or foreign entities register a 
company?" para="Indeed, NRIs, unfamiliar nationals and unfamiliar entities can register 
a company and put resources into India, subject to the Foreign Direct 
Investment standards set by the RBI. However, incorporation rules in 
India need for one Indian public to be a piece of the organization on the 
Board of Directors."/>
            <FAQ heading="What is DIN?" para=" DIN is Director Identification Number (DIN). Any person planning to 
become a director in a company must apply for a director identification 
number, given by the Ministry of Corporate Affairs"/>
            <FAQ heading="Is an address required in India for starting a company?
" para="Yes, every company registered in India must have a registered office 
where all authority correspondence is sent by the MCA , governmental 
agencies, financial institutions, etc., The registered office of a company 
can be in any state of India."/>
<FAQ heading="What is Company Registration Certificate?" para="When the recording of the reports is through, the ROC considers the 
lawyer on a particular date for investigation and rolls out the 
fundamental improvements in the MoA and AoA documented. After 
this is done, the Certificate of Incorporation is allowed to the 
organization."/>
<FAQ heading="After the company is registered, what legal necessities should be 
satisfied?" para={faq2}/>
<FAQ heading="What is the minimum capital needed to form a Private Limited 
Company?" para="A minimum capital of Rs. 100,000 to start a private limited company 
is needed. You need not have this sum close by or your bank balance. 
You can show this sum as the pre-incorporation cost of the start up. 
Additionally, you can show the capital implanted in the resources."/>
        </div>
    )
}
