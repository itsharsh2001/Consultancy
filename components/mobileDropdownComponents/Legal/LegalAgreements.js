import classes from "./LegalAgreements.module.css";
import Link from 'next/link';

export default function LegalAgreements() {
  return (
    <ul className={classes.menu}>
      {/* <hr /> */}
      <Link href="/legal-drafting/Legal-notice">
      <li>
        <a href="#">Legal Notice</a>
      </li>
      </Link>
      <hr />
      <Link href="/legal-drafting/POWER-OF-ATTORNEY">
      <li>
        <a href="#">Power of Attorney</a>
      </li>
      </Link>
      <hr />
      <Link href="/legal-drafting/RTI">
      <li>
        <a href="#">Right to Information</a>
      </li>
      </Link>
      <hr />
      <Link href="/legal-drafting/Termination-of-agreement">
      <li>
        <a href="#">Termination of Agreement</a>
      </li>
      </Link>
      <hr />
    </ul>
  );
}
