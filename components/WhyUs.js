import classes from "./WhyUs.module.css";
import CardGreen from "../components/ui/CardGreen";

function WhyUs() {
  return (
    <div className={classes.whyus}>
      <div className={classes.container}>
        <span className={classes.text}>
          <p className={classes.textp}>Why Us?</p>
          <p className={classes.textp2}>
          Our expertise in business, accounts and tax services and our constant customer support is what makes us trustworthy throughout the process.
          </p>
        </span>
        <div className={classes.cards}>
          <CardGreen>
            <h3>Affordable Services</h3>
            <p>We provide affordable expertise services</p>
          </CardGreen>
          <CardGreen>
            <h3>Accuracy</h3>
            <p>
            Accuracy is delivered, our experts knowledge and their experience in work makes less chances of errors.
            </p>
          </CardGreen>
          <CardGreen>
            <h3>Privacy at their Best</h3>
            <p>
            Our clients’ information is our priority to keep it private.
            </p>
          </CardGreen>

          <CardGreen>
            <h3>Customer Satisfaction</h3>
            <p>100% customer satisfaction is our main motive.</p>
          </CardGreen>
          <CardGreen>
            <h3>Hassle - free Process</h3>
            <p>
            We make sure that our clients don’t get any hurdles during the process.
            </p>
          </CardGreen>
          <CardGreen>
            <h3>Expert Assistance</h3>
            <p>
            Clients get 24 hrs expert assistance during our services.
            </p>
          </CardGreen>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
