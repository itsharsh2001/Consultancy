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
        heading="How items or offerings can be exported from India?
        "
        para="Exports of items and offerings are performed both with the charge of relevant GST or barring the price of GST. In the first portion, the taxes paid are refunded to exporters issue to prerequisites of exports. For exports besides fee of taxes, the exporters are required to file Letter of Undertaking."
      />
      <FAQ
        heading="When is the Letter of Undertaking required to be filed?"
        para="If the exporters desire to decide for exports except the price of taxes, the Letter of Undertaking is required to be filed. First time submitting can be made any time earlier than exporting except taxes. However, if the exporter desires to proceed the equal to the subsequent monetary year, it need to be filed earlier than the graduation of the monetary year."
      />
      <FAQ
        heading="Who is eligible to file Letter of Undertaking?"
        para="Earlier standards of turnover and inward receipts had been prescribed for submitting LUT underneath GST. However, now any exporter inclined to export besides paying the taxes can file Letter of Undertaking underneath GST online."
      />
      <FAQ
        heading="Whether the submitting of bond is required for exporters?"
        para="No, the requirement to file a bond is eliminated. For exports besides price of taxes, on line Letter of Undertaking is required to be filed."
      />
      <FAQ
        heading="How the letter of Undertaking is required to be filed below GST?"
        para="Since the monetary yr 2018-19, the Letter of Undertaking is required to be filed on an on-line portal of GST Network the usage of GST credentials. The mission is performed on the duly stamped paper, which is submitted thru the on line portal."
      />
      <FAQ
        heading="What is the validity of Letter of Undertaking filed?"
        para="Letter of Undertaking will be legitimate for the complete economic 12 months in which it is filed. However, if the prerequisites with recognize to exports are now not fulfilled, LUT is deemed to be withdrawn till the achievement of conditions."
      />
      <FAQ
        heading="Whether the guide submission of LUT is required?"
        para="No, the bodily submission of Letter of Undertaking is now not required now as the ARN generated in the Acknowledgment is deemed as acceptance of the LUT."
      />
      <FAQ
        heading="Whether re-filing of LUT is required to precede the benefit?"
        para="Yes, the Letter of Undertaking is legitimate for the monetary yr in which it is filed. Hence, the LUT need to be utilized for in the starting of each and every monetary year."
      />
    </div>
  );
}
