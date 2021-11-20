import classes from "./section_testimonial.module.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import TestimonialStar from "./testimonialStar.js";
import TestimonialData from "./TestinomialData/TestinomialData.js";
import { useState } from "react";
import TestimonialDetails from "./section_testimonialsDetails.js";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";

export default function Testimonial() {

  const [activeIndex, setActiveIndex] = useState(1);
  const activeSlide = TestimonialData[activeIndex];

  function handlePrev() {
    if (activeIndex <= 0) {
      setActiveIndex(TestimonialData.length - 1);
    } else {
      setActiveIndex((oldIndex) => oldIndex - 1);
    }
  }

  function handleNext() {
    if (activeIndex >= TestimonialData.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((oldIndex) => oldIndex + 1);
    }
  }

  return (
    <div className={classes.section_testimonialsContent}>
      <h2 className={classes.section_testimonialh2}>HAPPY CUSTOMERS</h2>
      <p className={classes.section_testimonialp}>
        We take pride! Not in our work, but in your words.
      </p>
      <div className={classes.section_testimonialicon}>
        <TestimonialStar rating={5} />
      </div>

      <div className={classes.testimonialArea}>
        <span className={classes.leftArrow}>
          <span className={classes.rightArrowMediaQuery}>
            <ArrowBackIcon
              onClick={handlePrev}
              fontSize="large"
              role="button"
              className="prev"
              tabIndex={0}
              onKeyDown={handlePrev}
              className={classes.leftArrowIcon}
            />
          </span>
          <span className={classes.rightArrowMediaQuery}>
            <ArrowBackIcon
              onClick={handlePrev}
              role="button"
              fontSize="large"
              className="prev"
              tabIndex={0}
              onKeyDown={handlePrev}
              className={classes.leftArrowIcon}
            />
          </span>
          <ArrowBackIcon
            onClick={handlePrev}
            role="button"
            fontSize="large"
            className="prev"
            tabIndex={0}
            onKeyDown={handlePrev}
            className={classes.leftArrowIcon}
          />
        </span>

        <div className={classes.testimonialShape}>
          <TestimonialDetails {...activeSlide} />
        </div>

        <span className={classes.rightArrow}>
          <span className={classes.rightArrowMediaQuery}>
            <ArrowForwardIcon
              onClick={handleNext}
              role="button"
              fontSize="large"
              className="next"
              tabIndex={0}
              onKeyDown={handleNext}
              className={classes.rightArrowIcon}
            />
          </span>
          <span className={classes.rightArrowMediaQuery}>
            <ArrowForwardIcon
              onClick={handleNext}
              fontSize="large"
              role="button"
              className="next"
              tabIndex={0}
              onKeyDown={handleNext}
              className={classes.rightArrowIcon}
            />
          </span>
          <ArrowForwardIcon
            onClick={handleNext}
            role="button"
            className="next"
            fontSize="large"
            tabIndex={0}
            onKeyDown={handleNext}
            className={classes.rightArrowIcon}
          />
        </span>
      </div>
    </div>
  );
}
