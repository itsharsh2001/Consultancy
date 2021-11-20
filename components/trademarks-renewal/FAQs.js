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
        heading="What if the trademark expires? 
        "
        para="You can follow for the restoration of an expired trademark inside 6 months from its expiry date to maintain the use of it. But the prolong of 6 months can be volatile and shall entice extra charges and documentation."
      />
      <FAQ
        heading="What is Trademark?
"
        para="A trademark is a form of mental property which consists of a recognizable sign, design, or expression which identifies merchandise or offerings of a precise supply from these of others, though logos used to perceive offerings are normally referred to as provider marks."
      />
      <FAQ
        heading="Can I renew the Trademark even after expiry of period?"
        para="The Registry of Trademark may additionally condone the length of lengthen for renewal of trademark with the aid of 6 months after the expiry of 10 years. Online software for Trademark Renewal in India can be made after the expiry of 10 years with a charge of additional fees.
        "
      />
      <FAQ
        heading="Whether there will be any modifications in the rights after renewal of trademark?"
        para="Trademark renewal does no longer create any modifications in the rights of the trademark holder. As lengthy as the trademark is valid, the trademark holder would experience all the rights that he/she received for the duration of the fundamental registration."
      />
      <FAQ
        heading="When to file a renewal of trademark?"
        para="The Trademark renewal can be performed whenever inside 6 months of expiration of 10 years of trademark registration. Any in addition extend above 6 months will entice greater fee. If the renewal procedure is now not done inside 12 months of expiration of trademark, the trademark will be eliminated from the trademark register."
      />
      <FAQ
        heading="What are the penalties of failure to renew the trademark?"
        para="In the case of non-renewal, the penalties are severe. Because the trademark would be eliminated from the register and any different character can declare it and get it registered to their name."
      />
    </div>
  );
}
