import classes from './FAQs.module.css'
import FAQ from './ui/FAQ.js'

export default function FAQs() {

    const one = <div>
        <li>Addition of capital in LLP</li>
        <li>Reduction in capital of LLP</li>
        <li>Change in ratio of capital introduced by the Partner(s)</li>
    </div>

const five = <div>
<li>Addition of Partner</li>
<li>Appointment of Partner</li>
<li>Expulsion of Partner</li>
<li>Retirement of Partner or/and</li>
<li>Resignation of Partner</li>
</div>

    return (
        <div className={classes.body}>
            <div className={classes.container}>
                <hr />
                <h2 className={classes.containerh2}>Reasons for change in LLP Agreement</h2>
                <hr />
            </div>
            <FAQ heading="Change of Capital Contribution by the Partners in the LLP
        " para={one}/>

            <FAQ heading="Change capital and profit sharing ratio
" para=" Capital is the most essential need of the enterprise that requires to be expanded with passing time and expansion of a enterprise."/>

            <FAQ heading="Change Business Activity"
            para="An LLP can't undertake the activities that aren't covered in the agreement. Hence, in case you need to alternate the activities change of the agreement is necessary."/>

            <FAQ heading="Change rights and duties of partners " para="Partners and their fame being intact, the rights and duties of the companions may be modified as according to their roles and requirements."/>

            
            <FAQ heading="Change of terms or conditions for " para={five}/>

            
            <FAQ heading="Change different clauses " para=" Other vital clauses, which include jurisdiction of LLP, terms of resignation, notice period, conditions of appointment and removal, change in the period of the partnership, etc. can be changed."/>
        </div>
    )
}
