import classes from "./FAQs.module.css";
import FAQ from "./ui/FAQ.js";

export default function FAQs() {
  const faq1 = (
    <div>
    An OPC limited by shares have to follow the subsequent requirements: 
<li>Must have a minimal authorized share capital of ₹ 1 Lac.</li>
<li>	Transfer of stocks to everyone else isn't allowed. </li>
<li>	An OPC is against the law from giving any invites to the general public to join the securities of the organization.</li>
 When the OPC limited by shares or by guarantee, enters right into a settlement with the only member of the organization who's additionally the director of the organization; the terms of settlement or offer have to be recorded in writing. Also, the same have to be contained in a memorandum or recorded in the minutes of the Board assembly held subsequent after moving into the contact. An OPC have to tell the Registrar approximately each settlement entered into by the organization with the only member of the organization inside duration of fifteen days from the date of approval.


    </div>
  );
  const faq2 = (
    <div>
      The copyright proprietor has the extraordinary rights to:
<li>Reproduce and distribute the work in copies or phonorecord (material object i.e. an audio tape or CD, or an MP3 file. ) to the public through sale or switch of possession or license.</li>
<li>Make additions to the unique work or regulate it, display, existing or function them amongst the public; and</li>
<li>Exclude others to declare possession or use besides the authentic creators’ permission.</li>


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
        heading="What are the number one necessities for the conversion of a partnership company into an LLP? 
        "
        para="The partnership is needed to include the same partners that had been present in the original Partnership and in the same share wherein their capital accounts stood in the books of the Firm at the date of conversion. Therefore, the LLP can't have extra or less partners than the extant Partnership Firm, and any modifications in the quantity of partners may be made only after conversion into the LLP."
      />
      <FAQ
        heading="How to reserve the name for a Limited Liability Partnership?  
"
        para="LLP name is reserved via an online form. In accordance with the prescribed regulations, the companions can offer a most of 6 names in preferential order to reserve any one. The Registrar can also additionally ask to re-publish the application with a special name if given names do now no longer fall under standards of uniqueness, relevancy or do not satisfy the alternative requirements."
      />
      <FAQ
        heading="Is there any minimal capital requirement for LLP registration in India?"
        para="No. There is no minimal quantity prescribed to form an LLP. It can start out with any quantity of capital demanded by the business. Although there may be no minimal requirement, each partner has to make contributions to LLP. The quantity of capital contribution is disclosed in the LLP Agreement and quantity of stamp duty to be paid is determined by overall contribution quantity."
      />
      <FAQ
        heading="What are the necessities to be a Partner/ Designated Partner for LLP formation?"
        para="There are no boundaries in terms of citizenship or residency to be a Partner. Therefore, the LLP Act, 2008 lets in Foreign Nationals, which includes Foreign Companies & LLPs to contain LLP in India; furnished as a minimum one Designated Partner is a resident of India. However, the individual ought to be of age 18 years or above i.e. now no longer a minor and in a position to go into right into a contract. Also, the proposed Designated Partner shall have DIN."
      />
      <FAQ
        heading="What is Director Identification Number (DIN)?"
        para="Is DPIN required for LLP Registration? Director Identification Number is a completely unique number assigned by the Ministry of Corporate Affairs to Individuals on application made which permits any person to be a Director in any Company or Designated Partner in LLP. Further, the idea of DPIN (Designated Partner Identification Number) does now no longer persist anymore with respect to incorporation of LLP."
      />
      <FAQ
        heading="What is LLP Agreement?"
        para=". Does it require submitting with MCA? LLP Agreement is an settlement finished by all of the particular companions and partners after LLP incorporation. The settlement prescribes all of the clauses associated with business; together with the rights, role, obligations and duties of companions. The settlement ought to be filed inside 30 days of the issue of certificates of incorporation. Failure to which will charge a further price of ₹ 100 in line with day until the date of submitting."
      />
      <FAQ
        heading="How to alternate companions in LLP?"
        para="To effect any modifications in the Limited Liability Partnership, the Partners shall pass the decision on the meeting of Partners as required through the LLP Agreement of concerned Limited Liability Partnership. Further, the decision shall authorize any of the present Designated Partner to act on behalf of the LLP and its Partners. Also, the legal companions shall additionally maintain a legitimate DSC to file the application to Registrar. As quickly because the companions execute the Supplement Agreement for a alternate of accomplice or their respective designation, an utility will be filed with MCA to approve the modifications of a accomplice or the designation."
      />
    </div>
  );
}
