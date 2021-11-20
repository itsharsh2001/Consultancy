import classes from './MobileServicesPackages.module.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export default function MobileServicePackages(props) {
    return (
        <div>
            <div className={classes.container}>
            <p className={classes.containerh1}>{props.planName} {props.planPrice}</p>
            <div className={classes.stepsArea}>
                <span  className={classes.steps}>
                    <ArrowForwardIcon className={classes.icon}/>
                    <p className={`${classes.stepsText} ${classes.step1}`}>{props.one}</p>
                </span>
                <span  className={classes.steps}>
                    <ArrowForwardIcon className={classes.icon}/>
                    <p className={classes.stepsText}>{props.two}</p>
                </span>
                <span  className={classes.steps}>
                    <ArrowForwardIcon className={classes.icon}/>
                    <p className={classes.stepsText}>{props.three}</p>
                </span>
                <span  className={classes.steps}>
                    <ArrowForwardIcon className={classes.icon}/>
                    <p className={classes.stepsText}>{props.four}</p>
                </span>
                <span  className={classes.steps}>
                    <ArrowForwardIcon className={classes.icon}/>
                    <p className={classes.stepsText}>{props.five}</p>
                </span>
                <span  className={classes.steps}>
                    <ArrowForwardIcon className={classes.icon}/>
                    <p className={classes.stepsText}>{props.six}</p>
                </span>
                <span  className={classes.steps}>
                    <ArrowForwardIcon className={classes.icon}/>
                    <p className={classes.stepsText}>{props.seven}</p>
                </span>
                <span  className={classes.steps}>
                    <ArrowForwardIcon className={classes.icon}/>
                    <p className={classes.stepsText}>{props.eight}</p>
                </span>
                <span  className={classes.steps}>
                    <ArrowForwardIcon className={classes.icon}/>
                    <p className={classes.stepsText}>{props.nine}</p>
                </span>
                <span  className={classes.steps}>
                    <ArrowForwardIcon className={classes.icon}/>
                    <p className={classes.stepsText}>{props.ten}</p>
                </span>
                <span  className={classes.steps}>
                    <ArrowForwardIcon className={classes.icon} />
                    <p className={classes.stepsText}>{props.eleven}</p>
                </span>
                <span  className={classes.steps}>
                    <ArrowForwardIcon className={classes.icon}/>
                    <p className={classes.stepsText}>{props.twelve}</p>
                </span>
                <span  className={classes.steps}>
                    <ArrowForwardIcon className={classes.icon}/>
                    <p className={classes.stepsText}>{props.thirteen}</p>
                </span>
                <span  className={classes.steps}>
                    <ArrowForwardIcon className={classes.icon}/>
                    <p className={classes.stepsText}>{props.fourteen}</p>
                </span>
            </div>

            <h2  onClick={() => {
                  document
                    .getElementById("headerMobile")
                    .scrollIntoView({ behavior: "smooth" });
                }}  className={classes.stepsbutton}>Pay Now</h2>

            </div>
        </div>
    )
}
