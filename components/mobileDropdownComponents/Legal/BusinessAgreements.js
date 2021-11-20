import classes from "./BusinessAgreements.module.css";
import Link from 'next/link';

export default function BusinessAgreements() {
  return (
    <ul className={classes.menu}>
      {/* <hr /> */}
      <Link href="/legal-drafting/Extension-of-Agreement">
      <li>
        <a href="#">Extension of Agreement</a>
      </li>
      </Link>
      <hr />
      <Link href="/legal-drafting/Independent-Contractor-Agreement">
      <li>
        <a href="#">Independent Contractor Agreement</a>
      </li>
      </Link>
      <hr />
      <Link href="/legal-drafting/Memorandum-of-Understanding">
      <li>
        <a href="#">Memorandum of Understanding</a>
      </li>
      </Link>
      <hr />
      <Link href="/legal-drafting/NDA-for-Third-Party">
      <li>
        <a href="#">NDA for Third Party</a>
      </li>
      </Link>
      <hr />
      <Link href="/legal-drafting/Website-Disclaimer-Policy">
      <li>
        <a href="#">Website Disclaimer Policy</a>
      </li>
      </Link>
      <hr />
    </ul>
  );
}
