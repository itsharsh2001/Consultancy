import classes from "./FAQs.module.css";
import FAQ from "./ui/FAQ.js";

export default function FAQs() {
  const faq1 = (
    <div>
      The fundamental process for registering a Private Limited Company in India
      is as per the following:
      <li>Get Digital Signature Certificate (DSC)</li>
      <li>
        Self-Attest the Documents for Private Limited Company Registration
        including AoA, MoA and service bills.{" "}
      </li>
      <li>
        Record with structure INC-32, this structure has illustrated for
        smoothing out many cycles including getting DIN, Name Reservation,
        Incorporation, PAN application, TAN number.
      </li>
    </div>
  );

  const faq2 = (
    <div>
      After the registration of the company, the following should be fulfilled:
      <li>Current account be opened inside 30 days of PAN enrollment.</li>
      <li>Appoint a Statutory Auditor</li>
      <li>
        The settled up capital should be deposited which was referenced while
        registration
      </li>
      <li>Issue and assign shares</li>
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
        heading="Please advocate on FSSAI License requirement for running a meals enterprise in extra than one country with the equal title of the business enterprise or organization?"
        para="A Central License is required for the Registered Office or Head Office for a Food Business Operator (FBO) working a meals commercial enterprise premises positioned in two or greater than two States – this is in addition to license/registration for every unit/premise. These Separate license or registration will want to be received from the Central or State licensing authorities, relying upon that unit’s potential or turnover."
      />
      <FAQ
        heading="Will I require exclusive Licenses if I am conducting extraordinary kind of meals enterprise things to do at the identical premise?"
        para="Please note, the on line FSSAI license is primarily based and granted on premises – therefore each sort of food enterprise being operated from the identical premise can be utilized in a single FSSAI license."
      />
      <FAQ
        heading="Is FSSAI License required for utensils/packaging cloth used for serving or packaging of food?"
        para="No, no longer required. Utensils/packaging substances are now not protected below the definition of meals as per Section 3(n) of FSS Act, 2006 – so FSSAI License/Registration is now not required."
      />
      <FAQ
        heading="For a hundred percent export units, is it obligatory to take FSSAI License?"
        para="FSSAI license is obligatory for each – export and import of meals products. Hence the FSSAI Central License is required for the export unit."
      />
      <FAQ
        heading="Is a license required for catering institution that comes below the purview of Central Government?"
        para="Yes. Any and all catering establishments, want license. Including these below central Government such as Railways, Airport, Seaport, and Defence etc… are required to gain a license from FSSAI."
      />
    </div>
  );
}
