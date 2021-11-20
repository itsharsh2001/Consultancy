import classes from "./mediaRecognitionImages.module.css";
import { Fragment,useState } from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MediaImagesComponent from "./mediaRecognitionImagesDetails.js";
import { IconButton } from "@material-ui/core";

export default function MediaImages(props) {
    const [image1, setImage1] = useState(props.image1)
    const [image2, setImage2] = useState(props.image2)
    const [image3, setImage3] = useState(props.image3)
    const [image4, setImage4] = useState(props.image4)

  const leftArrowClickHandler = () => {
      let firstImage = image1;
      setImage1(image2);
      setImage2(image3);
      setImage3(image4);
      setImage4(firstImage);
  } 
  const rightArrowClickHandler = () => {
    let lastImage = image4;
    setImage4(image3);
    setImage3(image2);
    setImage2(image1);
    setImage1(lastImage);
  } 

  return (
    <Fragment>
      <div className={classes.allDiv}>
        <div>
          <ArrowBackIcon
            fontSize="large"
            className={`${classes.leftArrow} ${classes.leftArrowMargin}`}
            onClick={leftArrowClickHandler}
          />
        </div>

        <div className={classes.firstDiv}>
          <MediaImagesComponent className={classes.img} image={image1} />
        </div>

        <div className={`${classes.firstDiv} ${classes.firstDivDisplayNone3}`}>
          <MediaImagesComponent image={image2} />
        </div>

        <div className={`${classes.firstDiv} ${classes.firstDivDisplayNone2}`}>
          <MediaImagesComponent image={image3} />
        </div>

        <div className={`${classes.firstDiv} ${classes.firstDivDisplayNone}`}>
          <MediaImagesComponent image={image4} />
        </div>

        <div className={classes.rightArrowAlignment}>
          <ArrowForwardIcon
            className={`${classes.leftArrow} ${classes.rightArrow}`}
            fontSize="large"
            onClick={rightArrowClickHandler}
          />
        </div>
      </div>
    </Fragment>
  );
}
