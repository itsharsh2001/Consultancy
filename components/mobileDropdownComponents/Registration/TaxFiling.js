import classes from "./TaxFiling.module.css";
import Link from 'next/link';

export default function TaxFiling() {
  return (
    <ul className={classes.menu}>
      {/* <hr /> */}
      <Link href="/gst-return-filing">
      <li>
        <a href="#">GST Return Filing</a>
      </li>
      </Link>
      <hr />
      <Link href="/itr-return-filing">
      <li>
        <a href="#">ITR filing</a>
      </li>
      </Link>
      <hr />
      <Link href="/e-way-bill">
      <li>
        <a href="#">e-Way Bill</a>
      </li>
      </Link>
      <hr />
      <Link href="/tds-return-filing">
      <li>
        <a href="#">TDS Return Filing</a>
      </li>
      </Link>
      <hr />
    </ul>
  );
}
