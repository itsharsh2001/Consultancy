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
        heading="Can I assign an unregistered Trademark in India? 
        "
        para="Trademarks, like any different asset, can be transferred from one proprietor to another. Such transfers can take vicinity in the shape of an assignment, or merger or amalgamation between two entities. Yes, an unregistered trademark can additionally be assigned, with or barring goodwill by means of submitting a utility with the registry."
      />
      <FAQ
        heading="What is the Government Fee prescribed for Assignment of Trademark?
"
        para="A registry has prescribed Rs 9,000/- as a price payable for software of switch Trademark possession i.e. Trademark Assignment in India."
      />
      <FAQ
        heading="What is the procedure of Assignment of Trademark in India?"
        para="The trademark assignment agreement in India referred to as the Trademark Assignment Document, is entered between the parties being Assignor and Assignee. Once the Trademark Agreement is duly executed, an online trademark assignment procedure is to be followed. This application is filed with the Registry in the prescribed form with the help of registered Trademark Attorney along with the payment of prescribed fee.
        "
      />
      <FAQ
        heading="I do no longer desire to switch the ownership, then again desire to supply rights to use the Trademark to different person. Can I proceed with it?"
        para="The proprietor of the Trademark can grant rights of the use of the Trademark barring switch of ownership. This is known as Partial switch of Trademark or Licensing of Trademark in India. To have an effect on the stated switch of rights, an Agreement is to be finished by using supplying all the phrases and stipulations alongside with covenants as agreed by way of the Parties."
      />
    </div>
  );
}
