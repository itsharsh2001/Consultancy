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
        heading="Who is required to make on line IEC code registration application?
        "
        para={faq1}
      />
      <FAQ
        heading="Whether acquiring IE code is obligatory for all?"
        para={faq2}
      />
      <FAQ
        heading="Can an man or woman practice for IEC registration?"
        para="Any character concerned in the import and export of items or offerings for the motive of conducting commercial enterprise can make IE Code application. They can attain the IE code with the aid of submitting an on line utility accompanied with required documents. In case the individual does no longer have a contemporary account for the business, he/she may also grant canceled cheque of the financial savings account for the reason of submitting IE code application."
      />
      <FAQ
        heading="Is there any compliance after acquiring IEC?"
        para="No, there is no compliance to be fulfilled after the import-export license registration is obtained."
      />
      <FAQ
        heading="Can IEC statistics be modified?"
        para="Yes, the IEC records can be modified by using imparting all the integral files even after the code is issued."
      />
      <FAQ
        heading="Whether extra than one IEC can be issued in opposition to one PAN?"
        para="Only a single IEC can be issued in opposition to a single PAN card. If at all greater than one IEC is issued then it has to be surrendered to the regional office."
      />
      <FAQ
        heading="Is there any penalty for now not having an importer and exporter code?"
        para="No, there is no penalty however; the import or export is now not feasible barring IE code."
      />
      <FAQ
        heading="Whether renewal of IEC registration is required?"
        para="Import Export code is distributed with lifetime validity and consequently it does now not require any renewal."
      />
      <FAQ
        heading="Whether replica of PAN Card is required to be uploaded?"
        para="No, w.e.f. 09.08.2018, DGFT has built-in PAN internet carrier of CBDT with the server; consequently PAN card is no longer required to be uploaded. However, for the cause of submitting an application, the reproduction of the PAN card is required to be submitted to the team."
      />
      <FAQ
        heading="What is the validity of import export code registration?"
        para="The Import Export Code comes with a lifelong validity until the equal is withdrawn or surrendered. Once the applicant receives the IE Code, there is no want to re-register as it is a perpetual registration."
      />
      <FAQ
        heading="Whether the separate utility is to be made for different branch?"
        para="No, there is no requirement to make separate software for special locations of business. This is a PAN primarily based registration. Hence, the single registration will be legitimate for all the corporations and department below the equal entity."
      />
    </div>
  );
}
