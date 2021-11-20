import classes from "./FAQs.module.css";
import FAQ from "./ui/FAQ.js";

export default function FAQs() {
  const faq1 = (
    <div>
      Late submitting charge will be levied primarily based on the date of
      submitting belated return. The late charge for filing relies upon on the
      duration of filing:
      <li>
        1. For return filed after due date however until December – late
        submitting costs of ₹ 5,000 will be charged
      </li>
      <li>
        2. For return filed after thirty first December – late submitting prices
        of ₹10,000 will be charged
      </li>
      However, for small taxpayers with profits up to ₹ 5 Lakh, the prices are
      confined to ₹ 1,000 only.
    </div>
  );
  const faq2 = (
    <div>
      No, the profits tax is paid all through the economic 12 months in which
      the earnings is earned. While submitting ITR, if the tax legal
      responsibility is extra than the already paid improve tax, the due
      quantity ought to be paid with interest, if applicable.
      <br />
      Online ITR file or file ITR offline-which is easy?
      <br />
      The ITR file on line or Income tax e submitting is comparatively easy. To
      file profits tax online; a few files are solely required. If you search
      how to practice for itr, the e return submitting will be proven as an
      simpler process.
      <br />
      What are the due dates for IT return on line filing?
      <br />
      The due dates for submitting ITR on line are cited under – let’s take an
      e.g. of (F.Y. 2017 – 18 & A.Y. 2018 – 19)
      <br />
      1. Up to thirty first July of subsequent 12 months (31st July, 2018) –
      Individuals, HUF, BOI and AOP (who does no longer fall underneath the
      audit provisions)
      <br />
      2. Up to thirtieth September of subsequent yr. (30th September, 2018) –
      Companies along with different entities on which Audit provisions are
      relevant
    </div>
  );
  const faq3 = (
    <div>
      Following are the exclusions from the GST Registration:
      <li>An agriculturist – for the motive of agriculture</li>
      <li>
        Person completely offering goods/ offerings no longer responsible to tax
        or utterly exempted from Tax
      </li>
      <li>Services via any Court or Tribunal hooked up beneath the law</li>
      <li>Services through an employee</li>
      <li>
        Services of funeral, burial, crematorium or mortuary, along with
        transportation of the deceased
      </li>
      <li>Sale of land concern to Schedule 5 (ii)(b), sale of building</li>
      <li>
        {" "}
        Actionable claims, different than lottery, having a bet and gambling
      </li>
      <li> Person falling under threshold exemption restrict prescribed</li>
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
        heading="What is the penalty for extend or non-filing?"
        para="The taxpayer failed to file TDS return earlier than due date has to pay ₹ 200 per day of prolong in submitting as an extra fee. Apart from an extra fee, the penalty can be levied u/s 271H of Income Tax Act. The minimal penalty prescribed is ₹ 10,000 which may also lengthen to One Lakh Rupees."
      />
      <FAQ
        heading="How and when the TDS should be deposited?"
        para="Tax Deducted at Source (TDS) ought to be deposited thru banks the use of Challan 281 quoting the TAN range of the entity. The cut-off date for charge of TDS is the seventh day of every month."
      />
      <FAQ
        heading="What is a TDS Certificate?"
        para="As the identify says, TDS is gathered on supply of profits and consequently the frequency of series is as well-known as the transactions are. This makes song of deduction difficult. Therefore, a certificates on the letterhead of the deductor is issued to deductee for the TDS payment. Individuals are cautioned to request for TDS certificates anyplace applicable, if now not already provided."
      />
      <FAQ
        heading="Who is required to file TDS return online?"
        para="Any assesse deducting tax from a supply should file the TDS return. Unless one has deducted tax, a requirement to file TDS return does now not arise."
      />
    </div>
  );
}
