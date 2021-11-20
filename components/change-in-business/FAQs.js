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
            <FAQ heading="What are the benefits of registering a partnership firm? " para="In a proprietorship firm, there's no legal difference among you and the enterprise; leaving you personally responsible for any money owed or duties the enterprise may also incur. Also, there are no boundaries and no safety in your personal assets. In case of partnership firm, it is divided among the partners"/>

            <FAQ heading="Who can be partners?" para="To be eligible to be a partner, an person have to be a major (above the age of 18), have to be same and should not be disqualified by law from getting into a contract."/>

            <FAQ heading="Is there a need to pay tax on sale of inventory in which it is moved from the present organization to new organization structure?" para="As per Schedule-2 of CGST/SGST Act, there's no need to pay tax on the sale of inventory in which it is moved from proprietorship to the brand new organization (in case of re-structuring of business) concern to the circumstance that the present proprietorship ceases to be a taxable person after such re-structuring."/>

            <FAQ heading="What need to be looked after by the proprietorship firm during the procedure of business structure change?" para="In case of conversion, current company needs to end to be a taxable person. There must not be any activity in converted proprietorship after switch of inventory into a brand new entity. In case, there are unutilized input tax credit mendacity on the time of such conversion, those credit are allowed to switch into a brand new entity."/>

            <FAQ heading="Whether the audit is required for Partnership Firm?
" para="Partnership firms do not need to prepare audited statements for each year. However, depending on the turnover and a few other criteria, a tax audit statement might be necessary."/>

            <FAQ heading="Whether stamp duty is payable on conversion? " para="For confirming the validity of a partnership deed, the partners have to pay stamp duty required as per the capital of the firm. The amount of stamp duty payable relies upon on the amount of capital contribution by partners. The fee of duty is prescribed under the State Stamp Act that differs for each State."/>

            <FAQ heading="What is the subsequent step after submitting for alternate from the only proprietor to partnership?" para="The partnership company shall also have to practice for registration under different statutes which includes GST, Shop and Establishments Act and the likes; relying on the nature of the business. In case the sole proprietorship organization owns a trademark, the change concerning the inclusion of partner wishes to be delivered in the trademark registry."/>
            
        </div>
    )
}
