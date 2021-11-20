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
        heading="What if my thought is already patented? 
        "
        para="If the thought of the invention is already patented, one can overview the granted patent and perceive the scope of enchantment to have increased invention which can be patentable in mild of patented invention. Thus, Patent Search helps to regulate the patent notion and make it patentable"
      />
      <FAQ
        heading="Does the patent search encompass solely patents?
"
        para="Every prior eBook places an invention at chance of being declined as a patent. Each and each and every records reachable in public area in any structure is regarded as prior art. The patent search reviews might also additionally encompass net pages, scientific articles, products, etc."
      />
      <FAQ
        heading="Can I do my personal patent search on the Internet?"
        para="YES. You can do a preliminary search of your invention on the internet. However, it is usually beneficial to take session of professionals.
        As a disclaimer performing patent searches, whether or not thru net search engines or different databases requires the use of key-word searching, which is an artwork that takes a lot of trip to do well. As such end result and accuracy will differ with the trip of the searcher.
        "
      />
      <FAQ
        heading="4.	Is it obligatory to habits a patentability search earlier than submitting for a patent?"
        para="An expert patent search is now not obligatory however it is constantly higher to get it completed earlier than making use of for patent registration. It saves a lot of time, money, and labor. The patent registration system entails a lot of time and cash both, therefore, it is higher to be conscious of the invention’s patentability and scope."
      />
    </div>
  );
}
