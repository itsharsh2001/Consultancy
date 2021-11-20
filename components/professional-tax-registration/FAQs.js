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
        heading="What is the registration certificate?"
        para="The employers are required to achieve the registration when personnel are appointed. This makes the personnel eligible to deduct the expert tax from his employee’s salaries. Registration need to be bought inside the 30 days of using staff."
      />
      <FAQ
        heading="Who shall reap the Professional Tax Registration?
"
        para="The duty to acquire a registration lies with the proprietor of the enterprise or profession. The enterprise owner/employer is required to deduct the expert tax based totally on the expert tax slab from the salaries of personnel and pay the identical to Government earlier than the fifteenth day of every month or quarter as applicable."
      />
      <FAQ
        heading="What is enrollment certificate?"
        para="Also recognized as the Professional Tax Enrolment Certificate (PTEC), this registration is acquired for the price of taxes by using the employers."
      />
      <FAQ
        heading="Whether the separate software is required for extra location of work?"
        para="Yes, if you have extra than one area of work, you have to make a separate utility for expert tax registration to the involved authority."
      />
      <FAQ
        heading="In Which States is Professional Tax applicable?"
        para="The State Governments of Punjab, Bihar, Karnataka, West Bengal, Andhra Pradesh, Telangana, Maharashtra, Tamil Nadu, Gujarat, Assam, Sikkim, Kerala, Meghalaya, Orissa, Tripura and Madhya Pradesh have levied expert tax."
      />
      <FAQ
        heading="What are the penalties of non-compliance of Professional tax payment?"
        para="For delays in acquiring Registration Certificate, a penalty of ₹ 5/- per day is levied. In case of non/late price of occupation tax, the penalty wills quantity to 10% of the quantity of tax. In case of late submitting of returns, a penalty of ₹ 300 per return will be imposed."
      />
      <FAQ
        heading="What are the due dates to file and pay Professional Tax?"
        para="The due date for the price of Profession Tax is thirtieth June for the personnel enrolled earlier than thirty first May of the year. The humans enrolled after thirty first May of a yr. are requested to pay Profession Tax inside one month from the date of enrolment. Employers are requested to file month-to-month return alongside with due fee of tax."
      />
      <FAQ
        heading="Whether Shop & Establishment registration is additionally required for this registration?"
        para="In cities like Ahmedabad, each the registration needs to be received simultaneously. In a few places, Shop & institution registration is a requirement for this application. Hence, it relies upon on the regulation of the place the jurisdiction of the premise is situated."
      />
      <FAQ
        heading="What is the most quantity of Professional Tax to be paid?"
        para="The most quantity payable per annum closer to the expert tax is ₹ 2,500. The expert tax is typically a slab-amount based totally on the gross earnings of the professional. It is deducted from the employee’s earnings each month."
      />
    </div>
  );
}
