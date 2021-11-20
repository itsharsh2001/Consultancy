import classes from "./FAQs.module.css";
import FAQ from "./ui/FAQ.js";

export default function FAQs() {
  const faq1 = (
    <div>
    Once, the business enterprise is registered, it must follow below-mentioned necessities on priority: 
<li>Opening a current account of the business enterprise</li>
<li>Appointment of Statutory auditor</li>
<li>Deposit of paid-up capital mentioned while registration </li>
<li>Issue and allotment of shares</li>

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
        heading="What is to be done by the enterprise after changing OPC to private limited company?
        "
        para="After the OPC is transformed right into a Private Limited Company, it's far compulsory for the enterprise to increase its paid-up share capital to ₹ 50 Lakh or the annual turnover to ₹ 2 Crore or greater. If the enterprise fails to conform with those provisions, it shall covert back itself to an OPC by passing a unique resolution."
      />
      <FAQ
        heading="What are the conditions for changing OPC to a private limited company?"
        para="The OPC have to convert itself into a Private Company in case of the following situations: – If the paid-up share capital of the OPC hits greater than ₹ 50 lakh. – If the annual turnover exceeds ₹ 2 crores consecutively for the ultimate three (3) years."
      />
      <FAQ
        heading="Whether the OPC can voluntarily continue for its conversion?"
        para="Yes, OPC may voluntarily convert itself into a Private Company or Public Company concern to certain condition. The OPC may also practice for voluntary conversion only if a period of years has been passed since its incorporation."
      />
      <FAQ
        heading="Can an OPC be transformed or incorporated as a nonprofit organization?"
        para="NO, an OPC can't be incorporated as or transformed right into a company for non-profit, charitable purpose, and it can't perform non-banking, financial, or funding activities which include funding in securities of any company body."
      />
    </div>
  );
}
