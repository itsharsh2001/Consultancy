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
        heading="In how a whole lot time is the Permanent Account Number (PAN) allotted?"
        para="Once the utility for PAN Card is forwarded, normally it takes 5 – 7 working days for allotment of PAN. However, receipt of bodily PAN card might also take time."
      />
      <FAQ
        heading="Whether new commercial enterprise requires PAN card?"
        para="Yes, each commercial enterprise installed in India has to observe for PAN card on line or offline inside the 30 days of establishment. However, sole proprietorship company does now not want so as it does now not have a separate identification from its owner."
      />
      <FAQ
        heading="Who can observe for PAN card?"
        para="Any Indian citizen, which includes a minor, can follow for allotment of Permanent Account Number through furnishing legitimate proof and documents. Foreign person or entity can additionally follow for PAN allotment."
      />
      <FAQ
        heading="Can I keep extra than one PAN card?"
        para="A Person can't maintain greater than one PAN card. If a character holds greater than one PAN, a penalty of Rs. 10,000/- might also be imposed beneath part 272B. Therefore, the individual protecting greater than one PAN have to capitulation it immediately."
      />
      <FAQ
        heading="What is the validity of PAN card?"
        para="The Permanent Account Number, as soon as allotted, comes with lifetime validity for persons and commercial enterprise entities. If the company’s entities are dissolved or closed, it need to lay down the distributed PAN."
      />
    </div>
  );
}
