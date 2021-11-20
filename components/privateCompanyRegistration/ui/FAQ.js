import classes from "./FAQ.module.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { useState } from "react";

export default function FAQ(props) {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className={classes.faq} >
      <div onMouseLeave={() => setIsShown(false)} className={classes.container}>
        <p className={`${classes.containerP} ${classes.ptext}`}>
          {props.heading}
        </p>
        {isShown ? (
          <p className={`${classes.containerP} ${classes.ptext2}`}>
            {props.para}
          </p>
        ) : null}
        <div className={classes.icondiv}>
          <PlayArrowIcon
            onMouseEnter={() => setIsShown(true)}
            fontSize="large"
            className={classes.icon}
          />
        </div>
      </div>
    </div>
  );
}
