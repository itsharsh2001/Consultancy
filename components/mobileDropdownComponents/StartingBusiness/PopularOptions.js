import classes from "./PopularOptions.module.css";
import Link from 'next/link'

export default function PopularOptions() {
  return (
    <ul className={classes.menu}>
      {/* <hr /> */}
      <Link href="/private-company-registration">
      <li>
        <a href="#">Private Limited Company Registration</a>
      </li>
      </Link>
      <hr />
      <Link href="/limited-liability-partnership">
      <li>
        <a href="#">Limited Liability Partnership Registration</a>
      </li>
      </Link>
      <hr />
      <Link href="/opc-registration">
      <li>
        <a href="#">One Person Company Registration</a>
      </li>
      </Link>
      <hr />
      <Link href="/partnership-firm-registration">
      <li>
        <a href="#">Partnership Firm Registration</a>
      </li>
      </Link>
      <hr />
      <Link href="/sole-proprietorship-firm-registration">
      <li>
        <a href="#">Sole Proprietorship Firm Registration</a>
      </li>
      </Link>
      <hr />
    </ul>
  );
}
