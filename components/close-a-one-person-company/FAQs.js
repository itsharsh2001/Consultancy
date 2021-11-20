import classes from "./FAQs.module.css";
import FAQ from "./ui/FAQ.js";

export default function FAQs() {
  const faq1 = (
    <div>
    The Registrar of Companies can remove the organization name from the listing of companies if he has reasonable motive to consider that:
<li>A Company did not start its commercial enterprise within 12 months of its incorporation or</li>
<li>A organization isn't always carrying on any business or operation for 2 immediately preceding financial years and has now no longer made any application inside such duration for acquiring the status of a dormant organization.</li>


    </div>
  );
  const faq2 = (
    <div>
      A closure is the best choice in case the organization is not running as it: 
      <li>Saves the every year compliance cost No non-compliance threat.</li>
<li>No risk of excessive consequences and prosecutions</li>
<li>No risk of moving into default</li>
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
        heading="Can Registrar of Company additionally remove the Company, i.e. obligatory organization closure with the aid of using Registrar of Companies (ROC)?"
        para={faq1}
      />
      <FAQ
        heading="How long does it take dissolves a one person business enterprise under fast track exit scheme?"
        para="After submitting the application with the Ministry of Corporate Affairs, it takes approximately 90 days for striking off the Company from MCA records."
      />
      <FAQ
        heading="What is the time restriction to file the closure files with the Registrar?"
        para="The remaining files should be filed inside 30 days from the date of signing of the assets and liabilities statement."
      />
      <FAQ
        heading="What is the distinction among Closure, Winding up, and Dissolution of OPC?"
        para="Closure of the OPC is done voluntarily and is performed through the fast track exit scheme. Winding up of the enterprise can be voluntary or by the order of the Court via way of means of appointing an official liquidator to reveal the procedure of Winding up. Dissolution is initiated via way of means of the Court for ending the legal existence of the Company."
      />
      <FAQ
        heading="Why it worthwhile to close the Company in India ?"
        para={faq2}
      />
      <FAQ
        heading="What is mean via way of means of One Person Co.  (OPC)  Closure?"
        para="A closure of an one person company may be filed whilst the business enterprise isn't always active and desires to shake hands off its liabilities and compliances. It has to pay off or extinguish all their liabilities and receive a No Objection Certificate (NOC) from the lenders before submitting the closure application. And conduct a assembly in which the director and participants determine upon the closure via way of means of signing a special resolution or a consent of seventy-five percentage participants concerning paid up share capital."
      />
      <FAQ
        heading="How to dissolve a one person company in India?"
        para="A Company closure is filed under Form STK 2 together with the government fees of Rs.5000/- and a few important docs. A One Person Company closure may be filed after the subsequent steps: First step is to pay all liabilities and get an NOC for the closure 2/3rd majority Consent of the creditors."
      />
      <FAQ
        heading="When can a one person company be stated to be dissolved?"
        para="ROC will submit listing of companies struck off in the Official Gazette. The Company under fast track exit mode could be taken into consideration closed from the date of publication of the notice in Official Gazette."
      />
      <FAQ
        heading="Why is it important to intimate the Registrar for closing the One Person Company?"
        para="It is important to intimate the Registrar for the closure of Private Limited Company to update the MCA data and make company free from all its legal compliances."
      />
    </div>
  );
}
