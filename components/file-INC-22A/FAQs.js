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
            <FAQ heading="Which corporation is required to file the Form INC-22A?" para="Every enterprise included on or earlier than thirty first December 2017 shall file the shape with MCA"/>

            <FAQ heading="What is the due date?" para="The form INC-22A needs to be filed on or earlier than twenty fifth April 2019.
            "/>
            
            <FAQ heading="Are LLPS’s required to file this form?" para="No, only businesses included on or earlier than thirty first December 2017 are required to file the form."/>

            <FAQ heading="What is the authority’s price for submitting INC-22A?" para="There is no government charge submitting this form."/>

            <FAQ heading="Is there any penalty for non-submitting the form?" para="Yes, MCA will cost late submitting charges of Rs. 10,000 /- if the shape is filed on or after twenty sixth April 2019."/>

            <FAQ heading="Whether OPC is required to file the form?" para="Yes, OPC is a shape of agency consequently it has to file the form INC-22A."/>

            <FAQ heading="Whether the language on the board of registered workplace to be in English or Hindi?" para="The language on the board of the registered workplace need to be in english as properly as in a regional language."/>
            
        </div>
    )
}
