import classes from './FAQs.module.css'
import FAQ from './ui/FAQ.js'

export default function FAQs() {

    return (
        <div className={classes.body}>
            <div className={classes.container}>
                <hr />
                <h2 className={classes.containerh2}>Why change the business objective?</h2>
                <hr />
            </div>
            <FAQ heading="Remove deserted activities
        " para="The company’s memorandum is obtainable to any person, who might also additionally refer it before binding into contractual relation."/>

            <FAQ heading="New Activities to be undertaken
" para="Addition of new activities is the main reason to change business objective. The change is likewise backed with the aid of using the vertical or horizontal enlargement of the activities"/>

            <FAQ heading="Takeover of the organization"
            para="Many times a organization is a takeover by some other organization only for the sake of its marketplace price built. The item may be modified either before or after the takeover relying at the requirement."/>

            <FAQ heading="Current activities are banned or prohibited" para="The Government rules may change anytime, which basically impacts the business enterprise and its operations. If the activities undertaken by a business enterprise is said to be prohibited or are banned"/>
        </div>
    )
}
