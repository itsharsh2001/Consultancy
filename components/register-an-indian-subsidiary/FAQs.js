import classes from "./FAQs.module.css";
import FAQ from "./ui/FAQ.js";

export default function FAQs() {
  const faq1 = (
    <div>
      An Indian subsidiary is formed as a Private Limited Company and to register same, following necessities should be fulfilled: 
<li> Minimum 2 directors will be appointed, out of which one should be resident in India. </li>
<li>2. Minimum 2 shareholders are required for this registration. Here, a person might also additionally become shareholder and director on the same time. </li>
<li>3. A place of business in India should be furnished as a registered workplace address.</li>

    </div>
  );
  const faq2 = (
    <div>
      Foreign funding in any shape is unlawful in corporations engaged or proposes to have interaction with inside the following business: 
<li>The commercial enterprise of chit fund; or </li>
<li>Nidhi Company; or</li>
<li>iii) Agricultural or plantation activities (excluding floriculture, horticulture, development of seeds, animal husbandry, pisciculture, cultivation of vegetables, mushrooms, etc., under managed conditions, services associated with the agro & allied zone and tea plantations); or</li>
<li>iv) Real Estate commercial enterprise, or construction of farm houses (Does not consist of the improvement of townships, construction of residential/industrial premises, roads or bridges); Or</li>
<li>v) Trading in Transferable Development Rights (TDRs)
</li>

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
        heading="What are the minimal necessities to set-up an Indian subsidiary? 
        "
        para={faq1}
      />
      <FAQ
        heading="What are corporations wherein foreign nationals or corporations can’t invest? 
"
        para={faq2}
      />
      <FAQ
        heading="How to register a wholly owned subsidiary? "
        para="This operational hand of a foreign entity in India is registered as a Private Company, which requires at the least 2 individuals subscribing to stocks. Hence, register as a wholly owned subsidiary, the parent organization might subscribe all stocks besides one. This one proportion is with the aid of using one of the directors to satisfy the requirement."
      />
      <FAQ
        heading="Does anyone have to be physically present even as on line company registration in India? "
        para="No, not one of the promoters are required to be present on the complete procedure of Pvt Ltd company registration is online. All the paperwork are filed at the net portal and digitally signed. Also, the specified files may be dispatched via email or uploaded on our portal for filing."
      />
      <FAQ
        heading="What are the FDI Guidelines for Foreign Nationals in a Private Limited Company? "
        para="100% Foreign Direct Investment is permitted in India in the various industries under the Automatic Route. Under the Automatic Route, only a post-funding submitting is vital with the RBI indicating the character of funding made. There are some industries that require earlier approval from the RBI, in such cases, approval have to first be acquired from RBI prior to funding."
      />
      <FAQ
        heading="Are there any more regulatory necessities after business enterprise is registered?
"
        para="Yes, after incorporation and introducing equity fund from a foreign supply of income, Reserve Bank of India should be notified about the foreign funding with inside the business enterprise via proper filing and documentation. In case the activity executed by the business requires Government approval for Foreign Investment, approval should be received previous to the funds being invested in the business enterprise."
      />
    </div>
  );
}
