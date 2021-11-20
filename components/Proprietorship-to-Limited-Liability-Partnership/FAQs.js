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
            <FAQ heading="What are the important requirements/elements for registering an LLP? 
        " para="Like all partnerships registration calls for two or more people to be the designated partners, one partner being an Indian national. The registered workplace needs to be in India."/>

            <FAQ heading="Do I have to apply for a fresh registration in the name of LLP or amend the registrations in the name of Proprietorship Firm? 
" para="The method for conversion of proprietorship into LLP will be filed with the involved department as registrations in the name of Proprietorship Firm cannot be amended. All the registrations are taken in the name of Proprietorship, if now no longer required for every other purpose, will be surrendered."/>

            <FAQ heading="Whether LLP can be registered for Not-for-profit activities?"
            para="Profit making is an important condition for an LLP; as a result LLPs cannot be integrated for project of non-profit activities."/>

            <FAQ heading="Can LLP carry on multiple business activities? " para="YES, under LLP you can still carry multiple enterprise, provided, the businesses are associated or are of the identical nature. Unrelated activities including style Designing and Accountancy can't be carried under the same LLP. The enterprise activities are cited in the agreement and should be accepted from ROC."/>

            <FAQ heading="What are the statutory compliance required for a registering a Limited Liability Partnership?" para="Once the Limited liability partnership is incorporated, it shall observe the yearly compliance requirements. In case the capital contribution of the LLP is less than ₹25 Lakhs or has a turnover of less than ₹40 Lakhs, the monetary statements aren't required to be audited."/>

            <FAQ heading="Can I maintain the trade name of Proprietorship as LLP?
" para="While making an application for name reservation, the trade name of the proprietorship may be carried out to procure as the name of LLP. Ministry may also provide the identical name thinking about the reality that proprietorship is transformed into an LLP, besides in which the name of the organization is already reserved by some other company/LLP. The approval of the name application is absolutely on the discretion of MCA."/>
        </div>
    )
}
