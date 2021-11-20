import classes from './FAQs.module.css'
import FAQ from './ui/FAQ.js'

export default function FAQs() {

    return (
        <div className={classes.body}>
            <div className={classes.container}>
                <hr />
                <h2 className={classes.containerh2}>Why is the change of partners required?</h2>
                <hr />
            </div>
            <FAQ heading="Inability of the prevailing Partner
        " para="The current partner of the LLP might not be capable of make a contribution his full time after a certain period, whether because of retirement or different reasons."/>

            <FAQ heading="Number of Designated Partners is below the statutory limit
" para="If because of the resignation of a designated partner from LLP, the total designated companions lessen below 2, the LLP ought to hire a new designated Partner or alternate the position (status) of the present another companion."/>
            <FAQ heading="Expertise with extra capital"
            para="Normally, a associate is appointed both for need of capital or the expertise. With boom in capital, the borrowing power of the organization will increase with loan opportunities"/>

            <FAQ heading="Change in terms of Partnership" para="It is a settlement among the partners; the terms may be modified together at any time."/>
        </div>
    )
}
