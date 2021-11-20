import classes from "./RegistrationFilling.module.css";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Link from "next/link";

function RegistrationFilling(props) {
  return (
    <div className={classes.dropdown} onPointerLeave={props.mouseOutHandler}>
            <div className={classes.vl}></div>
  <span>
        <h3>Government Registration</h3>
        <ul>
        <Link href="/gst-registration">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            GST Registration
          </li>
          </Link>
          <Link href="/import-export-code-registration">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            Import Export Code Registration
          </li>
          </Link>
          <Link href="/startup-india-registration">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            Startup India Registration
          </li>
          </Link>
          <Link href="/lut-under-gst">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            LUT under GST
          </li>
          </Link>
          <Link href="/ssi-msme-registration">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            SSI – MSME Registration
          </li>
          </Link>
          <Link href="/shop-establishment-registration">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            Shop & Establishment Registration
          </li>
          </Link>
          <Link href="/professional-tax-registration">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            Professional Tax Registration
          </li>
          </Link>
          <Link href="/pan-application">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            PAN Application
          </li>
          </Link>
          <Link href="/tan-application">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            TAN Application
          </li>
          </Link>
          <Link href="/fssai-registration">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            FSSAI Registration
          </li>
          </Link>
          <Link href="/esi-registration">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            ESI Registration
          </li>
          </Link>
        </ul>
      </span>
      <div className={classes.vl}></div>
      <span>
        <h3>Tax Filling</h3>
        <ul>
        <Link href="/gst-return-filing">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            GST Return Filing
          </li>
          </Link>
          <Link href="/itr-return-filing">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            ITR filing
          </li>
          </Link>
          <Link href="/e-way-bill">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            E-Way Bill
          </li>
          </Link>
          <Link href="/tds-return-filing">
          <li>
            <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
            TDS Return Filing
          </li>
          </Link>
        </ul>
      </span>
      <div className={classes.vl}></div>

    </div>
  );
}

export default RegistrationFilling;
