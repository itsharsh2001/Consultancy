import classes from "./FAQs.module.css";
import FAQ from "./ui/FAQ.js";

export default function FAQs() {
  const faq1 = (
    <div>
      Late submitting charge will be levied primarily based on the date of
      submitting belated return. The late charge for filing relies upon on the
      duration of filing:
      <li>
        1. For return filed after due date however until December – late
        submitting costs of ₹ 5,000 will be charged
      </li>
      <li>
        2. For return filed after thirty first December – late submitting prices
        of ₹10,000 will be charged
      </li>
      However, for small taxpayers with profits up to ₹ 5 Lakh, the prices are
      confined to ₹ 1,000 only.
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
        heading="Are the above-mentioned costs inclusive of taxes?"
        para="Yes, the abovementioned expenses are inclusive of GST."
      />
      <FAQ
        heading="If I want to customize the agreements later, can you assist me with that at discounted cost?"
        para="Customization is reachable for all the agreements in the package at extra cost. Kit consumers experience 15% bargain on drafting offerings for lifetime, for the agreements blanketed in the kit. You can open a carrier request for customization by means of e-mail."
      />
      <FAQ
        heading="How can you purchase this kit?"
        para="You can purchase and pay for the package from our internet site itself. Once we acquire the payment, we will share the package on registered e-mail ID."
      />
      <FAQ
        heading="Are the Agreements too basic?"
        para="The agreements are drafted retaining in thinking standard enterprise necessities and displays information and ride of our team, that has helped hundreds of companies throughout all states of India."
      />
      <FAQ
        heading="Do I get a refund if I don’t locate this package helpful?"
        para="Unfortunately, as this is a downloadable content, we are unable to method refund for such orders."
      />
      <FAQ
        heading="What need to I do in case I want the files custom-made for my precise requirements?"
        para="This is a pre-curated package at sponsored rate. However, if you want any customization, our crew will be capable to assist you with that at discounted rates. All package shoppers get 15% cut price on our personalized drafting services."
      />
    </div>
  );
}
