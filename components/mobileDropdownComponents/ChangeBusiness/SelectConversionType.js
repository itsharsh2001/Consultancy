import classes from "./SelectConversionType.module.css";
import Link from "next/link";

export default function SelectConversionType() {
  return (
    <ul className={classes.menu}>
      <Link href="/Add-or-Remove-a-Director">
      <li>
        <a href="#">Add or Remove a Director (Company)</a>
      </li>
      </Link>
      <hr />
      <Link href="/Add-or-Remove-a-Partner">
      <li>
        <a href="#">Add or Remove a Partner (LLP)</a>
      </li>
      </Link>
      <hr />
      <Link href="/change-business-activity">
      <li>
        <a href="#">Change Business Activity</a>
      </li>
      </Link>
      <hr />
      <Link href="/change-registered-office">
      <li>
        <a href="#">Change Registered Office</a>
      </li>
      </Link>
      <hr />
      <Link href="/change-company-name">
      <li>
        <a href="#">Change Company Name</a>
      </li>
      </Link>
      <hr />
      <Link href="/change-llp-agreement">
      <li>
        <a href="#">Change LLP Agreement</a>
      </li>
      </Link>
      <hr />
      <Link href="/change-partnership-deed">
      <li>
        <a href="#">Change Partnership Deed</a>
      </li>
      </Link>
      <hr />
      <Link href="/increase-authorized-share-capital">
      <li>
        <a href="#">Increase Authorised Share Capital</a>
      </li>
      </Link>
      <hr />
    </ul>
  );
}
