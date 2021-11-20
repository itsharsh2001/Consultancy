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
            <FAQ heading="What is distinction among Designated Partner and Partner?
        " para="The crucial distinction among both types of companions is the accountability. Where the companion is accountable only for acts and omissions by himself, the Designated Partners are moreover accountable towards compliance and operational subjects of the LLP, inclusive of penal provisions."/>

            <FAQ heading="What are the necessities to be a Partner/ Designated Partner of the LLP? 
" para="There are no obstacles in terms of citizenship or residency to grow to be a Partner. Therefore, the LLP Act, 2008 lets in Foreign Nationals consisting of Foreign Companies & LLPs to become LLP in India provided at least one Designated Partner is Indian Resident. The proposed Designated Partner shall keep legitimate DIN and now no longer be disqualified."/>

            <FAQ heading="Is it obligatory for Partner Designated Partner to make a contribution capital?"
            para="While addition, one can also additionally make a contribution the amount agreed by and among all of the Partners inclusive of the present, in any form whether or not tangible or intangible. However, it isn't always obligatory to carry capital to the LLP."/>

            <FAQ heading="What are the rights and liabilities of the Partner exiting from LLP?" para="The rights and liability of the prevailing Partner can be as prescribed with inside the authentic LLP Agreement. Furthermore, the rights and regulations also can be mainly cited in the Supplement Agreement with any quantity of capital to be reimbursed and mode of payment."/>

            <FAQ heading="Whether the LLP Agreement is to be updated to add or cast off Partner in the LLP?" para="Yes, the LLP settlement has to be changed with terms of addition or elimination through execution of the supplementary deed. All the information together with the alternate of capital and alternate in terms and earnings sharing ratio may be provided in the deed."/>

            <FAQ heading="What need to I do if my other Partner has resigned and I am the only one left now?
" para="The LLP should employ a brand new designated partner inside 6 months from effective date. However, in case the LLP already has any other partner, the fame of this type of accomplice may be modified to Designated Partner."/>

<FAQ heading="When the Supplementary deed will be filed with MCA?" para="The Supplementary Deed has to be filed inside 30 days from effective date of change or from the date of execution (whichever falls earlier). The postponement in submitting levies additional rate of Rs one hundred in keeping with day until the date of submitting."/>

<FAQ heading="Whether Stamp Duty is needed to be paid on Supplementary Deed?" para="The stamp obligation will be paid according to the brought capital with inside the LLP as per the charge prescribed through the respective state. Where there's the addition of capital at the same time as addition or removal, the Supplementary Agreement will be achieved through charge of Rs 100/- as stamp obligation."/>
        </div>
    )
}
