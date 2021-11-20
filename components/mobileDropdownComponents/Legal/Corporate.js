import classes from "./Corporate.module.css";

export default function Corporate() {
  return (
    <ul className={classes.menu}>
      {/* <hr /> */}
      <Link href="/legal-drafting/Adding-a-director-resolution">
      <li>
        <a href="#">Adding a Director Resolution</a>
      </li>
      </Link>
      <hr />
      <Link href="/legal-drafting/Resignation-of-director-resolution">
      <li>
        <a href="#">Resignation of Director resolution</a>
      </li>
      </Link>
      <hr />
      <Link href="/legal-drafting/No-Objection-certificates">
      <li>
        <a href="#">No Objection Certificate (for address proof)</a>
      </li>
      </Link>
      <hr />
      <Link href="/legal-drafting/Private-constrained-business-enterprise-to-LLP-resolution">
      <li>
        <a href="#">Pvt Ltd Company to LLP resolution</a>
      </li>
      </Link>
      <hr />
      <Link href="/legal-drafting/Shareholders-agreement">
      <li>
        <a href="#">Shareholders Agreement</a>
      </li>
      </Link>
      <hr />
      <Link href="/legal-drafting/Drafting-Term-Sheet">
      <li>
        <a href="#">Term Sheet</a>
      </li>
      </Link>
      <hr />
      <Link href="/legal-drafting/Private-restrained-enterprise-to-Public-restricted-organization-resolution">
      <li>
        <a href="#">
          Private Limited Company to Public Limited Company resolution
        </a>
      </li>
      </Link>
      <hr />
    </ul>
  );
}
