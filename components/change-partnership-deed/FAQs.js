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
        heading="What is the amount of stamp duty payable?"
        para="Stamp duty is variable and primarily based totally at the involved State regulation of firm. It is calculated based at the capital contribution involved in the change. However, if there's no alternate in capital, the supplementary deed have to be executed by charge of Rs 100/- towards stamp duty (covered in package cost). The stamp duty similarly to stated quantity will be payable separately."
      />
      <FAQ
        heading="When will the adjustments with the aid of using supplementary deed be effective?"
        para="The changes can be effective after signature of companions and notary at the deed. If a partnership deed is registered, the certificates of amendment should be acquired after execution."
      />
      <FAQ
        heading="How a companion may resign from the firm?"
        para="Whether partnership deed has to be modified in such case? The resigning companion has to first intimate about his willingness to resign to current companions via resignation letter. The notice duration may be as determined and mentioned in the DIN. Further, all of the companions which include the exiting companion must enter in agreement (supplementary deed) wherein all of the situations and fact of exit should be enumerated."
      />
      <FAQ
        heading="How do I alternate the enterprise activities of Partnership firm?"
        para="The activities may be changed or updated as per the mutual settlement of the partners. All you want to do is give an explanation for about the brand new activities or the alternate to your executive and rest may be taken care and carried out via supplementary deed."
      />
      <FAQ
        heading="How does the supplementary settlement executed?"
        para="Once the deed is ready by the experts and confirmed by the companions, suitable stamp duty is paid at the settlement. The notarization of the deed is accompanied via way of means of the signature of all companions reflecting their acclaim for the change."
      />
      <FAQ
        heading="Whether change in constitution of partnership organization is needed to be notified to ROF?"
        para="If the original partnership deed is duly registered with Registrar of Firms, then any adjustments ought to additionally be notified to the ROF after its execution."
      />
      <FAQ
        heading="How can I add new Partner in the Partnership Firm in India?"
        para="Addition of a brand new partner may be made in a way prescribed by the effective Partnership Deed. The associate to be added need to fulfill the requirement as prescribed in the deed if any. The change of associate in partnership deed ought to be reflected alongside the date of addition, terms, and conditions of joining, etc."
      />
      <FAQ
        heading="Can I alternate the name of partnership?"
        para="The name of the partnership organization can, of course, be changed, however with the consent of all companions because it implies to change in the constitution of a partnership organization. Further, after executing the changes, the organization have to practice for updating the name in each registration received and additionally in the PAN card. The provider of updating PAN isn't always covered in given package."
      />
    </div>
  );
}
