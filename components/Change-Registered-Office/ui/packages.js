import classes from "./packages.module.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

export default function packages(props) {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.containerspan}>
          <span className={classes.spanText}>
            {props.planName}
            <br />
            {props.planPrice}
          </span>
        </div>
        <div className={classes.container2}>
          <div className={classes.stepsButtonFlex}>
            <div className={classes.stepsFlex}>
              <div className={classes.steps1row}>
                <span className={classes.steps}>
                  <ArrowForwardIcon />
                  <div className={classes.stepsText}>{props.one}</div>
                </span>
                <span className={classes.steps}>
                  <ArrowForwardIcon />
                  <div className={classes.stepsText}>{props.two}</div>
                </span>
                <span className={classes.steps}>
                  <ArrowForwardIcon />
                  <div className={classes.stepsText}>{props.three}</div>
                </span>
                <span className={classes.steps}>
                  <ArrowForwardIcon />
                  <div className={classes.stepsText}>{props.four}</div>
                </span>
                <span className={classes.steps}>
                  <ArrowForwardIcon />
                  <div className={classes.stepsText}>{props.five}</div>
                </span>
                <span className={classes.steps}>
                  <ArrowForwardIcon />
                  <div className={classes.stepsText}>{props.six}</div>
                </span>
                <span className={classes.steps}>
                  <ArrowForwardIcon />
                  <div className={classes.stepsText}>{props.seven}</div>
                </span>
              </div>

              <div>
                <div className={classes.steps2row}>
                  <span className={classes.steps}>
                    <ArrowForwardIcon />
                    <div className={classes.stepsText}>{props.eight}</div>
                  </span>
                  <span className={classes.steps}>
                    <ArrowForwardIcon />
                    <div className={classes.stepsText}>{props.nine}</div>
                  </span>
                  <span className={classes.steps}>
                    <ArrowForwardIcon />
                    <div className={classes.stepsText}>{props.ten}</div>
                  </span>
                  <span className={classes.steps}>
                    <ArrowForwardIcon />
                    <div className={classes.stepsText}>{props.eleven}</div>
                  </span>
                  <span className={classes.steps}>
                    <ArrowForwardIcon />
                    <div className={classes.stepsText}>{props.twelve}</div>
                  </span>
                  <span className={classes.steps}>
                    <ArrowForwardIcon />
                    <div className={classes.stepsText}>{props.thirteen}</div>
                  </span>
                  <span className={classes.steps}>
                    <ArrowForwardIcon />
                    <div className={classes.stepsText}>{props.fourteen}</div>
                  </span>
                </div>
              </div>
            </div>
            <div className={classes.container2Buttondiv}>
              <button
                className={classes.container2Button}
                type="submit"
                onClick={() => {
                  document
                    .getElementById("header")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
