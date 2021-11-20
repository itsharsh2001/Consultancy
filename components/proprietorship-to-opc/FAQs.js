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
        heading="How much longer the Company incorporation legitimate for? 
        "
        para="Once a Company is incorporated; it'll be active and in-existence so long as the yearly compliance is met regularly. In case, annual compliance isn't complied with, the Company becomes a Dormant Company and can be struck off from the register after duration of time. A struck-off Company may be revived for duration of up to twenty years."
      />
      <FAQ
        heading="What is the minimal capital requirement to commence OPC? 
"
        para="The capital requirement of OPC and a private limited company are the same. It needs an authorized capital of ₹1 lakh, to start with. But, none of this really has to be paid-up. This means that you don’t actually have to make investments into the business. The capital has to not be greater than ₹50 lakh throughout incorporation."
      />
      <FAQ
        heading="What are the compliance necessities for OPC?"
        para={faq1}
      />
      <FAQ
        heading="Can a person apply for multiple OPC at a time?"
        para="No, a person can shape most effective one OPC at a time. The rule is the same for the nominee director too."
      />
      <FAQ
        heading="What must be looked after to ensure short incorporation of One Person Company on line?"
        para="The promoter of the organization must ensure that the proposed name of the OPC for on line registration could be very unique. Further, all of the files with admire to the Subscriber, Nominee and Directors in addition to Registered Office will be as in keeping with the requirement."
      />
      <FAQ
        heading="Who is the nominee in One Person Company?"
        para="The requirement to hire a nominee is prescribed so one can keep the person of Perpetual Existence i.e. Uninterrupted Existence of the One Person Company. A nominee will be an man or woman and is to be appointed on the time of incorporation of OPC. In the occasion of loss of life or disability to go into into any agreement through current member, the nominee becomes the member of 1 Person Company."
      />
    </div>
  );
}
