import classes from "./RealEstate.module.css";
import Link from 'next/link';

export default function RealEstate() {
  return (
    <ul className={classes.menu}>
      {/* <hr /> */}
      <Link href="/legal-drafting/lease-deed-residential">
      <li>
        <a href="#">Lease Deed – Residential</a>
      </li>
      </Link>
      <hr />
      <Link href="/legal-drafting/lease-deed-commercial">
      <li>
        <a href="#">Lease Deed – Commercial</a>
      </li>
      </Link>
      <hr />
      <Link href="/legal-drafting/Notice-to-vacate-Tenant">
      <li>
        <a href="#">Notice to vacate Tenant</a>
      </li>
      </Link>
      <hr />
    </ul>
  );
}
