import classes from "./Copyright.module.css";
import Link from 'next/link';

export default function Copyright() {
  return (
    <ul className={classes.menu}>
      {/* <hr /> */}
      <Link href="/copyright-registration">
      <li>
        <a href="#">Copyright Registration</a>
      </li>
      </Link>
      <hr />
    </ul>
  );
}
