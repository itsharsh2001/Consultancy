import { Fragment } from 'react'
import classes from './section_featuredOn.module.css'
import MediaImages from './mediaRecognitionImages.js'

export default function FeaturedOn() {
    return (
       <Fragment>
           <div className={classes.featuredOnText}>
           <h2 className={classes.featuredOnTexth2}>FEATURED ON</h2>
           <p className={classes.featuredOnTextp}>Media & Recognitions</p>
           </div>
            <MediaImages image1="/image.jpg" image2="/image2.jpg" image3="/image.jpg" image4="/image2.jpg" image5="/image.jpg"/>
       </Fragment>
    )
}
