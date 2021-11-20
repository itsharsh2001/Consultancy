import classes from "./Trademark.module.css";
import Link from 'next/link';

export default function Trademark() {
  return (
    <ul className={classes.menu}>
      {/* <hr /> */}
      <Link href="/trademarks-registration">
      <li>
        <a href="#">Trademark Registration</a>
      </li>
      </Link>
      <hr />
      <Link href="/trademarks-objection">
      <li>
        <a href="#">Trademark Objection Reply</a>
      </li>
      </Link>
      <hr />
      <Link href="/trademarks-opposition">
      <li>
        <a href="#">Trademark Opposition</a>
      </li>
      </Link>
      <hr />
      <Link href="/trademarks-assignment">
        <li>
        <a href="#">Trademark Assignment</a>
      </li>
      </Link>
      <hr />
      <Link href="/trademarks-renewal">
      <li>
        <a href="#">Trademark Renewal</a>
      </li>
      </Link>
      <hr />
    </ul>
  );
}
