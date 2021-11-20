import classes from "./FAQs.module.css";
import FAQ from "./ui/FAQ.js";

const faq1 = (<div>
  The boom in capital shall acquire following consent or approval:
<li> 1. Consent from the Board;</li>
<li>2. Consent from the individuals of the company;
 And</li>
 <li>3. Approval from concerned ROC</li>

</div>)


export default function FAQs() {
  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <hr />
        <h2 className={classes.containerh2}>
        Benifits of Increasing Authorized Share Capital
        </h2>
        <hr />
      </div>
      <FAQ
        heading="Increase in borrowing capability"
        para="Increase in inner funding capability helps the borrowing capacity of the company."
      />

      <FAQ
        heading="Allow further issue of capital"
        para="If the need arises to boom the paid-up capital, first authorized capital ought to be increased."
      />

      <FAQ
        heading="Money to develop the enterprise"
        para="With an infusion of cash derived from the sale of stock, the organization might also additionally grow its enterprise while not having to borrow from conventional sources."
      />

      <FAQ
        heading="Money for shareholders and others"
        para="With extra cash in the company offers, extra compensation can be provided to investors, stakeholders, founders and owners, partners, senior management and personnel enrolled in inventory possession plans."
      />
      <FAQ
        heading="Other advantages of going public"
        para="Once the company has gone public, extra equities can be effortlessly sold to raise capital. A publicly-traded company with inventory that has completed successfully will typically find it less complicated to borrow money."
      />
    </div>
  );
}
