import classes from "./FAQs.module.css";
import FAQ from "./ui/FAQ.js";

export default function FAQs() {
  const faq1 = (
    <div>
      The fundamental process for registering a Private Limited Company in India
      is as per the following:
      <li>Get Digital Signature Certificate (DSC)</li>
      <li>
        Self-Attest the Documents for Private Limited Company Registration
        including AoA, MoA and service bills.{" "}
      </li>
      <li>
        Record with structure INC-32, this structure has illustrated for
        smoothing out many cycles including getting DIN, Name Reservation,
        Incorporation, PAN application, TAN number.
      </li>
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
        heading="How and when need to the TDS be deposited?"
        para="Tax Deducted at Source (TDS) should be deposited thru banks the use of Challan 281, quoting the TAN quantity of the entity. The closing date for fee of TDS is the seventh day of each and every month."
      />
      <FAQ
        heading="Within how plenty time is the Tax Account Number (TAN) is distributed with the aid of NSDL?"
        para="Once utilized generally, it takes 7-10 working days for TAN allotment by way of NSDL. However, receipt of a bodily TAN letter might also take time relying upon the processing time via the department. Once the software for TAN range is made, it is continually viable to recognize your TAN status."
      />
      <FAQ
        heading="What are the due dates to file TDS Returns?"
        para="TDS Return has to be filed quarterly on the thirty first day of July, October, January and May. The TDS return filed on these months will correspond to the transaction of the previous three months."
      />
      <FAQ
        heading="Can a PAN be used alternatively of TAN?"
        para="No, a PAN can't be used alternatively of TAN. PAN and TAN serve two one of a kind purposes Therefore, it is obligatory for this deducting tax at supply to acquire a TAN."
      />
    </div>
  );
}
