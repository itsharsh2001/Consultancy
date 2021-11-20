import classes from "./IntellectualProperty.module.css";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Link from 'next/link'

function IntellectualProperty(props) {
  return (
    <div className={classes.dropdown} onPointerLeave={props.mouseOutHandler}>
      <div className={classes.vl}></div>
      <span>
        <h3>Trademark</h3>
        <ul>
        <Link href="/trademarks-registration">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            Trademark Registration
          </li>
          </Link>
          <Link href="/trademarks-objection">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            Trademark Objection Reply
          </li>
          </Link>
          <Link href="/trademarks-opposition">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            Trademark Opposition
          </li>
          </Link>
          <Link href="/trademarks-assignment">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            Trademark Assignment
          </li>
          </Link>
          <Link href="/trademarks-renewal">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            Trademark Renewal
          </li>
          </Link>
        </ul>
      </span>
      <div className={classes.vl}></div>
      <span>
        <h3>Patent</h3>
        <ul>
        <Link href="/patent-search">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            Patent Search
          </li>
          </Link>
          <Link href="/provisional-patent">  
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            Provisional Patent
          </li>
          </Link>
          <Link href="/permanent-patent">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            Permanent Patent
          </li>
          </Link>
        </ul>
      </span>
      <div className={classes.vl}></div>
      <span>
        <h3>Copyright</h3>
        <ul>
        <Link href="/copyright-registration">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            Copyright Registration
          </li>
          </Link>
        </ul>
      </span>
      <div className={classes.vl}></div>
    </div>
  );
}

export default IntellectualProperty;
