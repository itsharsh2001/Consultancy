import classes from "./FAQs.module.css";
import FAQ from "./ui/FAQ.js";

export default function FAQs() {
  const faq1 = (
    <div>
      The IEC registration is required below the following circumstances:
      <li>
        It is a pre-requisite for any entity planning to interact in the
        enterprise of import and export from India.
      </li>
      <li>
        In case of carrier or technology, if the company is taking advantages
        below the Foreign Trade Policy, then the IE code registration is
        obligatory for them.
      </li>
    </div>
  );
  const faq2 = (
    <div>
      No. Import Export Code registration is now not obligatory for the
      below-mentioned activities:
      <li>
        If the import or export of items is completed for the non-public use
      </li>
      <li>
        If the import or export is carried out through any Government Ministry
        or branch or a notified charitable organization
      </li>
      <li>Any different class noted or described by way of the DGFT.</li>
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
        heading="Whether the premise will be tested via the worried officer?"
        para="Physical verification of the premise is no longer crucial normally. However, the officers are approved and may additionally come to affirm the premise earlier than grating a registration certificate."
      />
      <FAQ
        heading="Whether save and institution registration utility can be made online?"
        para="In most of the state’s on-line registration software can be made. However, that is no longer the case in principal jurisdictional authorities. Fintaxwiz.com can assist you for both, on-line and bodily registration application."
      />
      <FAQ
        heading="What are the archives to be maintained below Shop & Establishment Act?"
        para="Various registers giving small print of employment, fines, deductions and advances, salary, holidays, etc. must be maintained at the premises underneath this Act."
      />
      <FAQ
        heading="Whether the Professional Tax registration is additionally required for this registration?"
        para="In cities like Ahmedabad, each the registration should be received simultaneously. In a few places, expert tax registration is a requirement for this application. Hence, it relies upon on the place the jurisdiction of the premise is situated. Applicable country legal guidelines need to be checked earlier than the stated registration."
      />
      <FAQ
        heading="What if the keep has to be closed after registration?"
        para="In case the keep or institution would like to shut down the business, the occupier must notify the Chief Inspector in writing inside fifteen days of the closing. The Chief Inspector, after reviewing the request for closure can put off the keep or business institution from the register and cancel the registration certificate."
      />
      <FAQ
        heading="When to make software for registration of Shop and Establishment?"
        para="The entity shall mandatorily observe to get worried in the store and institution registration manner to the worried authority (Labor Authority) relying on the location of the keep or institution as and when it is hooked up inside the time length prescribed. In most States, the requirement of software registration arises inside 30 days."
      />
      <FAQ
        heading="Whether a separate registration for the department is required?"
        para="Yes, every department is to be registered one at a time irrespective of the jurisdiction of the authority."
      />
      <FAQ
        heading="What are the Government costs for store act license and registration?"
        para="For Shop & Establishment registration, the Government price relies upon on the quantity of personnel and workers. In some places, that additionally relies upon on whether or not the premise is a store or protected underneath institution or on the kind of activities. In given package, Government charge up to Rs 1500."
      />
      <FAQ
        heading="Does an enterprise running except any employees require the registration?"
        para="YES, whether or not the operations are employee-driven or not, the commercial enterprise entity should get save act license problem to the State laws. In most states, the registration is obligatory inside 30 days, irrespective of the variety of employees. Therefore, the proprietors have to refer to the State regulation as soon as to decide the Shop & Establishment registration requirement."
      />
      <FAQ
        heading="What is supposed by way of a Shop?"
        para="With reference to this registration, the store is a premise, the place any change or enterprise is carried out or the place offerings are rendered to customers. It consists of places of work or warehouses, whether or not in the identical premises or not, used in connection with such alternate or business, however does now not encompass a store or workplace connected to a manufacturing facility inside the scope of the Factories."
      />
      <FAQ
        heading="What is supposed by using a business establishment?"
        para="With reference to this registration, a Commercial Establishment potential a industrial or buying and selling or banking or insurance plan establishment, an institution or administrative provider in which individuals employed are ordinarily engaged in workplace work, a hotel, restaurant, boarding or ingesting the house, a cafe or any different refreshment house, etc."
      />
      <FAQ
        heading="Are factories blanketed beneath Shop & Establishment Act?"
        para="Factories are no longer protected by means of the retail outlets & corporations act as they are regulated via the Factories Act, 1948."
      />
    </div>
  );
}
