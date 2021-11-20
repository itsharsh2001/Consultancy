import classes from "./PopularServices.module.css"
import ServiceSlider from '../ServiceSlider.js'

export default function PopularServices() {
    return (
        <div id="servicePackage">
            <div className={classes.text}>
            <hr/>
            <h2 className={classes.texth2}>Popular Services</h2>
            <hr/>
            <ServiceSlider heading={0}/>
            </div>
        </div>
    )
}
