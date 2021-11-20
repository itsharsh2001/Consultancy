import classes from "./DailyBusiness.module.css";
import Link from 'next/link';

export default function DailyBusiness() {
  return (
    <ul className={classes.menu}>
      {/* <hr /> */}
      <hr />
      <Link href="/legal-drafting/Direct-Selling-Agreement">
      <li>
        <a href="#">Direct Selling Agreement</a>
      </li>
      </Link>
      <hr />
      <hr />
      <Link href="/legal-drafting/Final-Invoice">
      <li>
        <a href="#">Final Invoice</a>
      </li>
      </Link>
      <hr />
      <Link href="/legal-drafting/Buy-order">
      <li>
        <a href="#">Buy Order</a>
      </li>
      </Link>
      <hr />
      <Link href="/legal-drafting/Statement-of-Work">
      <li>
        <a href="#">Statement of Work</a>
      </li>
      </Link>
      <hr />
    </ul>
  );
}
