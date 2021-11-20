import classes from "./FAQs.module.css";
import FAQ from "./ui/FAQ.js";

export default function FAQs() {
  const faq1 = (
    <div>
      The boom in capital shall acquire following consent or approval:
<li> 1. Consent from the Board;</li>
<li>2. Consent from the individuals of the company;
 And</li>
 <li>3. Approval from concerned ROC</li>
    </div>
  );
  const faq2 = (
    <div>
      No, the profits tax is paid all through the economic 12 months in which
      the earnings is earned. While submitting ITR, if the tax legal
      responsibility is extra than the already paid improve tax, the due
      quantity ought to be paid with interest, if applicable.
      <br />
      Online ITR file or file ITR offline-which is easy?
      <br />
      The ITR file on line or Income tax e submitting is comparatively easy. To
      file profits tax online; a few files are solely required. If you search
      how to practice for itr, the e return submitting will be proven as an
      simpler process.
      <br />
      What are the due dates for IT return on line filing?
      <br />
      The due dates for submitting ITR on line are cited under – let’s take an
      e.g. of (F.Y. 2017 – 18 & A.Y. 2018 – 19)
      <br />
      1. Up to thirty first July of subsequent 12 months (31st July, 2018) –
      Individuals, HUF, BOI and AOP (who does no longer fall underneath the
      audit provisions)
      <br />
      2. Up to thirtieth September of subsequent yr. (30th September, 2018) –
      Companies along with different entities on which Audit provisions are
      relevant
    </div>
  );
  const faq3 = (
    <div>
      Following are the exclusions from the GST Registration:
      <li>An agriculturist – for the motive of agriculture</li>
      <li>
        Person completely offering goods/ offerings no longer responsible to tax
        or utterly exempted from Tax
      </li>
      <li>Services via any Court or Tribunal hooked up beneath the law</li>
      <li>Services through an employee</li>
      <li>
        Services of funeral, burial, crematorium or mortuary, along with
        transportation of the deceased
      </li>
      <li>Sale of land concern to Schedule 5 (ii)(b), sale of building</li>
      <li>
        {" "}
        Actionable claims, different than lottery, having a bet and gambling
      </li>
      <li> Person falling under threshold exemption restrict prescribed</li>
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
        heading="When should the forms be filed with MCA?"
        para="The form should be filed inside 30 days after acquiring consent from shareholders for the share capital growth. The decision handed is notified in MGT-14 and observe of growth is filed in SH-7 with altered MOA and AOA"
      />

      <FAQ
        heading="How does the growth in capital effect the company in filing fee?"
        para="The Government fee for any e-form filed with MCA relies upon at the authorized capital of the company. With the growth in Authorized capital, the Government charge for online submitting additionally increases, but to a nominal extent."
      />

      <FAQ
        heading="Which approvals are required for boom in share capital of Private Limited Company?"
        para={faq1}
      />

      <FAQ
        heading="Whether boom of capital is contemplated on MCA portal?"
        para="Yes, the overall authorized and paid-up capital is displayed at the Master Data of the company at the MCA portal."
      />
      <FAQ
        heading="Whether package deal consists of growth in paid-up share capital, too?"
        para="Yes, the package deal value additionally consists of the increase in paid-up capital of the company, however not the switch of shares."
      />
    </div>
  );
}
