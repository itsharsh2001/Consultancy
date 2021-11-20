import classes from "./FAQs.module.css";
import FAQ from "./ui/FAQ.js";

export default function FAQs() {
  const faq1 = (
    <div>
    A title (personal or surname of the applicant or the person’s signature)
A newly coined or invented phrase or any different arbitrary phrase from dictionary, now not being vividly descriptive of the persona or pleasant of the product or service
<li>Alphanumeric or letters or numerals or aggregate of them</li>
<li>Image, Symbol, Monograms, 3D shapes, letters etc.</li>
<li>Sound marks in audio format.</li>

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
        heading="What are the important thing requirements/elements for registering a private limited company? 
        "
        para="A Pvt. Ltd. Company would need two or more than two individuals as members who shall act for as directors of the stated company. It is a widespread practice that the shareholders of the company play the position of directors. It does not require any minimal quantity to be infused as capital. However, a certain fee should be paid to the Government for issuing no less than stocks worth ₹ 1 lakh [Authorized Share Capital] at some point of company registration. Also, there's no requirement to show proof of capital invested at time of the registration process."
      />
      <FAQ
        heading="Whether Private Limited Company shape is appropriate for my enterprise? 
"
        para="Starting a enterprise under the Pvt. Ltd shape is positive because it creates believe and credibility. Its less complicated to get loans, and it enables in attracting extra monetary establishments, suppliers and potential clients. Financial institutions and people decide upon making an investment in organizations which are dependable and private limited organizations provide this kind of reliability factor, in comparison to a structure like a sole proprietorship or general partnership. Therefore in case you are seeking out increasing or trustworthiness is an crucial a part of enterprise it’s a excellent option."
      />
      <FAQ
        heading="For how longer the Company registration is valid?"
        para="Once a Company is incorporated, it'll be active and in existence as long as the yearly compliances are met regularly. In case, annual compliances aren't complied with, the Company becomes a Dormant Company and perhaps struck off from the register after duration of time. A struck-off Company may be revived for duration of up to twenty years.
        "
      />
      <FAQ
        heading="What is the statutory compliance requirement for registering a Private Limited enterprise in India? "
        para="The enterprise should keep a Board Meeting at the least once in each three months. In addition to the Board Meetings, an Annual General Meeting (AGM) should be carried out at the least once each year. Fulfillment of Annual Compliance Requirements is a need to preserve the active status of the enterprise."
      />
      <FAQ
        heading="How we will reserve the name for a Company?"
        para="Ministry has delivered a brand new form “RUN” (Reserve Unique Name) for company name registration on its portal. Under “RUN”, the applicant could make application by offering 2 exceptional names with its significance. The names ought to be particular and according with the provisions."
      />
      <FAQ
        heading="Whether the Body Corporate can be a Shareholder in Private Company?"
        para=". Any individual is eligible to be a shareholder at the same time as registration or afterwards. A Body Corporate including company or LLP; and Association of Persons (AOP) including Society or Trust also can preserve stocks in a company. Further, a group of persons can together preserve the proportion with inside the organization."
      />
    </div>
  );
}
