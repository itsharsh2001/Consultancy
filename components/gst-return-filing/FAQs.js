import classes from "./FAQs.module.css";
import FAQ from "./ui/FAQ.js";

export default function FAQs() {
  const faq1 = (
    <div>
      Tax Payment or any penalty, fees, etc. are familiar thru the following modes;
<li>Internet Banking</li>
<li>NEFT or RTGS</li>
<li>This quantity shall be credited to the digital money ledger of the registered dealer.</li>

    </div>
  );
  const faq2 = (
    <div>
      Following are the standard standards of obligatory registration:
      <li>
        If the complete commercial enterprise turnover exceeds ₹ forty Lakh/₹20
        Lakh in case of enterprise of goods/providing provider respectively in
        the worried monetary yr (Threshold for North-eastern States is ₹ 20
        Lakh/ ₹ 10 Lakh in case of commercial enterprise of goods/providing
        provider respectively)
      </li>
      <li>Casual taxable man or woman / Non-Resident taxable person</li>
      <li>Agents of a provider & Input Service Distributor (ISD)</li>
      <li>Electronic Commerce Aggregator</li>
      <li>Person presenting via an E-commerce platform</li>
      In addition to above, there are positive different standards when
      registration is mandatory. Apart from obligatory registration, one can
      additionally observe for GST registration voluntarily.
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
        heading="What are the modes of fee for GST?"
        para={faq1}
      />
      <FAQ heading="What data is required to file GST return online?" para="Prescribed statistics from the invoices together with the HSN code in recognize to the grant of items and the accounting code in admire to the grant of the offerings generated wishes to be uploaded in the return." />
      <FAQ
        heading="Do all people need to file the Annual return even if one is submitting the Monthly return?"
        para="All taxpayers submitting a return in GSTR-1 to GSTR-3, different than ISD’s, casual/non-resident taxpayers, taxpayers below composition scheme, and TDS/TCS detectors, are required to file an annual return (GSTR-9) alongside with the month-to-month return."
      />
      <FAQ heading="Is everybody supposed to file GST returns or are there any exemptions?" para="Every registered dealer, whether or not being an everyday dealer or in any other case ought to file the return primarily based on the transactions or things to do concerned in the business." />
      <FAQ
        heading="What are taxable occasions beneath the GST Act?"
        para="Any furnish i.e. transaction such as the sale, transfer, barter; exchange, license, rental, rent or disposal made or agreed to be made for a consideration, of taxable items or services, desires to be viewed as a taxable match below the GST Act."
      />
      <FAQ
        heading="How have to I supply my statistics to FINTAXWIZ.COM to file my returns?"
        para="The records or the invoices shall be supplied in CSV format. In case if the purchaser is the use of any Accounting software program like Tally, QuickBooks etc., the small print can be effortlessly extracted in CSV structure which will be used to feed the facts in Returns"
      />
      <FAQ
        heading="What steps are worried in submitting of GST returns for every month?"
        para="Transaction-wise small print is to be supplied on the month-to-month groundwork by way of a client. This is to be executed manually in the shared structure by using FINTAXWIZ.COM. Or one can decide to take an extract from the accounting software (GST Ready Software) via FINTAXWIZ.COM, which will be reviewed by means of the professionals and the return, will be filed after a thorough evaluate and confirmation."
      />
      <FAQ
        heading="What is the importance of all these returns?"
        para="By filling the returns with the Government, the data and important points will be intimated to the Government. Further, the facts furnished will measure the legal responsibility of the Tax-payer. Also, returns submitting assist you declare the eligible Input Credit. In addition to which the normal submitting will rely on greater ranking in the GST Compliance Rating."
      />
      <FAQ
        heading="Which software’s are well matched for FINTAXWIZ.COM to file returns?"
        para="Transaction accounted in any software program (GST Ready) like tally, QuickBooks, or any cloud-based accounting that approves statistics sharing and switch into CSV format. This is to make sure fast and user-friendly GST submitting process."
      />
      <FAQ
        heading="How have to I supply my statistics to FINTAXWIZ.COM to file my returns?"
        para="The records or the invoices shall be supplied in CSV format. In case if the purchaser is the use of any Accounting software program like Tally, QuickBooks etc., the small print can be effortlessly extracted in CSV structure which will be used to feed the facts in Returns."
      />
    </div>
  );
}
