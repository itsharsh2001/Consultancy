import classes from "./FAQs.module.css";
import FAQ from "./ui/FAQ.js";

export default function FAQs() {
  const faq1 = (
    <div>
    Payment for the tax or any penalty, fees, etc. shall be made by using any of these charge modes:
<li>Internet Banking</li>
<li>NEFT or RTGS</li>
This quantity shall be credited to the digital money ledger of the registered dealer.


    </div>
  );
  const faq2 = (
    <div>
      Following are the standard standards of obligatory registration:
<li>If the complete commercial enterprise turnover exceeds ₹ forty Lakh/₹20 Lakh in case of enterprise of goods/providing provider respectively in the worried monetary yr (Threshold for North-eastern States is ₹ 20 Lakh/ ₹ 10 Lakh in case of commercial enterprise of goods/providing provider respectively)</li>
<li>Casual taxable man or woman / Non-Resident taxable person</li>
<li>Agents of a provider & Input Service Distributor (ISD)</li>
<li>Electronic Commerce Aggregator</li>
<li>Person presenting via an E-commerce platform</li>
In addition to above, there are positive different standards when registration is mandatory. Apart from obligatory registration, one can additionally observe for GST registration voluntarily.



    </div>
  );
  const faq3 = (
    <div>
      Following are the exclusions from the GST Registration:
<li>An agriculturist – for the motive of agriculture</li>
<li>Person completely offering goods/ offerings no longer responsible to tax or utterly exempted from Tax</li>
<li>Services via any Court or Tribunal hooked up beneath the law</li>
<li>Services through an employee</li>
<li>Services of funeral, burial, crematorium or mortuary, along with transportation of the deceased</li>
<li>Sale of land concern to Schedule 5 (ii)(b), sale of building</li>
<li> Actionable claims, different than lottery, having a bet and gambling</li>
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
        heading="Do I want to file GST Returns, if I have utilized for GST Registration Voluntarily?
        "
        para="Every individual registered beneath GST, whether or not mandatorily or voluntarily, shall file the requisite GST Returns in the manner prescribed and inside the time restriction prescribed for same."
      />
      <FAQ
        heading="What are the modes of charge for GST?"
        para={faq1}
      />
      <FAQ
        heading="How is the tax to be gathered at supply for e-commerce operator?"
        para="Every e-commerce operator engaged in facilitating the furnish of taxable goods/services shall gather the tax at supply at the time of deposit or at the time of payment, whichever is earlier."
      />
      <FAQ
        heading="Who is required to follow for GST number?"
        para={faq2}
      />
      <FAQ
        heading="At which place, have to I gain registration for GST?"
        para="The dealer of Goods and Services is required to follow for GST registration in the nation from the place the taxable items or offerings are supplied, bringing up the place(s) of business. When the locations of Business are located in extra than one state, software of GST shall be made from extra than one place."
      />
      <FAQ
        heading="Can an individual practice for single GST Registration for all the businesses, in case if the enterprise is installed in exclusive States of the country?"
        para="No, a individual can't observe for a single GST Registration. A character has to observe for separate GST Registration for each and every nation from which he/she is carrying out the operations, whether or not below the identical title or different. The equal applies to a individual having the identical PAN and working commercial enterprise from exclusive states."
      />
      <FAQ
        heading="What is the proof of registration beneath GST?"
        para="Once the utility is made for registration beneath Goods & Service Tax Act, the ready officer shall confirm the utility submitted and on his/her satisfaction, the officer problems the Certificate of Registration beneath GST in tender copy. The Certificate issued additionally mentions the GSTIN disbursed to the applicant."
      />
      <FAQ
        heading="Who is exempted for GST Registration in India?"
        para={faq3}
      />
      <FAQ
        heading="What are taxable occasions below the GST Act?"
        para="The tournament of grant of Goods and/or Services i.e. transactions such as the sale, transfer, barter, exchange, license, rental, hire or disposal made, or agreed to be made for a consideration of taxable items or services, is to be regarded a taxable match beneath the GST Act."
      />
      <FAQ
        heading="What is the Government price for on-line GST Registration in India?"
        para="There are no authorities costs for GST registration."
      />
    </div>
  );
}
