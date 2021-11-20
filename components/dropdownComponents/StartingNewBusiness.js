import classes from "./StartingNewBusiness.module.css";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Link from 'next/link'

function StartingNewBusiness(props) {
  return (
    <div className={classes.dropdown} onPointerLeave={props.mouseOutHandler}>
            <div className={classes.vl}></div>
    <span>
        <h3>Popular Options</h3>
        <ul>
          <Link href="/private-company-registration">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            Private Limited Company Registration
          </li>
          </Link>
          <Link href="/limited-liability-partnership">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            Limited Liability Partnership Registration
          </li>
          </Link>
          <Link href="/opc-registration">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            One Person Company Registration
          </li>
          </Link>
          <Link href="/partnership-firm-registration">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            Partnership Firm Registration
          </li>
          </Link>
          <Link href="/sole-proprietorship-firm-registration">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            Sole Proprietorship Firm Registration
          </li>
          </Link>
        </ul>
      </span>
      <div className={classes.vl}></div>
      <span>
        <h3>Special Business Entities</h3>
        <ul>
        <Link href="/register-an-indian-subsidiary">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            Register an Indian Subsidiary
          </li>
        </Link>
        <Link href="/section-8-company-registration">  
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            Section 8 Company Registration
          </li>
          </Link>
          <Link href="/producer-company-registration">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            Producer Company Registration
          </li>
          </Link>
        </ul>
      </span>
      <div className={classes.vl}></div>

    </div>
  );
}

export default StartingNewBusiness;
