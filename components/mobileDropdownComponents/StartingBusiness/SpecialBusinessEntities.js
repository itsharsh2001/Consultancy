import classes from "./SpecialBusinessEntities.module.css";
import Link from 'next/link'

export default function SpecialBusinessEntities() {
  return (
    <ul className={classes.menu}>
      {/* <hr /> */}
      <Link href="/register-an-indian-subsidiary">
      <li>
        <a href="#">Register an Indian Subsidiary</a>
      </li>
      </Link>
      <hr />
      <Link href="/section-8-company-registration">  
      <li>
        <a href="#">Section 8 Company Registration</a>
      </li>
      </Link>
      <hr />
      <Link href="/producer-company-registration">
      <li>
        <a href="#">Producer Company Registration</a>
      </li>
      </Link>
      <hr />
    </ul>
  );
}
