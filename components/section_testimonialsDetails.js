import classes from './section_testimonialsDetails.module.css'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import { Fragment } from 'react';

export default function TestimonialDetails(props) {
    return (
        <Fragment>
            <p><FormatQuoteIcon fontSize="large" className={classes.formateQuoteIcon}/></p>
            <img src={props.image}  className={classes.testimonialImage} alt="" />
            <p className={classes.testimonialtext} >{props.text}</p>
            <div className={classes.formateQuoteIcon2div}>
            <FormatQuoteIcon fontSize="large" className={classes.formateQuoteIcon2}/>
            </div>
        </Fragment>
    )
}
