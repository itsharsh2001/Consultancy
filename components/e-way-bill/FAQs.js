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
        heading="Is the transporter required to lift e-Way Bill throughout the transportation of goods?"
        para="Yes, the transporter should elevate the e-Way Bill generated with consignment for the duration of the transportation as it consists of the small print of the items being transported."
      />
      <FAQ
        heading="Is the recipient required to carry the acceptance of the items below transit?"
        para="Yes, the recipient of items should carry the acceptance or rejection of the items below transit by means of on line of e-Way Bill era at some stage in the validity of e-Way Bill or inside the seventy two hours, whichever is earlier."
      />
      <FAQ
        heading="Whether the consolidated e-Way Bill can be generated for a couple of consignments?"
        para="Yes, a consolidate e-Way Bill in the prescribed shape can be generated for a couple of consignments for a single consignment car with the aid of the transporter. However, the bundle prescribed right here does now not cowl the technology of the consolidated e-way bill."
      />
      <FAQ
        heading="How e-Way Bill is generated?"
        para="E-Way Bill is generated thru the on-line portal of the GST Network assigned for the same. The system consists of submitting PART – A and PART – B of the structure via an on-line portal or thru SMS. On registration of Bill, e-Way Bill Number (EBN) is generated."
      />
      <FAQ
        heading="What data and archives are required to generate e-Way Bill online?"
        para="For a technology of the e-Way bill, the requirement consists of the sale invoice and important points involving the supplier, recipient and transporter of items alongside with small print of a automobile via which the consignment used to be transported. However, in case of non-availability, the automobile wide variety can be modified after the technology of e-Way Bill."
      />
      <FAQ
        heading="When is the e-Way Bill submitting is mandatory?"
        para="Filing and era of e-Way Bill is obligatory for each inter-state/ intra-state motion of items when the price of single consignment exceeds INR 50,000. Provisions for the identical are made relevant considering that April 1, 2018. Applicability of machine for transport inside State is also notified by means of the respective State Governments."
      />
      <FAQ
        heading="How plenty is the validity of the e-Way Bill generated?"
        para="The e-Way Bill validity length relies upon on the distance to be blanketed by means of the automobile in transit for transport of goods. For distance up to 20km (for over dimensional cargo) and a hundred km (other than over dimensional cargo) for Bill will be legitimate for 1 day. The validity length of 1 day will be introduced for extra distance."
      />
      <FAQ
        heading="What are the modes of transportation blanketed for producing e-Way Bill below GST?"
        para="Generating e-Way Bill will be obligatory for each mode of transportation that consists of airways, waterways, and roadways. Mode of public conveyance is additionally covered underneath the same."
      />
      <FAQ
        heading="Within how a good deal time the e-Way Bill will be generated with the aid of FINTAXWIZ.COM?"
        para="Once all the required archives are provided, crew FINTAXWIZ.COM can generate the e-Way Bill on behalf of provider inside 30 minutes."
      />
      <FAQ
        heading="Who is required to generate e-Way Bill online?"
        para="The dealer of the items is required to generate e-Way Bill for the transported items as prescribed."
      />
    </div>
  );
}
