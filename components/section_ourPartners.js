import { Fragment } from 'react'
import classes from './section_ourPartners.module.css'
import MediaImages from './mediaRecognitionImages.js'

export default function OurPartners() {
    return (
        <Fragment>
            <div>
            <h2 className={classes.ourPartnersh2}>OUR PARTNERS</h2>
            <MediaImages className={classes.images} image1="/image2.jpg" image2="/image.jpg" image3="/image2.jpg" image4="/image.jpg" image5="/image2.jpg"/>
            </div>
        </Fragment>
    )
}
