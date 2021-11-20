import classes from "./Patent.module.css";
import Link from 'next/link';

export default function Patent() {
  return (
    <ul className={classes.menu}>
      {/* <hr /> */}
      <Link href="/patent-search">
      <li>
        <a href="#">Patent Search</a>
      </li>
      </Link>
      <hr />
      <Link href="/provisional-patent">  
      <li>
        <a href="#">Provisional Patent</a>
      </li>
      </Link>
      <hr />
      <Link href="/permanent-patent">
        <li>
        <a href="#">Permanent Patent</a>
      </li>
      </Link>
      <hr />
    </ul>
  );
}
