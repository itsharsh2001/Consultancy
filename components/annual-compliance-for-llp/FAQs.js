import classes from './FAQs.module.css'
import FAQ from './ui/FAQ.js'

export default function FAQs() {

    const faq1 = <div>
        The audited books of debts are fundamental for the LLP falling underneath any of the below-mentioned criteria:
        <li>If turnover of the LLP exceeds ₹ forty Lakh; or</li>
        <li>Total contribution of Partners exceeds ₹ 25 Lakh. </li>
        If LLP does no longer fall underneath any of the above criteria, statements with the signature of companions are sufficient.
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
            <FAQ heading="Whether Annual Filing is fundamental for the LLPs?
        " para="LLP Annual Filing is imperative for each LLP because its incorporation. From the closure of its first monetary year, the LLP have to file each the types inside the prescribed time limit.
        The annual compliance is obligatory for each LLP, irrespective of the quantity of transaction, turnover or industrial endeavor undertaken.
        " />
            <FAQ heading="What is the penalty for non-filing/delayed submitting of annual compliance types for LLP?
" para="In case of extend in filing, the LLP is charged with extra Government price of ₹ one hundred for each day of delay. Also, there is no ceiling restrict to an extra fee. For non-stop failure to annual LLP compliance, the RoC can do away with the identify of LLP from its register. Also aside from extra fees, the penalty may additionally additionally be levied to LLP and its partners."/>
            <FAQ heading="Whether the Audit of Financial Statements is required for LLP RoC filing?"
                para={faq1}/>
            <FAQ heading="When does the first Financial Year of the LLP end?" para={faq2}/>
        </div>
    )
}
