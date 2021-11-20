import classes from "./Accounting.module.css";
import Link from "next/link";

export default function Accounting() {
  return (
    <ul className={classes.menu}>
      <Link href="/accounting-and-bookkeeping">
      <li>
        <a href="#">Accounting & Bookkeeping</a>
      </li>
      </Link>
      <hr />
    </ul>
  );
}
