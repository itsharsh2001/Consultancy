import classes from "./FAQs.module.css";
import FAQ from "./ui/FAQ.js";

export default function FAQs() {
  const faq1 = (
    <div>
     <li>	The patent expires if it has lived its full time period i.e. 20 years</li>
     <li>The patentee fails to pay the annual renewal fee.</li>
     <li>	The validity of the patent has been efficaciously challenged by using an opponent by way of submitting an opposition.</li>
     <li>	The patent is revoked.</li>

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
        heading="What is the time period of a patent? 
        "
        para="In India, the time period of a patent is for 20 years from the date of application."
      />
      <FAQ
        heading="How does a patent expire?
"
        para={faq1}
      />
      <FAQ
        heading="Is the patent legitimate outside India?"
        para="A patent filed and registered in India is legitimate only in India. To register a patent in different countries, a separate patent utility ought to be filed with the respective international locations or via PCT. No patent is global
        "
      />
      <FAQ
        heading="How lengthy is the provisional patent legitimate for?"
        para="A provisional patent is legitimate for one yr from the date of filing. If the whole specification is now not filed inside that one yr then the software receives abandoned."
      />
      <FAQ
        heading="What is a distinction between a provisional patent and everlasting patent?"
        para="A provisional patent is a transient patent which is utilized when the invention is now not finalized and is nevertheless in the experimental phase. Application for the everlasting patent is made when the invention is finalized and prepared to be patented for 20 years"
      />
    </div>
  );
}
