import classes from "./FAQs.module.css";
import FAQ from "./ui/FAQ.js";

export default function FAQs() {
  const faq1 = (
    <div>
    A title (personal or surname of the applicant or the person’s signature)
A newly coined or invented phrase or any different arbitrary phrase from dictionary, now not being vividly descriptive of the persona or pleasant of the product or service
<li>Alphanumeric or letters or numerals or aggregate of them</li>
<li>Image, Symbol, Monograms, 3D shapes, letters etc.</li>
<li>Sound marks in audio format.</li>

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
        heading="What is a Trademark? 
        "
        para="A trademark is a form of mental property which consists of a recognizable sign, design, or expression which identifies merchandise or offerings of a specific supply from these of others, though emblems used to perceive offerings are commonly referred to as carrier marks."
      />
      <FAQ
        heading="What does it mean by TM application status “Objected”?
"
        para="When the examiner raises some objections involving the register ability of your trademark it is stated to be objected. To overcome the objections, a written response desires to be filed with the Trade Mark Registry. If the Examiner is no longer satisfied with the written response, a listening to is scheduled for permitting arguments to be put forth in person."
      />
      <FAQ
        heading="In what time the Response/Reply to online Trademark Objection in India shall be submitted?"
        para="The response to the examination document issued by means of the Trademark Registry is required to be filed inside 1 month from the date of dispatch. However, the Registry accepts the response even after the cited length is passed. One may additionally put up the reply until the status of the application suggests the alert of “Awaiting Reply to Examination Report” and now not “abandoned”.
        "
      />
      <FAQ
        heading="How can also I know that the reply is duly filed with the Registry?"
        para="Once the Trademark objection reply is duly filed through the registered attorney, the reply will additionally be displayed on monitoring the utility status. Further, the alert “Pending for Reply” or “Awaiting Reply to Examination Report” will be eliminated from the application popularity on the TM website. The status would nevertheless be “objected” as the processing from the Registry would be pending."
      />
      <FAQ
        heading="What is the step after the Application is posted in the journal?"
        para="The application, when it is regularly occurring through the Registry, is published in a journal for duration of 4 months and is open for the opposition by using the Third Party. After completion of four months, the place no opposition by means of the third party is received, the Registration Certificate of the trademark is issued through the Registry."
      />
      <FAQ
        heading="Do I want to physically present for the system?"
        para="No, you don’t want to be bodily current for the process, Online Legal India is an on line catering platform all you want is an web connection in your phone/computer and the required archives with you and we can get the job achieved no things even if you are current at the remotest region of India."
      />
      <FAQ
        heading="Is there any Government fee to file the examination reply?"
        para="No there isn’t any government fee to file the examination reply."
      />
      <FAQ
        heading="When a trademark receives objected?"
        para="The motive for the objection can be many both involving the archives filed and involving the success of standards mandated by using the statue and rules."
      />
      <FAQ
        heading="What we have to do after the utility is posted in the journal?"
        para="The utility is posted in the trademark journal for subsequent three months, the place it can be objected via a third party. If no opposition has been made with the aid of the third party, trademark Registration Certificate will be issued by means of the Trademark Registry."
      />
      <FAQ
        heading="What is the Trademark examination reply deadline?"
        para="The reply to the Trademark examination record must be submitted inside 30 days from the date of examination document raised. If you didn’t file the reply inside time, your trademark use rights shall be revoked."
      />
    </div>
  );
}
