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
        heading="When can a corporation begin its commercial enterprise operations as a Public Company?
        "
        para="The corporation can begin its commercial enterprise operations as a Public Company on receipt of the fresh Certificate of Incorporation from ROC."
      />
      <FAQ
        heading="What is the primary requirement for putting in place a Public Limited Company in India ?  
"
        para="The primary requirement to contain a public limited organization is that it calls for minimal 7 shareholders and three directors. The minimal Authorized Capital of the organization is prescribed to ₹ 5 LAKHS rather of ₹ 1 LAKH in case of Private Company."
      />
      <FAQ
        heading="How to regulate MOA & AOA of the company?"
        para="Once the name approval letter is acquired from the ROC, the MOA and AOA are required to be drafted. The name clause and capital clause are altered at the side of the elimination of limit to Private Company as supplied with the aid of using definition.
        "
      />
      <FAQ
        heading="How long does it take to transform a Private Limited right into a Public Limited Company?"
        para="Fintaxwiz.com permits you to convert your Private restrained right into a Public Limited Company inside 20-25 running days. The time taken for conversion will rely on the submission of applicable files through the client and pace of Government Approvals. To make sure rapid conversion, one must make sure that each one the specified files are submitted."
      />
      <FAQ
        heading="Whether a fresh GST registration is needed for the Public Limited Company?"
        para="No. As the company’s PAN info stay same, there may be no need of new registration. However, application of amendment has to be made for name change in records. Fintaxwiz.com let you observe for amendment at a further cost."
      />
      <FAQ
        heading="Whether change of name is needed for conversion?"
        para="The suffix “Private Limited” will get replaced with “Limited.” For this change, the corporation has to seek permission from the shareholders and after that make the desired modifications in the MOA to get it amended."
      />
    </div>
  );
}
