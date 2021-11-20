import { Fragment } from 'react'
import classes from './documents.module.css'

export default function documents(props) {
    return (
        <Fragment>
            <div className={classes.documents}>
            <img src={props.image} alt="" />
            <p className={classes.text}>{props.text}</p>
            </div> 
        </Fragment>
    )
}
