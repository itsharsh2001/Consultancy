import classes from "./ServiceSlider.module.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import Link from 'next/link'
import { IconButton } from "@material-ui/core";
import CardMango from "../components/ui/CardMango";
import { useState, useEffect } from 'react'


function ServiceSlider(props) {

  // this is a popular services part
  const [count, setCount] = useState(props.heading);

  return (
    <div id="below" className={classes.slider}>
      {
        count == 1 ? <h2>Bouquet of highly preferred services by MSMEs</h2> : null
      }
      <div className={classes.cards}>
        {/* <IconButton>
          <div className={classes.left}>
            <PlayCircleFilledIcon
              fontSize="large"
              style={{ fill: "#ffb403" }}
            />
          </div>
        </IconButton> */}

        <CardMango>
          <h3>Limited Liability Partnership</h3>
          <p>
            LLP is an opportunity corporate enterprise structure that offers the advantages of limited liability of an enterprise and the ability of a partnership. The LLP can maintain its existence regardless of adjustments in partners. It is able to getting into contracts and protecting belongings in its personal name.
          </p>
          <span className={`${classes.price} ${classes.firstButton}`}>
            <p>₹ 6499 (All Inclusive)</p>
            <div>
              <Link href="/limited-liability-partnership#servicePackage">Get Started</Link>
            </div>
          </span>
        </CardMango>
        <CardMango>
          <h3>Private Limited Company</h3>
          <p>
            A private company is a business enterprise that is owned by non-governmental businesses or an exceedingly small number of shareholders or participants of a business enterprise. Private Company is quite famous among start-ups and entrepreneurs. A private limited company offers limited liability. Hence, the legal responsibility of the participants is restricted as much as the stocks they hold
          </p>
          <span className={`${classes.price} ${classes.secondButton}`}>
            <p>₹ 6499 (All Inclusive)</p>
            <div>
              <Link href="/private-company-registration#servicePackage">Get Started</Link>
            </div>
          </span>
        </CardMango>
        <CardMango>
          <h3>Trademark Registration</h3>
          <p>
            Protect your brand name with trademark registration. All that effort, money and time that you put in your business, don’t let it get ruin. Secure your business brand by securing it so that other business cannot copy your brand.
          </p>
          <span className={`${classes.price} ${classes.thirdButton}`}>
            <p>₹ 6499 (All Inclusive)</p>
            <div>
              <Link href="/trademarks-registration#servicePackage">Get Started</Link>
            </div>
          </span>
        </CardMango>

        {/* <IconButton>
          <PlayCircleFilledIcon fontSize="large" style={{ fill: "#ffb403" }} />
        </IconButton> */}
        {/* </div>
      <div className={classes.cards}> */}
        {/* <IconButton>
          <div className={classes.left}>
            <PlayCircleFilledIcon
              fontSize="large"
              style={{ fill: "#ffb403" }}
            />
          </div>
        </IconButton> */}

        <CardMango>
          <h3>GST Registration Filing</h3>
          <p>
            A GST return is a report containing information of all income/sales and/or expense/purchase which a taxpayer (each GSTIN) is needed to record with the tax administrative government. Get it done with experts.
          </p>
          <span className={`${classes.price} ${classes.fourthButton}`}>
            <p>₹ 6499 (All Inclusive)</p>
            <div>
              {" "}
              <Link href="/gst-registration#servicePackage">Get Started</Link>
            </div>
          </span>
        </CardMango>
        <CardMango>
          <h3>Accounting & Bookkeeping</h3>
          <p>
            Every business is required to maintain its books of accounts every year. This helps business to know about where its each penny is spending. But to maintain your books of accounts hassle free, get the help of experts.
          </p>
          <span className={`${classes.price} ${classes.fifthButton}`}>
            <p>₹ 6499 (All Inclusive)</p>
            <div>
              {" "}
              <Link href="/accounting-and-bookkeeping#servicePackage">Get Started</Link>
            </div>
          </span>
        </CardMango>
        <CardMango>
          <h3>Proprietorship Firm</h3>
          <p>
            Proprietorship is the simplest form of all the other business structures. To start a sole proprietorship you need to register your business to get a legal recognition. Make this easy with us.
          </p>
          <span className={`${classes.price} ${classes.sixthButton}`}>
            <p>₹ 6499 (All Inclusive)</p>
            <div>
              {" "}
              <Link href="/proprietorship-to-private-limited#servicePackage">Get Started</Link>
            </div>
          </span>
        </CardMango>

        {/* <IconButton>
          <PlayCircleFilledIcon fontSize="large" style={{ fill: "#ffb403" }} />
        </IconButton> */}
      </div>
    </div>
  );
}

export default ServiceSlider;
