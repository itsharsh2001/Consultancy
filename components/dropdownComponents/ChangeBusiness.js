import classes from "./ChangeBusiness.module.css";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Link from "next/link";

function ChangeBusiness(props) {
  return (
    <div className={classes.dropdown} onPointerLeave={props.mouseOutHandler}>
      <div className={classes.vl}></div>

      <span>
        <h3>Select Conversion Type</h3>
        <ul>
          <Link href="/proprietorship-to-limited-liability-partnership">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Proprietorship to LLP
            </li>
          </Link>
          <Link href="/proprietorship-to-private-limited">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Proprietorship to Private Limited Company
            </li>
          </Link>
          <Link href="/proprietorship-to-opc">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Proprietorship to OPC
            </li>
          </Link>
          <Link href="/partnership-to-llp">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Partnership to LLP
            </li>
          </Link>
          <Link href="/partnership-to-private-limited">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Partnership to Private Limited Company
            </li>
          </Link>
          <Link href="/llp-to-private-limited">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              LLP to Private Limited Company
            </li>
          </Link>
          <Link href="/opc-to-private-limited">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              OPC to Private Limited Company
            </li>
          </Link>
          <Link href="/private-limited-to-llp">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Private Limited Company to LLP
            </li>
          </Link>
          <Link href="/private-limited-to-public-limited">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Private Company to Public Company
            </li>
          </Link>
        </ul>
      </span>
      <div className={classes.vl}></div>
      <span>
        <h3>Update Corporate Information</h3>
        <ul>
          <Link href="/Add-or-Remove-a-Director">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Add or Remove a Director (Company)
            </li>
          </Link>
          <Link href="/Add-or-Remove-a-Partner">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Add or Remove a Partner (LLP)
            </li>
          </Link>
          <Link href="/change-business-activity">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Change Business Activity
            </li>
          </Link>
          <Link href="/change-registered-office">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Change Registered Office
            </li>
          </Link>
          <Link href="/change-company-name">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Change Company Name
            </li>
          </Link>
          <Link href="/change-llp-agreement">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Change LLP Agreement
            </li>
          </Link>
          <Link href="/change-partnership-deed">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Change Partnership Deed
            </li>
          </Link>
          <Link href="/increase-authorized-share-capital">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Increase Authorised Share Capital
            </li>
          </Link>
        </ul>
      </span>
      <div className={classes.vl}></div>
      <span>
        <h3>Close a Business</h3>
        <ul>
          <Link href="/close-a-private-limited-company">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Close a Private Limited Company
            </li>
          </Link>
          <Link href="/close-a-one-person-company">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Close a One Person Company
            </li>
          </Link>
          <Link href="/dissolve-a-partnership-firm">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Dissolve a Partnership Firm
            </li>
          </Link>
        </ul>
      </span>
      <div className={classes.vl}></div>
    </div>
  );
}

export default ChangeBusiness;
