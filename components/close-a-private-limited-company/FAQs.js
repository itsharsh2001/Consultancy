import classes from "./FAQs.module.css";
import FAQ from "./ui/FAQ.js";

export default function FAQs() {
  const faq1 = (
    <div>
    The Registrar of Companies can put off the organization name from the listing of organizations if, he has reasonable reason to trust that:
 <li>A Company didn't begin its enterprise inside one year of its incorporation; or</li>
 <li>A organization isn't carrying on any enterprise or operation for two at once preceding financial years and has now no longer made any application inside such duration for acquiring the status of a dormant organization.</li>

    </div>
  );
  const faq2 = (
    <div>
      The copyright proprietor has the extraordinary rights to:
<li>Reproduce and distribute the work in copies or phonorecord (material object i.e. an audio tape or CD, or an MP3 file. ) to the public through sale or switch of possession or license.</li>
<li>Make additions to the unique work or regulate it, display, existing or function them amongst the public; and</li>
<li>Exclude others to declare possession or use besides the authentic creators’ permission.</li>


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
        heading="Can Registrar of Company additionally provokes strike-off?"
        para={faq1}
      />
      <FAQ
        heading="How long does it take for a company to be dissolved under fast track exit scheme? "
        para="After submitting the application with the Ministry of Corporate Affairs, it takes approximately 90 days for putting off the Company from MCA records. On acclaim for strike-off through RoC, the notice of strike-off is posted on its internet site to open for any objection or representations through 1/3 parties."
      />
      <FAQ
        heading="What is the time restriction to file the closure files with the Registrar?"
        para="The remaining files should be filed inside 30 days from the date of signing of the belongings and liabilities statement."
      />
      <FAQ
        heading="What is dissolving a organization under fast track exit from MCA?"
        para="Fast Track Exit is a scheme brought by the Ministry of Corporate Affairs (MCA) for inactive companies to wind up and get their names struck off from the MCA document with lesser formalities."
      />
      <FAQ
        heading="When an application for strike-off may be filed?"
        para="It may be filed best whilst the company repays or extinguishes all its liabilities and obtain a No Objection Certificate (NOC) from the creditors before submitting the closure application. And conduct a assembly in which all of the administrators determine upon the closure with the aid of using signing a special decision or a consent of seventy-five percentage participants concerning paid up share capital."
      />
      <FAQ
        heading="What are the advantages of closure of private limited organization?"
        para="The closure is the best alternative in case the organization is not running as it: Saves the every year compliance cost No non-compliance risk. No risk of excessive consequences and prosecutions No risk of getting into default."
      />
      <FAQ
        heading="When can a corporation be stated to be dissolved?"
        para="ROC will publish a listing of organizations struck off in the Official Gazette. The Company under fast-track exit mode could be taken into consideration closed from the date of publication of the notice in Official Gazette."
      />
      <FAQ
        heading="Why is it important to intimate the Registrar for closing the Private Limited Company?"
        para="It is important to intimate the Registrar for the closure of Private Limited Company to replace the MCA information and make enterprise free from all its legal compliances."
      />
    </div>
  );
}
