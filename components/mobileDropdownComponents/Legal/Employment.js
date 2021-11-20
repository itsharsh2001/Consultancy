import classes from "./Employment.module.css";
import Link from "next/link";

export default function Employment() {
  return (
    <ul className={classes.menu}>
      <Link href="/legal-drafting/appointment-letter">
      <li>
        <a href="#">Appointment Letter</a>
      </li>
      </Link>
      <hr />
      <Link href="/legal-drafting/completion-of-probation-letter">
      <li>
        <a href="#">Completion of Probation Letter</a>
      </li>
      </Link>
      <hr />
      <Link href="/legal-drafting/employee-termination-letter">
      <li>
        <a href="#">Employee Termination Notice</a>
      </li>
      </Link>
      <hr />
      <Link href="/legal-drafting/employee-contract">
      <li>
        <a href="#">Employment Contract</a>
      </li>
      </Link>
      <hr />
      <Link href="/legal-drafting/employment-agreement">
      <li>
        <a href="#">Employment Agreement</a>
      </li>
      </Link>
      <hr />
      <Link href="/legal-drafting/Job-offer-rejection-letter">
      <li>
        <a href="#">Job Offer Rejection Letter</a>
      </li>
      </Link>
      <hr />
      <Link href="/legal-drafting/nda-for-employee">
      <li>
        <a href="#">NDA for Employees</a>
      </li>
      </Link>
      <hr />
      <Link href="/legal-drafting/offer-letter">
      <li>
        <a href="#">Offer Letter</a>
      </li>
      </Link>
      <hr />
      <hr />
      {/* <li>
        <a href="#">Employee Relieving Letter</a>
      </li>
      <hr />
      <li>
        <a href="#">Consumer Complaint Letter</a>
      </li>
      <hr /> */}
    </ul>
  );
}
