import classes from "./BankingFinance.module.css";
import Link from 'next/link';

export default function BankingFinance() {
  return (
    <ul className={classes.menu}>
      {/* <hr /> */}
      <Link href="/legal-drafting/Account-Opening-Resolution">
      <li>
        <a href="#">Account Opening Resolution</a>
      </li>
      </Link>
      <hr />
      <Link href="/legal-drafting/cheque-stop-payment-letter">  
      <li>
        <a href="#">Cheque Stop Payment Letter</a>
      </li>
      </Link>
      <hr />
      <Link href="/legal-drafting/Promissory-note">
      <li>
        <a href="#">Promisory note</a>
      </li>
      </Link>
      <hr />
      <Link href="/legal-drafting/Section138-Notice">
      <li>
        <a href="#">Section 138 (Cheque Dishonor Notice)</a>
      </li>
      </Link>
      <hr />
    </ul>
  );
}
