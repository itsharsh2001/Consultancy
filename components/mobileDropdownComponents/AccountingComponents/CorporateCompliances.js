import classes from "./CorporateCompliances.module.css";
import Link from "next/link";

export default function CorporateCompliances() {
  return (
    <ul className={classes.menu}>
      <Link href="/annual-compliance-for-llp">
      <li>
        <a href="#">Annual Compliances for Private Limited Company</a>
      </li>
      </Link>
      <hr />
      <Link href="/annual-compliance-for-llp">
      <li>
        <a href="#">Annual compliance for Limited Liability Partnership</a>
      </li>
      </Link>
      <hr />
      <Link href="/file-DIR-3-KYC">
      <li>
        <a href="#">File DIR-3 KYC</a>
      </li>
      </Link>
      <hr />
      <Link href="/file-INC-20A">
      <li>
        <a href="#">File INC-20A</a>
      </li>
      </Link>
      <hr />
      <Link href="/file-INC-22A">
      <li>
        <a href="#">File INC-22A</a>
      </li>
      </Link>
      <hr />
    </ul>
  );
}
