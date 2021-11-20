import classes from "./UpdateCorporationInformation.module.css";
import Link from 'next/link';

export default function UpdateCorporationInformation() {
  return (
    <ul className={classes.menu}>
      <Link href="/proprietorship-to-partnership">
      <li>
        <a href="#">Proprietorship to Partnership</a>
      </li>
      </Link>
      <hr />
      <Link href="/proprietorship-to-limited-liability-partnership">
      <li>
        <a href="#">Proprietorship to LLP</a>
      </li>
      </Link>
      <hr />
      <Link href="/proprietorship-to-private-limited">
      <li>
        <a href="#">Proprietorship to Private Limited Company</a>
      </li>
      </Link>
      <hr />
      <Link href="/proprietorship-to-opc">
      <li>
        <a href="#">Proprietorship to OPC</a>
      </li>
      </Link>
      <hr />
      <Link href="/partnership-to-llp">
      <li>
        <a href="#">Partnership to LLP</a>
      </li>
      </Link>
      <hr />
      <Link href="/partnership-to-private-limited">
      <li>
        <a href="#">Partnership to Private Limited Company</a>
      </li>
      </Link>
      <hr />
      <Link href="/llp-to-private-limited">
      <li>
        <a href="#">LLP to Private Limited Company</a>
      </li>
      </Link>
      <hr />
      <Link href="/opc-to-private-limited">
      <li>
        <a href="#">OPC to Private Limited Company</a>
      </li>
      </Link>
      <hr />
      <Link href="/private-limited-to-llp">
      <li>
        <a href="#">Private Limited company to LLP</a>
      </li>
      </Link>
      <hr />
      <Link href="/private-limited-to-public-limited">
      <li>
        <a href="#">Private company to Public company</a>
      </li>
      </Link>
      <hr />
    </ul>
  );
}
