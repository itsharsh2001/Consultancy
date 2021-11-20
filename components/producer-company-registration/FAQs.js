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
        heading="What is the minimum capital required? 
        "
        para="The quantity of capital prescribed for this there is no minimal quantity of capital prescribed for the charitable company. The promoters can also additionally introduce the quantity enough to begin and run a business."
      />
      <FAQ
        heading="Whether physical presence of the promoters is needed whilst registration?
"
        para="No. The registration procedure is absolutely online, the physical presence of the promoters isn't always required. All the files and information may be transmitted via mail or uploaded on our portal."
      />
      <FAQ
        heading="What are the minimal necessities to register a farmer producer corporation as a company?"
        para={faq1}
      />
      <FAQ
        heading="How to reserve the name of company?"
        para="The name of the company need to be formulated as in keeping with the naming guidelines. The application for reservation of name is made in web-form called “RUN” with a most of two precise names. The registrar might also additionally ask to re-submit the application with a distinctive name if the names do now no longer satisfy the requirements."
      />
      <FAQ
        heading="Can NRIs/Foreign Nationals be a Director in a farmers producer organization?
"
        para="Yes, an NRI or Foreign National may be a Director after acquiring Director Identification Number. However, at the least one Director at the Board of Directors have to be an Indian citizen and a resident."
      />
    </div>
  );
}
