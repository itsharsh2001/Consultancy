import classes from "./FAQs.module.css";
import FAQ from "./ui/FAQ.js";

export default function FAQs() {
  const faq1 = (
    <div>
      A title (personal or surname of the applicant or the person’s signature) A
      newly coined or invented phrase or any different arbitrary phrase from
      dictionary, now not being vividly descriptive of the persona or pleasant
      of the product or service
      <li>Alphanumeric or letters or numerals or aggregate of them</li>
      <li>Image, Symbol, Monograms, 3D shapes, letters etc.</li>
      <li>Sound marks in audio format.</li>
    </div>
  );
  const faq2 = (
    <div>
      The copyright proprietor has the extraordinary rights to:
      <li>
        Reproduce and distribute the work in copies or phonorecord (material
        object i.e. an audio tape or CD, or an MP3 file. ) to the public through
        sale or switch of possession or license.
      </li>
      <li>
        Make additions to the unique work or regulate it, display, existing or
        function them amongst the public; and
      </li>
      <li>
        Exclude others to declare possession or use besides the authentic
        creators’ permission.
      </li>
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
        heading="What are the necessities and effect provided in the Act in respect to the licenses, permits, approvals etc. received via way of means of the corporation previous to its conversion into LLP? 
        "
        para="It has been provided with inside the Act that on conversion, any approval, permit or license issued to the Private Company under some other Act shall; challenge to the provisions of such different Act under which such approval, permit or license was issued, be transferred with inside the name of transformed entity viz. LLP. Barring a few registrations like GST or which a brand new application needs to be filed"
      />
      <FAQ
        heading="How can I get the PAN and TAN in the name of LLP? 
"
        para="The application of PAN and TAN in the name of LLP will be carried out after the issuance of Certificate of Incorporation of LLP. The physical copy of the PAN might be acquired on the Registered Office only after being dispatched with the aid of using the Income Tax Department."
      />
      <FAQ
        heading="What is the distinction among LLP and a company?"
        para="A primary distinction among the LLP and a company lies with inside the inner governance structure. The LLP has extra flexibility and much less compliance necessities in comparison to a Company.
        "
      />
      <FAQ
        heading="Whether any capital gain is payable on conversion of Company into LLP ?"
        para="In case of conversion to LLP, the choice concerning capital gain, whether relevant or not, is subject to certain conditions. Any switch of the capital asset or intangible asset or stocks held in the organization through a shareholder due to the conversion of the organization into a Limited Liability Partnership could now no longer be problem to Capital Gain. But if there's a change in shareholding i.e. change with inside the profit sharing ratio and gain arises from the conversion, then the capital gain could be payable."
      />
      <FAQ
        heading="What are the primary conditions for changing Private Limited Company to LLP ?"
        para="Following are the conditions for conversion: – All the participants of the Company shall become the companions of the LLP on conversion. – No protection interest in the property of the corporation need to be subsisting or in force on the date of conversion i.e. the property are freed from any encumbrance. – Up-to-date Income-tax return has been filed under the Income-tax Act, 1961. – Any clearance, approval or permission for conversion of the corporation into Limited Liability Partnership, if required from anybody/ authority, etc. has been obtained."
      />
      <FAQ
        heading="What impact the conversion has on Permits or licenses issued to the Private Limited Company?"
        para="In maximum cases, the phrases of the license become the determining aspect whether or not they may be transferred. Otherwise, fresh GST registration or FSSAI registration might ought to be received via way of means of the promoters."
      />
      <FAQ
        heading="Can NRIs / Foreign Nationals be designated Partners in a LLP?"
        para="Yes, the LLP Act 2008 lets in Foreign Nationals along with Foreign Companies & LLPs to incorporate LLP in India, provided at least one precise associate is resident of India. However, the LLP/Partners might have to follow all of the applicable Foreign Exchange Laws/ Rules/ Regulations/ Guidelines."
      />
      <FAQ
        heading="Do we have to execute any instrument for shifting the assets & liabilities on conversion of company into LLP?"
        para="On conversion of the Company/partnership into LLP, all tangible (movable or immovable) and intangible belongings vested in the company, all assets, interests, rights, privileges, liabilities, responsibilities referring to the company/organization and the whole of the undertaking of the company will be transferred to and vest with inside the Limited Liability Partnership without further assurance, act, or deed."
      />
    </div>
  );
}
