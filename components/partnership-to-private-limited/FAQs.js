import classes from "./FAQs.module.css";
import FAQ from "./ui/FAQ.js";

export default function FAQs() {
  const faq1 = (
    <div>
    . For Private Company registration, the subsequent necessities should be fulfilled:
 <li>Minimum 2 administrators will be appointed, out of which one should be a resident of India.</li>
 <li> Minimum 2 shareholders are required for this registration. Here, an person might also additionally turn out to be shareholder and director on the same time.</li>
 <li> A workplace in India should be furnished as a registered office address</li>
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
        heading="What are the minimal necessities to transform a partnership into Private Limited Company? 
        "
        para={faq1}
      />
      <FAQ
        heading="What is the minimal Capital Requirement? 
"
        para="While registration, minimal authorized capital of ₹1 Lakh must be provided. The requirement of minimal paid-up capital is removed as part of Government’s initiative to simplify business registration in India. However, every shareholder should subscribe at the least 1 proportion for the registration and amount enough to run a enterprise must be introduced."
      />
      <FAQ
        heading="Who can become director in a Private Limited Company?"
        para="Any individual above the age of 18 years can become a director in the business enterprise after getting Director Identification Number (DIN). As there are no standards provided in terms of citizenship or residency, a overseas country wide also can become a director. The software of DIN Allotment is now merged with the application for the formation of a business enterprise situation to a restriction of maximum 3 DIN."
      />
      <FAQ
        heading="What is the statutory compliance required for a Private Limited Company?"
        para="A private limited organization need to keep a Board Meeting at least once in each three months. In addition to the Board Meetings, an Annual General Meeting needs to be held through the Private Limited Company as a minimum once each year."
      />
      <FAQ
        heading="What is FDI Guidelines for Foreigners in a Private Limited Company? "
        para="100% Foreign Direct Investment is permitted in India in the various industries under the Automatic Route. Under the Automatic Route, only a post-funding filing is vital with the RBI indicating the character of investment made. There are some industries that require prior approval from the RBI, and in such cases, approval need to first be acquired from RBI prior to the funding."
      />
      <FAQ
        heading="What’s the idea of Common Seal and is importance?"
        para="There is no idea of a common seal in partnership. But a private limited enterprise has a common seal which denotes the signature of the enterprise and each enterprise shall have its very own common seal."
      />
      <FAQ
        heading="Is capital gain or stamp duty charged upon conversion?"
        para="No Capital Gains tax or stamp duty will be charged on switch of property from Partnership Company to a Private Limited Company."
      />
    </div>
  );
}
