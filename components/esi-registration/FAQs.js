import classes from "./FAQs.module.css";
import FAQ from "./ui/FAQ.js";

export default function FAQs() {
  const faq1 = (
    <div>
      There are few archives which an entity registered beneath ESIC Scheme desires to preserve many times for submitting ESI returns. They are as under:
       <li> Attendance register</li>
       <li> Form 6</li>
        <li> Register of wages</li>
        <li> Register of any accidents on the premises</li>
        <li> Inspection book</li>
        <li> Monthly challans and returns submitted for ESI.</li>
    </div>
  );

  const faq2 = (
    <div>
      After the registration of the company, the following should be fulfilled:
      <li>Current account be opened inside 30 days of PAN enrollment.</li>
      <li>Appoint a Statutory Auditor</li>
      <li>
        The settled up capital should be deposited which was referenced while
        registration
      </li>
      <li>Issue and assign shares</li>
    </div>
  );

  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <hr />
        <h2 className={classes.containerh2}>FAQ</h2>
        <hr />
      </div>
      <FAQ
        heading="What if the profits of an worker exceeds Rs. 21000/- in a month, will he be nevertheless blanketed beneath scheme or the contribution from each aspect will stop?"
        para="No, the scheme will stay enforced until he continues to be phase of the identical company irrespective of the reality that he/ she is incomes greater income than 21000/- per month."
      />
      <FAQ
        heading="How ESI scheme is beneficial to an employee?"
        para="This scheme is in particular designed through the authorities to grant full clinical and monetary help to the worker who is registered below the ESI Act. This scheme helps the worker to get compensation of the loss of his/her wage for the duration of his/her absence from work due to sickness, fitness issue, maternity, or employment inquiry. The advantages listed in the scheme extend to insured person’s family contributors also."
      />
      <FAQ
        heading="Why this scheme is called as Self-Funding Scheme?"
        para="The scheme is especially designed out of contribution made through agency & worker each month at a constant proportion of the profits paid. Under this scheme, State Government additionally contributes 1/8th Share of the complete value of the Medical Assistance."
      />
      <FAQ
        heading="After registering beneath ESIC Scheme, is there any unique range disbursed to the employee?"
        para="To confirm the important points of the employee, the ESI Scheme troubles a Unique Identification wide variety to every worker or employee which is known as as Insurance quantity and the identical can be used for all operational purposes?"
      />
      <FAQ
        heading="As an corporation in how many days I must get ESIC Registration after falling below eligibility standards of this scheme?"
        para="Once the company/entity falls below the eligibility criteria, the registration wishes to be taken inside 15 days from the date it turn out to be eligible. This is the statutory duty of the shop/establishment or an entity."
      />
      <FAQ
        heading="Can I switch my advantages to any one different than my household members?"
        para="No, the advantages beneath this scheme are non-transferable."
      />
      <FAQ
        heading="What are the eligibility standards for ESI Registration in India?"
        para="The standard rule to be certified for ESI (Employees’ State Insurance) registration is to have 10 or greater employees/workers. However, in few states and regions, ESI is relevant solely if there are greater than 20 employees."
      />
      <FAQ
        heading="What is the time restriction for price of contribution?"
        para="In appreciate of an worker the contribution shall be paid in a top registered financial institution of the Company, inside 21 days of the remaining day of the calendar month in which the contribution is due for any duration of wage"
      />
      <FAQ
        heading="Which are the critical files required to preserve for submitting ESI Returns?"
        para={faq1}
      />
      <FAQ
        heading="What is the compliance after registering below ESIC Scheme?"
        para="Every entity included below this scheme wishes to comply with obligatory submitting such as ordinary savings of month-to-month contribution to file half-yearly returns and document to ESIC authority for any modifications or modification made in commercial enterprise activity, address, possession and management, etc."
      />
    </div>
  );
}
