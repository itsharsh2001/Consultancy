import classes from './FAQs.module.css'
import FAQ from './ui/FAQ.js'

export default function FAQs() {

    const faq1 = <div>
       Every man or woman who has been distributed DIN and has ‘approved’ popularity should file this structure if he is:
        <li>A director in the company; or</li>
        <li>A companion in LLP; or </li>
        <li>conserving DIN however no longer related with any organization.</li>
    </div>

    const faq2 = <div>
        Due dates of LLP compliance are primarily based on the closure of every monetary year. Financial Year of each LLP ought to be closed on thirty first March. However, duration of economic yr relies upon on the month of its incorporation:
        <br />
        a) LLPs registered between 1st April and thirtieth September: The LLP need to shut its monetary yr on thirty first March of subsequent calendar year. Suppose LLP is registered on 1st May, 2018 , the identical ought to shut its economic 12 months on thirty first March, 2019.
        <br />
        b) LLPs registered between 1st October and thirty first March: The LLP has an choice to pick the cease of its monetary year. For occasion if the LLP is registered on thirtieth October, 2018 the identical can shut its economic 12 months both on thirty first March, 2019 or thirty first March, 2020.
    </div>
    return (
        <div className={classes.body}>
            <div className={classes.container}>
                <hr />
                <h2 className={classes.containerh2}>FAQ</h2>
                <hr />
            </div>
            <FAQ heading="Is it obligatory to file shape INC 20A?" para="Yes, it is obligatory to file Declaration of Commencement of Business through submitting shape 20A; to set up that the business enterprise has acquired the paid up share capital quantity and is eligible to begin its enterprise and borrow cash in its name."/>

            <FAQ heading="Who shall file “Form INC 20A”?" para="Every agency that is integrated on or after 02/11/2018
            And having a share capital is required to file INC 20A
            "/>
            
            <FAQ heading="Who shall no longer file “Form INC 20A”?" para="Companies that are restrained via assurance i.e. the ones now not having share capital or the ones integrated earlier than 02/11/2018 are no longer required filing it."/>

            <FAQ heading="What is the due date of submitting structure INC 20A?" para="The due date for submitting the statement is inside a hundred and eighty days from the day of employer incorporation."/>

            <FAQ heading="Is it’s one-time submitting?" para="Yes, the assertion is a one-time obligatory submitting for businesses included publish 02/11/2018."/>
            <FAQ heading="What is the Government price for submitting the form?" para="The Government charge relies upon on your permitted capital, then again a minimum charge is Rs. 200/- for a share capital much less than one lakh."/>

            <FAQ heading="Can I do commercial enterprise except submitting the form?" para="No, You can't begin the commercial enterprise except submitting this form.."/>
            
        </div>
    )
}
