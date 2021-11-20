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
        heading="What are the statutory necessities to be fulfilled as soon as Private Company is registered?
        "
        para={faq1}
      />
      <FAQ
        heading="How many DIN may be apply via SPICE Form?  
"
        para="Maximum three (Three) DIN may be applied via SPICE form. If the applicant desires to incorporation Company with more than three Directors and more than three persons don’t have DIN. In such state of affairs applicant should contain Company with three Directors and should hire new administrators in a while after incorporation."
      />
      <FAQ
        heading="What is the minimal Capital Requirement?"
        para="While registration, minimal authorized capital of INR 1 Lakh need to be provided. The requirement of minimal paid-up capital is removed as a part of Government’s initiative to simplify commercial enterprise registration in India. However, every shareholder have to subscribe at the least 1 proportion for registration and quantity enough to run commercial enterprise need to be introduced."
      />
      <FAQ
        heading="How to file the Conversion form in case of more than 7 companions in the LLP? "
        para="In case of greater than 7 companions in the LLP at the time of conversion into Company then Company should file Scan copy of physically organized MOA & AOA and the corporation has to file 1. URC-1 and 2. INC-32."
      />
      <FAQ
        heading="Whether at the time of Conversion whether or not Latest deed will be connected in the form URC-1?"
        para="Yes, at the time of Conversion LLP should record “copies of the principal and all next deeds which includes the latest deed” with the ROC in e-form URC-1."
      />
      <FAQ
        heading="Whether e-MOA & AOA can be file in case of MOA & AOA is signed by someone at an area outside of India?"
        para="Yes, if one of the administrators is outside of India, it can be filed in an e copy format, no need of filing a physical copy. "
      />
      <FAQ
        heading="Are stocks of a private company easily transferable?"
        para="Yes, stocks of Private Company are easily transferable amongst contributors of the business enterprise however for shifting the stocks to a non-member, the percentage need to be first provided to an present member and if he refuses to buy the same, the stocks may be transferred to non-contributors."
      />
      <FAQ
        heading="Can a overseas director be appointed after the conversion of LLP into private limited company and what are the files required for submitting DIN?"
        para="Yes, a foreign national can be a director. For purchasing DIN, information of a legitimate passport need to be filled in form DIR-3 and an authorized replica of same need to be attached with DIN application. All supporting files inclusive of image need to be licensed by the Indian Embassy or a notary in the home country of the applicant or by the Managing Director / CEO / Company Secretary of the company registered in India, wherein applicant is a director. If a overseas director has a legitimate multiple-entry Indian visa or Person of Indian Origin card or Overseas Citizen of India card, then the attestation can also be achieved by Public Notary / Gazetted Officer in India or practicing CA / CS / CWA."
      />
    </div>
  );
}
