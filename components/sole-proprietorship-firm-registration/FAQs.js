import classes from "./FAQs.module.css";
import FAQ from "./ui/FAQ.js";

export default function FAQs() {
  const faq1 = (
    <div>
      Following are the minimal necessities to done registration as producer company: 
      <li> The principal objective of the company have to be too as provided in Section 581B of Companies Act, 1956 </li><li> Minimum 10 individuals (who're a producer) or as a minimum 2 producer institutes have to subscribe the stocks of the company </li><li>3) Minimum five directors with inside the company, one in all which have to be Indian citizen and resident </li><li>4) The registered office of the company have to be located in India.</li>
    </div>
  );
  const faq2 = (
    <div>
      Foreign funding in any shape is unlawful in corporations engaged or
      proposes to have interaction with inside the following business:
      <li>The commercial enterprise of chit fund; or </li>
      <li>Nidhi Company; or</li>
      <li>
        iii) Agricultural or plantation activities (excluding floriculture,
        horticulture, development of seeds, animal husbandry, pisciculture,
        cultivation of vegetables, mushrooms, etc., under managed conditions,
        services associated with the agro & allied zone and tea plantations); or
      </li>
      <li>
        iv) Real Estate commercial enterprise, or construction of farm houses
        (Does not consist of the improvement of townships, construction of
        residential/industrial premises, roads or bridges); Or
      </li>
      <li>v) Trading in Transferable Development Rights (TDRs)</li>
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
        heading="What is the minimal amount of capital required to register sole proprietorship online? 
        "
        para="One can commence a Sole Proprietorship Firm with any amount of Capital. An amount enough to begin the enterprise need to be introduced. As there's no restrict on infusion or withdrawal of amount, the owner can change capital anytime. Introducing the capital in Business is the only choice of an proprietor of the corporation i.e. the Proprietor."
      />
      <FAQ
        heading="How to register the name of a sole Proprietorship enterprise?
"
        para="There is no registry or law for registering the name of a Sole Proprietorship Firm. Therefore, the name of a sole proprietorship enterprise can undertake any name primarily based totally on its availability such that it does not infringe on registered trademarks. Since there may be no registry or law for registering the name of a Proprietorship, the simplest manner to make sure the one of a kind use of the enterprise name is to get a Trademark Registration of a enterprise name."
      />
      <FAQ
        heading="What are the advantages of Proprietorship Firm Registration under MSMED Act?"
        para="The registered entity under MSMED Act can avail subsidies, incentives, and schemes released by the Central Government with respect to the precise Business on the premise of a registration certificate."
      />
      <FAQ
        heading="Can I actually have partners in a Sole Proprietorship Business?"
        para="Characteristics of a Sole Proprietorship Firms is such that it can't have any other Business Partner as it's far owned and managed with the aid of using one individual itself. If your Business calls for the involvement of Partners, you can choose a Partnership Firm, Private Limited Company, or Limited Liability Partnership, as the case may be."
      />
      <FAQ
        heading="Can I later convert my Proprietorship Business right into a Company or LLP? 
"
        para="A proprietorship may be taken over by the company or LLP. However, the techniques for same are cumbersome, costly and time-consuming. Therefore, it's far smart for lots marketers to consider starting the LLP or Company in place of a Proprietorship after consulting the experts."
      />
      <FAQ
        heading="Can different people invest money in a Proprietorship?
"
        para="Sole Proprietorship Business entity is owned, controlled and managed by one person. So, Proprietorship corporations cannot issue stocks nor have investors."
      />
      <FAQ
        heading="Will My Proprietorship Company has a separate legal identification or new PAN card after registration? 
"
        para="There is no separate identification of an owner or its business enterprise even after the sole proprietorship firm is registered. Hence, the PAN card of the company and the Proprietor is the same. The assets and liabilities for the owner and the proprietorship additionally continue to be the same."
      />
    </div>
  );
}
