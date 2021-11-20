import classes from "./FAQs.module.css";
import FAQ from "./ui/FAQ.js";

export default function FAQs() {
  const faq1 = (
    <div>
      To register such company, the promoters ought to make sure the following:
 <li>The major item of the enterprise ought to be to perform for a charitable cause and amongst the ones prescribed in law </li>
 <li>Minimum 2 members of the enterprise, who shall enroll in capital on incorporations </li>
 <li> Minimum 2 directors in the enterprise, one of which ought to be Indian citizen and resident</li>
 <li>The registered office of the enterprise ought to be located in India</li>

    </div>
  );
  const faq2 = (
    <div>
      Foreign funding in any shape is unlawful in corporations engaged or
      proposes to have interaction with inside the following business:
      <li>The commercial enterprise of chit fund; or </li>
      <li>Nidhi Company; or</li>
      <li>
        iii) Agricultural or plantation activities (excluding floriculture,
        horticulture, development of seeds, animal husbandry, pisciculture,
        cultivation of vegetables, mushrooms, etc., under managed conditions,
        services associated with the agro & allied zone and tea plantations); or
      </li>
      <li>
        iv) Real Estate commercial enterprise, or construction of farm houses
        (Does not consist of the improvement of townships, construction of
        residential/industrial premises, roads or bridges); Or
      </li>
      <li>v) Trading in Transferable Development Rights (TDRs)</li>
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
        heading="What is the minimum capital required? 
        "
        para="There is no minimum amount of capital prescribed for the charitable company. The promoters might also additionally introduce the amount enough to begin and run business."
      />
      <FAQ
        heading="Whether Section 8 Company and NGO registrations are same? ? 
"
        para="The Section eight company is popularly referred to as NGO. However, NGOs may be registered as different enterprise structure like trust, society, etc."
      />
      <FAQ
        heading="Can section eight or charitable organization claim dividends? "
        para="A Section eight or Charitable Company shall not pay any dividend to its members, however apply the excess of receipts over bills for the promoting of its objectives."
      />
      <FAQ
        heading="What are the minimal necessities to register a charitable company in India?"
        para={faq1}
      />
      <FAQ
        heading="How to reserve the name of company? "
        para="The name of the enterprise need to be formulated as in keeping with the naming guidelines. The application for reservation of name is made in web-form called “RUN” with a most of two precise names. The registrar can also additionally ask to re-submit the application with a unique name if the names do not satisfy the requirements."
      />
      <FAQ
        heading="How to obtain approval of Central Government for non-profit company registration?
"
        para="The promoters shall follow in e-form INC-12 for stated approval from Central Government. The shape is followed with MoA – AoA of the company, declarations from promoters, estimated statement of income & expenditure for subsequent 3 years, etc. If the application is approved, the approval letter is issued in form INC-16."
      />
    </div>
  );
}
