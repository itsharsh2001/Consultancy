import classes from "./Banner.module.css";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import StarIcon from "@material-ui/icons/Star";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import { IconButton } from "@material-ui/core";

const Banner = () => {
  return (
    <div className={classes.background}>
      <div className={classes.body}>
        <div className={classes.imgDiv}>
          <img
            className={classes.image}
            src="/pexels-andrea-piacquadio-842567.jpg"
            alt=""
          />
        </div>

        <div className={classes.secondPart}>
          <h1 className={classes.secondParth1}>
          Simplify the Process and  Start  <br /> plus Grow your Business with us !
          </h1>
          <p className={classes.secondPartp}>
          GST Registration, Legal Agreements, Tax registration & Filing
          </p>

          <div className={`${classes.circlePart} ${classes.circlePart1}`}>
            <div className={classes.circle}>
              <div className={classes.icon}>
                <BusinessCenterIcon
                  fontSize="medium"
                  className={`${classes.iconPart} ${classes.iconPart1}`}
                />
              </div>
            </div>
            <p className={classes.iconPartp}>5000+ Businesses Served</p>
          </div>

          <div className={`${classes.circlePart} ${classes.circlePart2}`}>
            <div className={classes.circle}>
              <div className={classes.icon}>
                <StarIcon
                  fontSize="medium"
                  className={`${classes.iconPart} ${classes.iconPart2}`}
                />
              </div>
            </div>
            <p className={classes.iconPartp}>
              9.6/10 Unfiltered Customer Ratings
            </p>
          </div>

          <div className={`${classes.circlePart} ${classes.circlePart3}`}>
            <div className={classes.circle}>
              <div className={classes.icon}>
                <EmojiEmotionsIcon
                  fontSize="medium"
                  className={`${classes.iconPart} ${classes.iconPart3}`}
                />
              </div>
            </div>
            <p className={classes.iconPartp}>
              Satisfaction or Money Back Guarantee
            </p>
          </div>
        </div>
      </div>
      <div className={classes.dropdownDiv}>
        <IconButton>
        <ArrowDropDownCircleIcon
          fontSize="large"
          className={classes.dropdown}
          onClick={() => {
            document
              .getElementById("below")
              .scrollIntoView({ behavior: "smooth" });
          }}
        />
        </IconButton>
      </div>
    </div>
  );
};

export default Banner;
