import classes from "./FAQs.module.css";
import FAQ from "./ui/FAQ.js";

export default function FAQs() {
  const faq1 = (
    <div>
     <li>The patent expires if it has lived its full time period i.e. 20 years</li>
     <li>The patentee fails to pay the annual renewal fee.</li>
     <li>The validity of the patent has been efficaciously challenged by means of an opponent by way of submitting an opposition.</li>
     <li>The patent is revoked.</li>


    </div>
  );
  const faq2 = (
    <div>
      An invention wishes to have these three important traits to be patentable:
<li> Novelty – invention have to be new.</li>
<li> Inventiveness (Non-obviousness) – wishes to have an innovative step that makes the invention unique.</li>
<li>Industrial utility / Usefulness – it ought to no longer be a mere prototype however it ought to be working and has to have some use.</li>
<li> It need to now not appeal to the provisions of area three and four of the Patents Act 1970 which describes non-patentable invention in India.</li>

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
        heading="How does a patent expire?
        "
        para={faq1}
      />
      <FAQ
        heading="How can I monetize my patent?
"
        para="A patent hardly ever has any cost if the business really worth of the product or technological know-how can't be tested and exploited. Therefore, a man or woman has to see the utility and demand for the invention in the market earlier than he/she documents for a patent, they can make cash from their patent by means of claiming royalties, selling, or license their patented invention."
      />
      <FAQ
        heading="Is there any distinction in authorities charges if I practice a bodily software rather of an on line one?"
        para="Government expenses for bodily software are 10% greater than on-line software to promote the inexperienced initiative.
        "
      />
      <FAQ
        heading="Are there any extra expenses for including extra than 10 claims in the patent application?"
        para="Yes, in case the claims in the entire utility prolong greater than 10 in number, an extra price would be levied as per the price shape desk given underneath the first agenda of The Patent Act 1970."
      />
      <FAQ
        heading="What is a distinction between a provisional patent and permanent patent?"
        para="A provisional patent is a brief patent which is utilized when the invention is no longer finalized and is nonetheless in the experimental phase. Application for the everlasting patent is made when the invention is finalized and geared up to be patented for 20 years."
      />
      <FAQ
        heading="What are the standards of for patentability?"
        para={faq2}
      />
    </div>
  );
}
