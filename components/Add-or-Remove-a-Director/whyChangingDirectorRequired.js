import classes from './FAQs.module.css'
import FAQ from './ui/FAQ.js'

export default function FAQs() {

    return (
        <div className={classes.body}>
            <div className={classes.container}>
                <hr />
                <h2 className={classes.containerh2}>Why changing directors is required?</h2>
                <hr />
            </div>
            <FAQ heading="Assign operational obligation without dilution ownership
        " para="Directors are accountable for every day operations. With the appointment of an extra director, the shareholders can assign the operational obligations to administrators preserving strategic manage in hand."/>

            <FAQ heading="Inability to work through existing administrators 
" para="The current administrators can be not able to serve the enterprise after a certain length because of retirement or different private reasons"/>
            <FAQ heading="Hire new expertise on board"
            para=" With the boom of business, techniques and alliances are developed, that calls for inputs of every branch are required for powerful planning."/>
            <FAQ heading="Number of administrators fall under statutory limit " para="The Companies Act has prescribed the minimal number of administrators in any corporation that is 2 and 3 for Private and Public corporation respectively."/>
        </div>
    )
}
