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
        heading="What is observing of opposition? 
        "
        para="Any person who thinks his/her company title or recognition of the business enterprise may also be broken in any way via the registration of a positive mark may also select to oppose such registration through submitting the observe of opposition."
      />
      <FAQ
        heading="Who can file the Notice of Opposition?
"
        para="In India, anybody can file for the Trademark Opposition. Usually, it is initiated with the aid of a individual who is the proprietor of an formerly trademark or a mark that offers with comparable goods/services; or that has a opportunity of developing confusion or damage an current mark can file an opposition, even if its very own mark is now not registered."
      />
      <FAQ
        heading="What is the next stage as soon as I file the Notice of Opposition?"
        para="The next step is taken with the aid of the Registry. The registrar serves the reproduction to the opponent so that they can file a counter statement. This has to be filed inside two months of the receipt of observe of opposition. If it is no longer filed it is believed to be abandoned.
        "
      />
      <FAQ
        heading="What is the time period for submitting the Notice of Opposition?"
        para="The be aware of opposition can be filed inside three months, extendable with the aid of one month (3+1) from the date on which the trademark was once posted in the Trade Marks Journal. If the note of opposition is filed after three months however earlier than the expiry of 4 months, then it should be accompanied by means of a request for an extension through one month, giving enough motives for the extend in submitting the opposition."
      />
      <FAQ
        heading="My mark is no longer registered in India; can I file an opposition primarily based on my pending utility and use?"
        para="Through a frequent regulation of rights of passing off, one can file an opposition even if the Trademark software is pending or already in use if no longer registered. This regulation prevents any character from promoting his goods/services as that of some other and benefiting from it."
      />
    </div>
  );
}
