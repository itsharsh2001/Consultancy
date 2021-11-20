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
            <FAQ heading="Which Act of the Indian Govt. regulates the LLP registration process in the country?
        " para="The Limited Liability Partnership (LLP) registration in India is regulated by the provisions of the Limited Liability Partnership Act, 2008 with the guidelines of the Ministry of Corporate Affairs (MCA)."/>
            <FAQ heading="What are the minimum requirements to register a LLP in India?
" para="There should be two people to be delegated as Designated Partners, out of which one should be an Indian resident. Additionally, there is a pre-essential to have a location of a business in India in order to register it as a registered office for your LLP."/>
            <FAQ heading="Does the Income Tax Act treat partnership firms and LLPs differently?"
            para="Both general partnerships and LLPs are charged at level pace of 30%. The wide range of various income tax act apply with the exception of that general partnership firms are covered under possible tax collection plot i.e. in case turnover is below Rs. 2 Crore in business or Rs. 50 Lakh in case of profession, there is no compelling reason to keep up with books of accounts or get accounts examined though, LLPs are explicitly not cover."/>
            <FAQ heading="What are the requirements to be a partner/Designated Partner for LLP formation in India?" para="There are no restrictions as far as citizenship or residential status to be a Partner in LLP. In this manner, the LLP Act, 2008 permits Foreign Nationals, including Foreign Companies and LLPs to join LLP in India. The pre-requisite is to have somewhere around one Designated Partner who is an resident of India. In any case, the individual ought to be of the age 18 years. This is to ensure that the individual in LLP is anything but a minor and skillful enough to go into contract. Likewise, the proposed Designated Partner will have DIN."/>
            <FAQ heading="What is the minimum capital requirement for LLPs?" para=" There is no minimum capital contribution requirement. Even with 100 Rs. It can be registered. As per the market experts, this is one of the notable beneficial approaches for registering a LLP."/>
            <FAQ heading="What is LLP Agreement? Does it require filing with MCA?
" para=". LLP Agreement is an arrangement executed by all partners after LLP incorporation in India. The agreement recommends every clause of the business, including the rights, jobs, obligations, and obligations of partners in LLP. The agreement should be recorded inside 30 days of the issue of certificate of incorporation. Inability to do as such will charge an extra expense of ₹ 100 every day till the date of documenting."/>
<FAQ heading="What is the role of Accountants and Auditors in LLP?" para="Daily transactions of the enterprise are recorded with inside the Books of Accounts of the LLP with the aid of using the Accountant/s. The Accounts subsequently recorded are demonstrated with the aid of using an Independent Auditor to make certain that no statutory compliance are neglected and offer an Audit Report for the same. "/>
        </div>
    )
}
