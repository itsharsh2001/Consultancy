import classes from "./CloseABusiness.module.css";
import Link from "next/link";

export default function CloseABusiness() {
  return (
    <ul className={classes.menu}>
      <Link href="/close-a-private-limited-company">
      <li>
        <a href="#">Close a Private Limited Company</a>
      </li>
      </Link>
      <hr />
      <Link href="/close-a-private-limited-partnership">
      <li>
        <a href="#">Close a Limited Liability Partnership</a>
      </li>
      </Link>
      <hr />
      <Link href="/close-a-one-person-company">
      <li>
        <a href="#">Close a One Person Company</a>
      </li>
      </Link>
      <hr />
      <Link href="/dissolve-a-partnership-firm">
      <li>
        <a href="#">Dissolve a Partnership Firm</a>
      </li>
      </Link>
      <hr />
    </ul>
  );
}
