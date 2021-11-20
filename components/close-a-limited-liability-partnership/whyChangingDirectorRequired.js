import classes from "./FAQs.module.css";
import FAQ from "./ui/FAQ.js";

export default function FAQs() {
  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <hr />
        <h2 className={classes.containerh2}>
          Why close a limited liability partnership?
        </h2>
        <hr />
      </div>
      <FAQ
        heading="To keep away from compliance and filing responsibilities for the LLP’s which aren't active."
        para="If the LLP is dormant it’s higher to wind up than fulfill the compliances."
      />

      <FAQ
        heading="To keep away from fines and penalty for overdue filing, it is better to formally Wind up LLP’s that are inactive."
        para="LLP that hasn’t opened a bank account or commenced enterprise activity might have to file the subsequent filings every yr to keep LLP compliance and keep away from penalty."
      />
    </div>
  );
}
