import classes from "./FAQs.module.css";
import FAQ from "./ui/FAQ.js";

export default function FAQs() {
  const faq1 = (
    <div>
      Late submitting charge will be levied primarily based on the date of submitting belated return. The late charge for filing relies upon on the duration of filing:
<li>1. For return filed after due date however until December – late submitting costs of ₹ 5,000 will be charged</li>
<li>2. For return filed after thirty first December – late submitting prices of ₹10,000 will be charged</li>
However, for small taxpayers with profits up to ₹ 5 Lakh, the prices are confined to ₹ 1,000 only.

    </div>
  );
  const faq2 = (
    <div>
      No, the profits tax is paid all through the economic 12 months in which the earnings is earned. While submitting ITR, if the tax legal responsibility is extra than the already paid improve tax, the due quantity ought to be paid with interest, if applicable.<br/>
Online ITR file or file ITR offline-which is easy?<br/>
The ITR file on line or Income tax e submitting is comparatively easy. To file profits tax online; a few files are solely required. If you search how to practice for itr, the e return submitting will be proven as an simpler process.<br/>
What are the due dates for IT return on line filing?<br/>
The due dates for submitting ITR on line are cited under – let’s take an e.g. of (F.Y. 2017 – 18 & A.Y. 2018 – 19)<br/>
1.	Up to thirty first July of subsequent 12 months (31st July, 2018) – Individuals, HUF, BOI and AOP (who does no longer fall underneath the audit provisions)<br/>
2.	Up to thirtieth September of subsequent yr. (30th September, 2018) – Companies along with different entities on which Audit provisions are relevant

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
      <FAQ heading="Is it obligatory to file an earnings tax return if my incomes are beneath Rs 2, 50,000?" para="No, it is now not obligatory to file an earnings tax return if your annual earnings are under Rs 2,50,000." />
      <FAQ
        heading="Who is required to file an ITR?"
        para="Every Indian citizen whose gross whole earnings exceed the taxable restriction need to file an ITR. This implies, persons and Hindu Undivided Families (HUFs) with complete annual earnings exceeding Rs. 2, 50,000 are required to file the earnings tax returns. For senior residents (individuals between 60 years and eighty years of age) the threshold is Rs 3, 00,000, and that for very senior residents (aged above 80 years) it is Rs 5.00,000."
      />
      <FAQ
        heading="Is it feasible to revise the Income Tax return even after the acknowledgement is generated?"
        para="To revise the filed ITR, the cut-off date is 1 12 months from the stop of the subsequent economic year. Therefore, in the case of F.Y. 2017-18, the ultimate date of submitting would be thirty first March, 2019."
      />
      <FAQ
        heading="Can I file ITR as soon as the remaining date of submitting is gone?"
        para="In case you fail to file the return on a due date, there is a provision to file return up to a positive date, alternatively with a late submitting charge and decreased benefits, the belated return can be filed earlier than the give up of Assessment Year for the worried monetary year. That means, for F.Y. 2017-18, belated returns can be filed until thirty first March, 2019."
      />
      <FAQ
        heading="Do I want to file return if there is a loss in my commercial enterprise income?"
        para="Yes, submitting ITR in case of loss would be in your hobby itself. With on line ITR filing, you can elevate ahead the losses to a positive upcoming monetary yr. to set off losses in opposition to the future profits."
      />
      <FAQ
        heading="Whether NIL ITR is obligatory to be filed?"
        para="All the enterprise entities (Company, LLP, and Firm) need to file ITR even if their whole profits or tax payable is zero. In case of an individual, when profits exceed the fundamental exemption limit, it is endorsed to file ITR to keep away from scrutiny from the Income Tax Department. Also, if your tax liabilities is zero and have filed the ITR before, it is imperative to be filed. The equal can be furnished as a proof of earnings on every occasion required."
      />
      <FAQ
        heading="What is the penalty for a prolong in submitting ITR?"
        para={faq1}
      />
      <FAQ
        heading="Whether fee of tax is made whilst IT return filing?"
        para={faq2}
      />
    </div>
  );
}
