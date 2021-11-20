import classes from "./VisionMission.module.css";
import VisibilityIcon from '@material-ui/icons/Visibility';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';

export default function VisionMission() {
  return (
    <div className={classes.container}>
      <span className={classes.circle}>
        <span>
            <VisibilityIcon fontSize="large" className={classes.icon} />  
            </span>
        <h4>Our Vision</h4>
        <p>
        Our vision is to become a brand who gives all legal solutions in one place and provide valuable experience to its clients.
        </p>
      </span>
      <span className={classes.rectangle}></span>
      <span className={classes.circle}>
          <span>
        <FlightTakeoffIcon fontSize="large" className={classes.icon} />

          </span>
        <h4>Our Mission</h4>
        <p>
        Our mission is to become accessible to small startups and become trustworthy and give high quality services at affordable rates and maximum customer satisfaction.
        </p>
      </span>
    </div>
  );
}
