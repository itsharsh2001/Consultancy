import classes from "./SatisfactionGaurantee.module.css";
import Link from 'next/link'

function SatisfactionGaurantee() {
  return (
    <div className={classes.satisfactiongaurantee}>
      <h3>SIMPLE – AFFORDABLE – TRANSPARENT</h3>
      <h4>Get Experts advice and save your time, run your business smoothly without any hurdles</h4>
      <p>
      A business needs to maintain its books of accounts and pay taxes and file returns and a lot. Now if a businessman runs a business and does all of these mandatory things all along, it become very hectic. So it’s better to just take experts assistance and reduce workload off your shoulders.
      </p>
      <p>
      Choose us and get the easiest manner to get your tax and compliances accomplished and Let Experts control your Tax & Business legalities.
      </p>
      <span>
      <Link href="/satisfaction-guarantee-policy">READ STATISFACTION GUARANTEE</Link>
      </span>
    </div>
  );
}

export default SatisfactionGaurantee;
