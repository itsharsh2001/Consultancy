import classes from "./GovernmentRegistration.module.css";
import Link from 'next/link';

export default function GovernmentRegistration() {
  return (
    <ul className={classes.menu}>
      {/* <hr /> */}
      <Link href="/gst-registration">
      <li>
        <a href="#">GST Registration</a>
      </li>
      </Link>
      <hr />
      <Link href="/import-export-code-registration">
      <li>
        <a href="#">Import Export Code Registration</a>
      </li>
      </Link>
      <hr />
      <Link href="/startup-india-registration">
      <li>
        <a href="#">Startup India Registration</a>
      </li>
      </Link>
      <hr />
      <Link href="/lut-under-gst">
      <li>
        <a href="#">LUT under GST</a>
      </li>
      </Link>
      <hr />
      <Link href="/ssi-msme-registration">
      <li>
        <a href="#">SSI – MSME Registration</a>
      </li>
      </Link>
      <hr />
      <Link href="/shop-establishment-registration">
      <li>
        <a href="#">Shop & Establishment Registration</a>
      </li>
      </Link>
      <hr />
      <Link href="/professional-tax-registration">
      <li>
        <a href="#">Professional Tax Registration</a>
      </li>
      </Link>
      <hr />
      <Link href="/pan-application">
      <li>
        <a href="#">PAN Application</a>
      </li>
      </Link>
      <hr />
      <Link href="/tan-application">
      <li>
        <a href="#">TAN Application</a>
      </li>
      </Link>
      <hr />
      <Link href="/fssai-registration">
      <li>
        <a href="#">FSSAI Registration</a>
      </li>
      </Link>
      <hr />
      <Link href="/esi-registration">
      <li>
        <a href="#">ESI Registration</a>
      </li>
      </Link>
      <hr />
    </ul>
  );
}
