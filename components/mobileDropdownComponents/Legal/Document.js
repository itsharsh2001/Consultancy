import classes from "./Document.module.css";
import Link from 'next/link';

export default function Document() {
  return (
    <ul className={classes.menu}>
      {/* <hr /> */}
      <Link href="/essential-business-agreements-kit">
      <li>
        <a href="#">Essential Business Agreements Kit</a>
      </li>
      </Link>
      <hr />
    </ul>
  );
}
