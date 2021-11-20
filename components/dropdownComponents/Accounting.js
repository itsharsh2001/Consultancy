import classes from "./Accounting.module.css";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Link from "next/link";

function Accounting(props) {
  return (
    <div className={classes.dropdown} onPointerLeave={props.mouseOutHandler}>
      <div className={classes.vl}></div>
      <span>
        <h3>Corporate Compliances</h3>
        <ul>
        <Link href="/annual-compliance-for-llp">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            Annual Compliances for Private Limited Company
          </li>
          </Link>
          <Link href="/annual-compliance-for-llp">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            Annual Compliance for Limited Liability Partnership
          </li>
          </Link>
          <Link href="/file-DIR-3-KYC">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            File DIR-3 KYC
          </li>
          </Link>
          <Link href="/file-INC-20A">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            File INC-20A
          </li>
          </Link>
          <Link href="/file-INC-22A">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            File INC-22A
          </li>
          </Link>
        </ul>
      </span>
      <div className={classes.vl}></div>
      <span>
        <h3>Accounting</h3>
        <ul>
        <Link href="/accounting-and-bookkeeping">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            Accounting and BookKeeping
          </li>
          </Link>
        </ul>
      </span>
      <div className={classes.vl}></div>
    </div>
  );
}

export default Accounting;
