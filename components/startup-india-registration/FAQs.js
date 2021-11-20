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
        heading="What is a Startup India Recognition?
        "
        para="Startup Recognition is based totally on Government Scheme imparting distinct advantages to Start Up entities challenge to unique stipulations as laid down in the rules."
      />
      <FAQ
        heading="Who is eligible to practice for Startup India Registration?"
        para="Only Private Limited Company, Limited Liability Partnership and Registered Partnership Firm are eligible to observe for a StartUp Recognition certificate."
      />
      <FAQ
        heading="Can any Private Limited Company, Limited Liability Partnership and Registered Partnership Firm follow for Startup Registration?"
        para="An entity working for innovation, deployment or commercialization of new products, method or offerings pushed by way of science or mental property is eligible to apply. A new product/service/process, or a extensively accelerated current product/service/process, that can create or add price to clients or a workflow can additionally file an utility to register itself underneath this scheme."
      />
      <FAQ
        heading="How can I join with different Startups and Investors after getting Startup recognition?"
        para="After registration you can join to different Startups, traders or incubators on the Startup India portal below the Tab – ECOSYSTEM or you can join by using login into your account."
      />
      <FAQ
        heading="What is the authorities charge for making an utility for consciousness as a Startup by using DIPP?"
        para="There is no authority’s rate for the registration below the Startup India Scheme."
      />
      <FAQ
        heading="In how many days I will get the certificates for focus as Startup through DIPP?"
        para="The authority’s officer’s thoroughly test all the statistics and archives supplied in the application, for this reason the time duration relies upon on the authorities processing time."
      />
      <FAQ
        heading="For how many years an entity is regarded as a Startup?"
        para="For the length of 10 years from the date of incorporation or up to the turnover will increase the restrict of Rs. a hundred crore in any economic year."
      />
      <FAQ
        heading="What is DIPP?"
        para="Department of Industrial Policy and Promotion which gives you the certificates of cognizance to Startups based totally on delight of particular conditions."
      />
      <FAQ
        heading="Is One Person Company eligible to be entitled for awareness as “StartUp”?"
        para="Since, One Person Company is a structure of a business enterprise it is entitled to be diagnosed as “Startup”."
      />
      <FAQ
        heading="My entity is fashioned via changing a association into LLP, will it be eligible for Startup India registration?"
        para="No, entities shaped via Splitting Up or Reconstruction of Business already in existence are no longer eligible for registration beneath this scheme."
      />
      <FAQ
        heading="Whether the registration on Startup India internet site and DIPP diagnosed Startups are same?"
        para="No, the DIPP cognizance for Startups is exceptional from registration on Startup India website. To avail the advantages of Startup India scheme, the entity ought to be registered below Startup India Scheme supplied by means of DIPP. Only developing the account on the internet site of Startup India does now not quantity to get diagnosed as Startup through DIPP."
      />
      <FAQ
        heading="Can the utility be filed physically?"
        para="The utility is to be submitted on line at www.startupindia.gov.in"
      />
    </div>
  );
}
