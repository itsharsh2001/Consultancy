import classes from "./FAQs.module.css";
import FAQ from "./ui/FAQ.js";

export default function FAQs() {
  const faq1 = (
    <div>
    The IEC registration is required below the following circumstances:
<li>It is a pre-requisite for any entity planning to interact in the enterprise of import and export from India.</li>
<li>In case of carrier or technology, if the company is taking advantages below the Foreign Trade Policy, then the IE code registration is obligatory for them.</li>
    </div>
  );
  const faq2 = (
    <div>
      No. Import Export Code registration is now not obligatory for the below-mentioned activities:
<li>If the import or export of items is completed for the non-public use</li>
<li>If the import or export is carried out through any Government Ministry or branch or a notified charitable organization</li>
<li>Any different class noted or described by way of the DGFT.</li>

    </div>
  );
  const faq3 = (
    <div>
      Following are the exclusions from the GST Registration:
<li>An agriculturist – for the motive of agriculture</li>
<li>Person completely offering goods/ offerings no longer responsible to tax or utterly exempted from Tax</li>
<li>Services via any Court or Tribunal hooked up beneath the law</li>
<li>Services through an employee</li>
<li>Services of funeral, burial, crematorium or mortuary, along with transportation of the deceased</li>
<li>Sale of land concern to Schedule 5 (ii)(b), sale of building</li>
<li> Actionable claims, different than lottery, having a bet and gambling</li>
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
        heading="Which entities are eligible for registration beneath MSME?"
        para="Manufacturing and carrier enterprise can gain MSME on-line registration problem to furnished classification. Further, the employer can solely be registered if the worried things to do are blanketed below the classification furnished for the registration purpose."
      />
      <FAQ
        heading="Which activities are excluded from the registration?"
        para="With notification issued dated 27.06.2017, the ministry has excluded things to do of wholesale or retail trading; Fishing and aquaculture; Forestry and logging; and more. Business entities engaged totally into things to do falling below such classes can't make an software for registration."
      />
      <FAQ
        heading="Whether MSME registration is obligatory for all entities?"
        para="No, this is a voluntary registration and now not compulsory. The entities achieve registration due to advantages and subsidies that are granted by using the authorities in this regards."
      />
      <FAQ
        heading="Whether AADHAR card is obligatory for the registration?"
        para="Yes, AADHAR card of the applicant is obligatory for UDHYOG AADHAR registration. In case, the applicant is different than a proprietor, AADHAR card of company’s director or LLP’s accomplice is required."
      />
      <FAQ
        heading="Do I obtain MSME registration certificate?"
        para="Yes, the certificates are supplied in a smooth reproduction by using the Government on the registered e mail identification of the applicant or entity. The certificates is reachable on Udyog Aadhar portal and can be downloaded with assist of applicant’s Aadhar number."
      />
    </div>
  );
}
